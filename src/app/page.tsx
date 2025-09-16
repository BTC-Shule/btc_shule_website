import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px]">
        <Hero />
        <AboutUs />
        <Services />
      </main>
    </>
  );
}
