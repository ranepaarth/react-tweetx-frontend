import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  setTweetToUpdate,
  toggleIsTweetUpdating,
  toggleShowModal,
} from "../../slice/usersSlice";

const TweetEditBtn = ({ tweet, currUserId }) => {
  const dispatch = useDispatch();
  const toggleTweetUpdatingState = () => {
    dispatch(toggleIsTweetUpdating(true));
    dispatch(toggleShowModal(true));
    dispatch(setTweetToUpdate(tweet));
  };

  return (
    <span>
      {tweet?.userId === currUserId && (
        <button
          className="p-1 rounded-full text-neutral-600 hover:text-white hover:bg-pink-500 transition-colors ease-in-out duration-200"
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
