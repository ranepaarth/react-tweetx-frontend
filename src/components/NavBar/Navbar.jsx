import React from "react";
import { NavLink } from "react-router-dom";
import LogoText from "./LogoText";

const Navbar = () => {
  return (
    <nav className="py-2 bg-neutral-200 px-[5%] md:px-[10%] flex items-center justify-between">
      <LogoText />
      <div className="flex items-center gap-x-6 font-medium right-nav">
        <NavLink className="text-neutral-500 " to="/feed">
          <span>Feed</span>
        </NavLink>
        <NavLink className="text-neutral-500 " to="/users">
          <span>Users</span>
        </NavLink>
        <NavLink className="text-neutral-500 " to="/profile">
          <span>Profile</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
