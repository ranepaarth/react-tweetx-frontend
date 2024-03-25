import React from "react";
import toast from "react-hot-toast";
import { MdAdd, MdOutlineCheck } from "react-icons/md";
import { useSelector } from "react-redux";
import {
  useFollowUserMutation,
  useUnFollowUserMutation,
} from "../../features/api/usersApiSlice";
import { getCurrentUser } from "../../features/slice/usersSlice";
import useCustomIsFollowing from "../../hooks/useCustomIsFollowing";
import FollowUserToast from "../ToastComponent/FollowUserToast";
import UnfollowUserToast from "../ToastComponent/UnfollowUserToast";

const UserButton = ({ userId }) => {
  const currentUser = useSelector(getCurrentUser);
  const [isFollowing, setIsFollowing] = useCustomIsFollowing(
    currentUser,
    userId
  );

  const [followUser, { isLoading: isLoadingToFollow }] =
    useFollowUserMutation();
  const [unFollowUser, { isLoading: isLoadingToUnfollow }] =
    useUnFollowUserMutation();

  const handleFollowUser = async () => {
    try {
      toast.custom((t) => (
        <FollowUserToast t={t} followUser={followUser} userId={userId} />
      ));
      setIsFollowing(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnFollowUser = async () => {
    try {
      toast.custom((t) => (
        <UnfollowUserToast
          t={t}
          unFollowUser={unFollowUser}
          userId={userId}
          setIsFollowing={setIsFollowing}
        />
      ));
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoadingToUnfollow || isLoadingToFollow) {
    return (
      <button className="user-button w-16 flex justify-center">
        <span className="loader"></span>
      </button>
    );
  }

  return (
    currentUser?._id !== userId &&
    (isFollowing ? (
      <button onClick={handleUnFollowUser} className="user-button">
        <span>
          <MdOutlineCheck />
        </span>
        <span className="w-fit">Following</span>
      </button>
    ) : (
      <button onClick={handleFollowUser} className="user-button">
        <span>
          <MdAdd />
        </span>
        <span className="w-fit">Follow</span>
      </button>
    ))
  );
};

export default UserButton;

{
  /*<button onClick={() => handleFollowUser(userId)} className="user-button">
        {isFollowing ? (
          <>
            <span>
              <MdOutlineCheck />
            </span>
            <span>Following</span>
          </>
        ) : (
          <>
            <span>
              <MdAdd />
            </span>
            <span>Follow</span>
          </>
        )}
      </button> */
}

{
  /*  const handleFollowUser = async (userId) => {
    try {
      isFollowing
        ? toast.custom(
            (t) => (
              <UnfollowUserToast
                userId={userId}
                t={t}
                // setIsLoading={setIsLoading}
              />
            ),
            {
              duration: 1000,
            }
          )
        : toast.custom(
            (t) => (
              <FollowUserToast
                userId={userId}
                t={t}
                // setIsLoading={setIsLoading}
              />
            ),
            {
              duration: 1000,
            }
          );
    } catch (error) {
      console.log(error);
    }
  };
 */
}
