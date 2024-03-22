import React from "react";
import { FaRegBookmark } from "react-icons/fa6";

const TweetSaveBtn = () => {
  return (
    <div>
      <button className="px-4">
        <FaRegBookmark className="text-xl text-neutral-600" />
      </button>
    </div>
  );
};

export default TweetSaveBtn;
