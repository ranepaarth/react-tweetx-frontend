import { formatDistanceStrict, parseISO } from "date-fns";
import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";
import { selectTweetById } from "../../features/api/tweetsApiSlice";
import { getCurrentUserId } from "../../features/slice/authSlice";
import UserAvatar from "../User/UserAvatar";
import UserFullName from "../User/UserFullName";
import UserName from "../User/UserName";
import TweetBody from "./TweetBody";
import TweetBookmarkBtn from "./TweetBookmarkBtn";
import TweetContent from "./TweetContent";
import TweetDeleteBtn from "./TweetDeleteBtn";
import TweetEditBtn from "./TweetEditBtn";
import TweetLikeBtn from "./TweetLikeBtn";

const SingleTweet = ({ tweetId }) => {
  const singleTweet = useSelector((state) => selectTweetById(state, tweetId));
  const [date, setDate] = useState(null);
  const currentUserId = useSelector(getCurrentUserId);

  useEffect(() => {
    const tweetCreatedAt = (createdAt) => {
      try {
        const newCreatedAt = formatDistanceStrict(
          parseISO(createdAt),
          new Date().toISOString(),
          {
            includeSeconds: false,
          }
        );
        setDate(newCreatedAt);
        return newCreatedAt;
      } catch (error) {
        return null;
      }
    };

    if (singleTweet) tweetCreatedAt(singleTweet?.createdAt);
  }, []);

  return (
    <TweetBody>
      <div className="w-full">
        <div className="w-full flex items-start gap-2">
          <div className="">
            <div className="min-w-12">
              <UserAvatar
                userName={singleTweet?.userName}
                className={"avatar"}
              />
            </div>
          </div>

          <div className="flex flex-col items-start w-full">
            <div className="flex items-baseline gap-x-1">
              <UserFullName
                fullName={singleTweet?.createdBy?.fullName}
                className={"user-fullName"}
              />
              <UserName
                userName={`${singleTweet?.createdBy?.userName}`}
                className={"userName"}
              />
              <span className="text-[8px] text-neutral-400">
                <GoDotFill />
              </span>
              <p className="text-xs text-neutral-400 font-normal">{date}</p>
            </div>
            <TweetContent content={singleTweet?.content} />

            <div className="w-full flex items-center justify-between text-lg pr-5">
              <TweetLikeBtn
                tweetId={singleTweet?._id}
                likedBy={singleTweet?.likedBy}
                currentUserId={currentUserId}
              />
              <TweetEditBtn tweet={singleTweet} currUserId={currentUserId} />
              <TweetBookmarkBtn tweetId={singleTweet?._id} />
              <TweetDeleteBtn
                tweetId={singleTweet?._id}
                currentUserId={currentUserId}
                tweet={singleTweet}
              />
            </div>
          </div>
        </div>
      </div>
    </TweetBody>
  );
};

export default SingleTweet;
