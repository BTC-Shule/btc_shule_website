"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import DonateButton from "@/components/DonateButton";

export default function CircularEconomyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px] bg-background text-gray-600">
        {/* Hero Section */}
        <section className="relative text-center py-24 md:py-40 overflow-hidden bg-secondary-light">
          <Image
            src="/heroImage.jpg"
            alt="Bitcoin Circular Economy - Winteko Village"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-extrabold text-primary drop-shadow-md mb-2 md:mb-4"
            >
              Bitcoin Circular Economy
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-extrabold text-primary drop-shadow-md"
            >
              Winteko Village
            </motion.h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              Demonstrating how Bitcoin can power real-world community
              development in Burundi through education, agriculture,
              entrepreneurship, and technology.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-5xl mx-auto px-6 py-20 space-y-12">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 leading-relaxed">
              The Bitcoin Circular Economy (BCE) is the cornerstone of BTC
              Shule’s mission in Winteko village, Burundi. It demonstrates how a
              decentralized digital currency can power real-world community
              development by connecting education, agriculture,
              entrepreneurship, and technology into a single financial
              ecosystem. Unlike linear aid models, the BCE recycles value
              internally — Bitcoin enters the community through education and
              donor channels, circulates via daily trade and savings, and
              continually regenerates economic activity without leaving the
              local economy.
            </p>
          </motion.div>

          {/* Objectives */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Objectives of the Circular Economy
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Promote financial sovereignty for unbanked populations.</li>
              <li>
                Create local liquidity through SATs circulation instead of fiat
                dependence.
              </li>
              <li>
                Encourage savings and investment via Bitcoin rather than
                depreciating national currency.
              </li>
              <li>
                Link education to tangible income by rewarding learning with
                Bitcoin.
              </li>
              <li>
                Build resilience through renewable energy, digital tools, and
                peer-to-peer infrastructure.
              </li>
            </ul>
          </div>

          {/* Mechanism of Value Flow */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Mechanism of Value Flow
            </h2>
            <p className="text-gray-600 mb-6">
              The Winteko BCE follows a closed-loop, four-stage process:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-gray-600">
              <li>
                <strong>Stage 1 — Input:</strong> Education & Donor Funding –
                Bitcoin enters the community through education-linked grants and
                donor transfers (e.g., HRF, Trezor Academy). Households and
                students receive SATs for completing lessons or attending
                workshops (“proof of work”).
              </li>
              <li>
                <strong>Stage 2 — Circulation:</strong> Local Commerce –
                Merchants and farmers accept Bitcoin for goods and services.
                Residents pay in SATs using Blink, Machankura, or Cashu.
              </li>
              <li>
                <strong>Stage 3 — Reinvestment:</strong> Savings &
                Entrepreneurship – Participants save part of their earnings in
                SATs and reinvest profits into tools and inventory. BTC Shule
                offers micro-grants for top performers.
              </li>
              <li>
                <strong>Stage 4 — Return:</strong> Education & Energy –
                Circulating BTC funds training sessions, vertical gardens, and
                solar power installations, completing the cycle.
              </li>
            </ol>
          </div>

          {/* Economic Sub-Models */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Economic Sub-Models
            </h2>
            <p className="text-gray-600 mb-10">
              BTC Shule’s BCE combines two interdependent micro-models:
            </p>

            {/* Adult Model */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 mb-20">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-secondary-light">
                  Adult Model — Vertical Gardening & Micro-Enterprise
                </h3>
                <p className="text-gray-600 mt-2">
                  Parents cultivate home gardens using vertical techniques,
                  selling produce for SATs. Every two weeks, participants earn
                  SATs rewards for progress and quality — transforming
                  subsistence farming into Bitcoin-based agribusiness.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-md rounded-2xl p-6 w-full md:w-1/2 text-center border border-gray-200"
              >
                <Image
                  src="/adultModel.png"
                  alt="Adult Model Diagram"
                  width={400}
                  height={250}
                  className="mx-auto"
                />
              </motion.div>
            </div>

            {/* Youth Model */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-secondary-light">
                  Youth Model — Mi Primer Bitcoin & Personal Development
                </h3>
                <p className="text-gray-600 mt-2">
                  Children attend weekly Bitcoin literacy classes, receive SATs
                  rewards, and learn saving and spending responsibility.
                  Together, both generations become active participants in the
                  Bitcoin economy.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white shadow-md rounded-2xl p-6 w-full md:w-1/2 text-center border border-gray-200"
              >
                <Image
                  src="/youthModel.png"
                  alt="Youth Model Diagram"
                  width={400}
                  height={250}
                  className="mx-auto"
                />
              </motion.div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "/GuMR7ZgWsAAYLDR.jpg",
              "/GuMR6HXXsAAipLH.jpg",
              "/GuMR6N2WkAAzRk4.jpg",
              "/DSC_0096.JPG.jpg",
              "/DSC_0092.JPG.jpg",
              "/GysbpR0XgAcSD2k.jpg",
              "/IMG_20250413_162621_274.jpg",
              "/IMG_20250413_163110_917.jpg",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Winteko image ${i + 1}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>

          {/* Social Dynamics */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Social and Cultural Dynamics
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Trust building through repeated SATs transactions.</li>
              <li>
                Community identity via local Bitcoin events like Pizza Day.
              </li>
              <li>Inter-generational continuity with shared family wallets.</li>
              <li>
                Transparency and accountability through traceable transactions.
              </li>
            </ul>
          </div>

          {/* Technology Table */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Technological Infrastructure
            </h2>
            <p className="text-gray-600 mb-6">
              BTC Shule’s BCE uses a resilient hybrid system designed for
              Africa’s connectivity realities.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-700 text-gray-600">
                <thead className="bg-gray-800 text-gray-300">
                  <tr>
                    <th className="p-3 text-left">Tool</th>
                    <th className="p-3 text-left">Function</th>
                    <th className="p-3 text-left">Connectivity Need</th>
                    <th className="p-3 text-left">Role in Circular Economy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "My Satoshi",
                      "Offline/online converter (BTC ↔ SATs ↔ BIF/USD)",
                      "Optional",
                      "Enables transparent pricing",
                    ],
                    [
                      "Blink Wallet",
                      "Lightning wallet",
                      "Internet (3G+)",
                      "Merchant payments & rewards",
                    ],
                    [
                      "Machankura",
                      "SMS Lightning wallet",
                      "2G/SMS",
                      "Inclusion of unbanked users",
                    ],
                    [
                      "Cashu",
                      "Chaumian e-cash vouchers",
                      "None",
                      "Offline private transfers",
                    ],
                    [
                      "Solar Microgrid",
                      "Energy billing system",
                      "Local node",
                      "Links Bitcoin to renewable power",
                    ],
                  ].map(([tool, func, conn, role], i) => (
                    <tr key={i} className="border-t border-gray-700">
                      <td className="p-3 font-semibold text-primary">{tool}</td>
                      <td className="p-3">{func}</td>
                      <td className="p-3">{conn}</td>
                      <td className="p-3">{role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Economic Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Economic Benefits
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Reduced transaction costs (no middlemen or bank fees).</li>
              <li>Protection against inflation.</li>
              <li>Stimulus for entrepreneurship and productive assets.</li>
              <li>Retention of local capital within Winteko.</li>
              <li>Improved financial literacy and confidence.</li>
            </ul>
          </div>

          {/* Risks */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Risks and Mitigation Strategies
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-700 text-gray-600">
                <thead className="bg-gray-800 text-gray-300">
                  <tr>
                    <th className="p-3 text-left">Risk</th>
                    <th className="p-3 text-left">Potential Impact</th>
                    <th className="p-3 text-left">Mitigation Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Bitcoin price volatility",
                      "Discourages short-term users",
                      "Promote 'stack sats' savings mindset",
                    ],
                    [
                      "Low connectivity zones",
                      "Limits Lightning transactions",
                      "Use Machankura & Cashu",
                    ],
                    [
                      "Regulatory uncertainty",
                      "Possible policy restrictions",
                      "Operate under educational framework",
                    ],
                    [
                      "Technical literacy gaps",
                      "Wallet misuse",
                      "Continuous training & peer mentoring",
                    ],
                    [
                      "Energy constraints",
                      "Device limitations",
                      "Expand solar microgrids",
                    ],
                  ].map(([risk, impact, mitigation], i) => (
                    <tr key={i} className="border-t border-gray-700">
                      <td className="p-3 font-semibold text-primary">{risk}</td>
                      <td className="p-3">{impact}</td>
                      <td className="p-3">{mitigation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Replication */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Replication and Scalability
            </h2>
            <p className="text-gray-600 mb-4">
              BTC Shule’s model can be replicated in other rural communities:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Start with education and local champions.</li>
              <li>Integrate merchants to create liquidity.</li>
              <li>Introduce SATs incentives for adoption.</li>
              <li>Deploy offline tools for low-connectivity areas.</li>
              <li>Connect solar grids for sustainability.</li>
            </ol>
            <p className="text-gray-600 mt-4">
              Each new village can launch with ≈ $5,000 BTC liquidity and one
              coordinator, becoming self-sustaining within 6–9 months.
            </p>
          </div>

          {/* Research */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Research and Learning Value
            </h2>
            <p className="text-gray-600 leading-relaxed">
              BTC Shule’s BCE serves as a living laboratory for exploring
              decentralized finance in rural development. Ongoing studies assess
              socio-cultural acceptance, gender adoption patterns, and economic
              impact using both qualitative and quantitative methods.
            </p>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Conclusion</h2>
            <p className="text-gray-600 leading-relaxed">
              The Bitcoin Circular Economy in Winteko has proven that Bitcoin
              can catalyze inclusive growth when tied to education, agriculture,
              and innovation — transforming aid-dependency into peer-to-peer
              empowerment. BTC Shule’s replicable model offers a framework for
              Africa:
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-primary mt-4">
              “Educate in Bitcoin, transact in Bitcoin, save in Bitcoin, and
              grow together.”
            </blockquote>
          </div>

          {/* Donation Section */}
          <div className="text-center mt-20 space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              Support the Circular Economy
            </h3>
            <p className="text-gray-600">
              Help BTC Shule expand this model to new villages across Africa.
            </p>
            <DonateButton />
            <a
              href="https://geyser.fund/project/btcshule"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold underline hover:text-secondary-light block mt-4"
            >
              Learn more on Geyser →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
