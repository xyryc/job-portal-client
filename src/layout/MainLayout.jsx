import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import ScrollToTop from "../pages/shared/ScrollToTop";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/shared/Loading";

const MainLayout = () => {
  const { loading } = useAuth();

  return (
    <div className="font-nato-sans">
      <Navbar />

      <ScrollToTop />
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto px-4 min-h-screen">
          <Outlet />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MainLayout;
