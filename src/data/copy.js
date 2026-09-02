// Bilingual UI strings. His customers read Arabic; English is the second
// language, not the first.

export const T = {
  nav: {
    shop: { en: "Shop", ar: "المتجر" },
    guide: { en: "Guide", ar: "الدليل" },
    delivery: { en: "Delivery", ar: "التوصيل" },
    contact: { en: "Contact", ar: "تواصل" },
    cart: { en: "Cart", ar: "السلة" },
  },
  hero: {
    tagline: { en: "We help you get the best sound.", ar: "نساعدك حتى تحصل افضل صوت" },
    sub: {
      en: "IEMs, dongle DACs and accessories. Baghdad — delivered to every governorate.",
      ar: "سماعات، دنكل داك وملحقات. بغداد — توصيل لكافة المحافظات.",
    },
    browse: { en: "Browse the shop", ar: "تصفح المتجر" },
    ask: { en: "Ask on WhatsApp", ar: "اسأل على واتساب" },
    brands: { en: "Brands we stock", ar: "الماركات المتوفرة" },
  },
  stats: {
    products: { en: "Pieces in stock", ar: "قطعة بالمعرض" },
    governorates: { en: "Governorates delivered to", ar: "محافظة نوصلها" },
    brands: { en: "Brands on the shelf", ar: "ماركة بالرف" },
  },
  shop: {
    eyebrow: { en: "In stock", ar: "متوفر" },
    title: { en: "The whole shelf.", ar: "كل الرف." },
    lede: {
      en: "{n} pieces on the shelf, {lo} to {hi} dinars.",
      ar: "{n} قطعة بالرف، من {lo} الى {hi} دينار.",
    },
    empty: { en: "Nothing here yet.", ar: "ماكو شي هنا." },
    details: { en: "Details", ar: "التفاصيل" },
    add: { en: "Add to cart", ar: "ضيف للسلة" },
  },
  sheet: {
    type: { en: "Type", ar: "النوع" },
    pick: { en: "Version", ar: "النسخة" },
    colors: { en: "Colours", ar: "الالوان" },
    warranty: { en: "Warranty", ar: "الضمان" },
    chip: { en: "Chip", ar: "الشريحة" },
    brand: { en: "Brand", ar: "الماركة" },
    delivery: { en: "Delivery", ar: "التوصيل" },
    deliveryVal: { en: "All 18 governorates", ar: "كل محافظات العراق" },
    pay: { en: "Payment", ar: "الدفع" },
    payVal: { en: "On delivery, or Qi Card", ar: "عند الاستلام او كي كارد" },
    close: { en: "Close", ar: "اغلاق" },
  },
  guide: {
    eyebrow: { en: "Before you buy", ar: "قبل ما تشتري" },
    title: { en: "Which one is for you.", ar: "أي وحدة تناسبك." },
    lede: {
      en: "The four questions behind almost every order.",
      ar: "أربع أسئلة وراء تقريباً كل طلب.",
    },
    items: [
      {
        q: { en: "What does the price get me?", ar: "شنو يفرق السعر؟" },
        a: {
          en: "Under 20,000 you are buying a dongle or tips. 30,000–50,000 is where a real IEM starts — Wan'er SG2, CHU II, Zero 2, Castor Pro. Above 90,000 you pay for driver count and shell work, not loudness.",
          ar: "تحت ٢٠ الف تشتري دنكل أو سدادات. من ٣٠ الى ٥٠ الف تبدي السماعات الحقيقية — وانر SG2، تشو ٢، زيرو ٢، كاستر برو. فوق ٩٠ الف تدفع مقابل عدد المشغلات وجودة التصنيع، مو مقابل علو الصوت.",
        },
      },
      {
        q: { en: "3.5 mm or Type-C?", ar: "اواكس لو تايب سي؟" },
        a: {
          en: "No headphone jack on your phone — take the Type-C version where he stocks one: CHU II, Wan'er SG2, Phoenix, Old Fashioned. Otherwise buy the 3.5 mm and add a dongle later; the dongle outlives the earphone.",
          ar: "إذا موبايلك ماكو بيه منفذ سماعة، خذ نسخة التايب سي إذا متوفرة — تشو ٢، وانر SG2، فينكس، اولد فاشند. غير هيچي خذ الاواكس وضيف دنكل بعدين؛ الدنكل يعيش أكثر من السماعة.",
        },
      },
      {
        q: { en: "Do I need a dongle?", ar: "أحتاج دنكل؟" },
        a: {
          en: "The JM12 at 12,000 is enough for most pairs on this page. Step up to the NK1 or JM6 Pro 2 if you listen loud or your pair is hard to drive.",
          ar: "الـ JM12 بـ١٢ الف يكفي لأغلب السماعات بهاي الصفحة. اطلع لـ NK1 أو JM6 Pro 2 إذا تسمع بصوت عالي أو سماعتك صعبة التشغيل.",
        },
      },
      {
        q: { en: "Why buy tips separately?", ar: "ليش أشتري سدادات منفصلة؟" },
        a: {
          en: "A bad seal costs more bass than any upgrade buys back. The Sancai and He Sonic combos ship S, M and L in one case — the cheapest real improvement here.",
          ar: "السدادة المو مناسبة تخسرك بيس أكثر مما أي ترقية تردّه. كومبو سانساي وهي سونك يجون S وM وL بعلبة وحدة — أرخص تحسين حقيقي بهاي الصفحة.",
        },
      },
    ],
  },
  delivery: {
    eyebrow: { en: "Payment and delivery", ar: "الدفع والتوصيل" },
    title: { en: "How it reaches you.", ar: "شلون توصلك." },
    lede: {
      en: "Two ways to pay, both taken straight from his page.",
      ar: "طريقتين للدفع، منقولتين من صفحته.",
    },
    items: [
      {
        icon: "wallet",
        t: { en: "Cash on delivery", ar: "الدفع عند الاستلام" },
        d: {
          en: "Pay the courier once the box is in your hand.",
          ar: "تدفع للمندوب لمن توصلك العلبة بإيدك.",
        },
      },
      {
        icon: "qi",
        t: { en: "Rafidain Bank · Qi Card", ar: "مصرف الرافدين · كي كارد" },
        d: {
          en: "Transfer from a Qi Card. Ask on WhatsApp for the account.",
          ar: "تحويل من كي كارد. اطلب رقم الحساب على واتساب.",
        },
      },
      {
        icon: "map",
        t: { en: "Every governorate", ar: "كل المحافظات" },
        d: {
          en: "Baghdad and the other seventeen. The courier's fee is separate.",
          ar: "بغداد وباقي المحافظات. اجرة المندوب منفصلة.",
        },
      },
      {
        icon: "shield",
        t: { en: "Warranty", ar: "الضمان" },
        d: {
          en: "Two months to a year, printed on each item. Manufacturing faults only.",
          ar: "من شهرين الى سنة، مكتوبة على كل منتج. خلل مصنعي فقط.",
        },
      },
    ],
  },
  cta: {
    title: { en: "Not sure? Just ask.", ar: "محتار؟ بس اسأل." },
    lede: {
      en: "Three questions, about twenty seconds, and you get three picks with the reason for each.",
      ar: "ثلاث أسئلة، حوالي عشرين ثانية، وتطلعلك ثلاث خيارات وسبب كل واحد.",
    },
  },

  social: {
    eyebrow: { en: "Accounts", ar: "الحسابات" },
    title: { en: "Follow the shop.", ar: "تابع المحل." },
    lede: {
      en: "The same shop on all three. Instagram carries the posts, WhatsApp gets the fastest reply.",
      ar: "نفس المحل بالثلاثة. انستغرام بيه المنشورات، وواتساب أسرع رد.",
    },
    items: [
      {
        key: "instagram",
        handle: "@3lawy.store",
      },
      {
        key: "whatsapp",
        handle: "07885903332",
      },
      {
        key: "telegram",
        handle: "@alawytech",
      },
    ],
  },

  pick: {
    title: { en: "Confused?", ar: "محتار؟" },
    lede: {
      en: "Three questions, about twenty seconds. Then three picks with the reason for each.",
      ar: "ثلاث أسئلة، حوالي عشرين ثانية. وبعدها ثلاث خيارات وسبب كل واحد.",
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
      en: "Nothing on the shelf fits that. Raise the budget, or just message him.",
      ar: "ماكو شي بالرف يطابق هذا. زيّد الميزانية، أو بس دزله رسالة.",
    },
    addon: { en: "Worth adding", ar: "يستاهل تضيفه" },
    questions: [
      {
        key: "use",
        multi: true,
        q: { en: "What will you use it for?", ar: "بشنو راح تستعملها؟" },
        hint: { en: "Pick as many as you like.", ar: "اختار شكد ما تريد." },
        options: [
          { v: "music", en: "Music", ar: "موسيقى" },
          { v: "game", en: "Games", ar: "العاب" },
          { v: "call", en: "Calls", ar: "مكالمات" },
          { v: "daily", en: "The road and everyday", ar: "الطريق والدوام" },
        ],
      },
      {
        key: "budget",
        q: { en: "How much, at most?", ar: "شكد تريد تدفع، بالأكثر؟" },
        options: [
          { v: 40000, en: "Up to 40,000", ar: "لحد ٤٠ الف" },
          { v: 80000, en: "Up to 80,000", ar: "لحد ٨٠ الف" },
          { v: 160000, en: "Up to 160,000", ar: "لحد ١٦٠ الف" },
          { v: 999999, en: "No limit", ar: "ماكو حد" },
        ],
      },
      {
        key: "port",
        q: { en: "What are you plugging into?", ar: "بشنو راح توصلها؟" },
        options: [
          { v: "jack", en: "It has a 3.5 mm jack", ar: "بيه منفذ سماعة ٣.٥" },
          { v: "typec", en: "Type-C only", ar: "تايب سي بس" },
          { v: "unsure", en: "Not sure", ar: "ما أدري" },
        ],
      },
    ],
    reasons: {
      typec: { en: "Type-C version in stock", ar: "نسخة تايب سي متوفرة" },
      jack: { en: "3.5 mm version in stock", ar: "نسخة اواكس متوفرة" },
      both: { en: "3.5 mm and Type-C", ar: "اواكس وتايب سي" },
      mic: { en: "Comes with a mic", ar: "تجي بمايك" },
      nocable: { en: "No cable at all", ar: "بدون سلك أبداً" },
      wired: { en: "Wired, so no Bluetooth delay", ar: "سلكية، ماكو تأخير بلوتوث" },
      dongle: { en: "Wants a dongle on a Type-C phone", ar: "تريد دنكل ويا موبايل تايب سي" },
      warranty1y: { en: "A year of warranty", ar: "ضمان سنة" },
      warranty6m: { en: "Six months of warranty", ar: "ضمان ستة اشهر" },
      topOfBudget: { en: "The most of the three", ar: "أقوى الثلاثة" },
      value: { en: "The cheapest of the three", ar: "أرخص الثلاثة" },
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
    rights: { en: "Alawy Audiolab · Baghdad", ar: "علاوي اوديو لاب · بغداد" },
    prices: { en: "Prices in Iraqi dinar", ar: "الأسعار بالدينار العراقي" },
  },
};

// The plain name for what the thing is. That is all a category can honestly
// tell you about a specific product.
export const CAT_TYPE = {
  iem: { en: "In-ear monitor", ar: "سماعة داخل الأذن" },
  dac: { en: "Dongle DAC and amp", ar: "دنكل داك ومضخم" },
  tws: { en: "True wireless", ar: "لاسلكي بالكامل" },
  hp: { en: "Headphone", ar: "سماعة رأس" },
  acc: { en: "Accessory", ar: "ملحق" },
};

export const t = (node, lang) => (node && node[lang]) || (node && node.en) || "";
