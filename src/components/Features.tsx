"use client";

import { motion } from "framer-motion";
import { WhatsappLogo, TelegramLogo, UsersThree, GraduationCap } from "phosphor-react";

const features = [
  {
    title: "Online Assistance",
    description: "Get instant support and answers to your questions via WhatsApp and Telegram.",
    icon: <WhatsappLogo size={40} weight="duotone" className="text-primary" />,
    extraIcon: <TelegramLogo size={40} weight="duotone" className="text-primary" />,
  },
  {
    title: "BTC Shule Hub",
    description: "A dedicated space for local Bitcoin meetups, workshops, and community gatherings.",
    icon: <UsersThree size={40} weight="duotone" className="text-primary" />,
  },
  {
    title: "Online Course (Coming Soon)",
    description: "Structured Bitcoin education delivered online — learn at your own pace, from anywhere.",
    icon: <GraduationCap size={40} weight="duotone" className="text-primary" />,
  },
];

export default function Features() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-extrabold text-primary mb-12"
        >
          Features & Services
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition flex flex-col items-center"
            >
              <div className="flex items-center gap-3 mb-4">
                {feature.icon}
                {feature.extraIcon && feature.extraIcon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
