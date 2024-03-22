import React from "react";
import { BsBookmarks } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TweetModal from "../components/Modals/TweetModal";
import CurrUserInfo from "../components/Modals/UserInfoModal";
import ProfileSection from "../components/ProfilePage/ProfileSection/ProfileSection";
import UserAvatar from "../components/User/UserAvatar";
import UserFullName from "../components/User/UserFullName";
import UserInfo from "../components/User/UserInfo";
import UserName from "../components/User/UserName";
import { useGetCurrUserProfileQuery } from "../features/api/usersApiSlice";
import { getShowTweetModal } from "../features/slice/tweetsSlice";
import {
  getCurrentUser,
  getShowUserModal,
  toggleShowUserModal,
} from "../features/slice/usersSlice";

const ProfilePage = () => {
  const currentUser = useSelector(getCurrentUser);

  const showTweetModal = useSelector(getShowTweetModal);
  const showUserModal = useSelector(getShowUserModal);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleShowUserModal());
  };

  return (
    <div className="w-full">
      {showUserModal ? <CurrUserInfo /> : ""}
      {showTweetModal ? <TweetModal /> : ""}
      <div className="flex items-start gap-6 py-2 w-full flex-shrink">
        <div className="min-w-28">
          <UserAvatar
            className={"avatar border"}
            userName={currentUser?.userName}
          />
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col items-start justify-between w-full">
              <button onClick={handleClick}>
                <UserFullName
                  className={"font-extrabold text-2xl text-neutral-800"}
                  fullName={currentUser?.fullName}
                />
              </button>
              <UserName
                userName={currentUser?.userName}
                className={"profile-userName"}
              />
            </div>
            <Link
              className="text-2xl text-neutral-500 hover:text-pink-500 transition-colors ease-in-out duration-200 mr-4 p-2"
              to="/saved"
            >
              <button className="relative">
                <BsBookmarks />
              </button>
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <UserInfo
              className={"profile-userInfo"}
              total={currentUser?.tweets?.length}
              text={"tweets"}
              colReverse={true}
            />
            <UserInfo
              className={"profile-userInfo"}
              total={currentUser?.followers?.length}
              text={"followers"}
              colReverse={true}
            />
            <UserInfo
              className={"profile-userInfo"}
              total={currentUser?.followings?.length}
              text={"following"}
              colReverse={true}
            />
          </div>
        </div>
      </div>
      <ProfileSection
        tweets={currentUser?.tweets}
        followers={currentUser?.followers}
        followings={currentUser?.followings}
      />
    </div>
  );
};

export default ProfilePage;
