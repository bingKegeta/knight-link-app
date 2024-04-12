"use client";
import React, { useState } from "react";

export default function CommentForm() {
  const [isComment, setComment] = useState(true);
  const [rating, setRating] = useState(0);

  const handleFormSubmit = (event: any) => {
    event.preventDefault();

    if (isComment) {
      const form = event.target;
      const formData = new FormData(form);
      const formJSON = Object.fromEntries(formData.entries());
      console.log(formJSON);
    } else {
      console.log(rating);
    }

    // send data here
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  return (
    <form method="post" onSubmit={handleFormSubmit}>
      {isComment && (
        <div className="relative">
          <textarea
            className="textarea textarea-bordered textarea-accent m-0
                        border-2 border-t-0 h-24 w-full rounded-t-none"
            name="comment"
            placeholder="Add a comment..."
          />
          <div
            className="absolute bottom-3 right-2 tooltip tooltip-primary"
            data-tip="Submit"
          >
            <button className="btn btn-xs btn-ghost rounded-full" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-4 h-4 opacity-70"
              >
                <path d="M 248 19 Q 251 16 256 16 Q 261 16 264 19 L 396 151 L 396 151 Q 400 156 400 162 Q 399 175 386 176 L 312 176 L 312 176 Q 305 177 304 184 L 304 320 L 304 320 Q 303 335 288 336 L 224 336 L 224 336 Q 209 335 208 320 L 208 184 L 208 184 Q 207 177 200 176 L 126 176 L 126 176 Q 113 175 112 162 Q 112 156 116 151 L 248 19 L 248 19 Z M 256 0 Q 245 0 237 8 L 105 140 L 105 140 Q 96 149 96 162 Q 96 175 105 183 Q 113 192 126 192 L 192 192 L 192 192 L 192 320 L 192 320 Q 192 334 201 343 Q 210 352 224 352 L 288 352 L 288 352 Q 302 352 311 343 Q 320 334 320 320 L 320 192 L 320 192 L 386 192 L 386 192 Q 399 192 407 183 Q 416 175 416 162 Q 416 149 407 140 L 275 8 L 275 8 Q 267 0 256 0 L 256 0 Z M 48 328 Q 47 321 40 320 Q 33 321 32 328 L 32 424 L 32 424 Q 33 461 58 486 Q 83 511 120 512 L 392 512 L 392 512 Q 429 511 454 486 Q 479 461 480 424 L 480 328 L 480 328 Q 479 321 472 320 Q 465 321 464 328 L 464 424 L 464 424 Q 463 455 443 475 Q 423 495 392 496 L 120 496 L 120 496 Q 89 495 69 475 Q 49 455 48 424 L 48 328 L 48 328 Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
      {!isComment && (
        <div
          className="h-24 w-full rounded-btn rounded-t-none border-2 
                        border-t-0 border-success relative bg-base-100  
                        flex justify-center items-center m-0"
        >
          <div className="rating rating-lg" onChange={handleRatingChange}>
            <input
              type="radio"
              name="rating"
              className="mask mask-star"
              value={1}
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star"
              value={2}
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star"
              value={3}
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star"
              value={4}
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star"
              value={5}
            />
          </div>
          <div
            className="absolute bottom-2 right-2 tooltip tooltip-primary"
            data-tip="Submit"
          >
            <button className="btn btn-xs btn-ghost rounded-full" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-4 h-4 opacity-70"
              >
                <path d="M 248 19 Q 251 16 256 16 Q 261 16 264 19 L 396 151 L 396 151 Q 400 156 400 162 Q 399 175 386 176 L 312 176 L 312 176 Q 305 177 304 184 L 304 320 L 304 320 Q 303 335 288 336 L 224 336 L 224 336 Q 209 335 208 320 L 208 184 L 208 184 Q 207 177 200 176 L 126 176 L 126 176 Q 113 175 112 162 Q 112 156 116 151 L 248 19 L 248 19 Z M 256 0 Q 245 0 237 8 L 105 140 L 105 140 Q 96 149 96 162 Q 96 175 105 183 Q 113 192 126 192 L 192 192 L 192 192 L 192 320 L 192 320 Q 192 334 201 343 Q 210 352 224 352 L 288 352 L 288 352 Q 302 352 311 343 Q 320 334 320 320 L 320 192 L 320 192 L 386 192 L 386 192 Q 399 192 407 183 Q 416 175 416 162 Q 416 149 407 140 L 275 8 L 275 8 Q 267 0 256 0 L 256 0 Z M 48 328 Q 47 321 40 320 Q 33 321 32 328 L 32 424 L 32 424 Q 33 461 58 486 Q 83 511 120 512 L 392 512 L 392 512 Q 429 511 454 486 Q 479 461 480 424 L 480 328 L 480 328 Q 479 321 472 320 Q 465 321 464 328 L 464 424 L 464 424 Q 463 455 443 475 Q 423 495 392 496 L 120 496 L 120 496 Q 89 495 69 475 Q 49 455 48 424 L 48 328 L 48 328 Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-row justify-end">
        <label className="label cursor-pointer">
          <span className="label-text-alt px-4">Comment</span>
          <input
            type="checkbox"
            className="toggle toggle-success"
            onChange={() => setComment(!isComment)}
          />
          <span className="label-text-alt pl-4">Rating</span>
        </label>
      </div>
    </form>
  );
}
