"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  List,
  X,
  MapPin,
  Phone,
  EnvelopeSimple,
  TelegramLogo,
  TwitterLogo,
  WhatsappLogo,
  GlobeHemisphereWest,
} from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [triggerBounce, setTriggerBounce] = useState(0);
  const [hasBounced, setHasBounced] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    let lastScroll = 0;
    let timeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const nowAtTop = currentScroll === 0;
      setAtTop(nowAtTop);

      if (nowAtTop) {
        setHasBounced(false);
      }

      if (currentScroll > lastScroll && currentScroll > 0 && !hasBounced) {
        setShowNavbar(false);

        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          setShowNavbar(true);
          setTriggerBounce((n) => n + 1);
          setHasBounced(true);
        }, 50);
      } else {
        if (!showNavbar) setShowNavbar(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, [showNavbar, hasBounced]);

  return (
    <nav className="fixed w-full z-50">
      <AnimatePresence>
        {showNavbar && (
          <motion.div
            key={`navbar-${triggerBounce}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="bg-background backdrop-blur-md border-b border-black/10"
          >
            {atTop && (
              <div className="w-full bg-secondary-light text-sm text-gray-600 border-b border-black/10">
                <div className="max-w-8xl mx-auto hidden md:flex justify-between items-center px-4 sm:px-6 lg:px-24 py-2">
                  <div className="flex items-center gap-6">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Winteko,+Burundi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MapPin
                        size={20}
                        weight="fill"
                        className="text-primary"
                      />
                      <span>Map</span>
                    </a>

                    <div>
                      <a
                        href="https://wa.me/25771475533"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Phone
                          size={20}
                          weight="fill"
                          className="text-primary"
                        />
                        <span>+257 71475533</span>
                      </a>
                    </div>
                    <div>
                      <a
                        href="mailto:btcshule@gmail.com"
                        className="flex items-center gap-2"
                      >
                        <EnvelopeSimple
                          size={20}
                          weight="fill"
                          className="text-primary"
                        />
                        <span>btcshule@gmail.com</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      href="https://x.com/btcshule"
                      target="_blank"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-background text-primary hover:bg-primary hover:text-background transition-colors"
                    >
                      <TwitterLogo size={16} weight="fill" />
                    </Link>
                    <Link
                      href="https://t.me/25771475533"
                      target="_blank"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-background text-primary hover:bg-primary hover:text-background transition-colors"
                    >
                      <TelegramLogo size={16} weight="fill" />
                    </Link>
                    <Link
                      href="https://wa.me/25771475533"
                      target="_blank"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-background text-primary hover:bg-primary hover:text-background transition-colors"
                    >
                      <WhatsappLogo size={16} weight="fill" />
                    </Link>

                    <Link
                      href="https://primal.net/p/nprofile1qqsyefs0ks7hr496ntxqyugkhwkrfnjukzzx7efp3sef54fdasmt5ugp3w6y6"
                      target="_blank"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-background text-primary hover:bg-primary hover:text-background transition-colors"
                    >
                      <GlobeHemisphereWest size={16} weight="fill" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            <div className="py-3">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
                <div className="flex justify-between h-16">
                  <div className="flex items-center">
                    <Link
                      href="/#home"
                      onClick={() => setShowNavbar(true)}
                      className="flex-shrink-0 flex items-center gap-2 md:gap-3"
                    >
                      <Image
                        src="/btcshule-logo.jpg"
                        alt="BTC Shule Logo"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <span className="font-extrabold text-2xl md:text-4xl text-primary">
                        BTC SHULE
                      </span>
                    </Link>
                  </div>
                  <div className="hidden md:flex md:items-center md:space-x-8 text-lg">
                    {[
                      "Home",
                      "About Us",
                      "Programs",
                      "Get Involved",
                      "Events",
                      "Blog",
                      "Contact",
                    ].map((item, i) => (
                      <Link
                        key={i}
                        href={`/#${item.toLowerCase().replace(" ", "-")}`}
                        onClick={() => setShowNavbar(true)}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>

                  <div className="hidden md:flex md:items-center md:space-x-8">
                    <a
                      href="/donate"
                      rel="noopener noreferrer"
                      className="text-background bg-primary hover:bg-primary-dark py-2 px-6 rounded-3xl transition-colors"
                    >
                      Donate Now
                    </a>
                  </div>

                  <div className="md:hidden flex items-center gap-2">
                    <button
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-primary hover:bg-foreground/5 transition-colors"
                    >
                      {!isOpen ? <List size={24} /> : <X size={24} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-black/10">
            {[
              "Home",
              "About Us",
              "Programs",
              "Get Involved",
              "Events",
              "Contact",
            ].map((item, i) => (
              <Link
                key={i}
                href={`/#${item.toLowerCase().replace(" ", "-")}`}
                className="block px-3 py-2 rounded-md text-gray-600 hover:bg-primary/10 transition-colors"
                onClick={() => {
                  toggleMenu();
                  setShowNavbar(true);
                }}
              >
                {item}
              </Link>
            ))}
            <a
              href="/donate"
              rel="noopener noreferrer"
              className="block w-32 bg-primary text-center rounded-3xl text-background hover:bg-primary-dark py-2 transition-colors"
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
