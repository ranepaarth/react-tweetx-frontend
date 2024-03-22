import React from "react";
import { useSelector } from "react-redux";
import NoSavedTweets from "../components/SavedTweetsPage/NoSavedTweets";
import SavedTweet from "../components/SavedTweetsPage/SavedTweet";
import {
  useGetAllSavedTweetsQuery,
  useSaveTweetMutation,
} from "../features/api/tweetsApiSlice";
import { getCurrentUserId } from "../features/slice/authSlice";
import { getCurrentUser } from "../features/slice/usersSlice";

const SavedTweetsPage = () => {
  const currentUserId = useSelector(getCurrentUserId);
  const currentUser = useSelector(getCurrentUser);

  const [saveTweet] = useSaveTweetMutation();
  const { data } = useGetAllSavedTweetsQuery();

  const handleSaveTweet = async (tweetId) => {
    try {
      const result = await saveTweet({ tweetId });
    } catch (error) {
      console.log(error);
    }
  };
  let content;
  if (data?.currentUser?.savedTweets?.length === 0) {
    content = <NoSavedTweets />;
  }
  if (data?.currentUser?.savedTweets?.length > 0) {
    content = data?.currentUser?.savedTweets.map((tweet) => (
      <SavedTweet
        tweet={tweet}
        key={tweet._id}
        handleSaveTweet={handleSaveTweet}
        currentUserId={currentUserId}
      />
    ));
  }

  return (
    <section className="flex flex-col items-start gap-y-4 w-full">
      <header className="mb-4">
        <h2 className="font-bold text-2xl text-neutral-700">Bookmarks</h2>
        <h4 className="text-neutral-500">@{currentUser?.userName}</h4>
      </header>
      {content}
    </section>
  );
};

export default SavedTweetsPage;
