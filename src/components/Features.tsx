"use client";

import { motion } from "framer-motion";
import {
  WhatsappLogo,
  TelegramLogo,
  UsersThree,
  GraduationCap,
} from "phosphor-react";

const features = [
  {
    title: "Online Assistance",
    description:
      "Get instant support and answers to your questions via WhatsApp and Telegram. Our team is here to help you 24/7.",
    icons: [
      <WhatsappLogo
        key="whatsapp"
        size={40}
        weight="duotone"
        className="text-green-500 drop-shadow-md"
      />,
      <TelegramLogo
        key="telegram"
        size={40}
        weight="duotone"
        className="text-sky-500 drop-shadow-md"
      />,
    ],
  },
  {
    title: "BTC Shule Hub",
    description:
      "A dedicated physical and virtual space for Bitcoin meetups, workshops, and community-driven innovation.",
    icons: [
      <UsersThree
        key="users"
        size={44}
        weight="duotone"
        className="text-orange-500 drop-shadow-md"
      />,
    ],
  },
  {
    title: "Online Course (Coming Soon)",
    description:
      "Structured Bitcoin education delivered through interactive lessons and real-world case studies — learn at your own pace, from anywhere.",
    icons: [
      <GraduationCap
        key="graduation"
        size={44}
        weight="duotone"
        className="text-indigo-500 drop-shadow-md"
      />,
    ],
  },
];

export default function Features() {
  return (
    <section className="relative bg-background py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-secondary-light bg-clip-text text-transparent">
            Features & Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Empowering learners, innovators, and communities through accessible
            Bitcoin education, support, and collaboration.
          </p>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-primary to-orange-400 rounded-full"></div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className=" bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center gap-3 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icons.map((icon) => icon)}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
