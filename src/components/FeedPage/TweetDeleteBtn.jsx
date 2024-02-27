import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDeleteTweetMutation } from "../../slice/authApiSlice";

const TweetDeleteBtn = ({tweetId}) => {
    const [deleteTweet] = useDeleteTweetMutation()
  return (
    <button
      className="p-1 text-neutral-500 rounded-full hover:bg-red-500 hover:text-white transition-colors ease-in-out duration-200"
      onClick={() => {
        deleteTweet(tweetId);
      }}
    >
      <MdDeleteOutline />
    </button>
  );
};

export default TweetDeleteBtn;
