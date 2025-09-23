"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function VolunteerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px]">
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold text-primary mb-6"
            >
              Volunteer with BTC Shule
            </motion.h1>
            <p className="text-gray-600 mb-6">
              Volunteers are the backbone of our mission. Whether it’s helping
              at meetups, translating Bitcoin content into Kirundi, or
              supporting communities, your time and skills make a difference.
            </p>
            <a
              href="mailto:volunteer@btcshule.org"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              Contact to Volunteer
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
