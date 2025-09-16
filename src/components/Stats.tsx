"use client";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  UsersThree,
  Storefront,
  GraduationCap,
  ChatsCircle,
} from "phosphor-react";
import { useInView } from "react-intersection-observer";

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
      className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
    >
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full 
                      bg-gradient-to-tr from-secondary/90 to-secondary-light/90 text-white shadow-md">
        <Icon size={32} weight="duotone" />
      </div>

      <h3 className="text-5xl font-extrabold text-primary mb-3">
        <Counter target={value} inView={inView} />
      </h3>
      <p className="text-gray-800 font-semibold tracking-wide">{label}</p>
    </motion.div>
  );
}


export default function Statistics() {
  const stats = [
    { value: "1000+", label: "Total Participants", icon: UsersThree },
    { value: "3+", label: "Local Merchants Onboarded", icon: Storefront },
    {
      value: "225+",
      label: "Certification Courses Completed",
      icon: GraduationCap,
    },
    { value: "5+", label: "Active Community", icon: ChatsCircle },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/about.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-secondary/80"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="mt-4 mx-auto w-20 h-1 bg-secondary-light rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
