"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  List,
  X,
  MapPin,
  Phone,
  EnvelopeSimple,
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
} from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [triggerBounce, setTriggerBounce] = useState(0);
  const [hasBounced, setHasBounced] = useState(false); // 👈 new flag

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    let lastScroll = 0;
    let timeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const nowAtTop = currentScroll === 0;
      setAtTop(nowAtTop);

      if (nowAtTop) {
        // ✅ Reset bounce whenever we return to the very top
        setHasBounced(false);
      }

      if (currentScroll > lastScroll && currentScroll > 0) {
        // First scroll down → trigger bounce once
        if (!hasBounced) {
          setShowNavbar(false);

          if (timeout) clearTimeout(timeout);
          timeout = setTimeout(() => {
            setShowNavbar(true);
            setTriggerBounce((n) => n + 1);
            setHasBounced(true); // ✅ lock bounce after first run
          }, 100);
        }
      } else {
        // Scrolling up → always show navbar
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
            animate={{ y: [-80, 0, 6, 0], opacity: 1 }} // 👈 bounce upward only
            exit={{ y: -80, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="bg-background backdrop-blur-md border-b border-black/10"
          >
            {/* Top row → only if at top */}
            {atTop && (
              <div className="w-full bg-secondary-light text-sm text-gray-600 border-b border-black/10">
                <div className="max-w-8xl mx-auto hidden md:flex justify-between items-center px-4 sm:px-6 lg:px-24 py-2">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <MapPin
                        size={20}
                        weight="fill"
                        className="text-primary"
                      />
                      <span>Nairobi, Kenya</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={20} weight="fill" className="text-primary" />
                      <span>+257 62919316</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <EnvelopeSimple
                        size={20}
                        weight="fill"
                        className="text-primary"
                      />
                      <span>btcshule@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {[
                      FacebookLogo,
                      TwitterLogo,
                      InstagramLogo,
                      LinkedinLogo,
                    ].map((Icon, i) => (
                      <Link
                        key={i}
                        href="#"
                        target="_blank"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-background text-primary hover:bg-primary hover:text-background transition-colors"
                      >
                        <Icon size={16} weight="fill" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Bottom row */}
            <div className="py-3">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
                <div className="flex justify-between h-16">
                  {/* Logo */}
                  <div className="flex items-center">
                    <Link
                      href="/#home"
                      className="flex-shrink-0 flex items-center gap-2 md:gap-3"
                    >
                      <span className="font-extrabold text-4xl text-primary">
                        BTC SHULE
                      </span>
                    </Link>
                  </div>

                  {/* Desktop menu */}
                  <div className="hidden md:flex md:items-center md:space-x-8 text-lg">
                    {["Home", "About Us", "Services", "Contact"].map(
                      (item, i) => (
                        <Link
                          key={i}
                          href={`/#${item.toLowerCase().replace(" ", "-")}`}
                          className="text-black hover:text-primary transition-colors"
                        >
                          {item}
                        </Link>
                      )
                    )}
                  </div>

                  {/* Donate button */}
                  <div className="hidden md:flex md:items-center md:space-x-8">
                    <Link
                      href="/donate"
                      className="text-background bg-primary hover:bg-primary-dark py-2 px-6 rounded-3xl transition-colors"
                    >
                      Donate Now
                    </Link>
                  </div>

                  {/* Mobile toggle */}
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

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-black/10">
            {["Home", "About Us", "Services", "Contact"].map((item, i) => (
              <Link
                key={i}
                href={`/#${item.toLowerCase().replace(" ", "-")}`}
                className="block px-3 py-2 rounded-md text-black hover:bg-primary/10 transition-colors"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/donate"
              className="block bg-primary text-center rounded-2xl text-background hover:bg-primary/80 py-2 transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
