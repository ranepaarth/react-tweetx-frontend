import { useSelector } from "react-redux";
import { getSavedTweets } from "../../../features/slice/tweetsSlice";
import SingleTweet from "../../FeedPage/SingleTweet";
import NoTweets from "./NoTweets";

const Tweets = ({ tweets }) => {
  const savedTweets = useSelector(getSavedTweets);
  let content;
  if (tweets?.length > 0) {
    content = tweets?.map((tweet) => (
      <SingleTweet
        tweetId={tweet?._id}
        key={tweet?._id}
        isSaved={savedTweets?.includes(tweet._id)}
      />
    ));
  }
  if (tweets?.length === 0) {
    content = <NoTweets />;
  }

  return (
    <section className="profile-section-tab-content gap-y-6">{content}</section>
  );
};

export default Tweets;
