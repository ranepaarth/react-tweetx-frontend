import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import Login from "../assets/Login-asset.png";
import Register from "../assets/Register-asset.png";
import ResetPswd from "../assets/ResetPswd-asset.png";
import LogoText from "../components/NavBar/LogoText";

const AuthLayout = () => {
  const pathname = useLocation();

  const currentPage = pathname.pathname.split("/")[2];

  let imgSource;
  if (currentPage === "login") {
    imgSource = Login;
  }
  if (currentPage === "register") {
    imgSource = Register;
  }
  if (currentPage === "reset") {
    imgSource = ResetPswd;
  }
  return (
    <main className="w-full min-h-screen sm:flex sm:items-center sm:justify-center bg-neutral-100">
      <section className="w-full sm:w-3/5  min-h-screen sm:min-h-fit bg-white py-8 px-10  rounded-lg shadow-md lg:flex lg:justify-between lg:w-2/3 lg:items-center">
        <aside className="flex-1">
          <header className="mb-4">
            <LogoText />
          </header>
          <div className=" hidden lg:block">
            <img src={imgSource} alt={currentPage} className="object-cover hidden lg:block" />
          </div>
        </aside>
        <Toaster />
        <article className="max-w-lg flex-1">
          <Outlet />
        </article>
      </section>
    </main>
    // </div>
  );
};

export default AuthLayout;
