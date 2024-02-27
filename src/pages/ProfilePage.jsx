import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TweetModal from "../components/Modals/TweetModal";
import CurrUserInfo from "../components/Modals/UserInfoModal";
import ProfileSection from "../components/ProfilePage/ProfileSection/ProfileSection";
import UserAvatar from "../components/shared/UserAccount/UserAvatar";
import UserInfo from "../components/shared/UserAccount/UserInfo";
import { useGetSingleUserQuery } from "../slice/authApiSlice";
import {
  getShowModalStatus,
  getShowUserModal,
  getUserData,
  toggleShowUserModal,
} from "../slice/usersSlice";

const ProfilePage = () => {
  const userProfile = useSelector(getUserData);
  const { data: currUser } = useGetSingleUserQuery(userProfile?.id);
  const showModal = useSelector(getShowModalStatus);
  const showUserModal = useSelector(getShowUserModal);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleShowUserModal());
  };
  // console.log(showUserModal)

  return (
    <div className="w-full">
      {showUserModal ? <CurrUserInfo /> : ""}
      {showModal ? <TweetModal /> : ""}
      <div className="flex items-start gap-6 py-2 w-full">
        <div className="w-28">
          <UserAvatar
            className={"avatar border"}
            userName={userProfile?.name}
          />
        </div>
        <div className="flex flex-col items-start gap-3">
          <button onClick={handleClick}>
            <span className="text-4xl font-bold">{userProfile?.name}</span>
          </button>
          <div className="flex items-center gap-8">
            <UserInfo
              className={"font-bold text-neutral-800 text-xl"}
              total={currUser?.tweets}
              text={"tweets"}
              colReverse={true}
            />
            <UserInfo
              className={"font-bold text-neutral-800 text-xl"}
              total={currUser?.followers?.length}
              text={"followers"}
              colReverse={true}
            />
            <UserInfo
              className={"font-bold text-neutral-800 text-xl"}
              total={currUser?.followings?.length}
              text={"following"}
              colReverse={true}
            />
          </div>
        </div>
      </div>
      <ProfileSection userId={userProfile?.id} />
    </div>
  );
};

export default ProfilePage;
