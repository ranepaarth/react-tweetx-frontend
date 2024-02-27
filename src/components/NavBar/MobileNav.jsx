import React from "react";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaUserGroup } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserData } from "../../slice/usersSlice";
import LogoutBtn from "./LogoutBtn";
import UserAvatar from "../shared/UserAccount/UserAvatar";

const MobileNav = () => {
  const currUser = useSelector(getUserData);
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
      icon: <UserAvatar className={"w-9 outline-offset-0 rounded-full border p-[0.1rem]  grayscale bg-neutral-200"} userName={currUser?.name}/>,
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
