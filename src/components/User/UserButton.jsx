import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdAdd, MdOutlineCheck } from "react-icons/md";
import { useSelector } from "react-redux";
import {
  useFollowUserMutation,
  useUnFollowUserMutation,
} from "../../features/api/usersApiSlice";
import { getCurrentUser } from "../../features/slice/usersSlice";
import FollowUserToast from "../ToastComponent/FollowUserToast";
import UnfollowUserToast from "../ToastComponent/UnfollowUserToast";
import { isFollowingUser } from "../../utils/isFollowing";

const UserButton = ({ userId }) => {
  const currentUser = useSelector(getCurrentUser);
  const [isFollowing, setIsFollowing] = useState(
    isFollowingUser(currentUser, userId)
  );

  const [followUser] =
    useFollowUserMutation();
  const [unFollowUser] =
    useUnFollowUserMutation();

  const handleFollowUser = async () => {
    try {
      setIsFollowing(true);
      toast.custom((t) => (
        <FollowUserToast t={t} followUser={followUser} userId={userId} />
      ));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnFollowUser = async () => {
    try {
      toast.custom((t) => (
        <UnfollowUserToast
          t={t}
          unFollowUser={unFollowUser}
          userId={userId}
          setIsFollowing={setIsFollowing}
        />
      ));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    currentUser?._id !== userId &&
    (isFollowing ? (
      <button onClick={handleUnFollowUser} className="user-button">
        <span>
          <MdOutlineCheck />
        </span>
        <span className="w-fit">Following</span>
      </button>
    ) : (
      <button onClick={handleFollowUser} className="user-button">
        <span>
          <MdAdd />
        </span>
        <span className="w-fit">Follow</span>
      </button>
    ))
  );
};

export default UserButton;