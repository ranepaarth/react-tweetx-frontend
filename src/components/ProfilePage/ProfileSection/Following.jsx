import React from "react";
import UserLoadingSkeleton from "../../Loading/UserLoadingSkeleton";
import SingleUser from "../../UsersPage/SingleUser";
import NoFollowing from "./NoFollowing";

const Following = ({ followings, isLoading }) => {
  // console.log(followingUsers);

  let content;
  if (followings?.length === 0) content = <NoFollowing />;
  if (isLoading) content = <UserLoadingSkeleton />;
  if (followings?.length > 0) {
    content = followings?.map((userId) => (
      <SingleUser userId={userId} key={userId} />
    ));
  }

  return <div className="w-full flex flex-col items-start">{content}</div>;
};

export default Following;
