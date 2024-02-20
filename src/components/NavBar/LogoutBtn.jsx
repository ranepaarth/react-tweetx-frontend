import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useLogoutUserMutation } from "../../slice/authApiSlice";
import { removeCredentials } from "../../slice/usersSlice";

const LogoutBtn = () => {
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const handleLogoutUser = () => {
    logoutUser();
    dispatch(removeCredentials());
  };
  return (
    <button
      type="button"
      onClick={handleLogoutUser}
      className="bg-red-500 text-white rounded p-1 text-2xl"
    >
      <IoMdLogOut />
    </button>
  );
};

export default LogoutBtn;
