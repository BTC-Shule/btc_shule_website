"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, CalendarBlank } from "phosphor-react";
import { Event } from "@/lib/events";
import { formatTime } from "@/utils/formatTime";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return {
    day: d.getDate(),
    month: d.toLocaleString("default", { month: "short" }),
    year: d.getFullYear(),
  };
}

export default function EventsClient({ events = [] }: { events?: Event[] }) {
  const [showPast, setShowPast] = useState(false);

  const now = new Date();

  // Split automatically based on date
  const pastEvents = events.filter((e) => new Date(e.date) < now);
  const upcomingEvents = events.filter((e) => new Date(e.date) >= now);

  const filteredEvents = (
    showPast ? [...upcomingEvents, ...pastEvents] : upcomingEvents
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

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
          <div className="mt-6 mx-auto w-24 h-1 bg-linear-to-r from-primary to-orange-400 rounded-full"></div>
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
          {filteredEvents.length === 0 ? (
            <p className="text-center text-gray-400">
              No {showPast ? "past" : "upcoming"} events.
            </p>
          ) : (
            filteredEvents.map((event, i) => {
              const dateObj = formatDate(event.date);
              const isUpcoming = new Date(event.date) >= now;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row bg-white/10 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl hover:bg-white/20 overflow-hidden transition-all duration-500"
                >
                  {/* Date Section */}
                  <div className="md:w-1/5 flex md:flex-col md:justify-center items-center text-white p-6 md:p-0">
                    <CalendarBlank
                      size={40}
                      weight="duotone"
                      className="md:mb-2"
                    />
                    <div className="flex flex-row md:flex-col justify-center gap-2 md:gap-1">
                      <div className="text-3xl font-bold text-center">
                        {typeof dateObj === "object" ? dateObj.day : event.date}
                      </div>
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
                      {(event.startTime || event.endTime) && (
                        <div className="flex items-center gap-2">
                          <Clock size={18} weight="duotone" />
                          <span>
                            {formatTime(event.startTime)}
                            {event.endTime && ` – ${formatTime(event.endTime)}`}
                          </span>
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
                    {isUpcoming ? (
                      <a
                        href="#rsvp"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        RSVP
                      </a>
                    ) : (
                      <a
                        href="#recap"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-secondary-light text-gray-200 rounded-full font-semibold hover:bg-secondary-light/90 hover:scale-105 transition-all duration-300"
                      >
                        Recap
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
