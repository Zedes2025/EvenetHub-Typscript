import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
export default function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

AppLayout;
