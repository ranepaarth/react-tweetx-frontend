import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectById } from "../../features/api/usersApiSlice";
import UserAvatar from "../User/UserAvatar";

const FollowUserToast = ({ userId, followUser }) => {
  const singleUser = useSelector((state) => selectById(state, userId));

  useEffect(() => {
    const handleFollowUser = async () => {
      try {
        await followUser(userId);
      } catch (error) {
        console.log(error);
      }
    };

    handleFollowUser();
  }, [userId]);

  return (
    <article className="bg-neutral-50 shadow-lg rounded-lg border flex flex-col items-center divide-y-2 text-sm">
      <div className="flex flex-col items-center gap-4 p-4">
        <div className="w-20">
          <UserAvatar className={"avatar"} userName={singleUser?.userName} />
        </div>
        <div>
          <p className=" font-light">
            You are now following{" "}
            <span className="px-1 text-neutral-700 font-semibold">
              {singleUser?.fullName}
            </span>
            <span className="font-medium text-neutral-500">
              @{singleUser?.userName}
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default FollowUserToast;
