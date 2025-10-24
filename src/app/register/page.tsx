"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function RegisterPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("⏳ Submitting...");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("✅ Registration successful! We’ll email you details soon.");
        form.reset();
      } else if (result.status === "duplicate") {
        setStatus("⚠️ Email already registered.");
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
      <main className="pt-[72px] md:pt-[136px]">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/hero.jpg"
              alt="Bitcoin education classroom"
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
          <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-36  text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Register for{" "}
                <span className="text-primary">Trezor Academy</span> Cohorts
              </h1>
              <p className="text-lg text-gray-200 mb-6">
                Join our transformative program on{" "}
                <strong>
                  Bitcoin security, self-custody, and open-source innovation
                </strong>
                . Become part of a global movement for financial sovereignty.
              </p>
              <button
                onClick={() => setIsOpen(true)}
                className="mt-4 bg-secondary-light text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-secondary-light/90 transition"
              >
                Fill Registration Form
              </button>
            </motion.div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="bg-background py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-10"
            >
              Why Join BTC Shule Trezor Academy?
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🎓",
                  title: "Certification",
                  desc: "Earn a BTC Shule & Trezor-endorsed certificate upon successful completion.",
                },
                {
                  icon: "🔐",
                  title: "Hands-on Training",
                  desc: "Learn practical wallet management, self-custody, and real-world Bitcoin security.",
                },
                {
                  icon: "🤝",
                  title: "Expert Mentorship",
                  desc: "Collaborate with experienced educators and industry professionals.",
                },
                {
                  icon: "🌍",
                  title: "Global Network",
                  desc: "Join alumni from 15+ countries championing decentralized innovation.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-secondary-light/10 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary mb-10">
              Highlights from Previous Cohorts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "/1K4A7368.jpg",
                "/1K4A7369.jpg",
                "/1K4A7436.jpg",
                "/GuMR6HXXsAAipLH.jpg",
                "/GuMR6N2WkAAzRk4.jpg",
                "/1K4A7490.jpg",
              ].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform"
                >
                  <Image
                    src={src}
                    alt={`Academy class ${i + 1}`}
                    width={500}
                    height={350}
                    className="object-cover w-full h-64"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-10 text-gray-700">
              {[
                {
                  q: "Who can apply?",
                  a: "University students, professionals, or anyone passionate about Bitcoin and financial sovereignty.",
                },
                {
                  q: "Do I need prior experience?",
                  a: "No — we welcome beginners! You’ll start with Bitcoin basics and progress to advanced topics.",
                },
                {
                  q: "Is the program free?",
                  a: "Yes! Thanks to BTC Shule and Trezor’s support, participation is 100% free.",
                },
                {
                  q: "How are classes conducted?",
                  a: "Sessions are both in-person and virtual, with community projects and peer discussions.",
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    {faq.q}
                  </h3>
                  <p>{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-2xl max-w-md w-full p-4 md:p-8 relative"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-primary mb-4">
                Registration Form
              </h2>
              <p className="text-gray-600 mb-6">
                Fill in your details to join the upcoming cohort.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-left font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full border rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="First name"
                    />
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full border rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-left font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-left font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    className="w-full border rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your country"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-secondary-light text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-light/90 transition w-full"
                >
                  Submit Application
                </button>
              </form>

              {status && (
                <p
                  className={`mt-4 text-sm ${
                    status.startsWith("✅") ? "text-green-600" : "text-gray-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}
