import React from "react";

export const CommentItem = ({ cmt }) => {
  const avatar = cmt.author?.username
    ? cmt.author.username.charAt(0).toUpperCase()
    : "U";
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center shrink-0 rounded-full w-10 h-10 bg-blue-300 text-sm">
        {avatar}
      </div>
      <div className="flex text-gray-300 text-[10px]">{cmt.comment}</div>
    </div>
  );
};
