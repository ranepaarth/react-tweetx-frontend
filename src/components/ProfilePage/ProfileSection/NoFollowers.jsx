import React from "react";
import noFollower from "../../../assets/user-tag-svgrepo-com.svg";
const NoFollowers = () => {
  return (
    <article className="mt-20 w-full grid place-items-center gap-y-1">
      <img src={noFollower} alt="" />
      <p className="text-2xl text-pink-500 font-extrabold">
        Looking for followers?
      </p>
      <p className="text-neutral-400">
        When someone follows this account, they’ll show up here.
      </p>
    </article>
  );
};

export default NoFollowers;
