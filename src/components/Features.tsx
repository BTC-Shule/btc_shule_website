"use client";

import { motion } from "framer-motion";
import {
  WhatsappLogo,
  TelegramLogo,
  EnvelopeSimple,
  PhoneCall,
  UsersThree,
  GraduationCap,
  ArrowRight,
} from "phosphor-react";
import Link from "next/link";

const features = [
  {
    title: "Online Assistance",
    description: (
      <>
        <p className="mb-3">
          Live, human support for all your Bitcoin-related questions — available
          in <strong>Kirundi</strong>, <strong>French</strong>, and{" "}
          <strong>English</strong>.
        </p>
        <p>
          Get instant help via your preferred platform below:
        </p>
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          <a
            href="https://wa.me/25771475533"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-600 hover:underline"
          >
            <WhatsappLogo size={24} weight="fill" /> WhatsApp
          </a>
          <a
            href="https://t.me/btcshule"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sky-500 hover:underline"
          >
            <TelegramLogo size={24} weight="fill" /> Telegram
          </a>
          <a
            href="mailto:info@btcshule.org"
            className="flex items-center gap-2 text-gray-700 hover:underline"
          >
            <EnvelopeSimple size={24} weight="fill" /> Email
          </a>
          <a
            href="tel:+25771475533"
            className="flex items-center gap-2 text-orange-500 hover:underline"
          >
            <PhoneCall size={24} weight="fill" /> Call
          </a>
        </div>
      </>
    ),
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
    description: (
      <>
        <p className="mb-4">
          A 100% physical community hub — a vibrant space for Bitcoin meetups,
          workshops, and innovation. The Hub comfortably seats up to{" "}
          <strong>80 people</strong>, fostering collaboration and real-world
          learning experiences.
        </p>
        <Link
          href="/btc-hub"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline hover:text-orange-500 transition-colors"
        >
          Learn More <ArrowRight size={18} weight="bold" />
        </Link>
      </>
    ),
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
      "Structured Bitcoin education through interactive lessons and real-world case studies — learn at your own pace, from anywhere.",
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
            Bitcoin education, human support, and collaborative spaces.
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
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center text-center group"
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
              <div className="text-gray-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
