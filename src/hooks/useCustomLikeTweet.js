import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "../features/slice/authSlice";

const useCustomLikeTweet = (likedBy) => {
  const currentUserId = useSelector(getCurrentUserId);

  const isTweetLiked = likedBy?.includes(currentUserId);
  const [isLiked, setIsLiked] = useState(isTweetLiked);

  useEffect(() => {
    const isTweetLiked = likedBy?.includes(currentUserId);
    setIsLiked(isTweetLiked);
  }, [currentUserId, isTweetLiked]);
  return [isLiked, setIsLiked];
};

export default useCustomLikeTweet;
