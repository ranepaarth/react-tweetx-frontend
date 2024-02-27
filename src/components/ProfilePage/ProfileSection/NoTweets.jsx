import React from "react";
import noTweets from "../../../assets/message-add-svgrepo-com.svg";

const NoTweets = () => {
  return (
    <article className="w-full grid place-items-center mt-20">
      <div>
        <img src={noTweets} alt="" />
      </div>
      <div className="flex flex-col items-center">
        <span
          type="button"
          className="text-pink-500 px-2 rounded text-3xl font-extrabold"
        >
          No Tweets Yet
        </span>
      </div>
    </article>
  );
};

export default NoTweets;
