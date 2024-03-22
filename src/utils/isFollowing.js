export const isFollowingUser = (currentUser, userId) => {
  return currentUser?.followings.some((followingUser) =>
    Object.keys(followingUser).some(
      (key) =>
        followingUser.hasOwnProperty(key) && followingUser[key] === userId
    )
  );
};
