"use client";
import React, { useState } from "react";
import { LeaveEvent, State } from "./server/actions";
import { useRouter } from 'next/navigation'

interface EButtonProps {
  E_name: string;
}

interface EventJoinData {
  username: string;
  event_name: string;
}

export default function EventButtons({ E_name }: EButtonProps) {
  const router = useRouter();

  const handleSubmit = async () => {
    const eventJoinData : EventJoinData = {
      username: "",
      event_name: E_name,
    }

    const res : State = await LeaveEvent(eventJoinData);

    // Just refresh regardless, hope for the best lmao.
    if (res?.status !== "") {
      location.reload();
    }
  }
  
  return (
    <>
      <div className="card-actions grid w-full">
        <button className="btn btn-primary" onClick={async () => {await handleSubmit()}}>Leave</button>
      </div>
    </>
  );
};
