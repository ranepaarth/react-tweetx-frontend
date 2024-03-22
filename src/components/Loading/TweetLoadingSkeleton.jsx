import React from "react";


const TweetLoadingSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-y-6 items-center">
      {[...Array(6)].map((_, i) => (
        <article
          className={`w-full bg-white shadow-md shadow-neutral-200/50 rounded pl-4 py-4 flex items-center justify-between animate-pulse overflow-hidden relative`}
          key={i}
        >
          <div className="w-full flex items-center">
            <div className="w-full flex items-start gap-6">
              <p className="w-20 aspect-square rounded-full bg-neutral-200"></p>
              <div className="flex flex-col gap-y-2 w-full">
                <p className="w-40 h-6 bg-neutral-200"></p>
                <p className="w-64 h-4 bg-neutral-200"></p>
                <p className="w-56 h-4 bg-neutral-200"></p>
              </div>
            </div>
          </div>
          <div className="absolute top-2 right-10 flex items-center gap-2">
            {/* <TweetEditBtn />
          <p className="text-xs text-neutral-500 font-medium">{}</p>
  
          {currUserId === tweet?.userId ? (
            <TweetDeleteBtn tweetId={tweet?._id} />
          ) : (
            ""
          )} */}
          </div>
          <div className=" w-[30px] h-[60px] aspect-video rounded-tl-full rounded-bl-full bg-pink-500/70 pl-4"></div>
        </article>
      ))}
    </div>
  );
};

export default TweetLoadingSkeleton;
