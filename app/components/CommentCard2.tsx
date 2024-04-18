"use client";
import React, { useEffect, useState } from "react";
import { FD_Props } from "../helpers/interfaces";
import UserRating from "./UserRating";
import { getUsername } from "./server/actions";

const CommentCard2 = ({ data }: { data: FD_Props }) => {
  const [currentUsername, setUsername] = useState<string>();

  useEffect(() => {
    const usernamer = async () => {
      let tmp = await getUsername();
      setUsername(tmp);
    };
    usernamer();
  }, []);

  const chatStyle = `chat ${
    currentUsername == data.username ? "chat-end" : "chat-start"
  }`;

  const chatStyle2 = `chat-bubble ${
    currentUsername == data.username
      ? "chat-bubble-success"
      : "chat-bubble-secondary"
  }`;
  return (
    <div className={chatStyle}>
      <div className="chat-header">{data.username}</div>
      <div className={chatStyle2}>
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
