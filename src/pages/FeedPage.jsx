import React from "react";
import { useSelector } from "react-redux";
import CreateTweetBtn from "../components/FeedPage/CreateTweetBtn";
import SingleTweet from "../components/FeedPage/SingleTweet";
import TweetLoadingSkeleton from "../components/FeedPage/TweetLoadingSkeleton";
import TweetModal from "../components/Modals/TweetModal";
import LogoText from "../components/NavBar/LogoText";
import NoTweets from "../components/ProfilePage/ProfileSection/NoTweets";
import { useGetAllTweetsQuery } from "../slice/authApiSlice";
import { getShowModalStatus, getUserData } from "../slice/usersSlice";

const FeedPage = () => {
  const currUser = useSelector(getUserData);
  const { data: allTweets, isLoading } = useGetAllTweetsQuery(currUser?.id);
  const showModal = useSelector(getShowModalStatus);
  // console.log(allTweets);

  let content;
  if (allTweets?.length === 0) content = <NoTweets />;
  if (isLoading) content = <TweetLoadingSkeleton />;
  if (allTweets?.length > 0) {
    content = allTweets?.map((tweet, index) => (
      <div key={index} className="w-full">
        <SingleTweet tweet={tweet} currUserId={currUser?.id} />
      </div>
    ));
  }

  // console.log(showModal);
  return (
    <div className="flex flex-col gap-y-8 items-start justify-start w-full">
      <div className="flex items-center justify-between w-full mb-4">
        <CreateTweetBtn />
        <LogoText />
      </div>
      {showModal ? <TweetModal /> : ""}
      {content}
    </div>
  );
};

export default FeedPage;
