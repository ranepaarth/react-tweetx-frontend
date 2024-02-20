import React from "react";
import { NavLink } from "react-router-dom";
import LogoText from "./LogoText";
import LogoutBtn from "./LogoutBtn";

const Navbar = () => {
  return (
    <nav className="py-2 shadow-md px-[5%] md:px-[10%] md:flex md:items-center md:justify-between hidden bg-transparent w-full">
      <LogoText />
      <div className="flex items-center gap-x-6 font-medium desktop-nav">
        <NavLink className="" to="/">
          <span>Feed</span>
        </NavLink>
        <NavLink className=" " to="/users">
          <span>Users</span>
        </NavLink>
        <NavLink className=" " to="/profile">
          <span>Profile</span>
        </NavLink>
        <LogoutBtn />
      </div>
    </nav>
  );
};

export default Navbar;
