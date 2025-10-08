"use client";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  UsersThree,
  Storefront,
  GraduationCap,
  ChatsCircle,
  Sparkle,
} from "phosphor-react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

function Counter({ target, inView }: { target: string; inView: boolean }) {
  const [currentValue, setCurrentValue] = useState(0);
  const count = useMotionValue(0);

  const endValue = parseInt(target.replace(/\D/g, ""), 10);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, endValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setCurrentValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [count, endValue, inView]);

  return <span>{currentValue}+</span>;
}

function StatCard({
  icon: Icon,
  value,
  label,
  index,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-transparent/80 p-4 transition"
    >
      <motion.div
        className="flex items-center justify-center w-20 h-20 mx-auto mb-6 text-white shadow-md bg-primary"
        animate={{
          borderTopLeftRadius: [
            "48.8066% 59.4236%",
            "30% 70%",
            "60% 40%",
            "48.8066% 59.4236%",
          ],
          borderBottomLeftRadius: [
            "51.1934% 44.2302%",
            "60% 30%",
            "40% 60%",
            "51.1934% 44.2302%",
          ],
          borderTopRightRadius: [
            "74.8208% 40.5764%",
            "50% 50%",
            "65% 35%",
            "74.8208% 40.5764%",
          ],
          borderBottomRightRadius: [
            "25.1792% 55.7698%",
            "40% 60%",
            "20% 80%",
            "25.1792% 55.7698%",
          ],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <Icon size={32} weight="duotone" className="text-gray-600" />
      </motion.div>

      <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
        <Counter target={value} inView={inView} />
      </h3>
      <p className="text-foreground font-semibold tracking-wide">{label}</p>
    </motion.div>
  );
}

export default function Statistics() {
  const stats = [
    { value: "300", label: "Unbanked Onboarded", icon: UsersThree },
    { value: "15", label: "14 Shops + 1 Hotel", icon: Storefront },
    { value: "350", label: "Trezor Academy Graduates", icon: GraduationCap },
    { value: "84", label: "Mi Primer Bitcoin Graduates", icon: GraduationCap },
    { value: "20", label: "Meetups", icon: ChatsCircle },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/about.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-secondary/80"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center md-8 md:mb-16"
      >
        <h2 className="text-4xl font-extrabold text-primary p-4">
          Our Key Impact Metrics
        </h2>
        <div className="mt-4 mx-auto w-24 h-1 bg-secondary-light rounded-full"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-10 text-center">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>

        {/* Featured Innovation Box */}
        <Link
          href="https://github.com/Advaxe/MySatoshis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="mt-12 max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-lg p-6 text-center"
          >
            <div className="flex justify-center mb-4">
              <Sparkle size={36} className="text-primary" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              Featured Innovation
            </h4>
            <p className="text-gray-600">
              <span className="font-semibold">My Satoshi Tool</span> – a local
              innovation that helps Burundians calculate and understand Bitcoin
              sats-to-fiat conversions, empowering practical adoption.
            </p>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
