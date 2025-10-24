"use client";
import { motion } from "framer-motion";
import {
  Storefront,
  GraduationCap,
  Code,
  BookOpen,
  ArrowRight,
} from "phosphor-react";
import Link from "next/link";

const programs = [
  {
    title: "Circular Economy – Winteko Village",
    description:
      "Our flagship initiative in Winteko village builds a thriving Bitcoin circular economy — empowering merchants and residents to transact seamlessly using Bitcoin, fostering true local sovereignty.",
    icon: Storefront,
    link: "programs/circular-economy",
  },
  {
    title: "Trezor Academy",
    description:
      "In collaboration with Trezor, BTC Shule equips students and professionals with deep knowledge on Bitcoin security, self-custody, and open-source innovation — nurturing a new generation of digital freedom advocates.",
    icon: GraduationCap,
    link: "/register",
  },
  {
    title: "BitDevs Gitega",
    description:
      "Our BitDevs chapter fuels technical growth by hosting developer meetups, open-source workshops, and discussions on Bitcoin, Lightning, and privacy technologies — shaping Burundi’s open-source frontier.",
    icon: Code,
    link: "programs/bitdevs-gitega",
  },
  {
    title: "Translation Work – Kirundi Resources",
    description:
      "BTC Shule translates critical Bitcoin content into Kirundi, making decentralized knowledge accessible to millions — breaking linguistic barriers for financial literacy and open innovation.",
    icon: BookOpen,
    link: "/volunteer",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative bg-gradient-to-b from-white via-secondary-light/10 to-white py-24 overflow-hidden">
      {/* Subtle floating background effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,185,100,0.3),transparent_60%)]"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-secondary-light tracking-tight">
            Programs & Initiatives
          </h2>
          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            BTC Shule empowers communities through hands-on initiatives bringing
            Bitcoin education and adoption to life across Burundi — from villages
            to universities, building lasting global impact.
          </p>
          <div className="mt-6 mx-auto w-24 h-1.5 bg-gradient-to-r from-primary to-orange-400 rounded-full" />
        </motion.div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {programs.map((program, index) => {
            const isExternal = program.link.startsWith("http");

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: index * 0.01 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white/80 backdrop-blur-md border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 flex flex-col justify-between group"
              >
                <div className="flex flex-col flex-grow">
                  <motion.div
                    className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <program.icon size={36} weight="duotone" />
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-800 leading-snug">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-6">
                  {isExternal ? (
                    <a
                      href={program.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      Learn More
                      <ArrowRight size={18} weight="bold" />
                    </a>
                  ) : (
                    <Link
                      href={program.link}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      Learn More
                      <ArrowRight size={18} weight="bold" />
                    </Link>
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
