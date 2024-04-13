import React from "react";
import UniversityCard from "../components/UniversityCard";
import EventCard from "../components/EventCard";
import { EventProps, FdProps } from "../helpers/interfaces";
import NavBar from "../components/NavBar";
import { CommentProps } from "postcss";
import CommentCard from "../components/CommentCard";
import EventCarousel from "../components/EventCarousel";

const TestComponent = () => {
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
  return (
    <div className="w-[100vh] h-[100vh] flex items-center justify-center m-auto max-w-32">
      <div className="card card-normal bg-base-100 fixed border-2 border-primary">
        <EventCard {...tester} />
      </div>
    </div>
  );
  // const testComment: FdProps = {
  //   username: "Woman",
  //   type: "rating",
  //   // content: "I'm killing myself",
  //   rating: 3,
  //   timestamp: "3 hours ago",
  // };
  // return <CommentCard {...testComment} />;

  // const data: EventProps[] = [
  //   {
  //     name: "Event 1",
  //     description: "Description for Event 1",
  //     tags: ["music", "sports"],
  //     start: 10,
  //     end: 20,
  //     location: 1,
  //     phone: 1234567890,
  //     email: "event1@example.com",
  //     visibility: "public",
  //     rso: "RSO 1",
  //     uni: "University 1",
  //   },
  //   {
  //     name: "Event 2",
  //     description: "Description for Event 2",
  //     tags: ["food"],
  //     start: 30,
  //     end: 40,
  //     location: 2,
  //     phone: 2345678901,
  //     email: "event2@example.com",
  //     visibility: "private",
  //     rso: "RSO 2",
  //     uni: "University 2",
  //   },
  //   {
  //     name: "Event 3",
  //     description: "Description for Event 3",
  //     tags: ["art", "technology"],
  //     start: 50,
  //     end: 60,
  //     location: 3,
  //     phone: 3456789012,
  //     email: "event3@example.com",
  //     visibility: "rso",
  //     rso: "RSO 3",
  //     uni: "University 3",
  //   },
  //   {
  //     name: "Event 4",
  //     description: "Description for Event 4",
  //     tags: ["science"],
  //     start: 70,
  //     end: 80,
  //     location: 4,
  //     phone: 4567890123,
  //     email: "event4@example.com",
  //     visibility: "public",
  //     rso: "RSO 4",
  //     uni: "University 4",
  //   },
  //   {
  //     name: "Event 5",
  //     description: "Description for Event 5",
  //     tags: ["music", "food"],
  //     start: 90,
  //     end: 100,
  //     location: 5,
  //     phone: 5678901234,
  //     email: "event5@example.com",
  //     visibility: "private",
  //     rso: "RSO 5",
  //     uni: "University 5",
  //   },
  // ];

  // const sampleData: FdProps[] = [
  //   {
  //     username: "user1",
  //     type: "rating",
  //     rating: 4,
  //     timestamp: "2024-04-12T10:30:00Z",
  //   },
  //   {
  //     username: "user2",
  //     type: "comment",
  //     content: "This is a great product!",
  //     timestamp: "2024-04-11T15:20:00Z",
  //   },
  //   {
  //     username: "user3",
  //     type: "rating",
  //     rating: 5,
  //     timestamp: "2024-04-10T09:45:00Z",
  //   },
  //   {
  //     username: "user4",
  //     type: "comment",
  //     content: "Could be better.",
  //     timestamp: "2024-04-09T20:10:00Z",
  //   },
  //   {
  //     username: "user5",
  //     type: "rating",
  //     rating: 3,
  //     timestamp: "2024-04-08T14:00:00Z",
  //   },
  // ];
  // return <EventCarousel events={data} />;
};

export default TestComponent;
