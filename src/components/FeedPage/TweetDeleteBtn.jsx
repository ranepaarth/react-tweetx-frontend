import React from "react";
import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setTweetIdToDelete } from "../../features/slice/tweetsSlice";
import DeleteTweetToast from "../ToastComponent/DeleteTweetToast";

const TweetDeleteBtn = ({ tweetId, currentUserId, tweet }) => {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    try {
      dispatch(setTweetIdToDelete(tweet?._id));
      toast.custom((t) => <DeleteTweetToast t={t} tweetId={tweetId} />);
    } catch (error) {
      console.log(error);
    }
  };

  return currentUserId === tweet?.createdBy?._id ? (
    <button
      className="p-2 text-neutral-400 rounded-full hover:bg-red-200 hover:text-red-500 transition-colors ease-in-out duration-200"
      onClick={handleDelete}
    >
      <MdDeleteOutline />
    </button>
  ) : (
    ""
  );
};

export default TweetDeleteBtn;
