import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4 min-h-screen">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
