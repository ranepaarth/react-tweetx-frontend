import React from "react";
import { useGetSingleUserQuery } from "../../slice/authApiSlice";
import { tweetCreatedAt } from "../../utils/utils";
import UserAvatar from "../shared/UserAccount/UserAvatar";
import UserName from "../shared/UserAccount/UserName";
import TweetContent from "./TweetContent";
import TweetDeleteBtn from "./TweetDeleteBtn";
import TweetEditBtn from "./TweetEditBtn";
import TweetLikeBtn from "./TweetLikeBtn";
import TweetLikes from "./TweetLikes";

const SingleTweet = ({ tweet, currUserId }) => {
  const tweetCreated = tweetCreatedAt(tweet?.createdAt);
  const { data: singleUser } = useGetSingleUserQuery(tweet?.userId);

  return (
    <article
      className={`w-full bg-white shadow-md shadow-neutral-200/50 rounded pl-4 py-4 flex items-center justify-between max-h- overflow-hidden relative ${
        tweet?._id ? " block" : "hidden"
      }`}
    >
      <div className="w-full flex items-center">
        <div className="w-full flex items-start gap-6">
          <UserAvatar userName={singleUser?.name} className={"avatar w-16"} />
          <div className="flex flex-col gap-y-1 w-full">
            <UserName
              userName={singleUser?.name}
              className={
                "text-xl font-bold text-neutral-500 hover:text-neutral-800 transition-colors ease-in-out duration-200 cursor-pointer"
              }
            />
            <TweetContent content={tweet?.content} />

            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <TweetLikeBtn tweetId={tweet?._id} likedBy={tweet?.likedBy} />
              </div>
              <TweetLikes likedBy={tweet?.likedBy} />
            </div>

          </div>
        </div>
      </div>
      <div className="absolute top-2 right-10 flex items-center gap-2">
        <TweetEditBtn tweet={tweet} currUserId={currUserId} />
        <p className="text-xs text-neutral-500 font-medium">{tweetCreated}</p>

        {currUserId === tweet?.userId ? (
          <TweetDeleteBtn tweetId={tweet?._id} />
        ) : (
          ""
        )}
      </div>
      <div className=" w-[30px] h-[60px] aspect-video rounded-tl-full rounded-bl-full bg-pink-500/70 pl-4"></div>
    </article>
  );
};

export default SingleTweet;
