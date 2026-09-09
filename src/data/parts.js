import { PRODUCTS } from "./products";

/* The parts counter. Nothing here is stock the shop was never seen fitting:
   every entry's `from` lists the exact strings printed on their own build
   posters, and demo() below checks the mapping both ways — no part that no
   build uses, no build spec that no part covers.

   `specs` beyond those strings (core counts, sockets, memory type) are the
   manufacturer's own published figures for that part, not the shop's claims.
   `shot` names the photograph: one per part, the manufacturer's own product
   shot, lifted onto the site's card colour so forty-two of them read as one
   catalogue. Illustrative of the model — the exact board partner or kit in
   the box varies with what is in stock that week. */

export const PART_CATEGORIES = [
  { key: "gpu", en: "Graphics cards", ar: "كروت الشاشة", field: "name" },
  { key: "cpu", en: "Processors", ar: "المعالجات", field: "cpu" },
  { key: "mb", en: "Motherboards", ar: "المذربوردات", field: "mb" },
  { key: "ram", en: "Memory", ar: "الرامات", field: "ram" },
  { key: "ssd", en: "Storage", ar: "التخزين", field: "ssd" },
  { key: "psu", en: "Power supplies", ar: "الباورات", field: "psu" },
  { key: "cool", en: "Cooling and cases", ar: "التبريد والكيسات", field: "cool" },
];

