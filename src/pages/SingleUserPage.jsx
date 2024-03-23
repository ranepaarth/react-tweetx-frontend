import React from "react";
import { GoLock } from "react-icons/go";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProfilePageLoading from "../components/Loading/ProfilePageLoading";
import ProfileSection from "../components/ProfilePage/ProfileSection/ProfileSection";
import UserAvatar from "../components/User/UserAvatar";
import UserButton from "../components/User/UserButton";
import UserFullName from "../components/User/UserFullName";
import UserInfo from "../components/User/UserInfo";
import UserName from "../components/User/UserName";
import UserNotFound from "../components/UsersPage/UserNotFound";
import { useGetUserProfileQuery } from "../features/api/usersApiSlice";
import { getCurrentUser } from "../features/slice/usersSlice";
import { isFollowingUser } from "../utils/isFollowing";

const PrivateAccount = () => {
  return (
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
  );
};

const SingleUserPage = () => {
  const { name: userName } = useParams();
  const {
    data: user,
    isLoading,
    isSuccess,
  } = useGetUserProfileQuery(userName, {
    skip: userName === "",
  });

  const currentUser = useSelector(getCurrentUser);

  const isFollowing = isFollowingUser(currentUser, user?._id);

  if (isLoading) {
    return <ProfilePageLoading />;
  }

  if (!user) {
    return <UserNotFound userName={userName} />;
  }

  return (
    <>
      <div className="flex items-start gap-6 py-2 w-full">
        <div className="w-28">
          <UserAvatar className={"avatar border"} userName={user?.userName} />
        </div>
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start justify-between w-full">
              <UserFullName
                className={"profile-fullName"}
                fullName={user?.fullName}
              />
              <UserName
                userName={user?.userName}
                className={"profile-userName"}
              />
            </div>
            <UserButton userId={user?._id} />
          </div>
          <div className="flex items-center gap-8">
            <UserInfo
              className={"profile-userInfo"}
              total={user?.tweets?.length}
              text={"tweets"}
              colReverse={true}
            />
            <UserInfo
              className={"profile-userInfo"}
              total={user?.followers?.length}
              text={"followers"}
              colReverse={true}
            />
            <UserInfo
              className={"profile-userInfo"}
              total={user?.followings?.length}
              text={"following"}
              colReverse={true}
            />
          </div>
        </div>
      </div>
      {isFollowing ? (
        <ProfileSection
          tweets={user?.tweets}
          followers={user?.followers}
          followings={user?.followings}
        />
      ) : (
        <PrivateAccount />
      )}
    </>
  );
};

export default SingleUserPage;
