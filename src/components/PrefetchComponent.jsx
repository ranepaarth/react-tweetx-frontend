import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { tweetsApiSlice } from "../features/api/tweetsApiSlice";
import { usersApiSlice } from "../features/api/usersApiSlice";
import { store } from "../store";

const PrefetchComponent = () => {
  useEffect(() => {
    const users = store.dispatch(
      usersApiSlice.endpoints.getAllUsers.initiate()
    );

    const tweets = store.dispatch(
      tweetsApiSlice.endpoints.getFeedTweets.initiate()
    );

    const profile = store.dispatch(
      usersApiSlice.endpoints.getCurrUserProfile.initiate()
    );

    const savedTweets = store.dispatch(
      tweetsApiSlice.endpoints.getAllSavedTweets.initiate()
    );

    return () => {
      users.unsubscribe();
      tweets.unsubscribe();
      profile.unsubscribe();
      savedTweets.unsubscribe();
    };
  }, []);
  return <Outlet />;
};

export default PrefetchComponent;
