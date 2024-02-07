import React from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import LogoText from "../components/NavBar/LogoText";
import { getUserData } from "../slice/usersSlice";

const LoginRegisterLayout = () => {
  const currentUser = useSelector(getUserData);
  return (
    <div className="p-[5%] md:px-[10%]">
      <nav className="mb-8">
        <LogoText />
      </nav>
      <main>
        <Toaster />
        {!currentUser ? <Outlet /> : <Navigate to="/" />}
      </main>
    </div>
  );
};

export default LoginRegisterLayout;
