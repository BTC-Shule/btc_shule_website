"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function StoryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px] bg-background text-gray-700">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
              The Story of{" "}
              <span className="text-secondary-light">BTC Shule</span>
            </h1>
            <div className="mt-6 mx-auto w-32 h-1.5 bg-linear-to-r from-primary via-secondary-light to-primary rounded-full"></div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed space-y-8"
          >
            <p>
              My name is{" "}
              <span className="font-semibold text-primary">₿elyï No₿el</span>.
              When I first discovered Bitcoin in 2020, I became captivated by
              its potential to reshape finance and empower communities. This
              fascination led me to explore Bitcoin deeply, eventually evolving
              into a role as a Bitcoin educator and writer.
            </p>

            <p>
              I integrated Bitcoin education into the curriculum of{" "}
              <span className="font-semibold">Free Tech Institute</span>, an NGO
              I founded to equip Burundian youth with vital digital skills.
              However, my vision transformed at the{" "}
              <span className="italic">Adopting Bitcoin Cape Town</span>{" "}
              conference in 2024, where I witnessed firsthand the power of a
              circular economy based on Bitcoin.
            </p>

            <p>
              My visit to communities like{" "}
              <span className="font-semibold">Bitcoin Ekasi</span> in Mossel
              Bay, <span className="font-semibold">Bitcoin Witstad</span> and{" "}
              <span className="font-semibold">Bitcoin Loxion</span> in South
              Africa highlighted Bitcoin’s potential to create economic
              resilience in regions with high inflation and economic
              instability. Inspired by this, I launched{" "}
              <span className="font-semibold text-secondary-light">
                BTC Shule
              </span>{" "}
              (meaning &quot;school&quot; in many African languages, including
              Kirundi), not just as an educational initiative but as a project
              to build a circular economy in Burundi, centered on Bitcoin as an
              alternative currency.
            </p>

            {/* <div className="relative w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl my-10">
              <Image
                src="/btcshule-story.jpg"
                alt="BTC Shule Burundi Circular Economy"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-primary/90 text-background font-semibold px-5 py-3 rounded-lg shadow-lg">
                Winteko, Burundi — The Heart of BTC Shule
              </div>
            </div> */}

            <p>
              BTC Shule is pioneering a{" "}
              <span className="font-semibold text-primary">
                Bitcoin-powered circular economy
              </span>{" "}
              in <span className="font-semibold">Winteko, Burundi</span>, by
              leveraging Bitcoin to foster financial inclusion, renewable energy
              access, and education. The initiative aims to transform Winteko
              into a decentralized, financially autonomous community.
            </p>

            <p>
              By integrating Bitcoin with sustainable practices, BTC Shule seeks
              to create a replicable model for development across Africa — one
              where communities are not just connected to global finance, but
              also self-sovereign and future-ready.
            </p>
          </motion.div>
        </section>
        {/* Learn More & Team Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-center pb-12 flex justify-center gap-6"
        >
          <a
            href="/team"
            className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold px-8 py-3 rounded-full shadow-lg transition-all"
          >
            Meet the Team
          </a>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
