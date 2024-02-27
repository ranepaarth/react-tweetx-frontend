import React from "react";

const TweetContent = ({ content }) => {
  // console.log({content})
  return (
    <div className="text-sm text-neutral-500 py-1 flex flex-grow w-[80%] text-justify">
      <p className="line-clamp-">{content}</p>
    </div>
  );
};

export default TweetContent;
