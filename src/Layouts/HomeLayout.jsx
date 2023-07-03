import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/NavigationBar";
import ParticlesAnimation from "../assets/animation/ParticlesAnimation";

const HomeLayout = () => {
  return (
    <>
      <div className="relative z-10 text-white">
        <NavigationBar />
        <Outlet />
      </div>
      <ParticlesAnimation />
    </>
  );
};

export default HomeLayout;
