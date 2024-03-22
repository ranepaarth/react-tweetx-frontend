import React from "react";

const TweetBody = ({ children }) => {
  return (
    <article
      className={`flex items-center justify-between w-full bg-white shadow-md shadow-neutral-200/50 rounded pl-4 pt-4 overflow-hidden relative`}
    >
      {children}

      <div className=" w-[30px] h-[60px] aspect-video rounded-tl-full rounded-bl-full bg-pink-500/70 pl-4"></div>
    </article>
  );
};

export default TweetBody;
