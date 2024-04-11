import React from "react";
import EventCard from "../components/EventCard";
import { EventProps } from "../helpers/interfaces";

const tester: EventProps = {
  name: "Test",
  description: "Really boring description",
  tags: ["Tag 1", "Tag 2", "Tag 3"],
  start: 0,
  end: 0,
  location: 1,
  phone: 123456789,
  email: "test@test.edu",
  visibility: "private",
  uni: "Man University",
};

export default function HomePage() {
  return <EventCard {...tester} />;
}
