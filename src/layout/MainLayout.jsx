import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
