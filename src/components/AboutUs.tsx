"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Lightbulb,
  Target,
  Globe,
  Leaf,
  Rocket,
  ShieldCheck,
  Users,
} from "phosphor-react";

export default function About() {
  return (
    <section id="about" className="relative bg-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-primary">About Us</h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-secondary-light rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-secondary-light/10 rounded-xl shadow-lg px-6 py-12 text-gray-600 border border-gray-300"
          >
            <Lightbulb
              size={40}
              weight="duotone"
              className="text-primary mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-500 leading-relaxed">
              We envision a robust Bitcoin economy in Burundi, where individuals
              and businesses thrive through adoption and use of Bitcoin as a
              practical alternative to traditional currency.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="bg-secondary-light/10 rounded-xl shadow-lg px-6 py-12 text-gray-600 border border-gray-300"
          >
            <Target size={40} weight="duotone" className="text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-500 leading-relaxed">
              To empower Burundians with the knowledge and tools to embrace
              Bitcoin, fostering a self-sustaining circular economy that
              promotes financial autonomy and resilience.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative pl-8"
            >
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary-light/90 rounded-full"></div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Goal</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our goal is to equip individuals with the necessary tools and
                resources to confidently navigate the Bitcoin ecosystem,
                ultimately establishing a circular Bitcoin economy that promotes
                financial autonomy and resilience for all.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-secondary-light/90 rounded-xl shadow-lg p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Core Values</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-2">
                  <Users size={24} weight="duotone" className="text-primary" />
                  <span>Community</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Rocket size={24} weight="duotone" className="text-primary" />
                  <span>Empowerment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe size={24} weight="duotone" className="text-primary" />
                  <span>Accessibility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck
                    size={24}
                    weight="duotone"
                    className="text-primary"
                  />
                  <span>Integrity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf size={24} weight="duotone" className="text-primary" />
                  <span>Sustainability</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-auto">
              <Image
                src="/emoney.jpg"
                alt="BTC Shule - Elevate with Bitcoin"
                className="w-full h-full object-cover"
                width={600}
                height={500}
              />
              <div className="absolute bottom-4 left-4 bg-primary/90 text-background font-bold px-6 py-3 rounded-lg shadow-lg">
                BTC Shule – Elevate with Bitcoin!
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <a
              href="#services"
              className="inline-block bg-primary hover:bg-primary-dark text-background font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
