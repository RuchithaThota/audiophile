import { Outlet } from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
// import ConfirmOrder from "../organisms/checkout/ConfirmOrder";
import MobileMenu from "../molecules/MobileMenu";
import ShoppingCart from "../organisms/ShoppingCart";

function AppLayout() {
  return (
    <div>
      <Header />
      {/* <ConfirmOrder /> */}
      <MobileMenu />
      <ShoppingCart />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
