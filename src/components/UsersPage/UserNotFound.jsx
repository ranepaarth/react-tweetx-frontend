import React from "react";
import { FaUser } from "react-icons/fa";
import UserName from "../User/UserName";

const UserNotFound = ({ userName }) => {
  return (
    <div className="flex flex-col items-start gap-6 py-2 w-full">
      <div className="flex items-start gap-4">
        <span className="bg-neutral-200 aspect-square p-2 rounded-full border">
          <FaUser className="text-6xl rounded-full text-neutral-400" />
        </span>
        <UserName userName={userName} className={"profile-userName"} />
      </div>
      <p className="text-neutral-800 font-extrabold text-4xl">
        This account doesn&apos;t exist
      </p>
      <p className="text-sm text-neutral-400">Try searching for another</p>
    </div>
  );
};

export default UserNotFound;
