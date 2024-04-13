'use client'
import React, { useEffect, useState } from "react";
import { DbEventInputs, EventInputs } from "../helpers/interfaces";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import EventCard from "./EventCard";
import { DbRso, GetRsos, State } from "./server/actions";
import RsoCard from "./RsoCard";
import alertCreation from "./AlertCreation";

export function RsoCarouselContent({handleStateChange} : any) {
  const [events, setEvents] = useState<DbRso[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true); 
        const rsoList: DbRso[] = await GetRsos();
        setEvents(rsoList);
      } catch (ex : any) {
        console.log("Error fetching Rsos");
      }
      setIsLoading(false);  
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
          {events.map((item, index) => (
            <div className="mx-4 justify-center" key={index}>
              <RsoCard event={item} setIsLoading={setIsLoading} handleStateChange={handleStateChange}/>
            </div>
          ))}
    </section>
  )
}

export default function RsoCarousel() {
  const [alert, setAlert] = useState<{ visible: boolean, content: React.JSX.Element | null }>({ visible: false, content: null });
  const [state, setState] = useState<State>();
  
  function handleStateChange(newState : State | undefined) {
    setState(newState);
  }
  
  useEffect(() => {
    if (state) {
      setAlert({ visible: true, content: alertCreation(state) });
    
      const fadeOutTimer = setTimeout(() => {
        setAlert(prevState => ({ ...prevState, visible: false }));
      }, 5000);


      const removeTimer = setTimeout(() => {
        setAlert({ visible: false, content: null });
      }, 6000);

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [state])

  return (
    <>
      <RsoCarouselContent handleStateChange={handleStateChange}/>
      <div className={`transition-opacity duration-200 fixed bottom-0 right-0 m-4 ${alert.visible ? 'opacity-100' : 'opacity-0'}`}>
        {alert.content}
      </div>

    </>
  );
}