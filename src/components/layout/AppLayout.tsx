import { Outlet } from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
