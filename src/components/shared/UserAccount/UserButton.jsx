import React from "react";
import { useSelector } from "react-redux";
import {
  useFollowUserMutation,
  useUnFollowUserMutation,
} from "../../../slice/authApiSlice";
import { getUserData } from "../../../slice/usersSlice";

const UserButton = ({ userId, isFollowing }) => {
  const [followUser, { isLoading: sendingReq }] = useFollowUserMutation();
  const [unFollowUser, { isLoading: removingUser }] = useUnFollowUserMutation();
  const { id: currUserId } = useSelector(getUserData);
  // console.log({ followingUser });

  const handleClick = async () => {
    try {
      const data = isFollowing
        ? await unFollowUser(userId).unwrap()
        : await followUser(userId).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    userId !== currUserId && (
      <button
        type="button"
        className="bg-pink-400 font-medium text-white px-4 py-1 rounded hover:bg-pink-600 transition-colors ease-in-out duration-200 disabled:bg-pink-800/50"
        onClick={handleClick}
        disabled={sendingReq || removingUser}
      >
        {isFollowing ? "Remove" : "Follow"}
      </button>
    )
  );
};

export default UserButton;
