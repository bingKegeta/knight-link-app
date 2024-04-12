import React from "react";
import { EventProps } from "../helpers/interfaces";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import EventCard from "./EventCard";

export default function EventCarousel({ events }: { events: EventProps[] }) {
  return (
    // change the height, width, and margin values to better match the main page
    <div
      className="h-96 m-4 w-full carousel carousel-center p-4
                    bg-neutral rounded-box border-2 border-success"
    >
      {events.map((event) => (
        <div className=" mx-4" key={event.name}>
          <EventCard {...event} />
        </div>
      ))}
    </div>
  );
}

// This could've been the data fetching function (if it was required)
// export const getStaticProps = (async (context) => {
//   const res = await fetch("http://localhost:3000/events.json");
//   const events = await res.json();
//   return { props: { events } };
// }) satisfies GetStaticProps<{
//   events: EventProps;
// }>;
