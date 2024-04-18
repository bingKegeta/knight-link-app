"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CommentForm from "./CommentForm";
import { FD_Props } from "../helpers/interfaces";
import FeedbackGroup from "./FeedbackGroup";
import { JoinEvent, State, getUsername } from "./server/actions";

interface EButtonProps {
  E_name: string;
  //feedback: FD_Props
}

interface EventJoinData {
  username: string;
  event_name: string;
}

const EventButtons2 = ({ E_name }: EButtonProps) => {
  const contactModalId = `contact-${E_name}`;
  const commentModalId = `comment-${E_name}`;
  const router = useRouter();

  const handleSubmit = async () => {
    const eventJoinData : EventJoinData = {
      username: "",
      event_name: E_name,
    }

    const res : State = await JoinEvent(eventJoinData);

    // Just refresh regardless, hope for the best lmao.
    if (res?.status !== "") {
      router.push("/events");
    }
  }

  return (
    <>
      <div className="card-actions grid grid-cols-3 justify-between w-full">
        <button className="btn btn-primary" onClick={async () => {await handleSubmit()}}>Join</button>
        <button
          className="btn btn-info btn-outline"
          onClick={() => {
            const contactModal = document.getElementById(
              contactModalId
            ) as HTMLDialogElement;
            if (contactModal) {
              contactModal.showModal();
            }
          }}
        >
          Contact
        </button>
        <button
          className="btn btn-success btn-outline"
          onClick={() => {
            const commentModal = document.getElementById(
              commentModalId
            ) as HTMLDialogElement;
            if (commentModal) {
              commentModal.showModal();
            }
          }}
        >
          Feedback
        </button>
      </div>
      <dialog id={contactModalId} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Contact Information</h3>
          <p className="py-4">
            <span className="card-actions justify-start">
              <svg
                className="w-4 h-4 opacity-70"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              +1(123)456-7890
            </span>
            <span className="card-actions justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              man@human.edu
            </span>
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id={commentModalId} className="modal">
        <div className="modal-box bg-neutral">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font font-bold text-lg m-4">Comments for {E_name}</h3>
          <FeedbackGroup E_name={E_name} />
          <section className="join-item">
            <CommentForm E_name={E_name} />
          </section>
        </div>
      </dialog>
    </>
  );
};

export default EventButtons2;
