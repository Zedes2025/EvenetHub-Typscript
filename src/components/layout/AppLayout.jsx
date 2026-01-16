import { Outlet, useNavigation } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AuthProvider from "../../contexts/AuthContext.jsx";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      {isLoading && <div>Loading...</div>}
      <Outlet />
      <Footer />
    </>
  );
}
