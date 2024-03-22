import React from "react";
import { NavLink } from "react-router-dom";
import SearchInput from "../UsersPage/SearchInput";
import LogoText from "./LogoText";
import LogoutBtn from "./LogoutBtn";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="py-3 shadow-md px-[5%] md:px-[10%] md:flex md:items-center md:justify-between hidden bg-transparent w-full">
      <LogoText />

      <div className="w-full mx-4">
        <SearchInput />
      </div>
      <div className="w-[80%] text-2xl">
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
