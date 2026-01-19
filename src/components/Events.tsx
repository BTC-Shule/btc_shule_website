import { getEvents } from "@/lib/events";
import EventsClient from "./EventsClient";

export default async function EventsPage() {
  const events = getEvents();
  return <EventsClient events={events} />;
}
