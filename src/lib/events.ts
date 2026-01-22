import fs from "fs";
import path from "path";
import crypto from "crypto";

const EVENTS_PATH = path.join(process.cwd(), "data/events.json");

export type Event = {
  id: string;
  title: string;
  date: string;          // yyyy-mm-dd
  startTime?: string;    // HH:mm
  endTime?: string;      // HH:mm
  location: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

function readEvents(): Event[] {
  if (!fs.existsSync(EVENTS_PATH)) return [];
  return JSON.parse(fs.readFileSync(EVENTS_PATH, "utf-8"));
}

function writeEvents(events: Event[]) {
  fs.mkdirSync(path.dirname(EVENTS_PATH), { recursive: true });
  fs.writeFileSync(EVENTS_PATH, JSON.stringify(events, null, 2));
}

export function getEvents() {
  return readEvents();
}

export function getEvent(id: string) {
  return readEvents().find((e) => e.id === id);
}

export function createEvent(
  data: Omit<Event, "id" | "createdAt" | "updatedAt">
) {
  const events = readEvents();
  const now = new Date().toISOString();

  const event: Event = {
    id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
    ...data,
  };

  events.unshift(event);
  writeEvents(events);
  return event;
}

export function updateEvent(id: string, data: Partial<Event>) {
  const events = readEvents();
  const index = events.findIndex((e) => e.id === id);
  if (index === -1) return null;

  events[index] = {
    ...events[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };

  writeEvents(events);
  return events[index];
}

export function deleteEvent(id: string) {
  const events = readEvents().filter((e) => e.id !== id);
  writeEvents(events);
}
