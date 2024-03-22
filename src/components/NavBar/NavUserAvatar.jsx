import React from "react";

const NavUserAvatar = ({ userName }) => {
  return (
    userName && (
      <img
        src={`https://api.dicebear.com/7.x/open-peeps/svg?seed=${userName}`}
        alt={userName}
        className={
          "w-9 outline-offset-0 rounded-full border p-[0.1rem]  grayscale bg-neutral-200"
        }
      />
    )
  );
};

export default NavUserAvatar;
