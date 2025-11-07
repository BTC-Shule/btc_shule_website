"use client";

import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import Navbar from "@/components/Navbar";

// Blog type
type Blog = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string; // cover image
  content: JSX.Element; // JSX blog content
};

// Blogs list
const blogs: Blog[] = [
  {
    id: "circular-economy",
    title:
      "Exploring Kenya’s Bitcoin Circular Economies: My Journey from Nairobi to Kiambu",
    excerpt:
      "From Nairobi to Kiambu, discover how Bitcoin is transforming communities.",
    date: "August 2025",
    author: "Belyi Nobel Kubwayo",
    image: "/blogheader.jpg",
    content: (
      <>
        <p className="leading-8 mb-6 italic text-gray-500 text-xl">
          What if you could ride a motorbike, buy medicine, and feed your family
          all using Bitcoin? In Kenya, this isn’t a dream, it’s a growing
          reality powered by grassroots innovation and unstoppable community
          energy. From Nairobi’s bustling streets to remote villages in Kiambu,
          I witnessed firsthand how Bitcoin is transforming lives, one satoshi
          at a time.
        </p>

        <p className="leading-8 mb-6">
          From August 2nd to 4th, 2025, I had the incredible opportunity to
          visit three of the most impactful Bitcoin circular economy projects in
          Kenya. These initiatives, based in Nairobi and Kiambu, are not just
          about Bitcoin, they are about community empowerment, financial
          inclusion, and redefining what economic freedom can look like in
          Africa. As someone leading a similar journey with my team in Winteko,
          Burundi, this experience was both inspiring and motivating.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-12 mb-6 border-l-4 border-secondary-light pl-4">
          Day 1 – The CORE Githurai: Bitcoin is part of daily life
        </h2>

        <p className="leading-8 mb-6">
          My first stop was{" "}
          <span className="text-primary">The CORE Githurai</span>, located in
          the bustling Githurai neighborhood of Nairobi. Founded and managed by{" "}
          <span className="text-primary">Felix Mukungu</span>, one of Africa’s
          pioneers in Bitcoin education, this project stands as a powerful
          example of grassroots adoption.
        </p>

        <p className="leading-8 mb-6">
          Arriving in Githurai, I was immediately struck by the energy and noise
          of Nairobi horns, vendors, and the vibrant chaos of daily life. But
          what caught my eye even more were the stickers on local shops proudly
          displaying “Bitcoin Accepted Here.” Here, Bitcoin isn’t a future
          concept, it’s already integrated into everyday transactions.
        </p>

        <div className="relative w-full h-72 md:h-96 overflow-hidden my-8 shadow-lg">
          <Image
            src="/bitcoingithurai.jpg"
            alt="Bitcoin Accepted in Githurai shops"
            fill
            className="object-cover"
          />
        </div>

        <p className="leading-8 mb-6">
          Merchants actively prefer Bitcoin payments. In fact, some shop owners
          told me they’d rather be paid in Bitcoin than Kenyan shillings, as
          they trust its long-term value and enjoy the convenience of instant,
          borderless payments.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-12 mb-6 border-l-4 border-secondary-light pl-4">
          Day 2 – Afribit Kibera: Bitcoin as a Social Revolution
        </h2>

        <p className="leading-8 mb-6">
          The next day, I visited{" "}
          <span className="text-primary">Afribit Kibera</span>, led by Rony
          Mdawida. Kibera is one of the largest informal settlements in Africa,
          located in the heart of Nairobi. What I witnessed there left me both
          amazed and deeply moved. Afribit’s work in Kibera is nothing short of
          transformative.
        </p>

        <p className="leading-8 mb-6">
          More than 50 merchants accept Bitcoin payments, and many residents
          receive regular sats as part of Afribit’s community programs. These
          programs include waste collectors, children, boda-boda drivers, local
          dancers, and even football players. It’s a powerful ecosystem where
          everyone, regardless of background, can participate.
        </p>

        <div className="relative w-full h-72 md:h-96 overflow-hidden my-8 shadow-lg">
          <Image
            src="/Afribit.jpg"
            alt="Afribit Kibera Bitcoin community"
            fill
            className="object-cover"
          />
        </div>

        <p className="leading-8 mb-6">
          What makes Kibera unique is the high level of Bitcoin education.
          Everyone I met understood how to use it, and most proudly showed me
          their <span className="text-primary">Blink Wallet</span> app. One of
          my favorite moments was paying a boda-boda driver in Bitcoin using{" "}
          <span className="text-primary">Blink wallet</span>, no intermediaries,
          no conversion into shillings. He smiled and said:{" "}
          <span className="text-secondary-light font-semibold">
            “I want Sats, not Kenyan shillings.”
          </span>
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-12 mb-6 border-l-4 border-secondary-light pl-4">
          Day 3 – Bitcoin Babies, Matangi: Empowering Mothers & Children
        </h2>

        <p className="leading-8 mb-6">
          On my final day, I traveled to Matangi in Kiambu County to visit the{" "}
          <span className="text-primary">Bitcoin Babies</span> project. This
          initiative, warmly introduced to me by Eve, the program manager,
          touched me deeply. It focuses on empowering mothers with newborns
          through financial literacy and Bitcoin education.
        </p>

        <p className="leading-8 mb-6">
          Each beneficiary mother receives weekly sats as Proof of Work (PoW)
          for participating in the program. These sats are spent in a network of
          around 10 local shops that accept Bitcoin. I was welcomed by the
          doctor who runs{" "}
          <span className="text-primary">Miale Medical Centre</span>, one of the
          few hospitals in the world that accepts Bitcoin payments. This is also
          where mothers bring their children for care, creating a holistic
          ecosystem of healthcare and financial empowerment.
        </p>

        <div className="relative w-full h-72 md:h-96 overflow-hidden mt-8 mb-4 shadow-lg">
          <Image
            src="/bitcoinbabies.jpg"
            alt="Bitcoin Babies project Matangi"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-sm mb-6 italic">
          With Eve and Joyce Koigi, the Bitcoin-accepting hairdresser in Matangi
        </p>
        <p className="leading-8 mb-6">
          Later, I met <span className="text-primary">Miale Joyce Koigi</span>,
          a hairdresser who accepts Bitcoin payments and is a passionate
          advocate. She told me that many women prefer to buy Bitcoin via{" "}
          <span className="text-primary">Bitika</span> instead of holding Kenyan
          shillings, trusting its speed, efficiency, and lower transaction
          costs.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-12 mb-6 border-l-4 border-secondary-light pl-4">
          The Bigger Picture: Kenya’s Bitcoin Innovation
        </h2>

        <p className="leading-8 mb-6">
          One of the things I loved most about Kenya is how innovative and
          proactive people are in embracing Bitcoin. From tools like{" "}
          <span className="text-primary">Tando</span>, which integrates with
          Mpesa, to the ease of buying Bitcoin through {" "}<span className="text-primary">Bitika</span>, the infrastructure is
          already strong.
        </p>

        <div className="relative w-full h-72 md:h-96 overflow-hidden my-8 shadow-lg">
          <Image
            src="/bitcoininnovation.jpg"
            alt="Kenya Bitcoin innovation"
            fill
            className="object-cover"
          />
        </div>

        <p className="leading-8 mb-6">
          During my stay, I lived entirely on Bitcoin, a reality that many
          Africans still find unimaginable. But in Kenya, it works.
        </p>

        <p className="leading-8 mb-6">
          As I returned home to Burundi, I carried with me not just stories, but
          a renewed sense of mission for our Bitcoin circular economy in Winteko
          village. What’s happening in Kenya proves that with the right mix of
          education, infrastructure, and community engagement, Bitcoin isn’t
          just a digital currency — it’s a tool for freedom and prosperity.
        </p>

        <p className="mt-12 text-center">
          Discover our project BTC Shule{" "}
          <Link
            href="https://btcshule.org"
            className="text-primary hover:underline font-semibold"
          >
            here
          </Link>{" "}
          .
        </p>
      </> 
    ),
  },
];

export default function BlogPage() {
  const params = useParams();
  const blog = blogs.find((b) => b.id === params?.id);

  if (!blog) return notFound();

  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px]">
        <article className="relative bg-background py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
                {blog.title}
              </h1>
              <p className="mt-4 text-gray-400 italic">
                By <span className="text-secondary-light">{blog.author}</span> ·{" "}
                {blog.date}
              </p>
            </motion.div>

            {/* Cover Image */}
            <div className="relative w-full h-72 md:h-96 overflow-hidden mb-12">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Blog Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="prose prose-invert prose-lg text-gray-600 text-lg max-w-none"
            >
              {blog.content}
            </motion.div>
          </div>
        </article>
      </main>
    </>
  );
}
