import React from "react";
import TweetLoadingSkeleton from "./TweetLoadingSkeleton";

const ProfilePageLoading = () => {
  return (
    <div className="w-full animate-pulse flex flex-col items-center justify-center">
      <div className="flex items-start gap-6 py-2 w-full flex-shrink">
        <p className="w-20 aspect-square rounded-full bg-neutral-200 p-1"></p>
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col gap-2">
              <p className="w-32 aspect-auto bg-neutral-200 h-8"></p>
              <p className="w-56 aspect-auto bg-neutral-200 h-6"></p>
              <p className="w-64 aspect-auto bg-neutral-200 h-6 mt-5"></p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-b w-full" />
      <div className="w-full py-6"></div>
      <hr className="border-b w-full" />
      <div className="w-full flex items-center justify-center mt-3 z-0">
        <TweetLoadingSkeleton />
      </div>
    </div>
  );
};

export default ProfilePageLoading;
