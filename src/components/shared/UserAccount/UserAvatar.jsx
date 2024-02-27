import React from "react";

const UserAvatar = ({ className, userName }) => {
  const avatar = `https://api.dicebear.com/7.x/open-peeps/svg?seed=${userName}`
  // console.log(avatar)
  return (
    <img
      src={`https://api.dicebear.com/7.x/open-peeps/svg?seed=${userName}`}
      alt={userName}
      className={userName ? className : "hidden"}
    />
  );
};

export default UserAvatar;