export const PARTS = [
  // ── graphics cards ────────────────────────────────────────
  { cat: "gpu", brand: "NVIDIA", name: "GeForce RTX 5080", shot: "gpu-rtx5080",
    specs: ["16GB", "GDDR7"], from: ["RTX 5080"] },
  { cat: "gpu", brand: "NVIDIA", name: "GeForce RTX 5070 Ti", shot: "gpu-rtx5070ti",
    specs: ["16GB", "GDDR7"], from: ["RTX 5070 Ti"] },
  { cat: "gpu", brand: "NVIDIA", name: "GeForce RTX 5070", shot: "gpu-rtx5070",
    specs: ["12GB", "GDDR7"], from: ["RTX 5070"] },
  { cat: "gpu", brand: "NVIDIA", name: "GeForce RTX 4070 SUPER", shot: "gpu-rtx4070s",
    specs: ["12GB", "GDDR6X"], from: ["RTX 4070 SUPER"] },
  { cat: "gpu", brand: "NVIDIA", name: "GeForce RTX 5060 Ti", shot: "gpu-rtx5060ti",
    specs: ["16GB", "GDDR7"], from: ["RTX 5060 Ti 16GB"] },
  { cat: "gpu", brand: "NVIDIA", name: "GeForce RTX 5060", shot: "gpu-rtx5060",
    specs: ["8GB", "GDDR7"], from: ["RTX 5060"] },
  { cat: "gpu", brand: "NVIDIA", name: "GeForce RTX 4060", shot: "gpu-rtx4060",
    specs: ["8GB", "GDDR6"], from: ["RTX 4060 8GB"] },
  { cat: "gpu", brand: "NVIDIA", name: "GeForce RTX 3070 Ti", shot: "gpu-rtx3070ti",
    specs: ["8GB", "GDDR6X"], from: ["RTX 3070 Ti"] },
  { cat: "gpu", brand: "NVIDIA", name: "GeForce RTX 2060", shot: "gpu-rtx2060",
    specs: ["12GB", "GDDR6"], from: ["RTX 2060 12GB"] },
  { cat: "gpu", brand: "AMD", name: "Radeon RX 9060 XT", shot: "gpu-rx9060xt",
    specs: ["16GB / 8GB", "GDDR6"], from: ["RX 9060 XT 16GB", "RX 9060 XT", "RX 9060 XT 8GB"] },

  // ── processors ────────────────────────────────────────────
  { cat: "cpu", brand: "AMD", name: "Ryzen 7 9800X3D", shot: "cpu-9800x3d",
    specs: ["8C / 16T", "AM5", "3D V-Cache"], from: ["Ryzen 7 9800X3D"] },
  { cat: "cpu", brand: "AMD", name: "Ryzen 7 7800X3D", shot: "cpu-7800x3d",
    specs: ["8C / 16T", "AM5", "3D V-Cache"], from: ["Ryzen 7 7800X3D"] },
  { cat: "cpu", brand: "AMD", name: "Ryzen 5 7600X", shot: "cpu-7600x",
    specs: ["6C / 12T", "AM5"], from: ["Ryzen 5 7600X"] },
  { cat: "cpu", brand: "AMD", name: "Ryzen 7 5800X", shot: "cpu-5800x",
    specs: ["8C / 16T", "AM4"], from: ["Ryzen 7 5800X"] },
  { cat: "cpu", brand: "AMD", name: "Ryzen 7 5700X", shot: "cpu-5700x",
    specs: ["8C / 16T", "AM4"], from: ["Ryzen 7 5700X"] },
  { cat: "cpu", brand: "AMD", name: "Ryzen 5 5600X", shot: "cpu-5600x",
    specs: ["6C / 12T", "AM4"], from: ["Ryzen 5 5600X"] },
  { cat: "cpu", brand: "AMD", name: "Ryzen 5 5500", shot: "cpu-5500",
    specs: ["6C / 12T", "AM4"], from: ["Ryzen 5 5500"] },
  { cat: "cpu", brand: "Intel", name: "Core i5 14400F", shot: "cpu-14400f",
    specs: ["10C / 16T", "LGA 1700"], from: ["Intel Core i5 14400F"] },
  { cat: "cpu", brand: "Intel", name: "Core i5 12400F", shot: "cpu-12400f",
    specs: ["6C / 12T", "LGA 1700"], from: ["Intel Core i5 12400F"] },

  // ── motherboards ──────────────────────────────────────────
  { cat: "mb", brand: "AMD", name: "B850", shot: "mb-b850", specs: ["AM5", "DDR5"], from: ["B850"] },
  { cat: "mb", brand: "AMD", name: "B650 WiFi", shot: "mb-b650wifi", specs: ["AM5", "DDR5", "Wi-Fi"], from: ["B650 WiFi"] },
  { cat: "mb", brand: "AMD", name: "B650", shot: "mb-b650", specs: ["AM5", "DDR5"], from: ["B650"] },
  { cat: "mb", brand: "AMD", name: "B550", shot: "mb-b550", specs: ["AM4", "DDR4"], from: ["B550"] },
  { cat: "mb", brand: "AMD", name: "B450", shot: "mb-b450", specs: ["AM4", "DDR4"], from: ["B450"] },
  { cat: "mb", brand: "Intel", name: "B760", shot: "mb-b760", specs: ["LGA 1700"], from: ["B760"] },
  { cat: "mb", brand: "Intel", name: "H610", shot: "mb-h610", specs: ["LGA 1700"], from: ["H610"] },

  // ── memory ────────────────────────────────────────────────
  { cat: "ram", brand: "DDR5", name: "32GB DDR5 RGB", shot: "ram-32ddr5rgb",
    specs: ["32GB", "DDR5", "RGB"], from: ["32GB DDR5 RGB"] },
  { cat: "ram", brand: "DDR5", name: "16GB DDR5", shot: "ram-16ddr5",
    specs: ["16GB", "DDR5", "6200 / 5600MHz"], from: ["16GB DDR5 6200", "16GB DDR5", "16GB 5600MHz"] },
  { cat: "ram", brand: "DDR4", name: "16GB DDR4", shot: "ram-16ddr4", specs: ["16GB", "DDR4"], from: ["16GB DDR4"] },
  // the shop does not print the generation on these three, so neither does the
  // counter — the kit fitted follows whichever board the build carries
  { cat: "ram", brand: "RAM", name: "32GB", shot: "ram-32", specs: ["32GB"], from: ["32GB"] },
  { cat: "ram", brand: "RAM", name: "16GB RGB", shot: "ram-16rgb", specs: ["16GB", "RGB"], from: ["16GB RGB"] },
  { cat: "ram", brand: "RAM", name: "16GB", shot: "ram-16", specs: ["16GB"], from: ["16GB"] },

  // ── storage ───────────────────────────────────────────────
  { cat: "ssd", brand: "NVMe", name: "M.2 NVMe 1TB", shot: "ssd-m2-1tb",
    specs: ["1TB", "NVMe", "M.2"], from: ["M.2 1TB", "M.2 1TB NVMe"] },
  { cat: "ssd", brand: "NVMe", name: "M.2 NVMe 512GB", shot: "ssd-m2-512",
    specs: ["512GB", "NVMe", "M.2"], from: ["512GB NVMe"] },
  { cat: "ssd", brand: "SSD", name: "SSD 1TB", shot: "ssd-sata-1tb", specs: ["1TB", "SSD"], from: ["SSD 1TB"] },
  { cat: "ssd", brand: "SSD", name: "SSD 500GB", shot: "ssd-sata-500", specs: ["500GB", "SSD"], from: ["SSD 500GB"] },

  // ── power supplies ────────────────────────────────────────
  { cat: "psu", brand: "PSU", name: "850W 80+ Gold", shot: "psu-850g", specs: ["850W", "80+ Gold"], from: ["850W Gold"] },
  { cat: "psu", brand: "PSU", name: "850W", shot: "psu-850", specs: ["850W"], from: ["850W"] },
  { cat: "psu", brand: "PSU", name: "750W", shot: "psu-750", specs: ["750W"], from: ["750W"] },
  { cat: "psu", brand: "PSU", name: "600W", shot: "psu-600", specs: ["600W"], from: ["600W"] },

  // ── cooling and cases ─────────────────────────────────────
  { cat: "cool", brand: "AIO", name: "360mm liquid cooler", shot: "cool-aio360",
    specs: ["360mm", "AIO"], from: ["360mm liquid"] },
  { cat: "cool", brand: "Case", name: "7-fan case", shot: "cool-case",
    specs: [{ en: "7 fans", ar: "7 مراوح" }], from: ["7-fan case"] },
];

