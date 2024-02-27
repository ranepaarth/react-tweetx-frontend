import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import MobileNav from "../components/NavBar/MobileNav";
import Navbar from "../components/NavBar/Navbar";
import { getUserData } from "../slice/usersSlice";

const AppLayout = () => {
  const currentUser = useSelector(getUserData);
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col justify-between items-center md:justify-start h-fit">
      <Navbar />

      <main className="px-[5%] md:px-0 my-2 py-4 md:py-6 w-full max-w-[600px]">
        {currentUser ? <Outlet /> : <Navigate to="/user/login" replace />}
      </main>

      <MobileNav />
    </div>
  );
};

export default AppLayout;
