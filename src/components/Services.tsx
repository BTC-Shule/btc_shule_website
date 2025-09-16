"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Chats, Storefront, Users } from "phosphor-react";

export default function Services() {
  return (
    <section id="services" className="relative bg-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-primary">Our Services</h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-secondary-light rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-secondary-light/10 border border-gray-300 rounded-xl shadow-lg p-8"
            >
              <Globe size={40} weight="duotone" className="text-primary mb-4" />
              <h3 className="text-secondary-light text-xl font-bold mb-2">
                Bilingual Digital Platform
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our educational platform offers comprehensive Bitcoin knowledge
                in Kirundi and French, featuring interactive videos and
                certification courses to equip participants with essential
                skills.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="bg-secondary-light/10 border border-gray-300 rounded-xl shadow-lg p-8"
            >
              <Users size={40} weight="duotone" className="text-primary mb-4" />
              <h3 className="text-secondary-light text-xl font-bold mb-2">
                Physical Hub
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The BTC Shule Hub is a community space for learning and
                discussion. With a mini-library and regular meetups, we foster
                engagement and collaboration on Bitcoin topics.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl w-full h-auto">
              <Image
                src="/hero.jpg"
                alt="BTC Shule Services"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-secondary-light/10 border border-gray-300 rounded-xl shadow-lg p-8"
            >
              <Chats size={40} weight="duotone" className="text-primary mb-4" />
              <h3 className="text-secondary-light text-xl font-bold mb-2">
                Assistance Channels
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Through WhatsApp and Telegram, we provide real-time support on
                Bitcoin inquiries. Our trained personnel are available to deepen
                users&apos; understanding and facilitate their journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.3 }}
              className="bg-secondary-light/10 border border-gray-300 rounded-xl shadow-lg p-8"
            >
              <Storefront
                size={40}
                weight="duotone"
                className="text-primary mb-4"
              />
              <h3 className="text-secondary-light text-xl font-bold mb-2">
                Merchant Onboarding
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are onboarding local businesses in Gitega to accept Bitcoin
                payments, creating an ecosystem where Bitcoin earners can
                seamlessly spend in their daily lives.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
