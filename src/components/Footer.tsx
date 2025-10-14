"use client";

import {
  TelegramLogo,
  TwitterLogo,
  WhatsappLogo,
  GlobeHemisphereWest,
  Envelope,
  Phone,
  MapPin,
  GlobeHemisphereEast,
} from "phosphor-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary-light text-foreground pt-24 pb-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Mission */}
        <div>
          <h2 className="text-2xl font-bold text-primary">BTC Shule</h2>
          <p className="mt-3 text-md leading-relaxed text-gray-400">
            Empowering communities through Bitcoin education. We make Bitcoin
            knowledge accessible, practical, and community-driven across Africa
            and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-md">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about-us" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/#programs" className="hover:text-primary transition">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-primary transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-3 text-md">
            <li className="flex items-center gap-2">
              <Envelope size={18} className="text-primary" />

              <a href="mailto:btcshule@gmail.com">
                <span>btcshule@gmail.com</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-primary" />

              <a
                href="https://wa.me/25762919316"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>+257 62919316</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-primary" />

              <a
                href="https://www.google.com/maps/search/?api=1&query=Winteko,+Burundi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Winteko, Burundi</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Link
              href="https://x.com/btcshule"
              target="_blank"
              className="hover:text-primary"
            >
              <TwitterLogo size={28} />
            </Link>
            <Link
              href="https://t.me/25762919316"
              target="_blank"
              className="hover:text-primary"
            >
              <TelegramLogo size={28} />
            </Link>
            <Link
              href="https://wa.me/25762919316"
              target="_blank"
              className="hover:text-primary"
            >
              <WhatsappLogo size={28} />
            </Link>
            <Link
              href="https://primal.net/p/nprofile1qqsyefs0ks7hr496ntxqyugkhwkrfnjukzzx7efp3sef54fdasmt5ugp3w6y6"
              target="_blank"
              className="hover:text-primary"
            >
              <GlobeHemisphereWest size={28} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} BTC Shule. All rights reserved.</p>
      </div>
    </footer>
  );
}
