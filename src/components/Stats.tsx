"use client";
import { motion } from "framer-motion";

export default function Statistics() {
  const stats = [
    { value: "1000+", label: "Total Participants" },
    { value: "3+", label: "Local Merchants Onboarded" },
    { value: "225+", label: "Certification Courses Completed" },
    { value: "5+", label: "Active Community" },
  ];

  return (
    <section className="relative bg-secondary-light/10 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">
            Our Impact in Numbers
          </h2>
          <div className="mt-4 mx-auto w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <h3 className="text-4xl font-extrabold text-primary mb-3">
                {stat.value}
              </h3>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
