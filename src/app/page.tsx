import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px]">
        <Hero />
        <AboutUs />
      </main>
    </>
  );
}
