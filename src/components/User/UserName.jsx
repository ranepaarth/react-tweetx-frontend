import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../features/slice/usersSlice";

const UserName = ({ className, userName }) => {
  const currentUser = useSelector(getCurrentUser);

  const profile = currentUser?.userName === userName ? "/" : `/${userName}`;

  return (
    <Link to={profile}>
      <p className={className}>@{userName}</p>
    </Link>
  );
};

export default UserName;
