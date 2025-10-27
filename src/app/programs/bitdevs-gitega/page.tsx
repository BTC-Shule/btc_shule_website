"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import DonateButton from "@/components/DonateButton";

export default function BitDevsGitegaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px] bg-background text-gray-700">
        {/* Hero Section */}
        <section className="relative py-32 md:py-44 overflow-hidden">
          <div className="absolute inset-0 bg-background" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-extrabold text-primary drop-shadow-lg"
            >
              BitDevs Gitega
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            >
              A community of Bitcoin developers, educators, builders, and
              technically curious minds in Gitega — exploring the inner workings
              of Bitcoin through meetups, workshops, and Socratic Seminars.
            </motion.p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="max-w-6xl mx-auto px-6 py-24 space-y-20">
          <AnimatedSection>
            <SectionTitle>Who We Are</SectionTitle>
            <p className="text-lg leading-relaxed text-gray-600">
              BitDevs Gitega is a hub for Bitcoin developers, educators,
              builders, and enthusiasts inspired by the original{" "}
              <span className="text-primary font-medium">BitDevs NYC</span>. We
              host educational and technical sessions focused on the Bitcoin
              protocol, Lightning Network, privacy tools, and practical local
              use cases — empowering developers in Gitega to build for the
              global open-source ecosystem.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 mt-4">
              We also share opportunities such as{" "}
              <strong>developer grants, fellowships, bounties</strong>, and{" "}
              <strong>job openings</strong> to help grow local talent and bridge
              Gitega’s builders with the international Bitcoin development
              community.
            </p>
          </AnimatedSection>

          {/* What We Do */}
          <GradientSection>
            <SectionTitle>What We Do</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Bootcamps",
                  desc: "Structured programs combining education, collaboration, and hands-on building to grow Bitcoin technical skills in Gitega.",
                },
                {
                  title: "Technical Discussion Meetups",
                  desc: "Regular Socratic Seminars discussing the latest in Bitcoin research, BIPs, and development updates.",
                },
                {
                  title: "Workshops & Hackathons",
                  desc: "Hands-on sessions where developers and technologists build local Bitcoin-based solutions.",
                },
                {
                  title: "Reading Groups",
                  desc: "In-depth study of Bitcoin literature, whitepapers, and open-source documentation.",
                },
                {
                  title: "Collaborative Projects",
                  desc: "Support for open-source Bitcoin development contextualized for the Gitegan environment.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </GradientSection>

          <DonateButton />

          {/* Socratic Seminars */}
          <AnimatedSection>
            <SectionTitle>Socratic Seminars</SectionTitle>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our Socratic Seminars encourage deep learning and open discussion
              around Bitcoin protocol development, privacy improvements, and
              emerging technologies. Sessions feature curated topics from
              BitDevs mailing lists, BIPs, GitHub PRs, research papers, and
              current open-source progress.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Participants are invited to read in advance and bring questions or
              insights to share. Sessions are <em>not recorded</em> — they are
              designed to be candid, informal, and thought-provoking. Some
              include lightning talks, live demos, or small breakout groups to
              foster collaboration.
            </p>
            <p className="text-lg text-gray-600">
              Beginners are welcome — we cultivate an inclusive space for anyone
              curious about Bitcoin’s technical foundations.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="mailto:info@bitdevsgtga.org"
                className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-secondary-light transition"
              >
                💡 Want to Present? Contact Us
              </Link>
            </div>
          </AnimatedSection>

          {/* Join Us */}
          <GradientSection>
            <SectionTitle>Join Us</SectionTitle>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you’re a seasoned developer or just starting out, BitDevs
              Gitega is a welcoming space to learn, discuss, and build.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
              {[
                {
                  label: "Meetups & Events",
                  url: "https://bitdevsgtga.org/events",
                },
                {
                  label: "Luma Page",
                  url: "https://luma.com/user/bitdevsgtga",
                },
                {
                  label: "Follow on X",
                  url: "https://x.com/bitdevsgtga",
                },
                {
                  label: "GitHub",
                  url: "https://github.com/bitdevsgtga/bitdevsgitega",
                },
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-secondary-light transition"
                >
                  {link.label} →
                </motion.a>
              ))}
            </div>
          </GradientSection>

          {/* Closing Quote */}
          <AnimatedSection>
            <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-primary font-medium leading-relaxed max-w-3xl mx-auto text-center">
              “Together, we’re building a grassroots Bitcoin development
              community in Gitega — open, decentralized, and unstoppable.”
            </blockquote>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* Reusable Components */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">
      {children}
    </h2>
  );
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

function GradientSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-inner p-10">
      {children}
    </section>
  );
}
