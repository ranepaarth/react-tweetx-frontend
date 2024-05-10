import React, { useState } from "react";
import toast from "react-hot-toast";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import { useSelector } from "react-redux";
import { useSaveTweetMutation } from "../../features/api/tweetsApiSlice";
import { getSavedTweets } from "../../features/slice/tweetsSlice";
// import useCustomSaveTweet from "../../hooks/useCustomSaveTweet";
import AddToBookmark from "../ToastComponent/AddToBookmark";
import RemoveFromBookmark from "../ToastComponent/RemoveFromBookmark";

const TweetBookmarkBtn = ({ tweetId }) => {
  const [saveTweet, { isLoading }] = useSaveTweetMutation();
  // const [isTweetSaved, setIsTweetSaved] = useCustomSaveTweet(tweetId);
  const savedTweets = useSelector(getSavedTweets);
  const [isTweetSaved, setIsTweetSaved] = useState(
    savedTweets?.includes(tweetId)
  );

  const handleBookMarkTweet = async () => {
    try {
      setIsTweetSaved((prev) => !prev);
      const result = await saveTweet({ tweetId });
      isTweetSaved
        ? toast.custom(<RemoveFromBookmark />)
        : toast.custom((t) => <AddToBookmark t={t} />);
    } catch (error) {
      console.log({ error });
    }
  };

  // if (isLoading) {
  //   return (
  //     <span className="w-8 aspect-square rounded-full bg-pink-300 flex justify-center items-center my-1.5">
  //       <span className="loader"></span>
  //     </span>
  //   );
  // }

  return (
    <div className="text-neutral-500 hover:text-neutral-700 p-1 rounded-full">
      <button
        onClick={handleBookMarkTweet}
        className="hover:bg-pink-100 hover:text-pink-500 p-2 rounded-full transition-colors duration-200 ease-in-out"
      >
        {isTweetSaved ? (
          <GoBookmarkFill className="text-pink-400" />
        ) : (
          <GoBookmark />
        )}
      </button>
    </div>
  );
};

export default TweetBookmarkBtn;
