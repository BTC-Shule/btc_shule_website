"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function VolunteerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px]">
        {/* Hero Section */}
        <section className="bg-background py-20 md:py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold text-primary mb-6"
          >
            Volunteer with BTC Shule
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg text-gray-700 px-4"
          >
            Join a global community empowering people with Bitcoin education. 
            Whether you contribute time, skills, or ideas, you’ll help shape 
            a brighter financial future.
          </motion.p>
        </section>

        {/* Why Volunteer */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why Volunteer with Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Global Impact",
                  desc: "Help bring financial education to underserved communities around the world.",
                },
                {
                  title: "Skill Growth",
                  desc: "Gain experience in community building, content creation, and event organizing.",
                },
                {
                  title: "Meaningful Connections",
                  desc: "Work with passionate Bitcoiners, educators, and advocates globally.",
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
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ways to Contribute */}
        <section className="py-16 md:py-24 bg-foreground">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary text-center mb-10">
              Ways You Can Contribute
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Community Events",
                  desc: "Help organize or assist at Bitcoin education meetups in your region.",
                },
                {
                  title: "Content & Translation",
                  desc: "Translate Bitcoin resources into Kirundi and other languages.",
                },
                {
                  title: "Digital Advocacy",
                  desc: "Spread awareness online and engage with our global audience.",
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
                  <h3 className="text-xl font-semibold text-secondary-light mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Form */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-lg mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we’ll get back to you soon.
            </p>
            <form className="space-y-6 text-secondary-light text-left max-w-lg m-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                required
              />
              <textarea
                placeholder="How would you like to help?"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-secondary-light text-white font-semibold py-3 rounded-lg hover:bg-secondary-light/90 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
