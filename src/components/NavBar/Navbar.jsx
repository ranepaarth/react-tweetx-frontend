import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useLogoutUserMutation } from "../../slice/authApiSlice";
import { removeCredentials } from "../../slice/usersSlice";
import LogoText from "./LogoText";

const Navbar = () => {
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const handleLogoutUser = () => {
    logoutUser();
    dispatch(removeCredentials());
  };
  return (
    <nav className="py-2 shadow-md px-[5%] md:px-[10%] flex items-center justify-between">
      <LogoText />
      <div className="flex items-center gap-x-6 font-medium right-nav">
        <NavLink className="text-neutral-400 " to="/">
          <span>Feed</span>
        </NavLink>
        <NavLink className="text-neutral-400 " to="/users">
          <span>Users</span>
        </NavLink>
        <NavLink className="text-neutral-400 " to="/profile">
          <span>Profile</span>
        </NavLink>
        <button
          type="button"
          className="px-2 py-1 bg-pink-400 text-white rounded-md"
          onClick={handleLogoutUser}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
