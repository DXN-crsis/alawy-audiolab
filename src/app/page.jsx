import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Shop from "@/components/Shop";
import Parts from "@/components/Parts";
import Buy from "@/components/Buy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductSheet from "@/components/ProductSheet";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Shop />
      <Parts />
      <Buy />
      <Contact />
      <Footer />
      <ProductSheet />
      <CartDrawer />
    </>
  );
}
