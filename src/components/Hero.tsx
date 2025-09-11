export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[url('/btchero.jpg')] bg-contain bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/72"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"></div>
    </section>
  );
}
