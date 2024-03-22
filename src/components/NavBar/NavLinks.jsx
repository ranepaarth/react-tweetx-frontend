import React from "react";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaUserGroup } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCurrentUser } from "../../features/slice/usersSlice";
import UserAvatar from "../User/UserAvatar";
import LogoutBtn from "./LogoutBtn";
import NavUserAvatar from "./NavUserAvatar";

const NavLinks = () => {
  const currentUser = useSelector(getCurrentUser);

  const navLinks = [
    {
      id: 1,
      path: "/feed",
      icon: <BiSolidMessageSquareDetail />,
    },
    {
      id: 2,
      path: "/users",
      icon: <FaUserGroup />,
    },
    {
      id: 3,
      path: "/",
      icon: (
        <NavUserAvatar
          className={
            "w-9 outline-offset-0 rounded-full border p-[0.1rem]  grayscale bg-neutral-200"
          }
          userName={currentUser?.userName}
        />
      ),
    },
  ];
  return (
    <div className="flex items-center justify-between md:justify-center md:gap-x-6 nav-btn">
      {navLinks.map((nav) => (
        <span key={nav.id} className="text-neutral-400 ">
          <NavLink to={nav.path} className="">
            {nav.icon}
          </NavLink>
        </span>
      ))}
      <LogoutBtn />
    </div>
  );
};

export default NavLinks;
