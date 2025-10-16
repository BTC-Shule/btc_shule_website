"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, CalendarBlank } from "phosphor-react";

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
  if (isNaN(d.getTime())) return dateStr;
  return {
    day: d.getDate(),
    month: d.toLocaleString("default", { month: "short" }),
    year: d.getFullYear(),
  };
}

export default function Events() {
  const [showPast, setShowPast] = useState(false);

  const filteredEvents = showPast
    ? events
    : events.filter((e) => e.type === "upcoming");

  return (
    <section
      id="events"
      className="relative bg-secondary-light py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Events & Meetups
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Connect with the BTC Shule community through local workshops,
            merchant trainings, and global hackathons. Join an upcoming event or
            relive our past experiences shaping Bitcoin adoption in Africa.
          </p>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-primary to-orange-400 rounded-full"></div>
        </motion.div>

        {/* Toggle Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowPast(!showPast)}
            className={`px-8 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 shadow-md ${
              showPast
                ? "bg-primary text-white hover:scale-105"
                : "bg-secondary text-white hover:bg-primary/10"
            }`}
          >
            {showPast ? "Hide Past Events" : "Show Past Events"}
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid gap-10 lg:gap-12">
          {filteredEvents.map((event, i) => {
            const dateObj = formatDate(event.date);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-500 overflow-hidden transition-all duration-500"
              >
                <div className="md:w-1/5 flex md:flex-col md:justify-center items-center text-white p-6 md:p-0">
                  <CalendarBlank size={40} weight="duotone" className="md:mb-2" />

                  {/* Date + Month/Year container */}
                  <div className="flex flex-row md:flex-col  justify-center gap-2 md:gap-1">
                    {/* Date */}
                    <div className="text-3xl font-bold">
                      {typeof dateObj === "object" ? dateObj.day : event.date}
                    </div>

                    {/* Month + Year stacked */}
                    <div className="flex flex-col items-start md:items-center">
                      <div className="uppercase text-sm tracking-widest">
                        {typeof dateObj === "object" ? dateObj.month : ""}
                      </div>
                      <div className="text-xs opacity-90">
                        {typeof dateObj === "object" ? dateObj.year : ""}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between md:w-3/5 p-4 md:p-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary dark:text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-500 dark:text-gray-400 text-sm">
                    {event.time && (
                      <div className="flex items-center gap-2">
                        <Clock size={18} weight="duotone" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <MapPin size={18} weight="duotone" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="md:w-1/5 flex items-center justify-center p-6 md:p-0">
                  {event.type === "upcoming" ? (
                    <a
                      href="#rsvp"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      RSVP
                    </a>
                  ) : (
                    <a
                      href="#recap"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 transition-all duration-300"
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
