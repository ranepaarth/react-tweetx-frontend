import React from "react";
import { PiUserCirclePlusLight } from "react-icons/pi";

const NoFollowing = () => {
  return (
    <article className="mt-20 w-full grid place-items-center">
      <div className="text-9xl text-neutral-500">
        <PiUserCirclePlusLight />
      </div>

      <div className="flex flex-col items-center gap-y-1">
        <p className="text-neutral-400 font-medium">
          When user follows an account, they’ll show up here.
        </p>
        <span
          type="button"
          className="rounded text-pink-500 font-extrabold text-3xl"
        >
          No Followings
        </span>
      </div>
    </article>
  );
};

export default NoFollowing;
