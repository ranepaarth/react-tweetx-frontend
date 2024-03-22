import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteTweetMutation } from "../../features/api/tweetsApiSlice";
import { getTweetIdToDelete } from "../../features/slice/tweetsSlice";

const DeleteTweetToast = ({ t }) => {
  const [deleteTweet] = useDeleteTweetMutation();
  const tweetIdToDelete = useSelector(getTweetIdToDelete);

  const dispatch = useDispatch();
  const handleDeleteTweet = async () => {
    try {
      await deleteTweet(tweetIdToDelete);

      toast.dismiss(t.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-neutral-50 shadow-md rounded-lg p-4 flex flex-col gap-y-2 text-center`}
    >
      <div className="flex-1 w-full">
        <p className="font-medium text-center">
          Are you sure you want to Delete this tweet?
        </p>
        <p className="text-sm text-neutral-600">
          {" "}
          This tweet will be deleted immediately
        </p>
        <p className="text-sm text-neutral-600">
          You can&apos;t undo this action
        </p>
      </div>
      <div className="w-full flex items-center justify-center gap-x-4">
        <button
          onClick={handleDeleteTweet}
          className="px-3 py-1 bg-red-500 text-white rounded shadow-sm hover:shadow-md"
        >
          Yes
        </button>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="px-3 py-1 border shadow-sm hover:shadow-md rounded-md"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteTweetToast;
