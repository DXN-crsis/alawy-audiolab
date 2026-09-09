/* Every build below is transcribed from the shop's own posters — the spec
   cards on facebook.com/eagli.stor and the captions on instagram.com/eagil.stor2 —
   and each one carries that poster as its picture. Nothing here is invented: a
   field the shop never printed is simply left out. Prices in IQD.

   Two of their cards read "RYZEN 5 5800X" and "RYZEN 5 5700X"; both chips are
   Ryzen 7 parts, so the correct name is used rather than one that does not
   exist. Everything else is verbatim. */

export const CATEGORIES = [
  { key: "all", en: "Everything", ar: "الكل" },
  { key: "amd", en: "AMD Ryzen", ar: "رايزن" },
  { key: "intel", en: "Intel Core", ar: "انتل" },
];

export const PRODUCTS = [
  // ── posted this week on Instagram ─────────────────────────
  {
    slug: "rtx4070s-5800x",
    name: "RTX 4070 SUPER",
    cpu: "Ryzen 7 5800X",
    cat: "amd",
    mb: "B550",
    ram: "32GB",
    ssd: "M.2 1TB",
    psu: "750W",
    cool: { en: "360mm liquid", ar: "مبرد مائي 360" },
    price: 2300000,
    warranty: { en: "1 year", ar: "ضمان سنة" },
    fresh: true,
    post: "https://www.instagram.com/p/DdBJOuEM8uM/",
  },
  {
    slug: "rx9060xt-7600x",
    name: "RX 9060 XT 16GB",
    cpu: "Ryzen 5 7600X",
    cat: "amd",
    mb: "B650 WiFi",
    ram: "16GB DDR5 6200",
    ssd: "M.2 1TB NVMe",
    psu: "750W",
    cool: { en: "360mm liquid", ar: "مبرد مائي 360" },
    note: { en: "All-white build", ar: "تجميعة بيضاء كاملة" },
    price: 2100000,
    fresh: true,
    post: "https://www.instagram.com/p/DdAE6qZMq_l/",
  },
  {
    slug: "rtx4060-5500",
    name: "RTX 4060 8GB",
    cpu: "Ryzen 5 5500",
    cat: "amd",
    mb: "B450",
    ram: "16GB DDR4",
    ssd: "512GB NVMe",
    psu: "750W",
    price: 1190000,
    fresh: true,
    post: "https://www.instagram.com/p/Dc-7SY3MdUL/",
  },

  // ── the spec cards on the Facebook page ───────────────────
  {
    slug: "rtx5080-9800x3d",
    name: "RTX 5080",
    cpu: "Ryzen 7 9800X3D",
    cat: "amd",
    mb: "B850",
    ram: "32GB DDR5 RGB",
    ssd: "M.2 1TB",
    psu: "850W Gold",
    cool: { en: "360mm liquid, 7-fan case", ar: "مبرد مائي 360، كيس 7 فان" },
    price: 3900000,
  },
  {
    slug: "rtx5070ti-7800x3d",
    name: "RTX 5070 Ti",
    cpu: "Ryzen 7 7800X3D",
    cat: "amd",
    mb: "B650 WiFi",
    ram: "16GB DDR5",
    ssd: "M.2 1TB",
    psu: "850W",
    cool: { en: "360mm liquid, 7-fan case", ar: "مبرد مائي 360، كيس 7 فان" },
    price: 2775000,
  },
  {
    slug: "rtx5070-14400f",
    name: "RTX 5070",
    cpu: "Intel Core i5 14400F",
    cat: "intel",
    mb: "B760",
    ram: "32GB",
    ssd: "SSD 1TB",
    psu: "750W",
    price: 2125000,
  },
  {
    slug: "rtx5070-5800x",
    name: "RTX 5070",
    cpu: "Ryzen 7 5800X",
    cat: "amd",
    mb: "B550",
    ram: "16GB",
    ssd: "M.2 1TB",
    psu: "750W",
    note: { en: "7-fan case", ar: "كيس 7 فان" },
    price: 2100000,
  },
  {
    slug: "rtx5060ti-7600x",
    name: "RTX 5060 Ti 16GB",
    cpu: "Ryzen 5 7600X",
    cat: "amd",
    mb: "B650",
    ram: "16GB 5600MHz",
    ssd: "SSD 1TB",
    psu: "750W",
    price: 2060000,
  },
  {
    slug: "rtx5070-5700x",
    name: "RTX 5070",
    cpu: "Ryzen 7 5700X",
    cat: "amd",
    mb: "B550",
    ram: "16GB RGB",
    ssd: "SSD 1TB",
    psu: "750W",
    price: 1900000,
  },
  {
    slug: "rtx4070s-14400f",
    name: "RTX 4070 SUPER",
    cpu: "Intel Core i5 14400F",
    cat: "intel",
    mb: "H610",
    ram: "16GB",
    ssd: "M.2 1TB",
    psu: "750W",
    price: 1825000,
  },
  {
    slug: "rx9060xt-12400f",
    name: "RX 9060 XT",
    cpu: "Intel Core i5 12400F",
    cat: "intel",
    mb: "H610",
    ram: "32GB",
    ssd: "SSD 1TB",
    psu: "750W",
    price: 1550000,
  },
  {
    slug: "rtx5060-14400f",
    name: "RTX 5060",
    cpu: "Intel Core i5 14400F",
    cat: "intel",
    mb: "H610",
    ram: "16GB RGB",
    ssd: "SSD 1TB",
    psu: "750W",
    price: 1425000,
  },
  {
    slug: "rtx5060-5600x",
    name: "RTX 5060",
    cpu: "Ryzen 5 5600X",
    cat: "amd",
    mb: "B550",
    ram: "16GB RGB",
    ssd: "SSD 1TB",
    psu: "750W",
    note: { en: "ASUS card", ar: "كارت ASUS" },
    price: 1375000,
  },
  {
    slug: "rtx3070ti-12400f",
    name: "RTX 3070 Ti",
    cpu: "Intel Core i5 12400F",
    cat: "intel",
    mb: "H610",
    ram: "16GB RGB",
    ssd: "SSD 1TB",
    psu: "750W",
    price: 1340000,
  },
  {
    slug: "rx9060xt-5500",
    name: "RX 9060 XT 8GB",
    cpu: "Ryzen 5 5500",
    cat: "amd",
    mb: "B450",
    ram: "16GB",
    ssd: "SSD 500GB",
    psu: "600W",
    price: 1190000,
  },
  {
    slug: "rtx2060-12400f",
    name: "RTX 2060 12GB",
    cpu: "Intel Core i5 12400F",
    cat: "intel",
    mb: "H610",
    ram: "16GB",
    ssd: "SSD 1TB",
    psu: "750W",
    price: 1160000,
  },
];

