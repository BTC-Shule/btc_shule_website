export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[url('/btchero.jpg')] bg-contain bg-center bg-no-repeat"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <div className="bg-secondary-light/80 rounded-xl shadow-2xl p-8 md:p-12 text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Empowering Burundi through Bitcoin
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Join us in establishing a circular Bitcoin economy that provides{" "}
              <span className="text-primary font-semibold">financial autonomy{" "}</span> 
              through education and real-world adoption.
            </p>
          </div>

          {/* Right Column */}
          <div className="text-white lg:pl-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Circular Bitcoin Economy in Burundi
            </h2>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
              Get safe, save money, and build a future powered by open,
              decentralized finance.
            </p>
            <p className="text-lg text-gray-300">
              We create sustainable impact through Bitcoin adoption, community
              education, and practical innovation.
            </p>
            {/* Call-to-action */}
            <div className="mt-8">
              <a
                href="#services"
                className="inline-block bg-primary hover:bg-primary-dark text-background font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
