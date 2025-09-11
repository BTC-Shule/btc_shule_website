"use client";

import { useState } from "react";
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-background backdrop-blur-md z-50 border-b border-black/10">
      {/* Top row */}
      <div className="w-full bg-secondary-light text-sm text-gray-600 border-b border-black/10">
        <div className="max-w-8xl mx-auto hidden md:flex justify-between items-center px-4 sm:px-6 lg:px-24 py-2">
          {/* Left: location, phone, email */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={20} weight="fill" className="text-primary" />
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
          {/* Right: social icons */}
          <div className="flex items-center gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-background text-primary hover:bg-primary hover:text-background transition-colors"
            >
              <FacebookLogo size={16} weight="fill" />
            </Link>

            <Link
              href="https://twitter.com"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-background text-primary hover:bg-primary hover:text-background transition-colors"
            >
              <TwitterLogo size={16} weight="fill" />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-background text-primary hover:bg-primary hover:text-background transition-colors"
            >
              <InstagramLogo size={16} weight="fill" />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-background text-primary hover:bg-primary hover:text-background transition-colors"
            >
              <LinkedinLogo size={16} weight="fill" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom row (your existing navbar) */}
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
              <Link
                href="/#home"
                className="text-black hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-black hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/programs/bitcoin-diploma"
                className="text-black hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                href="/programs/community-building"
                className="text-black hover:text-primary transition-colors"
              >
                Contact
              </Link>
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

            {/* Mobile menu toggle */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-primary hover:bg-foreground/5 transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <List size={24} weight="bold" />
                ) : (
                  <X size={24} weight="bold" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-black/10">
            <Link
              href="/#home"
              className="block px-3 py-2 rounded-md text-black hover:bg-primary/10 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="block px-3 py-2 rounded-md text-black hover:bg-primary/10 transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/programs/bitcoin-diploma"
              className="block px-3 py-2 rounded-md text-black hover:bg-primary/10 transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/programs/community-building"
              className="block px-3 py-2 rounded-md text-black hover:bg-primary/10 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
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
