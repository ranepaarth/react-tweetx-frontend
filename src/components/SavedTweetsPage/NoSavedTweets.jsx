import React from "react";

const NoSavedTweets = () => {
  return (
    <article className="flex flex-col items-start justify-center w-full gap-y-4">
      <h2 className="font-extrabold text-5xl text-neutral-700">
        Save tweets for later
      </h2>
      <p className="text-neutral-500 font-light">
        Bookmark posts to easily find them again in the future
      </p>
    </article>
  );
};

export default NoSavedTweets;
