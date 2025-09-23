"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function CalendarPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px]">
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold text-primary mb-6"
            >
              Meetups & Events
            </motion.h1>
            <p className="text-gray-600 mb-8">
              We organize monthly Bitcoin meetups across Burundi. Explore
              upcoming and past events below.
            </p>

            {/* ✅ Embed Google Calendar or similar */}
            <iframe
              src="https://calendar.google.com/calendar/embed?src=your-calendar-link"
              style={{ border: 0 }}
              className="w-full h-[600px] rounded-lg shadow-lg"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}
