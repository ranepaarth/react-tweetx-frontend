import React from "react";
import { useSelector } from "react-redux";
import { selectById } from "../../features/api/usersApiSlice";
import UserAvatar from "../User/UserAvatar";
import UserButton from "../User/UserButton";
import UserFullName from "../User/UserFullName";
import UserInfo from "../User/UserInfo";
import UserName from "../User/UserName";

const SingleUser = ({ userId }) => {
  const singleUser = useSelector((state) => selectById(state, userId));
  return (
    <article
      className={`w-full flex sm:items-start items-center justify-between px-1 py-6 cursor-default transition-transform ease-in-out duration-200`}
    >
      <div className="flex items-center gap-4 md:gap-8">
        <div className="w-12 md:w-[4.5rem] aspect-square rounded-full bg-neutral-200 border border-neutral-400">
          <UserAvatar className={"avatar"} userName={singleUser?.userName} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-x-1 flex-col sm:flex-row">
            <UserFullName
              className={"user-fullName"}
              fullName={singleUser?.fullName}
            />
            <UserName
              className={"userName"}
              userName={`${singleUser?.userName}`}
            />
          </div>

          <div className="flex items-center gap-3 md:text-sm text-xs max-sm:hidden">
            <UserInfo
              text={"tweets"}
              className={"userInfo"}
              total={singleUser?.tweetsCount}
              colReverse={false}
            />
            <UserInfo
              text={"followers"}
              className={"userInfo"}
              total={singleUser?.followersCount}
              colReverse={false}
            />
            <UserInfo
              text={"following"}
              className={"userInfo"}
              total={singleUser?.followingsCount}
              colReverse={false}
            />
          </div>
        </div>
      </div>

      <UserButton user={singleUser} userId={singleUser?._id} />
    </article>
  );
};

export default SingleUser;
