'use client'
import React, { useEffect, useState } from "react";
import { DbEventInputs, EventInputs } from "../helpers/interfaces";
import EventCard from "./EventCard";
import { GetEvents } from "./server/actions";

export function EventCarouselContent() {
  const [events, setEvents] = useState<DbEventInputs[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  let arr = [1,2,3,4,5,6,7,8,9,10];

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsList : DbEventInputs[] = await GetEvents();
      setEvents(eventsList);
      setIsLoading(!isLoading);
  };
    fetchEvents();
  }, [])

  if (isLoading) {
    return (
      <span className={`loading loading-spinner text-success w-16 fixed top-2/4 left-2/4 -translate-x-1/2 
                            `}></span>
    )
  }

  return (
    <section className="max-w-sm sm:max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-2xl w-80 space-x-4 m-4 p-4 md:w-full carousel carousel-center items-center
                      bg-neutral rounded-box border-2 border-success">
          {events && events?.map((item, index) => (
            <div className="mx-4 justify-center" key={index}>
              <EventCard {...item} />
            </div>
          ))}
    </section>
  )
}

export default function EventCarousel() {
  return (
    <>
      <EventCarouselContent />

    </>
  );
}