import React from "react";
import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";
import { useDeleteTweetMutation } from "../../features/api/tweetsApiSlice";
import DeleteTweetToast from "../ToastComponent/DeleteTweetToast";

const TweetDeleteBtn = ({ tweetId, currentUserId, tweet }) => {
  const [deleteTweet, { isLoading }] = useDeleteTweetMutation();

  const handleDelete = async () => {
    try {
      toast.custom((t) => (
        <DeleteTweetToast t={t} tweetId={tweetId} deleteTweet={deleteTweet} />
      ));
    } catch (error) {
      console.log(error);
    }
  };

  return currentUserId === tweet?.createdBy?._id ? (
    <button
      className="p-2 text-neutral-400 rounded-full hover:bg-red-200 hover:text-red-500 transition-colors ease-in-out duration-200"
      onClick={handleDelete}
    >
      {isLoading ? (
        <p className="bg-red-300 w-8 aspect-square rounded-full flex items-center justify-center">
          <span className="loader"></span>
        </p>
      ) : (
        <MdDeleteOutline />
      )}
    </button>
  ) : (
    ""
  );
};

export default TweetDeleteBtn;
