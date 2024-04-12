import React from "react";
import { FdProps } from "../helpers/interfaces";
import UserRating from "./UserRating";

export default function CommentCard(data: FdProps) {
  return (
    <div className="chat chat-start">
      <div className="chat-header">{data.username}</div>
      <div className="chat-bubble chat-bubble-secondary">
        {data.type === "comment" || !data.rating ? (
          data.content
        ) : (
          <UserRating rating={data.rating} />
        )}
      </div>

      <div className="chat-footer opacity-50">
        <time className="text-xs opacity-50">{data.timestamp}</time>
      </div>
    </div>
  );
}
