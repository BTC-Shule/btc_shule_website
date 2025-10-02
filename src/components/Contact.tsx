"use client";

import { motion } from "framer-motion";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  Clock,
  TwitterLogo,
  LinkedinLogo,
  TelegramLogo,
} from "phosphor-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-primary">Contact Us</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions, ideas, or want to collaborate with BTC Shule? Reach
            out — we’d love to hear from you.
          </p>
          <div className="mt-4 mx-auto w-24 h-1 bg-secondary-light rounded-full"></div>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin
                size={28}
                weight="duotone"
                className="text-secondary-light"
              />
              <div>
                <h3 className="text-lg font-semibold text-primary">Address</h3>
                <p className="text-gray-600">
                  Winteko, Burundi — Available Globally Online
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone
                size={28}
                weight="duotone"
                className="text-secondary-light"
              />
              <div>
                <h3 className="text-lg font-semibold text-primary">Phone</h3>
                <p className="text-gray-600">+254 700 123 456</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <EnvelopeSimple
                size={28}
                weight="duotone"
                className="text-secondary-light"
              />
              <div>
                <h3 className="text-lg font-semibold text-primary">Email</h3>
                <p className="text-gray-600">info@btcshule.org</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock
                size={28}
                weight="duotone"
                className="text-secondary-light"
              />
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  Office Hours
                </h3>
                <p className="text-gray-600">Mon - Fri: 9:00am - 6:00pm EAT</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-6 mt-8">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background text-primary hover:bg-primary hover:text-background transition-colors"
              >
                <TwitterLogo size={28} weight="duotone" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background text-primary hover:bg-primary hover:text-background transition-colors"
              >
                <LinkedinLogo size={28} weight="duotone" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background text-primary hover:bg-primary hover:text-background transition-colors"
              >
                <TelegramLogo size={28} weight="duotone" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <form className="bg-secondary-light/10 border border-gray-300 rounded-lg shadow-lg p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="mt-2 w-full rounded-lg bg-background border border-gray-300 text-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-secondary-light"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg bg-background border border-gray-300 text-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-secondary-light"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Message Subject"
                  className="mt-2 w-full rounded-lg bg-background border border-gray-300 text-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-secondary-light"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="mt-2 w-full rounded-lg bg-background border border-gray-300 text-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-secondary-light"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-secondary-light text-background font-semibold rounded-lg shadow-lg hover:scale-105 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
