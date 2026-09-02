import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Shop from "@/components/Shop";
import Guide from "@/components/Guide";
import Delivery from "@/components/Delivery";
import Social from "@/components/Social";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductSheet from "@/components/ProductSheet";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Shop />
      <Guide />
      <Delivery />
      <Social />
      <Footer />
      <ProductSheet />
      <CartDrawer />
    </>
  );
}
