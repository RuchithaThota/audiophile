import { Outlet, useLocation } from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import MobileMenu from "../molecules/MobileMenu";
import ShoppingCart from "../organisms/ShoppingCart";

function AppLayout() {
  const { pathname } = useLocation();
  return (
    <div>
      <Header />
      <MobileMenu />
      <ShoppingCart />
      <Outlet />
      {pathname !== "/login" && <Footer />}
    </div>
  );
}

export default AppLayout;
