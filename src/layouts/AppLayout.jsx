import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import { getUserData } from "../slice/usersSlice";

const AppLayout = () => {
  const currentUser = useSelector(getUserData);
  return (
    <div className="bg-neutral-100 min-h-screen">
      <Navbar />

      <main className="px-[5%] md:px-[10%] h-[calc(100dvh-72px)] py-5 flex justify-center">
        {currentUser ? <Outlet /> : <Navigate to="/user/login" replace />}
      </main>

      <footer className="bg-neutral-200 w-full py-1 flex items-center justify-center text-xs text-neutral-400">
        Copyright &copy;2023 | ranepaarth
      </footer>
    </div>
  );
};

export default AppLayout;
