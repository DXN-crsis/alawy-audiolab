/* Bilingual UI strings. The shop's customers read Arabic; English is the
   second language, not the first. Every claim here is one the shop makes
   itself on its own Instagram or Facebook page. */

export const T = {
  nav: {
    builds: { en: "Builds", ar: "التجميعات" },
    parts: { en: "Parts", ar: "القطع" },
    buy: { en: "Buying", ar: "الشراء" },
    contact: { en: "Contact", ar: "تواصل" },
    cart: { en: "Cart", ar: "السلة" },
  },
  hero: {
    tagline: { en: "Stronger performance. Better experience.", ar: "أداء أقوى .. تجربة أفضل" },
    sub: {
      en: "Ready gaming builds and computer parts. Baghdad — delivered to every governorate.",
      ar: "تجميعات گيمنگ جاهزة وقطع كمبيوتر. بغداد — توصيل لكل المحافظات.",
    },
    browse: { en: "See the builds", ar: "شوف التجميعات" },
    ask: { en: "Ask on WhatsApp", ar: "اسأل على واتساب" },
    chain: { en: "Brands on the shelf", ar: "الماركات بالمعرض" },
  },

  shop: {
    eyebrow: { en: "Assembled and tested", ar: "مجمّعة ومفحوصة" },
    title: { en: "Pick a build.", ar: "اختار تجميعة." },
    lede: {
      en: "{n} builds ready to go, {lo} to {hi} dinars. Every card below is the shop's own poster — same specs, same price.",
      ar: "{n} تجميعة جاهزة، من {lo} الى {hi} دينار. كل بطاقة بالأسفل هي منشور المتجر نفسه — نفس المواصفات ونفس السعر.",
    },
    caveat: {
      en: "Prices move with the market — confirm on WhatsApp before you order.",
      ar: "الأسعار تتغير حسب السوق — ثبّت السعر على واتساب قبل ما تطلب.",
    },
    empty: { en: "Nothing here yet.", ar: "ماكو شي هنا." },
    more: { en: "Show all", ar: "عرض الكل" },
    add: { en: "Add to cart", ar: "ضيف للسلة" },
    fresh: { en: "New", ar: "جديد" },
  },

  sheet: {
    cpu: { en: "Processor", ar: "المعالج" },
    gpu: { en: "Graphics card", ar: "كارت الشاشة" },
    mb: { en: "Motherboard", ar: "المذربورد" },
    ram: { en: "RAM", ar: "الرام" },
    ssd: { en: "Storage", ar: "التخزين" },
    psu: { en: "Power supply", ar: "الباور" },
    cool: { en: "Cooling", ar: "التبريد" },
    note: { en: "Also", ar: "إضافة" },
    warranty: { en: "Warranty", ar: "الضمان" },
    delivery: { en: "Delivery", ar: "التوصيل" },
    deliveryVal: { en: "Baghdad and every governorate", ar: "بغداد وكل المحافظات" },
    close: { en: "Close", ar: "اغلاق" },
    zoom: { en: "Open the full poster", ar: "افتح المنشور بالحجم الكامل" },
    remove: { en: "Remove from cart", ar: "شيل من السلة" },
    post: { en: "See the original post", ar: "شوف المنشور الأصلي" },
  },

  parts: {
    eyebrow: { en: "The parts counter", ar: "قسم القطع" },
    title: { en: "Parts, not just whole machines.", ar: "قطع، مو بس أجهزة كاملة." },
    lede: {
      en: "Everything that goes into the builds above is sold on its own too — new and used. Prices move with the market week to week, so they are not printed here; ask and you get today's number.",
      ar: "كل شي يدخل بالتجميعات الفوق ينباع لحاله هم — جديد ومستعمل. الأسعار تتغير حسب السوق أسبوع بأسبوع، علهيچ ما مكتوبة هنا؛ اسأل وتاخذ سعر اليوم.",
    },
    noPrice: { en: "Price not available", ar: "السعر غير متوفر" },
    ask: { en: "Ask about a part", ar: "اسأل عن قطعة" },
    askOne: { en: "Ask", ar: "اسأل" },
    inBuilds: { en: "In the builds", ar: "الموجود" },
    alsoLabel: { en: "And in the shop", ar: "وبالمتجر" },
    also: [
      { en: "Monitors", ar: "شاشات" },
      { en: "Keyboards and mice", ar: "كيبوردات وماوسات" },
      { en: "Accessories", ar: "اكسسوارات" },
      { en: "Used PlayStation 5", ar: "بلي 5 مستعمل" },
      { en: "Used Xbox", ar: "اكس بوكس مستعمل" },
      { en: "Used builds", ar: "تجميعات مستعملة" },
    ],
  },

  buy: {
    eyebrow: { en: "Before you order", ar: "قبل ما تطلب" },
    title: { en: "How it reaches you.", ar: "شلون توصلك." },
    stats: {
      builds: { en: "Builds on the shelf", ar: "تجميعة بالمعرض" },
      warranty: { en: "Months of warranty", ar: "شهر ضمان" },
      governorates: { en: "Governorates", ar: "محافظة نوصلها" },
    },
    items: [
      {
        icon: "shield",
        t: { en: "A full year of warranty", ar: "ضمان سنة كاملة" },
        d: {
          en: "Real warranty on every build, for a full year.",
          ar: "ضمان حقيقي على كل تجميعة، لمدة سنة كاملة.",
        },
      },
      {
        icon: "check",
        t: { en: "Inspect it first", ar: "افحص قبل ما تستلم" },
        d: {
          en: "Check the whole machine with the courier, part by part, before you take it.",
          ar: "افحص الجهاز كامل مع المندوب، قطعة قطعة، قبل ما تستلمه.",
        },
      },
      {
        icon: "truck",
        t: { en: "To your door", ar: "لحد باب بيتك" },
        d: {
          en: "Inside Baghdad and out to every governorate.",
          ar: "داخل بغداد ولكل المحافظات.",
        },
      },
      {
        icon: "store",
        t: { en: "Two branches", ar: "فرعين ببغداد" },
        d: {
          en: "Karrada and Al-Saydia. Come and see the machine yourself.",
          ar: "الكرادة والسيدية. تعال شوف الجهاز بعينك.",
        },
      },
    ],
  },

  cta: {
    title: { en: "Not sure which one?", ar: "محتار على أي وحدة؟" },
    lede: {
      en: "Three questions, about twenty seconds, and you get three builds with the reason for each.",
      ar: "ثلاث أسئلة، حوالي عشرين ثانية، وتطلعلك ثلاث تجميعات وسبب كل وحدة.",
    },
  },

  social: {
    eyebrow: { en: "Accounts", ar: "الحسابات" },
    title: { en: "Talk to the shop.", ar: "احچي ويا المتجر." },
    lede: {
      en: "Same shop on all of them. WhatsApp gets the fastest reply.",
      ar: "نفس المتجر بالكل. واتساب أسرع رد.",
    },
    branches: { en: "Branches", ar: "الفروع" },
    items: [
      { key: "whatsapp", label: { en: "WhatsApp", ar: "واتساب" } },
      { key: "instagram", label: { en: "Instagram", ar: "انستغرام" } },
      { key: "facebook", label: { en: "Facebook", ar: "فيسبوك" } },
      { key: "phone", label: { en: "Phone", ar: "اتصال" } },
    ],
  },

  pick: {
    title: { en: "Confused?", ar: "محتار؟" },
    lede: {
      en: "Three questions, about twenty seconds. Then three builds with the reason for each.",
      ar: "ثلاث أسئلة، حوالي عشرين ثانية. وبعدها ثلاث تجميعات وسبب كل وحدة.",
    },
    cta: { en: "Help me pick", ar: "ساعدني اختار" },
    of: { en: "of", ar: "من" },
    back: { en: "Back", ar: "رجوع" },
    restart: { en: "Start over", ar: "من الأول" },
    next: { en: "Continue", ar: "كمل" },
    results: { en: "Your three", ar: "الثلاثة مالتك" },
    resultsLede: {
      en: "Ranked on your answers and on what is printed on each post. Nothing else.",
      ar: "مرتبة على جوابك وعلى المكتوب بكل منشور. ولا شي غيره.",
    },
    none: {
      en: "Nothing on the shelf fits that. Raise the budget, or just message the shop.",
      ar: "ماكو شي بالمعرض يطابق هذا. زيّد الميزانية، أو بس دزلهم رسالة.",
    },
    questions: [
      {
        key: "use",
        multi: true,
        q: { en: "What will you use it for?", ar: "بشنو راح تستعمله؟" },
        hint: { en: "Pick as many as you like.", ar: "اختار شكد ما تريد." },
        options: [
          { v: "game", en: "Games", ar: "العاب" },
          { v: "edit", en: "Editing and design", ar: "مونتاج وتصميم" },
          { v: "stream", en: "Streaming", ar: "بث وستريم" },
          { v: "work", en: "Study and office", ar: "دراسة ودوام" },
        ],
      },
      {
        key: "budget",
        q: { en: "How much, at most?", ar: "شكد تريد تدفع، بالأكثر؟" },
        options: [
          { v: 1400000, en: "Up to 1,400,000", ar: "لحد مليون و٤٠٠" },
          { v: 1800000, en: "Up to 1,800,000", ar: "لحد مليون و٨٠٠" },
          { v: 2150000, en: "Up to 2,150,000", ar: "لحد مليونين و١٥٠" },
          { v: 99000000, en: "No limit", ar: "ماكو حد" },
        ],
      },
      {
        key: "res",
        q: { en: "What screen do you play on?", ar: "على أي شاشة تلعب؟" },
        options: [
          { v: "1080", en: "1080p", ar: "1080p" },
          { v: "1440", en: "1440p", ar: "1440p" },
          { v: "4k", en: "4K and above", ar: "4K وفوك" },
          { v: "unsure", en: "Not sure", ar: "ما أدري" },
        ],
      },
    ],
    reasons: {
      vram16: { en: "16GB of video memory", ar: "١٦ گيگا فرام بالكارت" },
      ram32: { en: "32GB of RAM", ar: "٣٢ گيگا رام" },
      ddr5: { en: "DDR5 memory", ar: "رام DDR5" },
      tb: { en: "1TB of storage", ar: "تخزين ١ تيرا" },
      aio: { en: "360mm liquid cooling", ar: "تبريد مائي ٣٦٠" },
      top: { en: "The strongest inside your budget", ar: "الأقوى ضمن ميزانيتك" },
      value: { en: "The cheapest of the three", ar: "أرخص الثلاثة" },
      fresh: { en: "Posted this week", ar: "منشورة هذا الأسبوع" },
      inbudget: { en: "Inside your budget", ar: "ضمن ميزانيتك" },
    },
  },

  cart: {
    title: { en: "Your cart", ar: "سلتك" },
    empty: { en: "Your cart is empty", ar: "سلتك فارغة" },
    total: { en: "Total", ar: "المجموع" },
    checkout: { en: "Send order on WhatsApp", ar: "دز الطلب على واتساب" },
    note: {
      en: "Opens WhatsApp with the order written out. Nothing sends until you press send.",
      ar: "يفتح واتساب وطلبك مكتوب. ما ينرسل شي حتى تضغط إرسال.",
    },
    added: { en: "Added", ar: "انضاف" },
    view: { en: "Cart", ar: "السلة" },
    go: { en: "Checkout", ar: "اتمام الطلب" },
    items: { en: "in your cart", ar: "بسلتك" },
  },

  footer: {
    shop: { en: "Shop", ar: "المتجر" },
    help: { en: "Help", ar: "مساعدة" },
    contact: { en: "Contact", ar: "تواصل" },
    rights: { en: "Eagle Store · Baghdad", ar: "النسر ستور · بغداد" },
    prices: { en: "Prices in Iraqi dinar", ar: "الأسعار بالدينار العراقي" },
    credit: {
      en: "Part photos via Wikimedia Commons — Jacek Halicki, D-Kuru, Tiia Monto, ElooKoN, Dmitry Makeev (CC BY-SA), 4300streetcar (CC BY), BugWarp (CC0). Illustrative; the exact model in stock changes.",
      ar: "صور القطع من ويكيميديا كومنز — Jacek Halicki، D-Kuru، Tiia Monto، ElooKoN، Dmitry Makeev (CC BY-SA)، 4300streetcar (CC BY)، BugWarp (CC0). للتوضيح؛ الموديل المتوفر يتغير.",
    },
  },
};

export const t = (node, lang) => (node && node[lang]) || (node && node.en) || "";
