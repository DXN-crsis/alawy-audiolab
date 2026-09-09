import { Geist, Geist_Mono, Noto_Kufi_Arabic, Rubik_Mono_One } from "next/font/google";
import { StoreProvider } from "@/lib/store";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const kufi = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-kufi", display: "swap" });
// The wordmark only. A squared, near-solid face to sit beside the shop's
// angular ES shield; five glyphs, so the cost is a rounding error.
const mark = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mark",
  // "swap" paints the fallback first and switches when the file lands, which
  // on the wordmark meant watching Arial stretched to 190% play the entrance
  // animation and then jump. "block" holds the glyphs back instead — for one
  // preloaded five-letter word that wait is imperceptible, and after the block
  // period it still falls back rather than staying blank.
  display: "block",
  preload: true,
  adjustFontFallback: true,
});

const DESC =
  "تجميعات گيمنگ جاهزة وقطع كمبيوتر، جديد ومستعمل. ضمان سنة كاملة، توصيل لكل المحافظات. بغداد — الكرادة والسيدية.";

export const metadata = {
  title: "النسر ستور | Eagle Store",
  description: DESC,
  openGraph: {
    title: "النسر ستور | Eagle Store",
    description: DESC,
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#c8dcf2",
};

/* Runs before first paint: picks the language from the browser and the clock,
   and flags weak devices so the ambient animations never start on them. */
const BOOT = `(function(){try{
var d=document.documentElement,n=navigator,l;
// only ever written when someone taps the language toggle, so an automatic
// guess never freezes itself in place
try{l=localStorage.getItem('eagle-lang-choice')}catch(e){}
if(l!=='en'&&l!=='ar'){
 var ARAB=/^(IQ|SA|AE|KW|QA|BH|OM|YE|JO|LB|SY|PS|EG|SD|LY|TN|DZ|MA|MR|SO|DJ|KM)$/;
 var tags=(n.languages&&n.languages.length)?n.languages:[n.language||''];
 var arab=tags.some(function(t){
  if(/^ar(-|$)/i.test(t))return true;              // ar, ar-IQ
  var p=String(t).split('-'),r=p[p.length-1];       // en-IQ, fr-MA
  return r.length===2&&ARAB.test(r.toUpperCase());
 });
 if(!arab){                                         // an English phone in Baghdad
  var tz='';try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||''}catch(e){}
  var city=String(tz).split('/').pop();
  arab=/^(Baghdad|Kuwait|Riyadh|Dubai|Qatar|Bahrain|Muscat|Aden|Beirut|Damascus|Amman|Gaza|Hebron|Cairo|Khartoum|Tripoli|Tunis|Algiers|Casablanca|El_Aaiun|Djibouti|Mogadishu|Nouakchott|Comoro|Egypt|Libya)$/.test(city);
 }
 l=arab?'ar':'en';
}
d.lang=l;d.dir=l==='ar'?'rtl':'ltr';d.setAttribute('data-js','');
var c=n.connection||{};
if(n.deviceMemory<=4||n.hardwareConcurrency<=2||c.saveData||/^(2g|slow-2g)$/.test(c.effectiveType||''))d.setAttribute('data-lite','');
}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${geist.variable} ${mono.variable} ${kufi.variable} ${mark.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
