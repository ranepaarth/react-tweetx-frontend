import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AddToBookmark = ({ t }) => {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-sm w-full bg-pink-50/90 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 border border-pink-200`}
    >
      <div className="flex-1 w-0 p-4 text-pink-500 font-medium">
        Added to your BookMarks
      </div>
      <Link className="flex border-l border-pink-400" to="/saved">
        <button
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-pink-600 hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
          onClick={() => toast.remove()}
        >
          View
        </button>
      </Link>
    </div>
  );
};

export default AddToBookmark;
