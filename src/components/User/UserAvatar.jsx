import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../features/slice/usersSlice";

const UserAvatar = ({ className, userName }) => {
  const currentUser = useSelector(getCurrentUser);

  const profile = currentUser?.userName === userName ? "/" : `/${userName}`;
  return (
    <Link to={profile}>
      <img
        src={`https://api.dicebear.com/7.x/open-peeps/svg?seed=${userName}`}
        alt={userName}
        className={userName ? className : "hidden"}
      />
    </Link>
  );
};

export default UserAvatar;
