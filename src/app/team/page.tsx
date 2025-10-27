"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function TeamPage() {
  const team = [
    {
      name: "₿elyï Nobel Kubwayo",
      role: "Founder & Director",
      responsibilities:
        "Strategic leadership, partnerships, and program design. Represents BTC Shule at international conferences (Africa Bitcoin Conference 2025, Adopting Bitcoin 2025).",
      img: "/team/belyi.jpg",
    },
    {
      name: "Aimée Nahimana",
      role: "Head of Education",
      responsibilities:
        "Leads the Mi Primer Bitcoin, manages training content and evaluation.",
      img: "/team/aimee.jpg",
    },
    {
      name: "Evariste Ngendakumana",
      role: "Merchant Engagement Lead",
      responsibilities:
        "Onboards and trains merchants to accept Bitcoin; monitors shop adoption metrics.",
      img: "/team/evariste.jpg",
    },
    {
      name: "Severin Basabingoma",
      role: "Community Outreach Coordinator",
      responsibilities:
        "Organizes village meetups, manages feedback from families and local leaders.",
      img: "/team/severin.jpg",
    },
    {
      name: "Guy Eudes Barakana",
      role: "Communications Officer",
      responsibilities:
        "Handles media, social-media content, and public relations. Leads TREZOR ACADEMY.",
      img: "/team/guy.jpg",
    },
    {
      name: "Advaxe Ndayisenga",
      role: "IT Manager / Developer",
      responsibilities:
        "Maintains My Satoshi tool, supervises technical integrations (Blink APIs).",
      img: "/team/advaxe.jpg",
    },
    {
      name: "Annaxis & Jodel",
      role: "Volunteers",
      responsibilities:
        "Support training sessions, translations, and merchant logistics.",
      img: "/team/volunteers.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px] bg-background text-gray-700">
        {/* Header */}
        <section className="relative py-20 md:py-28 px-6 md:px-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-primary"
          >
            Meet the <span className="text-secondary-light">BTC Shule Team</span>
          </motion.h1>
          <div className="mt-6 mx-auto w-32 h-1.5 bg-gradient-to-r from-primary via-secondary-light to-primary rounded-full"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mt-8 max-w-2xl mx-auto text-lg text-gray-600"
          >
            Our dedicated team works to empower Burundian communities through Bitcoin
            education, circular economy initiatives, and digital freedom.
          </motion.p>
        </section>

        {/* Team Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 pb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                className="bg-white/70 backdrop-blur-lg border border-gray-200 hover:border-primary/30 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center p-8 transition-all"
              >
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden shadow-md">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-primary font-semibold mt-1">{member.role}</p>
                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  {member.responsibilities}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
