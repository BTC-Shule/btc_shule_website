"use client";
import { motion } from "framer-motion";
import { UsersThree, ChalkboardTeacher, Code, Heart, GlobeHemisphereEast } from "phosphor-react";

const involvementOptions = [
  {
    title: "Attend Workshops",
    description:
      "Join our Bitcoin education sessions across Africa. Learn how to use Bitcoin safely and responsibly while connecting with a vibrant community.",
    icon: <UsersThree size={40} weight="duotone" className="text-secondary-light" />,
  },
  {
    title: "Contribute as a Mentor",
    description:
      "Share your expertise in Bitcoin, finance, or technology. Help guide the next generation of Bitcoiners through mentorship and teaching.",
    icon: <ChalkboardTeacher size={40} weight="duotone" className="text-secondary-light" />,
  },
  {
    title: "Build & Translate Tools",
    description:
      "Are you a developer or linguist? Help us build open-source Bitcoin tools and translate resources into local languages for wider access.",
    icon: <Code size={40} weight="duotone" className="text-secondary-light" />,
  },
  {
    title: "Volunteer Locally",
    description:
      "Join hands with our community teams on the ground. Assist in organizing events, spreading awareness, and empowering local groups.",
    icon: <GlobeHemisphereEast size={40} weight="duotone" className="text-secondary-light" />,
  },
  {
    title: "Support the Mission",
    description:
      "Every contribution matters. Support BTC Shule financially or through partnerships to expand Bitcoin education across communities.",
    icon: <Heart size={40} weight="duotone" className="text-secondary-light" />,
  },
];

export default function GetInvolved() {
  return (
    <section id="get-involved" className="relative bg-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-primary">
            Get Involved with Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Education is a shared mission. Whether you’re a learner, teacher, developer, or supporter, there’s a place for you in BTC Shule’s community.
          </p>
          <div className="mt-6 mx-auto w-24 h-1 bg-secondary-light rounded-full"></div>
        </motion.div>

        {/* Involvement Options Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {involvementOptions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-secondary-light/10 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-secondary-light transition group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary-light/10 mb-6 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-primary mb-6">
            Ready to Join the Movement?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#volunteer"
              className="px-6 py-3 rounded-xl bg-primary text-background font-semibold shadow-lg hover:scale-105 transition"
            >
              Sign Up to Volunteer
            </a>
            <a
              href="#donate"
              className="px-6 py-3 rounded-xl bg-secondary-light text-background font-semibold shadow-lg hover:scale-105 transition"
            >
              Donate to Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
