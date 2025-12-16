"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "Adopting Bitcoin CapeTown",
    logo: "/Adopting Bitcoin Capetown Logo.png",
    url: "https://x.com/btcshule/status/1884833741303861551",
  },
  {
    name: "Bitcoin Beach Brazil",
    logo: "/BiTCOIN bEACH bRAZIL.jpg",
    url: "https://bitcoinbeachbr.org/en/",
  },
  {
    name: "Bitcoin Beach",
    logo: "/Bitcoin beach.png",
    url: "https://x.com/BitcoinEkasi/status/1899852853662888410",
  },
  {
    name: "Bitcoin Ekasi",
    logo: "/Bitcoin Ekasi.png",
    url: "https://x.com/btcshule/status/1905580947845554351",
  },
  {
    name: "Blink",
    logo: "/blinkk.png",
    url: "https://x.com/blinkbtc/status/1928521121021735255",
  },
  {
    name: "Btrust Builders",
    logo: "/btrust_builders_logo.jpeg",
    url: "https://x.com/btrust_builders/status/1935659915697074587",
  },
  {
    name: "Exonumia",
    logo: "/exonumia-logo.png",
    url: "https://x.com/btcshule/status/1956592878882287623",
  },
  {
    name: "Federation of Bitcoin",
    logo: "/federation-of-bitcoin.png",
    url: "https://x.com/btcshule/status/1948106928824992213",
  },
  {
    name: "Human Rights Foundation",
    logo: "/Human_Rights_Foundation_logo.svg.png",
    url: "https://x.com/femilonge/status/1836049505050869880",
  },
  {
    name: "Machankura",
    logo: "/Machankura.webp",
    url: "https://8333.mobi",
  },
  {
    name: "Mi Primer Bitcoin",
    logo: "/Mi-Primer-Bitcoin-Logo.png",
    url: "https://x.com/BitcoinEkasi/status/1899852853662888410",
  },
  {
    name: "Trezor",
    logo: "/trezor academy.jpg",
    url: "https://academy.trezor.io/countries/burundi",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="relative bg-linear-to-b from-background to-gray-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
            Our Global Partners
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            We proudly collaborate with leading organizations and Bitcoin communities worldwide — advancing education, financial inclusion, and innovation across borders.
          </p>
          <motion.div
            className="mt-6 mx-auto w-24 h-1 bg-secondary-light rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center"
        >
          {partners.map((partner) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="group w-full flex flex-col items-center text-center rounded-2xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 border border-gray-100 p-6"
            >
              <div className="relative w-32 h-16 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="object-contain max-h-16 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-4 text-sm md:text-base font-medium text-gray-700 group-hover:text-primary transition-colors">
                {partner.name}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-primary text-white text-lg font-semibold px-10 py-4 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Become a Partner
          </Link>
          <p className="text-gray-500 mt-3 text-sm">
            Join the movement to expand Bitcoin education across the globe.
          </p>
        </motion.div>
      </div>

      
    </section>
  );
}
