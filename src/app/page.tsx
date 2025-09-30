import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Programs from "@/components/Programs";
import Statistics from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import GetInvolved from "@/components/GetInvolved";
import Events from "@/components/Events";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] md:pt-[136px]">
        <Hero />
        <AboutUs />
        <Statistics />
        <Programs />
        <GetInvolved />
        <Testimonials />
        <Events />
        <Blog />
      </main>
    </>
  );
}
