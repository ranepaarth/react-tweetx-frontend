import React from "react";
import { useSelector } from "react-redux";
import { useGetSingleUserQuery } from "../../slice/authApiSlice";
import { getUserData } from "../../slice/usersSlice";
import UserAvatar from "../shared/UserAccount/UserAvatar";
import UserButton from "../shared/UserAccount/UserButton";
import UserInfo from "../shared/UserAccount/UserInfo";
import UserName from "../shared/UserAccount/UserName";

const SingleUser = ({ userId }) => {
  const currUser = useSelector(getUserData);
  const { data: singleUser } = useGetSingleUserQuery(userId);
  const { data: currentUser } = useGetSingleUserQuery(currUser?.id);
  // console.log(singleUser);
  return (
    <article
      className={`${
        currUser?.id === userId ? "hidden" : "block"
      } w-full flex items-center justify-between px-3 py-6 cursor-default transition-transform ease-in-out duration-200`}
    >
      <div className="flex items-start gap-4 md:gap-8">
        <div className="w-[4.5rem] aspect-square rounded-full bg-neutral-200 border border-neutral-400">
          <UserAvatar className={"avatar"} userName={singleUser?.name} />
        </div>
        <div className="flex flex-col gap-2">
          <UserName
            className={
              "font-bold text-neutral-500 hover:text-neutral-800 transition-colors ease-in-out duration-200 cursor-pointer"
            }
            userName={singleUser?.name}
          />
          <div className="flex items-center gap-3 text-sm">
            <UserInfo
              text={"tweets"}
              className={"font-medium text-neutral-600"}
              total={singleUser?.tweets}
              colReverse={false}
            />
            <UserInfo
              text={"followers"}
              className={"font-medium text-neutral-600"}
              total={singleUser?.followers?.length}
              colReverse={false}
            />
            <UserInfo
              text={"following"}
              className={"font-medium text-neutral-600"}
              total={singleUser?.followings?.length}
              colReverse={false}
            />
          </div>
        </div>
      </div>
      <div className="">
        <UserButton
          userId={singleUser?._id}
          isFollowing={currentUser?.followings.includes(singleUser?._id)}
        />
      </div>
    </article>
  );
};

export default SingleUser;
