import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  setTweetToUpdate,
  toggleIsTweetUpdating,
  toggleShowModal,
} from "../../features/slice/tweetsSlice";

const TweetEditBtn = ({ tweet, currUserId }) => {
  const dispatch = useDispatch();
  const toggleTweetUpdatingState = () => {
    dispatch(toggleIsTweetUpdating(true));
    dispatch(toggleShowModal());
    dispatch(setTweetToUpdate(tweet));
  };

  return (
    <span>
      {tweet?.createdBy._id === currUserId && (
        <button
          className="p-2 rounded-full text-neutral-400  hover:bg-blue-100 hover:text-blue-600 transition-colors ease-in-out duration-200"
          type="button"
          onClick={toggleTweetUpdatingState}
        >
          <AiOutlineEdit />
        </button>
      )}
    </span>
  );
};

export default TweetEditBtn;
