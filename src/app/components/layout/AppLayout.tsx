import { Outlet } from "react-router-dom";
import Header from "../../../components/organisms/Header";
import Footer from "../../../components/organisms/Footer";
// import ConfirmOrder from "../organisms/checkout/ConfirmOrder";
// import ShoppingCart from "../organisms/ShoppingCart";
// import MobileMenu from "../molecules/MobileMenu";

function AppLayout() {
  return (
    <div>
      <Header />
      {/* <ConfirmOrder /> */}
      {/* <MobileMenu /> */}
      {/* <ShoppingCart /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
