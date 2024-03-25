import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSavedTweets } from "../features/slice/tweetsSlice";

const useCustomSaveTweet = (tweetId) => {
  const savedTweets = useSelector(getSavedTweets);

  const isSaved = savedTweets?.includes(tweetId);

  const [isTweetSaved, setIsTweetSaved] = useState(tweetId);

  useEffect(() => {
    const isSaved = savedTweets?.includes(tweetId);
    setIsTweetSaved(isSaved);
  }, [tweetId, isSaved]);

  return [isTweetSaved, setIsTweetSaved];
};

export default useCustomSaveTweet;
