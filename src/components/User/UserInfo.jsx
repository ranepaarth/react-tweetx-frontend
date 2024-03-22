import React from "react";

const UserInfo = ({ text, className, total, colReverse }) => {
  return (
    <span
      className={`flex ${
        colReverse ? "flex-col-reverse" : "flex-col"
      } items-center`}
    >
      <p className="text-neutral-500 capitalize">{text}</p>
      <p className={className}>{total}</p>
    </span>
  );
};

export default UserInfo;
