import React from "react";
import { formatTweetDate } from "../../utils/tweet";

const TweetModalDate = ({ createdAt, updatedAt }) => {
  const formattedDate = formatTweetDate(createdAt, updatedAt);
  return (
    <div className="text-xs flex items-center justify-end gap-2 font-medium text-neutral-500">
      <span>{createdAt !== updatedAt ? "Updated" : "Created"}:</span>
      <span>{formattedDate}</span>
    </div>
  );
};

export default TweetModalDate;
