import React from "react";
import toast from "react-hot-toast";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import { useSaveTweetMutation } from "../../features/api/tweetsApiSlice";
import AddToBookmark from "../ToastComponent/AddToBookmark";
import RemoveFromBookmark from "../ToastComponent/RemoveFromBookmark";
import useCustomSaveTweet from "../../hooks/useCustomSaveTweet";

const TweetBookmarkBtn = ({ tweetId }) => {
  const [saveTweet, { isLoading }] = useSaveTweetMutation();
  const [isTweetSaved, setIsTweetSaved] = useCustomSaveTweet(tweetId);

  const handleBookMarkTweet = async () => {
    try {
      const result = await saveTweet({ tweetId });
      isTweetSaved
        ? toast.custom(<RemoveFromBookmark />)
        : toast.custom((t) => <AddToBookmark t={t} />);
      setIsTweetSaved((prev) => !prev);
    } catch (error) {
      console.log({ error });
    }
  };

  if (isLoading) {
    return (
      <span className="w-8 aspect-square rounded-full bg-pink-300 flex justify-center items-center my-1.5">
        <span className="loader"></span>
      </span>
    );
  }

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
