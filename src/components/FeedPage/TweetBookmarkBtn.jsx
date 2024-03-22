import React from "react";
import toast from "react-hot-toast";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import { useSelector } from "react-redux";
import { useSaveTweetMutation } from "../../features/api/tweetsApiSlice";
import { getSavedTweets } from "../../features/slice/tweetsSlice";
import AddToBookmark from "../ToastComponent/AddToBookmark";
import RemoveFromBookmark from "../ToastComponent/RemoveFromBookmark";

const TweetBookmarkBtn = ({ tweetId }) => {
  const [saveTweet] = useSaveTweetMutation();
  const savedTweets = useSelector(getSavedTweets);
  const isSaved = savedTweets?.includes(tweetId);

  const handleBookMarkTweet = async () => {
    try {
      const result = await saveTweet({ tweetId });
      //   console.log(result);
      isSaved
        ? toast.custom(<RemoveFromBookmark />)
        : toast.custom((t) => <AddToBookmark t={t} />);
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div className="text-neutral-500 hover:text-neutral-700 p-1 rounded-full">
      <button
        onClick={handleBookMarkTweet}
        className="hover:bg-pink-100 hover:text-pink-500 p-2 rounded-full transition-colors duration-200 ease-in-out"
      >
        {isSaved ? (
          <GoBookmarkFill className="text-pink-400" />
        ) : (
          <GoBookmark />
        )}
      </button>
    </div>
  );
};

export default TweetBookmarkBtn;
