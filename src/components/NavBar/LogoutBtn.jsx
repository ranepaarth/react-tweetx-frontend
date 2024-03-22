import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../../features/api/authApiSlice";
import { logout } from "../../features/slice/authSlice";

const LogoutBtn = () => {
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogoutUser = () => {
    try {
      logoutUser();
      dispatch(logout());
      navigate("/auth/login", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleLogoutUser}
      className="bg-red-500 text-white rounded p-1 text-2xl md:text-xl hover:bg-red-600"
    >
      <IoMdLogOut />
    </button>
  );
};

export default LogoutBtn;
