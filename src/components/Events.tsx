import { getEvents } from "@/lib/events";
import EventsClient from "./EventsClient";

export default function Events() {
  const events = getEvents();
  return <EventsClient events={events} />;
}
