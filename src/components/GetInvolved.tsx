"use client";
import { motion } from "framer-motion";
import { Users, CalendarCheck, Handshake, CurrencyBtc, ArrowRight } from "phosphor-react";
import Link from "next/link";

const opportunities = [
  {
    title: "Register for Cohorts",
    description:
      "Join our Trezor Academy training program to gain hands-on Bitcoin skills and become a leader in your community.",
    icon: Users,
    link: "/register",
    cta: "Register Now",
  },
  {
    title: "Join Meetups",
    description:
      "Be part of our vibrant Bitcoin community by attending local meetups across Burundi. Share ideas, learn, and connect with peers.",
    icon: CalendarCheck,
    link: "/meetups",
    cta: "See Meetups",
  },
  {
    title: "Volunteer with Us",
    description:
      "Help us translate content, run events, or support communities. Your skills and time can accelerate Bitcoin adoption in Burundi.",
    icon: Handshake,
    link: "/volunteer",
    cta: "Get Involved",
  },
  {
    title: "Support Financially",
    description:
      "Contribute to our mission by supporting with Bitcoin. Every satoshi helps us onboard communities and scale impact sustainably.",
    icon: CurrencyBtc,
    link: "/donate",
    cta: "Support",
  },
];

export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="relative bg-background py-24 overflow-hidden"
    >
      {/* Background Accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25, y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
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
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight">
            Get Involved
          </h2>
          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Whether you’re a student, developer, or supporter, there’s a role for
            you in advancing Bitcoin adoption in Burundi. Join us and make a real
            impact — locally and globally.
          </p>
          <div className="mt-6 mx-auto w-24 h-1.5 bg-secondary-light rounded-full" />
        </motion.div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {opportunities.map((item, index) => {
            const isExternal = item.link.startsWith("http");

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white/80 backdrop-blur-lg border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center group"
              >
                {/* Icon */}
                <motion.div
                  className="flex items-center justify-center w-16 h-16 mx-auto rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <item.icon size={36} weight="duotone" />
                </motion.div>

                {/* Text */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Button */}
                {isExternal ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-orange-400 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md hover:opacity-90 transition-all"
                  >
                    {item.cta}
                    <ArrowRight size={18} weight="bold" />
                  </a>
                ) : (
                  <Link
                    href={item.link}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-orange-400 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md hover:opacity-90 transition-all"
                  >
                    {item.cta}
                    <ArrowRight size={18} weight="bold" />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
