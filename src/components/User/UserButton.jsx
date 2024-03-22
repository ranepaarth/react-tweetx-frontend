import React from "react";
import toast from "react-hot-toast";
import { MdAdd, MdOutlineCheck } from "react-icons/md";
import { useGetCurrUserProfileQuery } from "../../features/api/usersApiSlice";
import { isFollowingUser } from "../../utils/isFollowing";
import FollowUserToast from "../ToastComponent/FollowUserToast";
import UnfollowUserToast from "../ToastComponent/UnfollowUserToast";

const UserButton = ({ userId }) => {
  const { data: currentUser } = useGetCurrUserProfileQuery();

  const isFollowing = isFollowingUser(currentUser, userId);

  const handleFollowUser = async (userId) => {
    try {
      isFollowing
        ? toast.custom((t) => <UnfollowUserToast userId={userId} t={t} />, {
            duration: 1000,
          })
        : toast.custom((t) => <FollowUserToast userId={userId} t={t} />, {
            duration: 1000,
          });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    currentUser?._id !== userId && (
      <button onClick={() => handleFollowUser(userId)} className="user-button">
        {isFollowing ? (
          <>
            <span>
              <MdOutlineCheck />
            </span>
            <span>Following</span>
          </>
        ) : (
          <>
            <span>
              <MdAdd />
            </span>
            <span>Follow</span>
          </>
        )}
      </button>
    )
  );
};

export default UserButton;
