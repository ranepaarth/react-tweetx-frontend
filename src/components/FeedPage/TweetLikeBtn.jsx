import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLikeTweetMutation } from "../../features/api/tweetsApiSlice";

const TweetLikeBtn = ({ tweetId, likedBy, currentUserId }) => {
  const [likeTweet] = useLikeTweetMutation();

  // console.log({ likedBy });

  const handleClick = async () => {
    try {
      const liked = await likeTweet({ tweetId });
      console.log({ liked });
    } catch (error) {
      console.log(error);
    }
  };

  let formatter = Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: "1",
  });
  let likes = formatter.format(likedBy?.length);
  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={handleClick}
        className=" text-neutral-400 hover:text-red-500 hover:bg-red-100 transition-colors ease-in-out duration-100 p-2 rounded-full text-base"
      >
        {likedBy?.includes(currentUserId) ? (
          <FaHeart className=" text-red-600 flex justify-start" />
        ) : (
          <FaRegHeart />
        )}
      </button>
      <span className="text-neutral-500 text-sm">
        {/* {likedBy?.length != 0 && likedBy?.length} */}
        {likedBy?.length != 0 && likes}
      </span>
    </div>
  );
};

export default TweetLikeBtn;
