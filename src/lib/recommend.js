import { PRODUCTS } from "@/data/products";

// "no limit" has to mean something, so it means the dearest build on the
// shelf. Read from the catalogue so it follows whatever is added next.
const CEILING = Math.max(...PRODUCTS.map((p) => p.price));

/** Only what the shop printed on the build's own post. A field they never
 *  wrote down scores nothing — it is never guessed at. */
export function shape(p) {
  // "16GB DDR5 6200" / "32GB" / "16GB RGB"
  const ram = parseInt(p.ram, 10) || 0;
  // video memory is only on the cards where they wrote it: "RX 9060 XT 16GB"
  const vram = Number((/(\d+)\s*GB/i.exec(p.name) || [])[1]) || 0;
  return {
    ram,
    vram,
    ddr5: /ddr5/i.test(p.ram),
    tb: /1\s*TB/i.test(p.ssd),
    aio: !!p.cool,
    fresh: !!p.fresh,
  };
}

/**
 * Ranks the shelf against three answers and returns the top three with the
 * reasons each one placed. Every reason is a number printed on that build's
 * own post — nothing here claims a frame rate, because the catalogue does not
 * know one.
 */
export function recommend({ use, budget = CEILING, res }) {
  const uses = Array.isArray(use) ? use : use ? [use] : [];
  const wants = (u) => uses.includes(u);
  // Video memory, liquid cooling and a fast card are worth paying for when
  // something is actually going to load them. For study and office they are
  // not a reason to spend more, so they stop counting.
  const heavy = wants("game") || wants("edit") || wants("stream");

  const fits = PRODUCTS.filter((p) => p.price <= Math.min(budget, CEILING));
  // Where a build sits between the cheapest and the dearest that fit — not
  // price over the ceiling, which collapses to nothing the moment one 3.9m
  // machine joins the shelf and leaves the spec bonuses deciding everything.
  const lo = Math.min(...fits.map((p) => p.price));
  const spread = Math.max(...fits.map((p) => p.price)) - lo || 1;

  const ranked = fits
    .map((p) => {
      const f = shape(p);
      const why = [];
      let score = 0;

      // How far up that range the build sits. A bigger screen is the one
      // reason to want the top of it rather than change back.
      const util = (p.price - lo) / spread;
      const pull = res === "4k" ? 62 : res === "1440" ? 44 : res === "1080" ? 18 : 34;
      score += Math.round(util * pull);

      // Study and office is the one answer that does not want the dearest box
      // in the shop, so it pulls the other way hard enough to beat the spec
      // bonuses below — unless something heavier is picked alongside it.
      if (wants("work") && !heavy) score -= Math.round(util * 95);

      if (f.vram >= 16 && heavy) {
        score += 16;
        why.push("vram16");
      }
      if (f.ram >= 32) {
        // Editing and streaming are the two answers that are held back by
        // memory before anything else, so there it outweighs the card.
        score += wants("edit") || wants("stream") ? 34 : 8;
        why.push("ram32");
      }
      if (f.ddr5) {
        score += 6;
        why.push("ddr5");
      }
      if (f.tb) {
        score += 7;
        why.push("tb");
      }
      if (f.aio && heavy) {
        score += 6;
        why.push("aio");
      }
      if (f.fresh) {
        score += 4;
        why.push("fresh");
      }

      // a card with no reasons on it looks broken, and "it is inside the
      // number you gave us" is still a true thing to say
      if (!why.length) why.push("inbudget");

      return { product: p, score, why: [...new Set(why)] };
    })
    .sort((a, b) => b.score - a.score || a.product.price - b.product.price)
    .slice(0, 3);

  // Only claimed when it is actually true of the three on screen.
  if (ranked.length > 1) {
    const cheapest = ranked.reduce((a, b) => (b.product.price < a.product.price ? b : a));
    cheapest.why.push("value");
  }
  return ranked;
}

/** node --experimental-strip-types … or just call demo() — fails loudly if
 *  the ranking stops making sense. */
export function demo() {
  const all = recommend({ use: ["game"], budget: 99000000, res: "4k" });
  console.assert(all.length === 3, "returns three");

  const tight = recommend({ use: ["game"], budget: 1400000, res: "1080" });
  console.assert(tight.length === 3, "the lowest budget tier still fills three cards");
  console.assert(tight.every((r) => r.product.price <= 1400000), "budget is a hard ceiling");

  const none = recommend({ use: ["game"], budget: 500000, res: "1080" });
  console.assert(none.length === 0, "nothing under 500,000 — empty, not a guess");

  // a 4K answer should not land on the cheapest thing that fits
  const cheapest = Math.min(...PRODUCTS.map((p) => p.price));
  const four = recommend({ use: ["game"], budget: 99000000, res: "4k" });
  console.assert(four[0].product.price > cheapest, "4K does not pick the cheapest build");

  // …and an office answer should lean the other way at the same budget
  const office = recommend({ use: ["work"], budget: 99000000, res: "1080" });
  console.assert(
    office[0].product.price === cheapest,
    "office lands on the cheapest build on the shelf"
  );

  const edit = recommend({ use: ["edit"], budget: 2150000, res: "1440" });
  console.assert(shape(edit[0].product).ram >= 32, "editing pick has 32GB");

  for (const r of all) {
    console.assert(new Set(r.why).size === r.why.length, "no reason is listed twice");
    console.assert(r.why.length > 0, "every card carries at least one reason");
  }

  const three = recommend({ use: ["game"], budget: 2150000, res: "1440" });
  console.assert(three.some((r) => r.why.includes("value")), "the cheapest of the three is labelled");

  return "recommend ok";
}
