import React from "react";
import { FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
const MobileNav = () => {
  const navLinks = [
    {
      id: 1,
      path: "/",
      icon: <BiSolidMessageSquareDetail />,
    },
    {
      id: 2,
      path: "/users",
      icon: <FaUserGroup />,
    },
    {
      id: 3,
      path: "/profile",
      icon: <FaUser />,
    },
  ];
  return (
    <nav className="sticky bottom-0 bg-white shadow-black shadow-lg border-t md:hidden block w-full px-8 py-2 text-2xl mobile-nav">
      <div className="flex items-center justify-between">
        {navLinks.map((nav) => (
          <span key={nav.id} className="text-neutral-400 ">
            <NavLink to={nav.path} className="text-2xl">
              {nav.icon}
            </NavLink>
          </span>
        ))}
        <LogoutBtn />
      </div>
    </nav>
  );
};

export default MobileNav;
