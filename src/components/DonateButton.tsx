"use client";

export default function DonateButton() {
  return (
    <section className="w-full mx-auto m-16 flex items-center justify-center">
        <a
      href="/donate"
      rel="noopener noreferrer"
      className="text-background bg-primary hover:bg-primary-dark py-2 px-6 rounded-3xl transition-colors"
    >
      Donate Now
    </a>
    </section>
    
  );
}
