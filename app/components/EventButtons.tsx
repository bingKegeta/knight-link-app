"use client";
import React, { useState } from "react";
import { FdProps } from "../helpers/interfaces";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

interface EButtonProps {
  E_name: string;
  phone: number;
  email: string;
}

// for tests only
const sampleData: FdProps[] = [
  {
    username: "user1",
    type: "rating",
    rating: 5,
    timestamp: "2024-04-12T10:30:00Z",
  },
  {
    username: "user2",
    type: "comment",
    content: "A shrimp fried this rice",
    timestamp: "2024-04-11T15:20:00Z",
  },
  {
    username: "user3",
    type: "rating",
    rating: 5,
    timestamp: "2024-04-10T09:45:00Z",
  },
  {
    username: "user4",
    type: "comment",
    content: "Wood fired pizza???",
    timestamp: "2024-04-09T20:10:00Z",
  },
  {
    username: "user5",
    type: "rating",
    rating: 3,
    timestamp: "2024-04-08T14:00:00Z",
  },
];
export const EventButtons = ({ E_name, phone, email }: EButtonProps) => {
  const contactModalId = `contact-${E_name}`;
  const commentModalId = `comment-${E_name}`;
  return (
    <>
      <div className="card-actions grid grid-cols-3 justify-between w-full">
        <button className="btn btn-primary">Join</button>
        <button
          className="btn btn-info btn-outline"
          onClick={() => {
            const contactModal = document.getElementById(contactModalId) as HTMLDialogElement;
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
            const commentModal = document.getElementById(commentModalId) as HTMLDialogElement;;
            if (commentModal) {
              commentModal.showModal();
            }
          }}
        >
          Comment
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
              {phone}
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
              {email}
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
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg m-4">Comments for {E_name}</h3>
          <div className="flex flex-col justify-stretch">
            <div className="card-body bg-base-300 rounded-box join-item border-2 rounded-b-none">
              {sampleData.map((fb) => (
                <CommentCard key={E_name + fb.username} {...fb} />
              ))}
            </div>
            <section className="join-item">
              <CommentForm />
            </section>
          </div>
        </div>
      </dialog>
    </>
  );
};
