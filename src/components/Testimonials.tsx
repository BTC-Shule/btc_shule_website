"use client";

import { Tweet } from "react-tweet";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Testimonials() {
  const tweets = [
    {
      id: "1962942843133026305",
      url: "https://x.com/BTC_Archive/status/1962942843133026305",
    },
    {
      id: "1962872539685744999",
      url: "https://x.com/callebtc/status/1962872539685744999",
    },
    {
      id: "1957688853994590385",
      url: "https://x.com/btcshule/status/1957688853994590385",
    },
    {
      id: "1955026739064869324",
      url: "https://x.com/afribitcoiners/status/1955026739064869324",
    },
    {
      id: "1949526822762266837",
      url: "https://x.com/_pretyflaco/status/1949526822762266837",
    },
    {
      id: "1947049272538722529",
      url: "https://x.com/21MMforthe21st/status/1947049272538722529",
    },
    {
      id: "1946838046349152412",
      url: "https://x.com/blinkbtc/status/1946838046349152412",
    },
    {
      id: "1945523031322898461",
      url: "https://x.com/MyFirstBitcoin_/status/1945523031322898461",
    },
    {
      id: "1941822042405253478",
      url: "https://x.com/Foreign_OG_/status/1941822042405253478",
    },
    {
      id: "1935091566206419153",
      url: "https://x.com/ChrisMeinhart/status/1935091566206419153",
    },
    {
      id: "1928521121021735255",
      url: "https://x.com/blinkbtc/status/1928521121021735255",
    },
    {
      id: "1937517804824981783",
      url: "https://x.com/jesusnetohdz/status/1937517804824981783",
    },
    {
      id: "1937488247996735990",
      url: "https://x.com/MyFirstBitcoin_/status/1937488247996735990",
    },
    {
      id: "1937414373577793993",
      url: "https://x.com/st4rnold/status/1937414373577793993",
    },
    {
      id: "1969078451505123676",
      url: "https://x.com/ErnestoHpc21/status/1969078451505123676",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isMobile, setIsMobile] = useState(false);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex(
      (prevIndex) => (prevIndex + newDirection + tweets.length) % tweets.length
    );
  };

    useEffect(() => {
    // Set initial value
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Only 1 tweet on mobile, 3 on md+
  const getVisibleTweets = () => {
    const count = isMobile ? 1 : 3;
    return Array.from({ length: count }, (_, i) => {
      return tweets[(activeIndex + i) % tweets.length];
    });
  };

  return (
    <section id="testimonials" className="relative bg-foreground py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary">
            What Our Community Says
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-secondary-light rounded-full"></div>
        </div>

        {/* Tweets */}
        <div className="relative">
          <div className="flex justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[30rem]"
              >
                {getVisibleTweets().map((tweet) => (
                  <motion.div
                    key={tweet.id}
                    className="rounded-2xl flex justify-center hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
                    onClick={() => window.open(tweet.url, "_blank")}
                  >
                    <Tweet id={tweet.id} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => paginate(-1)}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-primary/30 hover:bg-primary/10 transition-colors"
            aria-label="Previous testimonials"
          >
            <svg
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-primary/30 hover:bg-primary/10 transition-colors"
            aria-label="Next testimonials"
          >
            <svg
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
