"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const meetups = [
  {
    id: 1,
    title: "Bitcoin Pizza Day",
    date: "May 28, 2025",
    time: "05:00 PM",
    venue: "Jerusalem Hotel, Gitega",
    focus: "Celebrate this historic day with us!",
    tag: "Celebration",
    image: "/May meetup.jpeg",
    links: {
      twitter: "https://x.com/btcshule/status/...",
      gallery: "#",
    },
  },
  {
    id: 2,
    title: "July Bitcoin Meetup",
    date: "July 18, 2025",
    time: "01:00 PM",
    venue: "Université Polytechnique de Gitega",
    focus: "Bitcoin for Students: Learn, Earn & Transact",
    tag: "Education",
    image: "/July meetup.jpeg",
    links: {
      twitter: "https://x.com/btcshule/status/...",
      gallery: "#",
    },
  },
  {
    id: 3,
    title: "August Bitcoin Meetup",
    date: "August 30, 2025",
    time: "09:00 AM – 12:00 PM",
    venue: "Bethel Hotel",
    focus: "Bitcoin Meetups Burundi – Networking & Learning",
    tag: "Networking",
    image: "/August meetup.jpeg",
    links: {
      twitter: "https://x.com/btcshule/status/...",
      gallery: "#",
    },
  },
  {
    id: 4,
    title: "June Bitcoin Meetup",
    date: "June 21, 2025",
    time: "01:00 PM",
    venue: "Winteko Village",
    focus: "Bitcoin discussions and networking",
    tag: "Workshop",
    image: "/June meetup.jpg",
    links: {
      twitter: "https://x.com/btcshule/status/...",
      gallery: "#",
    },
  },
  {
    id: 5,
    title: "September Bitcoin Meetup",
    date: "September 26, 2025",
    time: "01:00 PM – 4:30 PM",
    venue: "Winteko Village",
    focus: "Graduation Day",
    tag: "Graduation",
    image: "/September meetup.png",
    links: {
      twitter: "https://x.com/btcshule/status/...",
      gallery: "#",
    },
  },
];

export default function MeetupsPage() {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", ...new Set(meetups.map((m) => m.tag))];

  const filteredMeetups = useMemo(() => {
    return [...meetups]
      .filter((m) => {
        const matchesSearch =
          m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          m.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
          m.focus.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTag = selectedTag === "All" || m.tag === selectedTag;
        return matchesSearch && matchesTag;
      })
      .sort((a, b) => {
        const aDate = new Date(a.date).getTime();
        const bDate = new Date(b.date).getTime();
        return sortOrder === "newest" ? bDate - aDate : aDate - bDate;
      });
  }, [sortOrder, searchTerm, selectedTag]);

  return (
    <>
      <Navbar />
      <main className="pt-[120px] md:pt-[200px] bg-background text-gray-700 min-h-screen">
        <section className="max-w-6xl mx-auto px-6 py-16">
          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-bold text-primary text-center mb-10"
          >
            Bitcoin Meetups Archive
          </motion.h1>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Explore our past Bitcoin meetups — from Pizza Day celebrations to
            student-focused workshops. Each event brings us closer to building a
            strong circular economy powered by Bitcoin.
          </p>

          {/* Filter Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search meetups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-1/2 border border-gray-300 rounded-full px-5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Sort Toggle */}
            <div className="flex gap-3">
              <button
                onClick={() => setSortOrder("newest")}
                className={`text-sm font-medium ${
                  sortOrder === "newest"
                    ? "text-primary underline"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                Newest First
              </button>
              <button
                onClick={() => setSortOrder("oldest")}
                className={`text-sm font-medium ${
                  sortOrder === "oldest"
                    ? "text-primary underline"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                Oldest First
              </button>
            </div>
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 text-sm rounded-full border transition-all ${
                  selectedTag === tag
                    ? "bg-primary text-white border-primary"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Meetups Grid */}
          {filteredMeetups.length > 0 ? (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {filteredMeetups.map((meetup) => (
                <motion.div
                  key={meetup.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <Image
                    src={meetup.image}
                    alt={meetup.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {meetup.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      📅 {meetup.date} | 🕒 {meetup.time}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      📍 {meetup.venue}
                    </p>
                    <p className="text-gray-700 mb-6 text-sm">{meetup.focus}</p>

                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {meetup.tag}
                      </span>
                      {meetup.links.twitter && (
                        <Link
                          href={meetup.links.twitter}
                          target="_blank"
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          View Post →
                        </Link>
                      )}
                      {meetup.links.gallery && (
                        <Link
                          href={meetup.links.gallery}
                          target="_blank"
                          className="text-sm font-medium text-secondary hover:underline"
                        >
                          View Gallery →
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-12">
              No meetups match your search or filter criteria.
            </p>
          )}
        </section>

        <section className="bg-secondary-light/10 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary mb-10">
              Highlights from Previous Meetups
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "/1K4A7369.jpg",
                "/1K4A7368.jpg",
                "/1K4A7436.jpg",
                "/1K4A7490.jpg"
              ].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform"
                >
                  <Image
                    src={src}
                    alt={`Academy class ${i + 1}`}
                    width={500}
                    height={350}
                    className="object-cover w-full h-64"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
