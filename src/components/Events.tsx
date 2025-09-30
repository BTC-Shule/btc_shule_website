"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock } from "phosphor-react";

type Event = {
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  type: "upcoming" | "past";
};

const events: Event[] = [
  {
    title: "Bitcoin for Change Hackathon",
    date: "May 10, 2025",
    location: "Online",
    description:
      "A hackathon focused on building open-source Bitcoin tools for African communities.",
    type: "past",
  },
  {
    title: "Bitcoin Basics Workshop – Gitega",
    date: "October 15, 2025",
    time: "10:00 AM – 2:00 PM",
    location: "Gitega, Burundi",
    description:
      "Hands-on introduction to Bitcoin wallets, payments, and financial sovereignty.",
    type: "upcoming",
  },
  {
    title: "Merchants & Bitcoin Training – Ngozi",
    date: "December 5, 2025",
    time: "1:00 PM – 5:00 PM",
    location: "Ngozi, Burundi",
    description:
      "Helping local merchants understand how to accept Bitcoin and integrate it in their businesses.",
    type: "upcoming",
  },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr; // fallback
  return {
    day: d.getDate(),
    month: d.toLocaleString("default", { month: "short" }),
    year: d.getFullYear(),
  };
}

export default function Events() {
  const [showPast, setShowPast] = useState(false);

  const filteredEvents = showPast
    ? events // show all
    : events.filter((e) => e.type === "upcoming");

  return (
    <section id="events" className="relative bg-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-primary">
            Events & Meetups
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Connect with the BTC Shule community through local workshops,
            merchant trainings, and global hackathons. Join an upcoming event or
            explore what we’ve done so far.
          </p>
          <div className="mt-4 mx-auto w-24 h-1 bg-secondary-light rounded-full"></div>
        </motion.div>

        {/* Toggle Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowPast(!showPast)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              showPast
                ? "bg-primary text-background shadow-lg"
                : "bg-secondary-light/10 text-gray-400 hover:text-primary"
            }`}
          >
            {showPast ? "Hide Past Events" : "Show Past Events"}
          </button>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.map((event, i) => {
            const dateObj = formatDate(event.date);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-stretch bg-secondary-light/10 border border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition p-4 md:py-8"
              >
                {/* Column 1: Date */}
                <div className="md:w-1/6 flex items-center md:justify-center px-4 mb-4 md:mb-0">
                  <div className="text-center bg-primary text-background rounded-xl px-8 py-3 shadow-md">
                    <div className="text-2xl font-bold">
                      {typeof dateObj === "object" ? dateObj.day : event.date}
                    </div>
                    <div className="uppercase text-sm tracking-wide">
                      {typeof dateObj === "object" ? dateObj.month : ""}
                    </div>
                    <div className="text-xs text-gray-200">
                      {typeof dateObj === "object" ? dateObj.year : ""}
                    </div>
                  </div>
                </div>

                {/* Column 2: Details */}
                <div className="md:w-3/6 flex flex-col justify-between px-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {event.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-3 text-gray-500 text-sm">
                    {event.time && (
                      <div className="flex items-center gap-1">
                        <Clock
                          size={18}
                          weight="duotone"
                          className="text-secondary-light"
                        />
                        <span>{event.time}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <MapPin
                        size={18}
                        weight="duotone"
                        className="text-secondary-light"
                      />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Column 3: Action */}
                <div className="md:w-2/6 flex items-center justify-end mt-4 md:mt-0">
                  {event.type === "upcoming" ? (
                    <a
                      href="#rsvp"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-primary text-background font-semibold shadow-md hover:scale-105 transition"
                    >
                      RSVP
                    </a>
                  ) : (
                    <a
                      href="#recap"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-secondary-light text-background font-semibold shadow-md hover:scale-105 transition"
                    >
                      Recap
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
