import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const TweetContent = ({ content }) => {
  return (
    <div className="text-sm md:text-base text-neutral-700 py-1 font-normal w-[90%]">
      <TextareaAutosize
        className="w-full resize-none text-wrap bg-transparent"
        maxRows={10}
        disabled
        value={content}
      />
    </div>
  );
};

export default TweetContent;
