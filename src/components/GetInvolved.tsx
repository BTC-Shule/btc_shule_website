"use client";
import { motion } from "framer-motion";
import { Users, CalendarCheck, Handshake, CurrencyBtc } from "phosphor-react";

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
    link: "/#events",
    cta: "See Events",
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
    <section id="get-involved" className="relative bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-primary">Get Involved</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Whether you’re a student, a developer, or a supporter, there’s a
            place for you in building Bitcoin adoption in Burundi. Here’s how
            you can contribute.
          </p>
          <div className="mt-4 mx-auto w-24 h-1 bg-secondary-light rounded-full"></div>
        </motion.div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {opportunities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col text-center hover:shadow-xl transition-all"
            >
              {/* Top section */}
              <div className="flex flex-col items-center flex-grow">
                <item.icon size={48} className="text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>

              {/* Bottom section */}
              <div className="mt-6">
                <a
                  href={item.link}
                  className="inline-block bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  {item.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
