import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useTweetLikeHandlerMutation } from "../../slice/authApiSlice";
import { getUserData } from "../../slice/usersSlice";

const TweetLikeBtn = ({ tweetId, likedBy }) => {
  const currUser = useSelector(getUserData);
  const [tweetLikeHandler] = useTweetLikeHandlerMutation();

  const handleClick = async () => {
    try {
      const data = await tweetLikeHandler({
        tweetId: tweetId,
        userId: currUser?.id,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-2">
      <button type="button" onClick={handleClick}>
        {likedBy?.includes(currUser?.id) ? (
          <FaHeart className="text-xl text-red-600 flex justify-start" />
        ) : (
          <FaRegHeart className="text-xl text-neutral-500 hover:text-neutral-800 transition-colors ease-in-out duration-100" />
        )}
      </button>
    </div>
  );
};

export default TweetLikeBtn;