/* The parts counter. Every option below is read out of the builds above, so
   the shelf can never claim a part the shop does not actually fit. No prices:
   part prices move week to week and are quoted on WhatsApp, so a number here
   would be a guess. */
export const PART_GROUPS = [
  {
    key: "gpu-nvidia",
    en: "Graphics cards",
    ar: "كروت الشاشة",
    brand: "NVIDIA GeForce RTX",
    of: (p) => (/^RTX/.test(p.name) ? p.name : null),
  },
  {
    key: "gpu-amd",
    en: "Graphics cards",
    ar: "كروت الشاشة",
    brand: "AMD Radeon RX",
    of: (p) => (/^RX/.test(p.name) ? p.name : null),
  },
  {
    key: "cpu-amd",
    en: "Processors",
    ar: "المعالجات",
    brand: "AMD Ryzen",
    of: (p) => (/^Ryzen/.test(p.cpu) ? p.cpu : null),
  },
  {
    key: "cpu-intel",
    en: "Processors",
    ar: "المعالجات",
    brand: "Intel Core",
    of: (p) => (/^Intel/.test(p.cpu) ? p.cpu.replace("Intel ", "") : null),
  },
  {
    key: "board",
    en: "Motherboards",
    ar: "المذربوردات",
    brand: "AM4 · AM5 · LGA 1700",
    of: (p) => p.mb,
  },
  {
    key: "ram",
    en: "Memory",
    ar: "الرامات",
    brand: "DDR4 · DDR5",
    of: (p) => p.ram,
  },
  {
    key: "ssd",
    en: "Storage",
    ar: "التخزين",
    brand: "M.2 NVMe · SSD",
    of: (p) => p.ssd,
  },
  {
    key: "psu",
    en: "Power and cooling",
    ar: "الباور والتبريد",
    brand: "80+ · AIO · Cases",
    // split the cooling line so "360mm liquid, 7-fan case" lists as two parts;
    // p.note is deliberately left out, it holds build notes, not components
    of: (p, lang) => [p.psu, ...(p.cool ? (p.cool[lang] || p.cool.en).split(/,\s*/) : [])],
  },
];

// dearest build first, so the strongest part in each group leads the list
const BY_PRICE = [...PRODUCTS].sort((a, b) => b.price - a.price);

export const partOptions = (g, lang) => [
  ...new Set(BY_PRICE.flatMap((p) => [].concat(g.of(p, lang) ?? [])).filter(Boolean)),
];

export const SHOP = {
  phone: "07713404977",
  phone2: "07711780651",
  whatsapp: "9647713404977",
  instagram: "https://www.instagram.com/eagil.stor2/",
  facebook: "https://www.facebook.com/eagli.stor/",
  handle: { instagram: "@eagil.stor2", facebook: "النسر ستور للتجميعات" },
  branches: [
    {
      en: "Baghdad — Karrada, Al-Masar Mall, 2nd floor",
      ar: "بغداد — الكرادة الصناعة، شارع الخاصكي، مول المسار، الطابق الثاني",
    },
    { en: "Baghdad — Al-Saydia", ar: "بغداد — السيدية" },
  ],
  governorates: 18,
  warrantyMonths: 12,
};

export const bySlug = (slug) => PRODUCTS.find((p) => p.slug === slug);
export const money = (n) => n.toLocaleString("en-US");

/* The row of chips under each build, in the order the shop prints them. */
export const specsOf = (p, lang) =>
  [p.mb, p.ram, p.ssd, p.psu, p.cool && (p.cool[lang] || p.cool.en), p.note && (p.note[lang] || p.note.en)].filter(
    Boolean
  );
