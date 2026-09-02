import Nav from "@/components/Nav";
import Picker from "@/components/Picker";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductSheet from "@/components/ProductSheet";

// No metadata export on purpose: the title, the description and the icon all
// come from the root layout, so this page carries the identical name.

export default function PickPage() {
  return (
    <>
      <Nav />
      <Picker />
      <Footer />
      <ProductSheet />
      <CartDrawer />
    </>
  );
}
