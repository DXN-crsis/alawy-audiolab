import { PRODUCTS, bySlug } from "@/data/products";

// Only things you wear. Dongles and tips are suggested as an add-on, never
// ranked as an answer to "which earphones".
const WEARABLE = ["iem", "tws", "hp"];

// "no limit" has to mean something to divide by, so it means the dearest thing
// on the shelf. Read from the catalogue so it follows whatever he adds next.
const CEILING = Math.max(...PRODUCTS.filter((p) => WEARABLE.includes(p.cat)).map((p) => p.price));

/** What his own variant labels say about a product. Silence is not a "no": a
 *  product he never labelled scores neutral and claims nothing either way. */
export function shape(p) {
  const vs = p.variants ?? [];
  const any = (re, not) =>
    vs.some((v) => {
      const s = v.en.toLowerCase();
      return re.test(s) && !(not && not.test(s));
    });

  const typeC = any(/type-c/);
  const jack = any(/3\.5/);
  return {
    typeC,
    jack,
    typeCOnly: typeC && !jack,
    mic: any(/\bmic\b/, /no mic/),
    months: warrantyMonths(p.warranty),
  };
}

function warrantyMonths(w) {
  const m = /(\d+)\s*(month|year)/.exec(w?.en ?? "");
  if (!m) return 0;
  return m[2] === "year" ? Number(m[1]) * 12 : Number(m[1]);
}

/**
 * Ranks the shelf against three answers and returns the top three, each with
 * the reasons it placed. Every reason is a fact off his banner or a property
 * of the connector itself — nothing here is a claim about how a pair sounds,
 * because that is not something this catalogue knows.
 */
export function recommend({ use, budget, port }) {
  const ranked = PRODUCTS.filter((p) => WEARABLE.includes(p.cat) && p.price <= budget)
    .map((p) => {
      const f = shape(p);
      const why = [];
      let score = 0;

      // what it has to plug into
      if (port === "typec") {
        if (p.cat === "tws") {
          score += 40;
          why.push("nocable");
        } else if (f.typeC) {
          score += 45;
          why.push("typec");
        } else {
          score -= 12;
          why.push("dongle");
        }
      } else if (port === "jack") {
        if (f.typeCOnly) score -= 45; // simply will not go in
        else if (f.jack) {
          score += 10;
          why.push("jack");
        }
      } else if (f.typeC && f.jack) {
        score += 18;
        why.push("both");
      }

      // What it is for. Several answers are allowed and they are meant to pull
      // against each other — nothing is both cable-free and delay-free, so
      // picking games and everyday together lets games win, which is correct.
      const uses = Array.isArray(use) ? use : [use];
      const wants = (u) => uses.includes(u);

      if (wants("game") || wants("call")) {
        if (f.mic) {
          score += 40;
          why.push("mic");
        } else score -= 10;
      }
      if (wants("game")) {
        if (p.cat === "tws") score -= 45; // bluetooth adds delay, always
        else {
          score += 12;
          why.push("wired");
        }
      }
      if (wants("music")) {
        if (p.cat === "iem") score += 14;
        else if (p.cat === "tws") score -= 6;
      }
      if (wants("daily") && p.cat === "tws") {
        score += 34;
        why.push("nocable");
      }

      // the warranty he prints on the post is a real difference between two pairs
      if (f.months >= 12) {
        score += 14;
        why.push("warranty1y");
      } else if (f.months >= 6) {
        score += 7;
        why.push("warranty6m");
      } else score += f.months;

      // how much of the budget they set it actually uses — weighted heavily
      // enough that someone who says "no limit" is not handed the cheapest pair
      score += Math.round((p.price / Math.min(budget, CEILING)) * 55);

      // a card with no reasons on it looks broken, and "it is inside the
      // number you gave us" is still a true thing to say
      if (!why.length) why.push("inbudget");

      return { product: p, score, why: [...new Set(why)] };
    })
    .sort((a, b) => b.score - a.score || a.product.price - b.product.price)
    .slice(0, 3);

  if (ranked.length > 1) {
    const dearest = ranked.reduce((a, b) => (b.product.price > a.product.price ? b : a));
    const cheapest = ranked.reduce((a, b) => (b.product.price < a.product.price ? b : a));
    dearest.why.push("topOfBudget");
    cheapest.why.push("value");
  }
  return ranked;
}

/** One thing worth adding to the box, or nothing. */
export function addon(answers, ranked) {
  if (answers.port === "typec" && ranked.some((r) => r.why.includes("dongle"))) {
    return bySlug("jcally-jm12");
  }
  if (ranked.some((r) => r.product.cat === "iem")) return bySlug("tangzu-he-sonic-combo");
  return null;
}

/** node src/lib/recommend.js — fails loudly if the ranking stops making sense. */
export function demo() {
  const game = recommend({ use: ["game"], budget: 80000, port: "typec" });
  console.assert(game.length === 3, "returns three");
  console.assert(game.every((r) => r.product.price <= 80000), "budget is a hard ceiling");
  console.assert(game[0].product.cat !== "tws", "never bluetooth for gaming");
  console.assert(shape(game[0].product).mic, "gaming pick has a mic");

  const daily = recommend({ use: ["daily"], budget: 999999, port: "typec" });
  console.assert(daily[0].product.cat === "tws", "wireless wins for everyday on a Type-C phone");

  const music = recommend({ use: ["music"], budget: 40000, port: "jack" });
  console.assert(music.every((r) => !shape(r.product).typeCOnly), "no Type-C-only pair for a 3.5 mm jack");
  console.assert(music.every((r) => r.product.price <= 40000), "cheap budget respected");

  const tiny = recommend({ use: ["music"], budget: 5000, port: "jack" });
  console.assert(tiny.length === 0, "nothing under 5,000 — must return empty, not a guess");

  // more than one answer at a time
  const calls = recommend({ use: ["call"], budget: 80000, port: "unsure" });
  console.assert(shape(calls[0].product).mic, "a calls pick has a mic");

  const mixed = recommend({ use: ["music", "daily"], budget: 999999, port: "typec" });
  console.assert(mixed.some((r) => r.product.cat === "tws"), "wireless shows up once everyday is picked");

  const both = recommend({ use: ["game", "daily"], budget: 80000, port: "typec" });
  console.assert(both[0].product.cat !== "tws", "games still rule out bluetooth alongside everyday");
  console.assert(
    new Set(both[0].why).size === both[0].why.length,
    "no reason is listed twice"
  );

  return "recommend ok";
}
