import { Geist, Geist_Mono, Noto_Kufi_Arabic, Rubik_Mono_One } from "next/font/google";
import { StoreProvider } from "@/lib/store";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const kufi = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-kufi", display: "swap" });
// The wordmark only. Closest available match to the squared, near-solid
// letterforms of his logo; five glyphs, so the cost is a rounding error.
const mark = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mark",
  display: "swap",
});

export const metadata = {
  title: "ALAWY audiolab",
  description:
    "متجر سماعات احترافية — نساعدك حتى تحصل افضل صوت. توصيل لكافة محافظات العراق، الدفع عند الاستلام او مصرف الرافدين.",
  openGraph: {
    title: "ALAWY audiolab",
    description: "سماعات احترافية، دنكل داك وملحقات. بغداد — توصيل لكافة المحافظات.",
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
try{l=localStorage.getItem('alawy-lang-choice')}catch(e){}
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
