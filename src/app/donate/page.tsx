"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px]">
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold text-primary mb-6"
            >
              Support BTC Shule in Bitcoin
            </motion.h1>
            <p className="text-gray-600 mb-8">
              Your contribution helps us expand Bitcoin adoption in Burundi.
              Every satoshi directly supports programs like the Circular
              Economy, Trezor Academy, and our translation efforts.
            </p>

            {/* ✅ Replace with BTC donation QR */}
            <div className="bg-white shadow-lg rounded-xl p-6 inline-block">
              <Image
                src="/btc-qr.png"
                alt="Donate Bitcoin QR"
                className="mx-auto"
                width={64}
                height={64}
              />
              <p className="mt-4 text-gray-700">
                BTC Address: <span className="font-mono">bc1qexample...</span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
