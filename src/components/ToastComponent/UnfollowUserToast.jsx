import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectById } from "../../features/api/usersApiSlice";
import UserAvatar from "../User/UserAvatar";

const UnfollowUserToast = ({ userId, t, unFollowUser, setIsFollowing }) => {
  const singleUser = useSelector((state) => selectById(state, userId));

  const handleUnFollow = async () => {
    try {
      await unFollowUser(userId);
      setIsFollowing(false);
      toast.dismiss(t.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="bg-neutral-50 shadow-lg rounded-lg border flex flex-col items-center divide-y-2 text-sm">
      <div className="flex flex-col items-center gap-2 p-4">
        <div className="w-20">
          <UserAvatar className={"avatar"} userName={singleUser?.userName} />
        </div>
        <div>
          <p className=" font-light">
            Are you sure you want to unfollow{" "}
            <span className="font-medium">{singleUser?.userName}?</span>{" "}
          </p>
        </div>
      </div>
      <button
        className="p-2 w-full font-medium text-red-500"
        onClick={handleUnFollow}
      >
        Unfollow
      </button>
      <button
        className="p-2 w-full font-medium text-neutral-700"
        onClick={() => toast.dismiss(t.id)}
      >
        Cancel
      </button>
    </article>
  );
};

export default UnfollowUserToast;
