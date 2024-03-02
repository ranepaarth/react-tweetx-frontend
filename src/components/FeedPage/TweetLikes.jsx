import React from "react";

const TweetLikes = ({ likedBy }) => {
  return (
    <div className="text-xs text-neutral-500">
      {likedBy?.length > 0 ? (
        <span className="font-bold  flex items-center gap-x-1">
          <p>{likedBy?.length}</p>
          <p>{likedBy?.length === 1 ? "like" : "likes"}</p>
        </span>
      ) : (
        <p>
          Be the first to <span className="font-bold">like this</span>{" "}
        </p>
      )}
    </div>
  );
};

export default TweetLikes;
