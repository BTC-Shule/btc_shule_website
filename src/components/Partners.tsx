"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Bitcoin Beach Brazil",
    logo: "/BiTCOIN bEACH bRAZIL.jpg",
    url: "https://bitcoinbeachbr.org/en/",
  },
  {
    name: "Bitcoin Beach",
    logo: "/Bitcoin beach.png",
    url: "https://www.bitcoinbeach.com/en/our-work",
  },
  {
    name: "Bitcoin Ekasi",
    logo: "/Bitcoin Ekasi.png",
    url: "https://bitcoinekasi.com/",
  },
  {
    name: "Blink",
    logo: "/blinkk.png",
    url: "https://blink.sv",
  },
  {
    name: "Btrust Builders",
    logo: "/btrust_builders_logo.jpeg",
    url: "https://btrust.tech",
  },
  {
    name: "Federation of Bitcoin",
    logo: "/federation-of-bitcoin.png",
    url: "https://fbce.io",
  },
  {
    name: "Human Rights Foundation",
    logo: "/Human_Rights_Foundation_logo.svg.png",
    url: "https://hrf.org/",
  },
  {
    name: "Machankura",
    logo: "/Machankura.webp",
    url: "https://8333.mobi",
  },
  {
    name: "Mi Primer Bitcoin",
    logo: "/Mi-Primer-Bitcoin-Logo.png",
    url: "https://myfirstbitcoin.io/",
  },
  { name: "Trezor", logo: "/trezor academy.jpg", url: "https://trezor.io/" },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center">
          {partners.map((partner, i) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="w-full h-32 flex items-center justify-center rounded-2xl bg-white/70 shadow-md backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="max-h-16 object-contain"
              />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block bg-secondary-light text-white px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all font-semibold"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
}
