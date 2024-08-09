import { Outlet } from "react-router-dom";
import Sidebar from "../shared/Sidebar";
import Header from "../shared/header";

const Home = () => {
  return (
    <div className="w-full flex relative">
      <Header />
      <Sidebar />
      <div className="w-full pt-14 text-white px-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
