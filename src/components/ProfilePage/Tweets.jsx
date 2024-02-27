import React from "react";
import { useSelector } from "react-redux";
import { useGetCurrUserTweetsQuery } from "../../slice/authApiSlice";
import { getUserData } from "../../slice/usersSlice";
import SingleTweet from "../FeedPage/SingleTweet";
import NoTweets from "./ProfileSection/NoTweets";

const Tweets = ({ userId }) => {
  const currUser = useSelector(getUserData);
  const { data: tweets } = useGetCurrUserTweetsQuery(userId);
  console.log(tweets);
  if (tweets?.length === 0) return <NoTweets />;
  // console.log({tweets})
  return (
    <div className="flex flex-col w-full gap-y-8 my-4">
      {tweets?.map((tweet) => (
        <div key={tweet?._id} className="w-full">
          <SingleTweet tweet={tweet} currUserId={currUser.id} />
        </div>
      ))}
    </div>
  );
};

export default Tweets;