/** Which of the shop's build strings a category actually uses. */
export const usedValues = (cat) => {
  const out = new Set();
  for (const p of PRODUCTS) {
    const v = p[cat.field];
    if (!v) continue;
    if (cat.field === "cool") for (const piece of v.en.split(/,\s*/)) out.add(piece);
    else out.add(v);
  }
  return out;
};

/** How many builds this part goes into. */
export const usedIn = (part) => {
  const cat = PART_CATEGORIES.find((c) => c.key === part.cat);
  return PRODUCTS.filter((p) => {
    const v = p[cat.field];
    if (!v) return false;
    const pieces = cat.field === "cool" ? v.en.split(/,\s*/) : [v];
    return pieces.some((x) => part.from.includes(x));
  }).length;
};

/** node src/data/parts.js — fails loudly if the counter and the shelf drift. */
export function demo() {
  for (const cat of PART_CATEGORIES) {
    const used = usedValues(cat);
    const mine = PARTS.filter((p) => p.cat === cat.key);
    console.assert(mine.length > 0, `${cat.key}: no parts at all`);

    const claimed = new Set(mine.flatMap((p) => p.from));
    for (const c of claimed)
      console.assert(used.has(c), `${cat.key}: "${c}" is on the counter but in no build`);
    for (const u of used)
      console.assert(claimed.has(u), `${cat.key}: builds use "${u}" but the counter never lists it`);

    for (const p of mine) {
      console.assert(p.shot && p.brand && p.specs.length, `${cat.key}/${p.name}: incomplete`);
      console.assert(usedIn(p) > 0, `${cat.key}/${p.name}: counted in zero builds`);
    }
  }
  // no part appears twice
  const names = PARTS.map((p) => p.cat + "/" + p.name);
  console.assert(new Set(names).size === names.length, "a part is listed twice");
  return `parts ok — ${PARTS.length} across ${PART_CATEGORIES.length} categories`;
}
