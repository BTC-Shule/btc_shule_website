"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("⏳ Submitting...");

    // Fake API simulation
    setTimeout(() => {
      setStatus("✅ Registration successful! We’ll email you details soon.");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px]">
        {/* Hero Section */}
        <section className="bg-background pt-20 pb-10 md:pt-28 md:pb-16 px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-6"
          >
            Register for Trezor Academy Cohorts
          </motion.h1>
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto text-lg">
            The{" "}
            <span className="font-semibold">BTC Shule Trezor Academy</span> is
            a program on{" "}
            <span className="font-medium">
              Bitcoin security, self-custody, open-source innovation, and
              financial sovereignty
            </span>
            . Over <strong>350+ students</strong> have joined — you could be
            next!
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="bg-secondary-light text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-secondary-light/90 transition"
          >
            Fill Registration Form
          </button>
        </section>

        {/* Program Highlights */}
        <section className="bg-white pt-16 pb-24">
          <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              {
                title: "🎓 Certification",
                desc: "Earn a BTC Shule & Trezor endorsed certificate upon completion.",
              },
              {
                title: "🔐 Hands-on Training",
                desc: "Practice Bitcoin self-custody, wallet security & real-world skills.",
              },
              {
                title: "🤝 Mentorship",
                desc: "Learn from educators, security experts & open-source contributors.",
              },
              {
                title: "🌍 Networking",
                desc: "Join a global alumni network shaping decentralized innovation.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="p-6 bg-background rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-secondary-light/5 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-600">
                  Who can apply?
                </h3>
                <p className="text-gray-600">
                  University students and young professionals interested in
                  Bitcoin, security, and open-source.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-600">
                  Do I need prior experience?
                </h3>
                <p className="text-gray-600">
                  No — we welcome beginners! The program starts with basics and
                  builds progressively.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-600">
                  How much does it cost?
                </h3>
                <p className="text-gray-600">
                  The program is <strong>free</strong>, thanks to BTC Shule &
                  Trezor’s support.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Popup Modal */}
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
                  <input
                    type="text"
                    required
                    className="w-full border rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-left font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
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
                  type="country"
                    required
                    className="w-full border rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your country"
                  ></input>
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
                    status.startsWith("✅")
                      ? "text-green-600"
                      : "text-gray-600"
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
