import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";

const AppLayout = () => {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <Navbar />

      <main className="px-[5%] md:px-[10%] h-[calc(100dvh-72px)]">
        <Outlet />
      </main>

      <footer className="bg-neutral-200 w-full py-1 flex items-center justify-center text-xs text-neutral-400">
        Copyright &copy;2023 | ranepaarth
      </footer>
    </div>
  );
};

export default AppLayout;
