"use client";

import { motion } from "framer-motion";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  Clock,
  TwitterLogo,
  GlobeHemisphereWest,
  TelegramLogo,
  WhatsappLogo,
} from "phosphor-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

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
      } else setStatus(`❌ ${data.error || "Something went wrong"}`);
    } catch (err: unknown) {
      if (err instanceof Error) setStatus(`❌ ${err.message}`);
      else setStatus("❌ Failed to send message. Please try again later.");
    }

    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section id="contact" className="relative bg-gradient-to-b from-gray-50 via-background to-gray-100 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Get in Touch</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you have a question, partnership idea, or just want to say hi — we’d love to hear from you.
          </p>
          <div className="mt-6 mx-auto w-24 h-1 bg-primary/60 rounded-full"></div>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8 bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl shadow-lg px-4 md:px-10 p-10"
          >
            {[
              {
                icon: <MapPin size={32} weight="duotone" className="text-primary" />,
                title: "Address",
                content: (
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Winteko,+Burundi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    Winteko, Burundi — Available Globally Online
                  </a>
                ),
              },
              {
                icon: <Phone size={32} weight="duotone" className="text-primary" />,
                title: "Phone",
                content: (
                  <a
                    href="https://wa.me/25762919316"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    +257 62919316
                  </a>
                ),
              },
              {
                icon: <EnvelopeSimple size={32} weight="duotone" className="text-primary" />,
                title: "Email",
                content: (
                  <a
                    href="mailto:btcshule@gmail.com"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    btcshule@gmail.com
                  </a>
                ),
              },
              {
                icon: <Clock size={32} weight="duotone" className="text-primary" />,
                title: "Office Hours",
                content: (
                  <div className="text-gray-700">
                    <p>Mon - Fri: 9:00am - 7:00pm EAT</p>
                    <p>Sat: 10:00am - 5:00pm EAT</p>
                  </div>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{item.title}</h3>
                  {item.content}
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-primary mb-4">Connect with Us</h4>
              <div className="flex items-center gap-5">
                {[
                  { href: "https://wa.me/25762919316", icon: <WhatsappLogo size={26} weight="duotone" /> },
                  { href: "https://x.com/btcshule", icon: <TwitterLogo size={26} weight="duotone" /> },
                  { href: "https://primal.net/p/nprofile1qqsyefs0ks7hr496ntxqyugkhwkrfnjukzzx7efp3sef54fdasmt5ugp3w6y6", icon: <GlobeHemisphereWest size={26} weight="duotone" /> },
                  { href: "https://t.me/+25762919316", icon: <TelegramLogo size={26} weight="duotone" /> },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 px-4 md:px-10 p-10 space-y-6"
            >
              {[
                { label: "Name", name: "name", type: "text", placeholder: "Your Full Name" },
                { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
                { label: "Subject", name: "subject", type: "text", placeholder: "Message Subject" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm font-semibold text-primary">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    value={(form as any)[field.name]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="mt-2 w-full rounded-xl bg-background border border-gray-300 text-gray-700 p-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-semibold text-primary">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="mt-2 w-full rounded-xl bg-background border border-gray-300 text-gray-700 p-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-white px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all font-semibold text-lg"
              >
                Send Message
              </motion.button>

              {status && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`mt-4 text-sm ${
                    status.startsWith("✅") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
