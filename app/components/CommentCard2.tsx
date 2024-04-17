import React from "react";
import { FD_Props } from "../helpers/interfaces";
import UserRating from "./UserRating";

const CommentCard2 = ({
  data,
  currentUsername,
}: {
  data: FD_Props;
  currentUsername: string;
}) => {
  const chatStyle = `chat ${
    currentUsername == data.username ? "chat-end" : "chat-start"
  }`;
  return (
    <div className={chatStyle}>
      <div className="chat-header">{data.username}</div>
      <div className="chat-bubble chat-bubble-secondary">
        {data.type === "comment" ? (
          data.feedback
        ) : (
          <UserRating
            name={data.username}
            rating={+data.feedback}
            timestamp={data.timestamp}
          />
        )}
      </div>

      <div className="chat-footer opacity-50">
        <time className="text-xs opacity-50">{data.timestamp}</time>
      </div>
    </div>
  );
};

export default CommentCard2;
