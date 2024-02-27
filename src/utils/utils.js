import { format, formatDistance } from "date-fns";

export const formatTweetDate = (createdAt, updatedAt) => {
  if (createdAt !== updatedAt) {
    return format(new Date(updatedAt || Date.now()), "do LLLL yyyy");
  } else {
    return format(new Date(createdAt || Date.now()), "do LLLL yyyy");
  }
};

export const tweetCreatedAt = (createdAt) => {
  const newCreatedAt = formatDistance(new Date(createdAt), new Date(), {
    includeSeconds: false,
  });
  return newCreatedAt;
};
