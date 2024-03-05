import { Outlet } from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import MobileMenu from "../molecules/MobileMenu";
import ShoppingCart from "../organisms/ShoppingCart";

function AppLayout() {
  return (
    <div>
      <Header />
      <MobileMenu />
      <ShoppingCart />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
