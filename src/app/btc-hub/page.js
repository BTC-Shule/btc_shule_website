"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  UsersThree,
  CalendarBlank,
  WifiHigh,
  EnvelopeSimple,
} from "phosphor-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function BtcHubPage() {
  return (
    <>
     <Navbar />
        <main className="pt-[72px] md:pt-[136px] bg-gradient-to-b from-background to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-foreground py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-primary"
          >
            BTC Shule Hub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            A collaborative learning and innovation space for Bitcoiners in
            Burundi — empowering local communities through education, dialogue,
            and hands-on experiences.
          </motion.p>
        </div>
      </section>

      {/* Origin Section */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Our Origin
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The BTC Shule Hub was established with the generous support of the{" "}
              <strong>Human Rights Foundation (HRF)</strong>, as part of a
              shared mission to advance freedom and financial inclusion through
              open Bitcoin education. It serves as a physical anchor for the
              BTC Shule community — where ideas turn into action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practical Details */}
      <section className="py-20 bg-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-primary"
          >
            Practical Details
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Capacity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-2xl shadow-md text-center"
            >
              <UsersThree
                size={48}
                weight="duotone"
                className="mx-auto mb-4 text-orange-500"
              />
              <h3 className="font-semibold text-xl mb-2 text-primary">Capacity</h3>
              <p className="text-gray-600">
                The Hub comfortably accommodates up to{" "}
                <strong>80 participants</strong> for workshops, meetups, and
                collaborative sessions.
              </p>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-2xl shadow-md text-center"
            >
              <WifiHigh
                size={48}
                weight="duotone"
                className="mx-auto mb-4 text-indigo-500"
              />
              <h3 className="font-semibold text-xl mb-2 text-primary">Amenities</h3>
              <ul className="text-gray-600 space-y-2">
                <li>✔ High-speed Wi-Fi</li>
                <li>✔ Projector & Sound System</li>
                <li>✔ Whiteboards & Workstations</li>
                <li>✔ Coffee Corner & Lounge Area</li>
              </ul>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md text-center"
            >
              <MapPin
                size={48}
                weight="duotone"
                className="mx-auto mb-4 text-red-500"
              />
              <h3 className="font-semibold text-xl mb-2 text-primary">Location</h3>
              <p className="text-gray-600">
                Located in the heart of{" "}
                <strong>Bujumbura, Burundi</strong> — easily accessible by
                public transport and ideal for local and visiting learners.
              </p>
            </motion.div>
          </div>

          {/* Booking / Visit Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <CalendarBlank
              size={48}
              weight="duotone"
              className="mx-auto mb-4 text-green-600"
            />
            <h3 className="font-semibold text-2xl mb-3 text-primary">Booking & Visits</h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
              The Hub is open for scheduled community events, workshops, and
              private sessions. To book or plan a visit, reach out to our team
              below.
            </p>

            <Link
              href="mailto:info@btcshule.org"
              className="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
            >
              <EnvelopeSimple size={22} weight="bold" /> Contact BTC Shule Team
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />   
    </>
        
  );
}
