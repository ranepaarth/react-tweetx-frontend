import { formatDistanceStrict } from "date-fns";
import { React, useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import TweetBody from "../FeedPage/TweetBody";
import TweetBookmarkBtn from "../FeedPage/TweetBookmarkBtn";
import TweetContent from "../FeedPage/TweetContent";
import TweetDeleteBtn from "../FeedPage/TweetDeleteBtn";
import TweetEditBtn from "../FeedPage/TweetEditBtn";
import TweetLikeBtn from "../FeedPage/TweetLikeBtn";
import UserAvatar from "../User/UserAvatar";
import UserFullName from "../User/UserFullName";
import UserName from "../User/UserName";

const SavedTweet = ({ tweet, currentUserId }) => {
  const [date, setDate] = useState(null);
  useEffect(() => {
    const tweetCreatedAt = (createdAt) => {
      const newCreatedAt = formatDistanceStrict(
        new Date(createdAt),
        new Date().toString(),
        {
          includeSeconds: false,
        }
      );
      setDate(newCreatedAt);
      return newCreatedAt;
    };

    tweetCreatedAt(tweet?.createdAt);
  }, [date]);
  return (
    <TweetBody>
      <div className="w-full">
        <div className="w-full flex items-start gap-2">
          <div className="">
            <div className="flex items-center gap-x-2">
              <UserAvatar
                userName={tweet?.userName}
                className={"avatar w-14"}
              />
            </div>
          </div>

          <div className="flex flex-col items-start w-full">
            <div className="flex items-baseline gap-x-1">
              <UserFullName
                fullName={tweet?.createdBy?.fullName}
                className={"user-fullName"}
              />
              <UserName
                userName={`${tweet?.createdBy?.userName}`}
                className={"userName"}
              />
              <span className="text-[8px] text-neutral-400">
                <GoDotFill />
              </span>
              <p className="text-xs text-neutral-400 font-normal">{date}</p>
            </div>
            <TweetContent content={tweet?.content} />

            <div className="w-full flex items-center justify-between text-lg pr-5">
              <TweetLikeBtn
                tweetId={tweet?._id}
                likedBy={tweet?.likedBy}
                currentUserId={currentUserId}
              />
              <TweetEditBtn tweet={tweet} currUserId={currentUserId} />
              <TweetBookmarkBtn tweetId={tweet?._id} />
              <TweetDeleteBtn tweetId={tweet?._id} />
            </div>
          </div>
        </div>
      </div>
    </TweetBody>
  );
};

export default SavedTweet;
