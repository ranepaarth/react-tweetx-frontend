import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import MobileNav from "../components/NavBar/MobileNav";
import Navbar from "../components/NavBar/Navbar";

const AppLayout = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col justify-between items-center md:justify-start h-fit">
      <Navbar />

      {isSmallScreen ? (
        <Toaster
          position="bottom-center"
          containerStyle={{ bottom: 60 }}
          toastOptions={{ duration: 2000 }}
          gutter={10}
        />
      ) : (
        <Toaster
          position="top-right"
          containerStyle={{ top: 70 }}
          toastOptions={{ duration: 2000 }}
          gutter={10}
        />
      )}
      <main className="px-[3%] md:px-0 my-2 py-4 md:py-6 w-full max-w-[600px]">
        <Outlet />
      </main>

      <MobileNav />
    </div>
  );
};

export default AppLayout;
