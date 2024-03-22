import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import LogoText from "../components/NavBar/LogoText";

const AuthLayout = () => {
  return (
    <div className="p-[5%] md:px-[10%]">
      <nav className="mb-8">
        <LogoText />
      </nav>
      <main>
        <Toaster />
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
