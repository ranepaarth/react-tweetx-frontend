import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../features/slice/usersSlice";
import UserAvatar from "../User/UserAvatar";
import UserFullName from "../User/UserFullName";
import UserName from "../User/UserName";
const SearchUserCard = ({ user }) => {
  const currentUser = useSelector(getCurrentUser);
  const navigate = useNavigate();

  const handleNavigate = () => {
    currentUser?.userName === user?.userName
      ? navigate("/")
      : navigate(`/${user?.userName}`);
  };

  return (
    <article
      className={`w-full flex items-center justify-between px-3 py-2 my-2 transition-colors ease-in-out duration-200 hover:bg-neutral-200  rounded-md cursor-pointer group`}
      onClick={handleNavigate}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 md:w-[4.5] aspect-square rounded-full bg-neutral-200 border border-neutral-400 flex items-center justify-center">
          <UserAvatar className={"avatar w-14"} userName={user?.userName} />
        </div>
        <div className="flex flex-col">
          <UserFullName fullName={user?.fullName} className={"user-fullName"} />
          <UserName className={"userName"} userName={user?.userName} />
        </div>
      </div>
      <div>
        <button className="text-neutral-300 group-hover:text-pink-500">
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default SearchUserCard;
