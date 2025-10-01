"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Nobert Pace",
    role: "Trezor Academy Fellow",
    quote:
      "BTC Shule’s meetup in Gitega opened my eyes to the power of Bitcoin as a tool for financial sovereignty. The community here is inspiring and action-oriented.",
    avatar: "/coins.png",
  },
  {
    name: "Anniella Dushime",
    role: "Founder, Bitcoin for Change Club",
    quote:
      "Joining BTC Shule’s workshops was a game changer — I now feel confident building tools in my own language and helping others in my neighbourhood.",
    avatar: "/coins.png",
  },
  {
    name: "David Mugisha",
    role: "Merchant, Ngozi",
    quote:
      "Accepting Bitcoin has connected me to broader markets. BTC Shule didn’t only teach me how to use the tech — they showed me how to believe in it.",
    avatar: "/coins.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-foreground py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-primary">
            What Our BTC Shule Community Says
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-secondary-light rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
              className="bg-secondary-light border border-gray-700 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top section */}
              <div className="flex flex-col items-center flex-grow">
                {t.avatar && (
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full border-2 border-primary mb-4 object-cover"
                  />
                )}
                <p className="text-white italic leading-relaxed">
                  “{t.quote}”
                </p>
              </div>

              {/* Bottom section */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-primary">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
