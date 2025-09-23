"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px]">
        <section className="bg-background py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold text-primary mb-6"
            >
              Register for Trezor Academy Cohorts
            </motion.h1>
            <p className="text-gray-600 mb-8">
              Our Trezor Academy program trains university students and young
              professionals on Bitcoin security, self-custody, and open-source
              innovation. We’ve already certified 350 participants, and you
              could be next!
            </p>
            <a
              href="https://example.com/form"
              target="_blank"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              Fill Registration Form
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
