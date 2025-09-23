"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center bg-[url('/btchero.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-36 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-secondary-light/80 rounded-xl shadow-2xl p-8 md:p-12 text-white"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Bringing Bitcoin to Burundi
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              BTC Shule is building{" "}
              <span className="text-primary font-semibold">
                a thriving Bitcoin Circular Economy
              </span>{" "}
              starting in Winteko village and expanding across Burundi through
              education, meetups, and real-world adoption.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white lg:pl-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              From Villages to Universities
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
              We empower communities, merchants, and students with the tools and
              knowledge to embrace Bitcoin as money.
            </p>
            <p className="text-lg text-gray-300">
              Join us in building a future where financial autonomy is a reality
              for every Burundian.
            </p>
            <div className="mt-8">
              <a
                href="#programs"
                className="inline-block bg-primary hover:bg-primary-dark text-background font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors"
              >
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
