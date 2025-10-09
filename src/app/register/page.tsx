"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";

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
        <section className="bg-background pt-20 pb-10 md:pt-28 md:pb-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/hero.jpg"
                  fill
                  alt="Trezor Students in class"
                  className="object-cover"
                  priority
                />
                {/* Optional overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
                Register for Trezor Academy Cohorts
              </h1>

              <p className="text-gray-700 mb-6 text-lg">
                The{" "}
                <span className="font-semibold">BTC Shule Trezor Academy</span>{" "}
                is a hands-on training program on{" "}
                <span className="font-medium">
                  Bitcoin security, self-custody, open-source innovation, and
                  financial sovereignty
                </span>
                .
              </p>

              <p className="text-gray-700 text-lg">
                Since its launch, we’ve{" "}
                <strong>trained and certified over 350 participants</strong>.
                Each cohort averages 25 students — with{" "}
                <strong>4 cohorts in 2024</strong> and{" "}
                <strong>10 cohorts in 2025</strong>. You could be next!
              </p>
            </motion.div>
          </div>

          {/* Button below both columns */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-secondary-light text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-secondary-light/90 transition"
            >
              Fill Registration Form
            </button>
          </div>
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

        {/* Gallery Section */}
        <section className="bg-secondary-light/5 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary mb-10">
              Moments from Past Classes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "/1K4A7368.jpg",
                "/1K4A7369.jpg",
                "/1K4A7436.jpg",
                "/GuMR6HXXsAAipLH.jpg",
                "/GuMR6N2WkAAzRk4.jpg",
                "/GysbpR0XgAcSD2k.jpg",
                "/GuMR7ZgWsAAYLDR.jpg",
                "/1K4A7490.jpg",
                "/DSC_0092.JPG.jpg",
                "/DSC_0096.JPG.jpg",
                "/IMG_20250413_162621_274.jpg",
                "/IMG_20250413_163110_917.jpg",
              ].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="overflow-hidden rounded-2xl shadow-lg"
                >
                  <Image
                    src={src}
                    alt={`Class session ${i + 1}`}
                    width={500}
                    height={300}
                    className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-secondary-light/10 py-16 md:py-24">
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
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      className="w-full border rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="First name"
                    />
                    <input
                      type="text"
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
