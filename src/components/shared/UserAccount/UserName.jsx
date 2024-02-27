import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData, setSingleUser } from "../../../slice/usersSlice";

const UserName = ({ className, userName }) => {
  const navigate = useNavigate();
  const currUser = useSelector(getUserData);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (userName !== currUser?.name) {
      navigate(`/user/${userName}`);
      dispatch(setSingleUser(userName));
    } else navigate("/profile");
  };

  return (
    <button onClick={handleClick} className="w-fit">
      <p className={className}>{userName}</p>
    </button>
  );
};

export default UserName;
