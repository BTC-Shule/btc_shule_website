"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

export default function VolunteerPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("⏳ Submitting...");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("✅ Application submitted successfully! We'll be in touch soon.");
        form.reset();
      } else if (result.status === "duplicate") {
        setStatus("⚠️ You've already applied.");
      } else {
        setStatus("❌ Something went wrong. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Network error.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px] bg-gradient-to-b from-white via-background to-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden text-center py-28 md:py-40">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl font-extrabold text-primary drop-shadow-md"
            >
              Volunteer with{" "}
              <span className="text-secondary-light">BTC Shule</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 mt-6 max-w-2xl mx-auto"
            >
              Join our international movement bringing Bitcoin education to
              communities worldwide. Share your time, skills, and ideas to
              empower a brighter financial future.
            </motion.p>
          </div>
        </section>

        {/* Why Volunteer */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-primary mb-12">
              Why Volunteer with Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Global Impact",
                  desc: "Help expand financial education access to underserved communities across continents.",
                  icon: "🌍",
                },
                {
                  title: "Skill Growth",
                  desc: "Develop expertise in leadership, content creation, education, and community building.",
                  icon: "🚀",
                },
                {
                  title: "Meaningful Connections",
                  desc: "Collaborate with global Bitcoiners, educators, and innovators shaping the future.",
                  icon: "🤝",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-semibold text-secondary-light mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Initiatives */}
        <section className="py-20 md:py-28 bg-secondary-light text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Featured Volunteer Initiatives
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-12">
              Our volunteers are pioneering projects that make Bitcoin education
              accessible across Africa and the globe.
            </p>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: "Kirundi Translations",
                  desc: "Translating key Bitcoin educational resources into Kirundi for local communities, partnering with Exonumia and Plan B Network.",
                },
                {
                  title: "Local Bitcoin Meetups",
                  desc: "Organizing grassroots meetups that inspire conversations, learning, and empowerment in local languages.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.3 }}
                  className="p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl hover:bg-white/20 transition text-left"
                >
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Form */}
        <section className="py-24 bg-background">
          <div className="max-w-lg mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Ready to Join Us?
            </h2>
            <p className="text-gray-600 mb-10">
              Fill out the form and tell us how you’d like to contribute. Every
              skill matters.
            </p>

            {/* Form with data submission */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white/10 backdrop-blur-lg px-4 md:px-8 p-8 rounded-2xl shadow-xl border border-white/20"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-secondary-light outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-secondary-light outline-none"
                required
              />
              <select
                name="interest"
                className="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-gray-600 focus:ring-2 focus:ring-secondary-light outline-none"
                required
              >
                <option value="">Select Area of Interest</option>
                <option value="events">Community Events</option>
                <option value="translation">Content & Translation</option>
                <option value="advocacy">Digital Advocacy</option>
              </select>
              <textarea
                name="message"
                placeholder="Tell us about your skills or motivation..."
                rows={4}
                className="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-secondary-light outline-none"
                required
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-secondary-light text-white font-semibold py-3 rounded-lg hover:bg-secondary-light/90 transition"
              >
                Submit Application
              </motion.button>
            </form>

            {status && (
              <p
                className={`mt-4 text-sm ${
                  status.startsWith("✅")
                    ? "text-green-600"
                    : status.startsWith("⚠️")
                    ? "text-yellow-600"
                    : status.startsWith("❌")
                    ? "text-red-600"
                    : "text-gray-600"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
