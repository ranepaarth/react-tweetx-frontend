import React from "react";
import { Outlet } from "react-router-dom";
import LogoText from "../components/NavBar/LogoText";

const LoginRegisterLayout = () => {
  return (
    <div className="p-[5%] md:px-[10%]">
      <nav className="mb-8">
        <LogoText />
      </nav>
      <main>
        <Outlet />
      </main>
    </div> 
  );
};

export default LoginRegisterLayout;
