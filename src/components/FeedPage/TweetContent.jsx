import React from "react";

const TweetContent = ({ content }) => {
  // console.log({content})
  return (
    <div className="text-sm md:text-base text-neutral-700 py-1 flex flex-grow font-normal text- w-11/12">
      <p className="line-clamp-">{content}</p>
    </div>
  );
};

export default TweetContent;
