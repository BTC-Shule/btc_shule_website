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
  WhatsappLogo,
} from "phosphor-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        // show API error to user
        setStatus(`❌ ${data.error || "Something went wrong"}`);
      }
    } catch (err: unknown) {
      // turn the error into a readable string for the user
      if (err instanceof Error) {
        setStatus(`❌ ${err.message}`);
      } else {
        setStatus("❌ Failed to send message. Please try again later.");
      }
    }

    // ⏳ Clear the message after 5 seconds
    setTimeout(() => {
      setStatus("");
    }, 5000);
  };

  return (
    <section id="contact" className="relative bg-foreground py-24">
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
          <div className="mt-4 mx-auto w-24 h-1 bg-secondary-light rounded-full"></div>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
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
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Winteko,+Burundi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Winteko, Burundi – Available Globally Online
                </a>
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
                <a
                  href="https://wa.me/25762919316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  +257 62919316
                </a>
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
                <a
                  href="mailto:btcshule@gmail.com"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  btcshule@gmail.com
                </a>
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
                <p className="text-gray-600 mb-2">
                  Mon - Fri: 9:00am - 7:00pm EAT
                </p>
                <p className="text-gray-600">Sat: 10:00am - 5:00pm EAT</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-6 mt-8">
              <a
                href="https://wa.me/25762919316"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background text-primary hover:bg-primary hover:text-background transition-colors"
              >
                <WhatsappLogo size={28} weight="duotone" />
              </a>
              <a
                href="https://x.com/btcshule"
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
                href="https://t.me/+25762919316"
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
            <form
              onSubmit={handleSubmit}
              className="bg-secondary-light/10 border border-gray-300 rounded-lg shadow-lg p-8 space-y-6"
            >
              <div>
                <label className="block text-sm font-semibold text-primary">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
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
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
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
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Message Subject"
                  className="mt-2 w-full rounded-lg bg-background border border-gray-300 text-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-secondary-light"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="mt-2 w-full rounded-lg bg-background border border-gray-300 text-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-secondary-light"
                />
              </div>

              <button
                type="submit"
                className="inline-block bg-secondary-light text-white px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all font-semibold w-full"
              >
                Send Message
              </button>

              {status && (
                <p
                  className={`mt-4 text-sm ${
                    status.startsWith("✅") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
