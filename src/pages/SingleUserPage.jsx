import React from "react";
import { GoLock } from "react-icons/go";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  useGetSingleUserProfileQuery,
  useGetSingleUserQuery,
} from "../../slice/authApiSlice";
import { getUserData } from "../../slice/usersSlice";
import ProfileSection from "../ProfilePage/ProfileSection/ProfileSection";
import UserAvatar from "../shared/UserAccount/UserAvatar";
import UserButton from "../shared/UserAccount/UserButton";
import UserInfo from "../shared/UserAccount/UserInfo";

const SingleUserPage = () => {
  const currUser = useSelector(getUserData);
  const { name: userName } = useParams();
  console.log(userName);
  const { data: user } = useGetSingleUserProfileQuery(userName);
  const { data: currentUser } = useGetSingleUserQuery(currUser?.id);
  // console.log({ user, file: "SingleUserProfile" });

  return (
    <div className="w-full">
      <div className="flex items-start gap-6 py-2 w-full">
        <div className="w-28">
          <UserAvatar className={"avatar border"} userName={user?.name} />
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col w-full gap-y-4">
            <span className="text-4xl font-bold">{user?.name}</span>
            <UserButton
              userId={user?._id}
              isFollowing={currentUser?.followings?.includes(user?._id)}
            />
          </div>
          <div className="flex items-center gap-8">
            <UserInfo
              className={"font-bold text-neutral-800 text-xl"}
              total={user?.tweetsLength}
              text={"tweets"}
              colReverse={true}
            />
            <UserInfo
              className={"font-bold text-neutral-800 text-xl"}
              total={user?.followers?.length}
              text={"followers"}
              colReverse={true}
            />
            <UserInfo
              className={"font-bold text-neutral-800 text-xl"}
              total={user?.followings?.length}
              text={"following"}
              colReverse={true}
            />
          </div>
        </div>
      </div>
      {currentUser?.followings?.includes(user?._id) ? (
        <ProfileSection userId={user?._id} />
      ) : (
        <div>
          <p className="border-b border-neutral-300 col-span-3 mt-2"></p>
          <div className="flex items-center p-3 gap-x-4">
            <span className="rounded-full border-2 p-2 text-2xl text-neutral-700 border-neutral-400">
              <GoLock />
            </span>
            <div>
              <p className="text-lg font-bold text-neutral-700/80">
                This Account is Private
              </p>
              <p className="text-sm text-neutral-400">
                Follow this account to see their tweets.
              </p>
            </div>
          </div>
          <p className="border-b border-neutral-300 col-span-3 mt-2"></p>
        </div>
      )}
    </div>
  );
};

export default SingleUserPage;
