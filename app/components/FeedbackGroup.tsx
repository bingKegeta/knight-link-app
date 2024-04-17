"use client";
import React, { useEffect, useState } from "react";
import { FD_Props } from "../helpers/interfaces";
import { GetFeedback, State } from "./server/actions";
import CommentCard from "./CommentCard";
import CommentCard2 from "./CommentCard2";
import alertCreation from "./AlertCreation";

export function FeedbackGroupContent({ E_name, handleStateChange }: any) {
  const [comments, setComments] = useState<FD_Props[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setIsLoading(true);
        const commentList: FD_Props[] = await GetFeedback(E_name);
        setComments(commentList);
      } catch (ex: any) {
        console.log("Error fetching feedback");
      }
      setIsLoading(false);
    };
    fetchComments();
  }, []);

  if (isLoading) {
    return (
      <span className="loading loading-spinner text-error w-16 fixed top-2/4 left-2/4"></span>
    );
  }

  return (
    <section className="card-body bg-base-300 rounded-box join-item border-2 rounded-b-none">
      {comments.map((item, index) => (
        <CommentCard2 data={item} key={`${item.timestamp}-${index}`} />
      ))}
    </section>
  );
}

interface stupidProps {
  E_name: string;
}

const FeedbackGroup = ({ E_name }: stupidProps) => {
  const [alert, setAlert] = useState<{
    visible: boolean;
    content: React.JSX.Element | null;
  }>({ visible: false, content: null });
  const [state, setState] = useState<State>();

  function handleStateChange(newState: State | undefined) {
    setState(newState);
  }

  useEffect(() => {
    if (state) {
      setAlert({ visible: true, content: alertCreation(state) });

      const fadeOutTimer = setTimeout(() => {
        setAlert((prevState) => ({ ...prevState, visible: false }));
      }, 5000);

      const removeTimer = setTimeout(() => {
        setAlert({ visible: false, content: null });
      }, 6000);

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [state]);

  return (
    <>
      <FeedbackGroupContent
        E_name={E_name}
        handleStateChange={handleStateChange}
      />
      <div
        className={`transition-opacity duration-200 fixed bottom-0 right-0 m-4 ${
          alert.visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {alert.content}
      </div>
    </>
  );
};

export default FeedbackGroup;
