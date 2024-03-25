import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLikeTweetMutation } from "../../features/api/tweetsApiSlice";
import useCustomLikeTweet from "../../hooks/useCustomLikeTweet";

const TweetLikeBtn = ({ tweetId, likedBy }) => {
  const [likeTweet, { isLoading }] = useLikeTweetMutation();

  const [isLiked, setIsLiked] = useCustomLikeTweet(tweetId);

  const handleClick = async () => {
    try {
      await likeTweet({ tweetId });
      setIsLiked((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  let formatter = Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: "1",
  });

  let likes = formatter.format(likedBy?.length);

  if (isLoading) {
    return (
      <p className="bg-red-300 w-8 rounded-full aspect-square flex items-center justify-center">
        <span className="loader"></span>
      </p>
    );
  }

  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={handleClick}
        className=" text-neutral-400 hover:text-red-500 hover:bg-red-100 transition-colors ease-in-out duration-100 p-2 rounded-full text-base"
      >
        {isLiked ? (
          <FaHeart className=" text-red-600 flex justify-start" />
        ) : (
          <FaRegHeart />
        )}
      </button>
      <span className="text-neutral-500 text-sm">
        {likedBy?.length != 0 && likes}
      </span>
    </div>
  );
};

export default TweetLikeBtn;
