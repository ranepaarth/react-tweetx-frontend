import React from "react";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../features/slice/usersSlice";
import NavLinks from "./NavLinks";

const MobileNav = () => {
  return (
    <nav className="sticky bottom-0 bg-white shadow-black shadow-lg border-t md:hidden block w-full px-8 py-2 text-2xl">
      <NavLinks />
    </nav>
  );
};

export default MobileNav;
