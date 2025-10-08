"use client";
import { motion } from "framer-motion";
import { Storefront, GraduationCap, Code, BookOpen } from "phosphor-react";
import Link from "next/link";

const programs = [
  {
    title: "Circular Economy – Winteko Village",
    description:
      "Our flagship project in Winteko village is building a local Bitcoin circular economy where community members and merchants transact seamlessly in Bitcoin.",
    icon: Storefront,
    link: "https://geyser.fund/project/btcshule",
  },
  {
    title: "Trezor Academy",
    description:
      "In partnership with Trezor, we train students and professionals on Bitcoin security, self-custody, and open-source innovation, with over 350 graduates so far.",
    icon: GraduationCap,
    link: "/register",
  },
  {
    title: "BitDevs Gitega",
    description:
      "Our local BitDevs chapter fosters technical discussions on Bitcoin development, Lightning, and open-source contributions within Burundi.",
    icon: Code,
    link: "https://bitdevsgtga.org",
  },
  {
    title: "Translation Work – Kirundi Resources",
    description:
      "BTC Shule translates essential Bitcoin content into Kirundi, making Bitcoin knowledge accessible to millions of Burundians in their native language.",
    icon: BookOpen,
    link: "/donate",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative bg-secondary-light/5 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-primary">
            Programs & Initiatives
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            BTC Shule empowers communities through hands-on programs that bring
            Bitcoin to life in Burundi. From villages to universities, we are
            building lasting impact.
          </p>
          <div className="mt-4 mx-auto w-24 h-1 bg-secondary-light rounded-full"></div>
        </motion.div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto justify-items-center max-w-6xl">
          {programs.map((program, index) => {
            const isExternal = program.link.startsWith("http");
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col hover:shadow-xl transition-all"
              >
                {/* Top section */}
                <div className="flex flex-col flex-grow">
                  <program.icon size={48} className="text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {program.title}
                  </h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>

                {/* Bottom section */}
                <div className="mt-6">
                  {isExternal ? (
                    <a
                      href={program.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline"
                    >
                      Learn More →
                    </a>
                  ) : (
                    <Link
                      href={program.link}
                      className="text-primary font-semibold hover:underline"
                    >
                      Learn More →
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
