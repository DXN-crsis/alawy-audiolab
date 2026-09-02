import { Geist, Geist_Mono, Noto_Kufi_Arabic } from "next/font/google";
import { StoreProvider } from "@/lib/store";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const kufi = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-kufi", display: "swap" });

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
try{l=localStorage.getItem('alawy-lang')}catch(e){}
if(l!=='en'&&l!=='ar'){
 var tz='';try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||''}catch(e){}
 var L=(n.languages||[n.language||'']).join(',');
 l=(/(^|,)ar\b|(^|,)ar-/i.test(L)||/Baghdad|Kuwait|Riyadh|Dubai|Qatar|Bahrain|Muscat|Beirut|Damascus|Amman|Cairo|Khartoum|Tripoli|Tunis|Algiers|Casablanca/.test(tz))?'ar':'en';
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
      className={`${geist.variable} ${mono.variable} ${kufi.variable}`}
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
