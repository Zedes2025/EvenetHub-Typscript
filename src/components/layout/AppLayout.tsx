import { Outlet, useNavigation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import AuthProvider from "../../contexts/AuthContext";
export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <AuthProvider>
      <Header />
      {isLoading && <div>Loading...</div>}
      <Outlet />
      <Footer />
    </AuthProvider>
  );
}
