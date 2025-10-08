"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "Adopting Bitcoin CapeTown",
    logo: "/Adopting Bitcoin Capetown Logo.png",
    url: " https://x.com/btcshule/status/1884833741303861551",
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
    <section id="partners" className="relative bg-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-primary">Our Partners</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We collaborate with forward-thinking organizations to build Bitcoin
            adoption across Burundi and beyond. Together, we create lasting
            impact.
          </p>
          <div className="mt-4 mx-auto w-24 h-1 bg-secondary-light rounded-full"></div>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 lg:gap-12 items-start justify-items-center">
          {partners.map((partner, i) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="w-full flex flex-col items-center justify-between rounded-2xl bg-white/70 shadow-md backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="max-h-16 object-contain"
              />
              <p className="mt-3 text-center text-md font-medium text-gray-600">
                {partner.name}
              </p>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/#contact"
            className="inline-block bg-secondary-light text-white px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all font-semibold"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
}
