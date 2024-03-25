import React from "react";
import { useSelector } from "react-redux";
import TweetLoadingSkeleton from "../components/Loading/TweetLoadingSkeleton";
import TweetModal from "../components/Modals/TweetModal";
import NoSavedTweets from "../components/SavedTweetsPage/NoSavedTweets";
import SavedTweet from "../components/SavedTweetsPage/SavedTweet";
import { useGetAllSavedTweetsQuery } from "../features/api/tweetsApiSlice";
import { getCurrentUserId } from "../features/slice/authSlice";
import { getShowTweetModal } from "../features/slice/tweetsSlice";
import { getCurrentUser } from "../features/slice/usersSlice";

const SavedTweetsPage = () => {
  const currentUserId = useSelector(getCurrentUserId);
  const currentUser = useSelector(getCurrentUser);

  const showTweetModal = useSelector(getShowTweetModal);
  const { data, isLoading } = useGetAllSavedTweetsQuery();

  let content;
  if (data?.currentUser?.savedTweets?.length === 0) {
    content = <NoSavedTweets />;
  }
  if (data?.currentUser?.savedTweets?.length > 0) {
    content = data?.currentUser?.savedTweets.map((tweet) => (
      <SavedTweet tweet={tweet} key={tweet._id} currentUserId={currentUserId} />
    ));
  }

  if (isLoading) {
    content = <TweetLoadingSkeleton />;
  }

  return (
    <section className="flex flex-col items-start gap-y-4 w-full">
      {showTweetModal ? <TweetModal /> : ""}
      <header className="mb-4">
        <h2 className="font-bold text-2xl text-neutral-700">Bookmarks</h2>
        {!currentUser?.userName ? (
          <h4 className="bg-neutral-200 animate-pulse w-20 h-4 py-1 rounded"></h4>
        ) : (
          <h4 className="text-neutral-500">@{currentUser?.userName}</h4>
        )}
      </header>
      {content}
    </section>
  );
};

export default SavedTweetsPage;
