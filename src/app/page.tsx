import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Statistics from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px]">
        <Hero />
        <AboutUs />
        <Services />
        <Statistics />
      </main>
    </>
  );
}
