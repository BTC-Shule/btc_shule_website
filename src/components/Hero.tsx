"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/heroImage.jpg"
          alt="Bitcoin community in Burundi"
          fill
          priority
          className="object-cover object-[center_top] md:object-center opacity-90"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-10 lg:px-16 py-20 md:py-40 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="backdrop-blur-xl bg-secondary-light/70 border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Empowering Burundi through{" "}
              <span className="text-primary drop-shadow-md">Bitcoin</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
              BTC Shule is pioneering{" "}
              <span className="text-primary/90 font-semibold">
                a Bitcoin-powered circular economy
              </span>{" "}
              — starting in Winteko and spreading across Burundi through
              education, meetups, and real-world adoption.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#programs"
                className="bg-primary hover:bg-primary-dark text-background font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1"
              >
                Explore Programs
              </a>
              <a
                href="#about-us"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-6 py-3 rounded-lg backdrop-blur-sm transition-transform transform hover:-translate-y-1"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="flex flex-col justify-center text-gray-200 space-y-6 lg:pl-10"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-snug">
              From Villages to Universities
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We equip communities, students, and merchants with Bitcoin
              knowledge and tools — fostering true financial independence.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Join a movement redefining how Africa interacts with money, from
              grassroots innovation to global impact.
            </p>
            <div className="pt-6">
              <motion.a
                href="register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 text-primary font-semibold underline hover:text-primary/80 transition"
              >
                Register for the Next Cohort →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient accents */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/20 blur-3xl rounded-full mix-blend-overlay animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-1/4 h-1/4 bg-secondary-light/30 blur-3xl rounded-full mix-blend-overlay animate-pulse"></div>
    </section>
  );
}
