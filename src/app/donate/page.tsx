"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Copy,
  CheckCircle,
  Heart,
  ShieldCheck,
  GlobeHemisphereEast,
  Lightning,
  BookOpen,
  UsersThree,
} from "phosphor-react";
import { useState } from "react";

export default function DonatePage() {
  const [copied, setCopied] = useState(false);
  const btcAddress = "bc1qexampleaddress1234567890xyz";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(btcAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px]">
        {/* Hero */}
        <section className="bg-background py-16 md:py-24 text-center text-gray-700">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Fuel Bitcoin Education with Your Support
          </motion.h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            BTC Shule is a{" "}
            <strong>
              grassroots Bitcoin education initiative in East Africa
            </strong>
            . Every satoshi helps us build{" "}
            <span className="font-semibold">Circular Economies</span>, scale{" "}
            <span className="font-semibold">Trezor Academy</span>, and expand{" "}
            <span className="font-semibold">translation efforts</span> to reach
            more communities worldwide.
          </p>
        </section>

        {/* Donation Card */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-2xl rounded-2xl p-8 inline-block"
            >
              <Image
                src="/btc-qr.png"
                alt="Bitcoin Donation QR Code"
                className="mx-auto rounded-lg shadow-md"
                width={200}
                height={200}
              />
              <p className="mt-6 text-gray-800 font-mono break-all">
                {btcAddress}
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-2 rounded-lg shadow hover:bg-primary/90 transition"
                >
                  {copied ? (
                    <>
                      <CheckCircle size={20} /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={20} /> Copy Address
                    </>
                  )}
                </button>
                <button className="flex items-center justify-center gap-2 border border-primary text-primary px-5 py-2 rounded-lg shadow-sm hover:bg-primary/5 transition">
                  <Lightning size={20} /> Donate via Lightning
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Your Support Matters */}
        <section className="py-16 md:py-24 bg-foreground">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary mb-12">
              Why Your Support Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <UsersThree
                      size={36}
                      className="text-secondary-light mb-4"
                    />
                  ),
                  title: "Circular Economies",
                  desc: "Your support funds Bitcoin adoption in local markets, schools, and communities.",
                },
                {
                  icon: (
                    <BookOpen size={36} className="text-secondary-light mb-4" />
                  ),
                  title: "Trezor Academy",
                  desc: "We train the next generation of Bitcoiners through certified hands-on programs.",
                },
                {
                  icon: (
                    <GlobeHemisphereEast
                      size={36}
                      className="text-secondary-light mb-4"
                    />
                  ),
                  title: "Translations",
                  desc: "We translate Bitcoin resources into Kirundi and other local languages with Exonumia & Plan B Network.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                >
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency & Values */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Our Commitment
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <Heart size={32} className="text-primary mb-4" />
                <h3 className="font-bold text-gray-800 text-lg">
                  Community First
                </h3>
                <p className="text-gray-600 mt-2">
                  Donations empower grassroots education in schools, churches,
                  and Bitcoin hubs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <ShieldCheck size={32} className="text-primary mb-4" />
                <h3 className="font-bold text-gray-800 text-lg">
                  Radical Transparency
                </h3>
                <p className="text-gray-600 mt-2">
                  100% of funds go directly into Bitcoin education.{" "}
                  <a href="/funding-report" className="text-primary underline">
                    View Reports
                  </a>
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <GlobeHemisphereEast size={32} className="text-primary mb-4" />
                <h3 className="font-bold text-gray-800 text-lg">
                  Global Impact
                </h3>
                <p className="text-gray-600 mt-2">
                  Supporting BTC Shule means accelerating adoption across Africa
                  — and inspiring communities worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-16 md:py-24 bg-foreground text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
            Be Part of the Movement
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600">
            Your sats are not just donations — they’re an investment in the
            future of freedom, education, and financial sovereignty.
          </p>
          <button
            onClick={handleCopy}
            className="bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            {copied ? "Copied!" : "Copy Donation Address"}
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
