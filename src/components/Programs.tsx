"use client";
import { motion } from "framer-motion";
import {
  Storefront,
  Calendar,
  GraduationCap,
  Code,
  Translate,
} from "phosphor-react";

const programs = [
  {
    title: "Circular Economy – Winteko Village",
    description:
      "Our flagship project in Winteko village is building a local Bitcoin circular economy where community members and merchants transact seamlessly in Bitcoin.",
    icon: Storefront,
  },
  {
    title: "Meetups & Calendar",
    description:
      "We host regular Bitcoin meetups across Burundi, creating spaces for dialogue, learning, and grassroots adoption. Stay updated with our public events calendar.",
    icon: Calendar,
  },
  {
    title: "Trezor Academy",
    description:
      "In partnership with Trezor, we train students and professionals on Bitcoin security, self-custody, and open-source innovation, with over 350 graduates so far.",
    icon: GraduationCap,
  },
  {
    title: "BitDevs Gitega",
    description:
      "Our local BitDevs chapter fosters technical discussions on Bitcoin development, Lightning, and open-source contributions within Burundi.",
    icon: Code,
  },
  {
    title: "Translation Initiatives",
    description:
      "We localize Bitcoin content into Kirundi and French, breaking down language barriers and making Bitcoin education accessible to all Burundians.",
    icon: Translate,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative bg-secondary-light/5 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
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
          <div className="mt-4 mx-auto w-24 h-1 bg-primary rounded-full"></div>
        </motion.div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
            >
              <program.icon size={48} className="text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <a
                href="#get-involved"
                className="text-primary font-semibold hover:underline"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#get-involved"
            className="inline-block bg-primary text-white px-8 py-4 rounded-xl shadow-lg hover:bg-primary-dark transition-colors font-semibold"
          >
            Join Our Mission
          </a>
        </div>
      </div>
    </section>
  );
}
