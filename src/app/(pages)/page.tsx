"use client";

import {
  getClosestUpcomingEvent,
  getSecondLatestEvent,
  getMostRecentPastEvent,
  getLatestNavigableEvent,
} from "@/lib/event-utils";
import { useEffect } from "react";
import { useEventColor } from "@/context/EventColorContext";
import EventPage from "@/components/event-page/EventPage";
// import { LanyardCard } from "@/components/lanyard-badge";

export default function HeroPage() {
  // Get the latest navigable event regardless of whether it's upcoming or past
  const latestEventDetails = getLatestNavigableEvent();

  const secondLatest = getSecondLatestEvent();
  const { setCurrentEvent } = useEventColor();

  if (!latestEventDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Etkinlik bulunamadı.</p>
      </div>
    );
  }

  useEffect(() => {
    if (latestEventDetails) {
      setCurrentEvent(latestEventDetails);
    }
  }, [latestEventDetails]);

  return (
    <>
      {/* <LanyardCard className="rounded-lg shadow-xl" height="80vh" /> */}
      <EventPage event={latestEventDetails} previousEvent={secondLatest} hero />
    </>
  );
}
