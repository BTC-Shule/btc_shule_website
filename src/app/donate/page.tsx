/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Heart,
  ShieldCheck,
  GlobeHemisphereEast,
  Lightning,
  BookOpen,
  UsersThree,
} from "phosphor-react";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

type AddressMap = Record<string, string> | null;

export default function DonatePage() {
  const [amount, setAmount] = useState<string>("");
  const [currency, setCurrency] = useState<string>("USD");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<string>("btcpay");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [addresses, setAddresses] = useState<AddressMap>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/donationAddresses");
        if (!res.ok) throw new Error("Failed to fetch addresses");
        const json = (await res.json()) as Record<string, string>;
        setAddresses(json);
      } catch (err) {
        console.error(err);
        setAddresses(null);
      }
    })();
  }, []);

    useEffect(() => {
    const initBlinkWidget = () => {
      // Ensure BlinkPay script is ready
      if (typeof (window as any).BlinkPayButton !== "undefined") {
        (window as any).BlinkPayButton.init({
          username: "btcshule",
          containerId: "blink-pay-button-container",
          themeMode: "dark",
          onSuccess: (res: any) => console.log("Payment success:", res),
          onError: (err: any) => console.error("Payment error:", err),
        });
      } else {
        console.warn("BlinkPayButton not yet available, retrying...");
        setTimeout(initBlinkWidget, 500); // Retry after 500ms
      }
    };

    // Load BlinkPay script dynamically
    const script = document.createElement("script");
    script.src = "https://blinkpay.africa/widget.js";
    script.async = true;
    script.onload = initBlinkWidget;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const handleBTCPayDonate = async () => {
    if (!amount) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/create-invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency }),
      });
      const data = await res.json();
      if (res.ok && data.checkoutLink) {
        window.location.href = data.checkoutLink;
      } else throw new Error(data.error || "Invoice creation failed");
    } catch (err) {
      console.error(err);
      setError("Unable to connect to BTCPay. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px] bg-gradient-to-b from-background to-gray-50">
        {/* Hero Section */}
        <section className="relative text-center py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/btc-pattern.svg')] opacity-5 bg-repeat" />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 max-w-5xl mx-auto px-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800">
              Fuel <span className="text-primary">Bitcoin Education</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              BTC Shule is a{" "}
              <strong>grassroots Bitcoin education movement</strong> in East
              Africa. Every satoshi you send helps us expand{" "}
              <span className="font-semibold">Circular Economies</span>, scale{" "}
              <span className="font-semibold">Trezor Academy</span>, and bring
              Bitcoin knowledge to every community.
            </p>
          </motion.div>
        </section>

        {/* Donation Interface */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            {/* Tabs */}
            <div className="flex justify-center flex-wrap gap-4 mb-10">
              {["btcpay", "blink", "static"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                    selectedTab === tab
                      ? "bg-primary text-white shadow-md"
                      : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab === "btcpay"
                    ? "BTCPay Server"
                    : tab === "blink"
                    ? "Blink Pay"
                    : "Static QR Codes"}
                </button>
              ))}
            </div>

            {/* Tabs Content */}
            <AnimatePresence mode="wait">
              {/* BTCPay Tab */}
              {selectedTab === "btcpay" && (
                <motion.div
                  key="btcpay"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto text-center"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                    Donate via BTCPay (Bitcoin / Lightning ⚡)
                  </h3>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 text-gray-600">
                    <input
                      type="number"
                      placeholder="Enter amount"
                      min="1"
                      step="any"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="border border-gray-300 rounded-lg px-4 py-2 text-lg w-48 text-center focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    >
                      <option value="USD">USD</option>
                      <option value="BTC">BTC</option>
                      <option value="SATS">SATS</option>
                    </select>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={loading || !amount}
                    onClick={handleBTCPayDonate}
                    className={`${
                      loading
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-primary hover:bg-primary/90"
                    } text-white px-8 py-3 rounded-full font-semibold shadow-lg flex items-center justify-center gap-2 mx-auto`}
                  >
                    {loading ? (
                      <>
                        <Lightning size={20} className="animate-pulse" />
                        Generating Invoice...
                      </>
                    ) : (
                      <>
                        <Lightning size={20} />
                        Donate with BTCPay
                      </>
                    )}
                  </motion.button>
                  {error && <p className="text-red-500 mt-4">{error}</p>}
                </motion.div>
              )}

              {/* Blink Pay Tab */}
              {selectedTab === "blink" && (
                <motion.div
                  key="blink"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto text-center"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                    Donate via Blink Pay ⚡
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Use Blink Bitcoin wallet to donate instantly.
                  </p>
                  <div id="blink-pay-button-container" className="flex justify-center"></div>
                </motion.div>
              )}

              {/* Static QR Codes Tab */}
              {selectedTab === "static" && (
                <motion.div
                  key="static"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="max-w-4xl mx-auto"
                >
                  {addresses === null ? (
                    <p className="text-center text-gray-500">
                      Loading donation addresses...
                    </p>
                  ) : (
                    <div className="grid sm:grid-cols-3 gap-10 text-center mt-10">
                      {Object.entries(addresses).map(([key, address]) => {
                        const clean = address.replace(
                          /^(bitcoin:|lightning:|liquid:)/,
                          ""
                        );
                        const label =
                          key === "onchain"
                            ? "Bitcoin On-chain"
                            : key === "lightning"
                            ? "Lightning"
                            : "Liquid Network";
                        return (
                          <motion.div
                            key={key}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center"
                          >
                            <div className="relative w-44 h-44 mb-3">
                              <QRCode
                                value={clean}
                                size={176}
                                bgColor="#ffffff"
                                fgColor="#1a1a1a"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "12px",
                                }}
                              />
                              <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white flex items-center justify-center shadow-sm">
                                <Image
                                  src={`/${key}.png`}
                                  alt={`${key} logo`}
                                  width={24}
                                  height={24}
                                  className="object-contain"
                                />
                              </div>
                            </div>
                            <h4 className="font-semibold text-gray-700">
                              {label}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 break-all max-w-[200px]">
                              {clean}
                            </p>
                            <button
                              onClick={async () => {
                                try {
                                  await navigator.clipboard.writeText(clean);
                                  setCopiedKey(key);
                                  setTimeout(() => setCopiedKey(null), 2000);
                                } catch (err) {
                                  console.error("Copy failed", err);
                                }
                              }}
                              className="mt-2 text-xs bg-primary text-white px-3 py-1 rounded-md hover:bg-primary/90"
                            >
                              {copiedKey === key ? "Copied!" : "Copy Address"}
                            </button>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Why Support Matters */}
        <section className="py-20 bg-foreground text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 px-4 text-gray-800">
            Why Your Support Matters
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
            {[
              {
                icon: <UsersThree size={40} className="mx-auto mb-3" />,
                title: "Circular Economies",
                desc: "Your donation funds real Bitcoin use in schools, markets, and local communities.",
              },
              {
                icon: <BookOpen size={40} className="mx-auto mb-3" />,
                title: "Trezor Academy",
                desc: "We train a new generation of Bitcoin educators through hands-on programs.",
              },
              {
                icon: (
                  <GlobeHemisphereEast size={40} className="mx-auto mb-3" />
                ),
                title: "Translations",
                desc: "Expanding Bitcoin knowledge to local languages with Exonumia and Plan B Network.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
              Our Commitment
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  icon: <Heart size={32} className="text-primary mb-3" />,
                  title: "Community First",
                  text: "Your sats empower local educators and community leaders to teach Bitcoin on the ground.",
                },
                {
                  icon: <ShieldCheck size={32} className="text-primary mb-3" />,
                  title: "Radical Transparency",
                  text: (
                    <>
                      100% of donations fund Bitcoin education.{" "}
                      <a
                        href="/funding-report"
                        className="text-primary underline"
                      >
                        View Reports
                      </a>
                    </>
                  ),
                },
                {
                  icon: (
                    <GlobeHemisphereEast
                      size={32}
                      className="text-primary mb-3"
                    />
                  ),
                  title: "Global Impact",
                  text: "Your contribution accelerates Bitcoin adoption across Africa — inspiring the world.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  {item.icon}
                  <h3 className="font-bold text-lg text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800"
          >
            Join the Global Movement 🌍
          </motion.h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            Every sat you send helps build financial sovereignty and open-source
            education for future generations.
          </p>
          <motion.a
            href="donate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-primary/90"
          >
            Donate Now
          </motion.a>
        </section>
      </main>
      <Footer />
    </>
  );
}
