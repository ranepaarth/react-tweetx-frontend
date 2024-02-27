import React from "react";
import UserLoadingSkeleton from "../../Loading/UserLoadingSkeleton";
import SingleUser from "../../UsersPage/SingleUser";
import NoFollowers from "./NoFollowers";

const Followers = ({ followers, isLoading }) => {
  let content;

  if (followers?.length === 0) content = <NoFollowers />;
  if (isLoading) content = <UserLoadingSkeleton />;
  if (followers?.length > 0) {
    content = followers?.map((userId) => (
      <SingleUser userId={userId} key={userId} />
    ));
  }

  return <div className="w-full flex flex-col items-start">{content}</div>;
};

export default Followers;
