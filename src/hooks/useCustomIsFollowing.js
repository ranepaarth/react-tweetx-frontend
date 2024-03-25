import React, { useEffect, useState } from "react";
import { isFollowingUser } from "../utils/isFollowing";

const useCustomIsFollowing = (currentUser, userId) => {
  const isUserFollowing = isFollowingUser(currentUser, userId);

  const [isFollowing, setIsFollowing] = useState(isUserFollowing);

  useEffect(() => {
    const isUserFollowing = isFollowingUser(currentUser, userId);
    setIsFollowing(isUserFollowing);
  }, [userId, isUserFollowing]);

  return [isFollowing, setIsFollowing];
};

export default useCustomIsFollowing;
