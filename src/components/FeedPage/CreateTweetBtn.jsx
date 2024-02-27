import React from "react";
import { useDispatch } from "react-redux";
import { toggleIsTweetUpdating, toggleShowModal } from "../../slice/usersSlice";

const CreateTweetBtn = () => {
  const dispatch = useDispatch();
  const toggleShowForm = () => {
    dispatch(toggleShowModal());
    dispatch(toggleIsTweetUpdating());
    // console.log(showModal);
  };
  return (
    <div>
      <button
        className="bg-pink-500 hover:bg-pink-700 text-white font-medium px-6 py-2 rounded shadow-md text-lg"
        type="button"
        onClick={toggleShowForm}
      >
        Write
      </button>
    </div>
  );
};

export default CreateTweetBtn;
