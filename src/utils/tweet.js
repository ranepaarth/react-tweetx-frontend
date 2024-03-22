import { format, formatDistance } from "date-fns";

export const formatTweetDate = (createdAt, updatedAt) => {
  if (createdAt !== updatedAt) {
    return format(new Date(updatedAt || Date.now()), "do LLLL yyyy");
  } else {
    return format(new Date(createdAt || Date.now()), "do LLLL yyyy");
  }
};
