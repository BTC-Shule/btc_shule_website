"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb,
  Target,
  Globe,
  Leaf,
  Rocket,
  ShieldCheck,
  Users,
  ArrowRight,
} from "phosphor-react";
import { useEffect, useState } from "react";

export default function About() {
  const [twitterFailed, setTwitterFailed] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (w.twttr) {
      w.twttr.widgets.load();
    } else {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onerror = () => setTwitterFailed(true);
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="about-us" className="relative bg-background py-28">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 space-y-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
            About <span className="text-secondary-light">BTC Shule</span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We are pioneering Bitcoin adoption in Burundi — building a sustainable circular economy,
            training tomorrow’s leaders, and fostering open-source innovation that transforms lives.
          </p>
          <div className="mt-6 mx-auto w-32 h-1.5 bg-gradient-to-r from-primary via-secondary-light to-primary rounded-full"></div>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              icon: Lightbulb,
              title: "Our Vision",
              desc: "A resilient Bitcoin-powered Burundi where individuals and enterprises thrive through economic freedom and sovereignty.",
              delay: 0,
            },
            {
              icon: Target,
              title: "Our Mission",
              desc: "To empower communities with Bitcoin education, self-custody training, and open-source tools for long-term financial resilience.",
              delay: 0.2,
            },
          ].map(({ icon: Icon, title, desc, delay }, i) => (
            <motion.div
              key={i}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay, ease: "easeOut" }}
              className="backdrop-blur-xl bg-white/70 border border-gray-200 hover:border-primary/30 rounded-2xl shadow-lg p-8 md:p-10 transition-all"
            >
              <Icon size={44} weight="duotone" className="text-primary mb-5" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Goal & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-14">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative border-l-4 border-secondary-light pl-8"
            >
              <h3 className="text-3xl font-bold text-primary mb-4">Our Goal</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We aim to equip individuals with knowledge, skills, and the right tools to confidently
                engage with Bitcoin, promoting financial inclusion and circular economies across Burundi.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-secondary-light text-white rounded-2xl shadow-2xl p-10"
            >
              <h3 className="text-2xl font-semibold mb-6">Core Values</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-base">
                {[
                  { icon: Users, label: "Community" },
                  { icon: Rocket, label: "Empowerment" },
                  { icon: Globe, label: "Accessibility" },
                  { icon: ShieldCheck, label: "Integrity" },
                  { icon: Leaf, label: "Sustainability" },
                ].map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Icon size={22} weight="duotone" className="text-white/90" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Media Embed */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            {twitterFailed ? (
              <div className="hidden md:block relative rounded-2xl overflow-hidden shadow-2xl w-full h-[420px]">
                <Image
                  src="/emoney.jpg"
                  alt="BTC Shule - Circular Bitcoin Economy"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-primary/90 text-background font-bold px-6 py-3 rounded-lg shadow-lg">
                  BTC Shule — Circular Bitcoin Economy
                </div>
              </div>
            ) : (
              <div className="flex rounded-2xl overflow-hidden shadow-2xl w-full h-[420px] bg-background/10 backdrop-blur-sm">
                <blockquote className="twitter-tweet" data-theme="dark">
                  <a href="https://twitter.com/BitcoinNewsCom/status/1933178940392087819"></a>
                </blockquote>
              </div>
            )}
          </motion.div>
        </div>
        {/* Learn More Link */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center pt-12"
        >
          <Link
            href="/about-btcshule"
            className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-secondary-light transition-all group"
          >
            Learn More
            <ArrowRight
              size={22}
              weight="bold"
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
