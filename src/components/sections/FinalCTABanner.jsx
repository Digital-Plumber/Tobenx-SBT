import React from 'react';

export default function FinalCTABanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-indigo-700 to-cyan-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to power your business?</h2>
        <p className="text-white/90 mb-6">Join hundreds of African businesses already building smarter with Tobenx.</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold">Get Started Free</button>
          <button className="px-5 py-3 rounded-full bg-white/10 text-white font-medium">Chat on WhatsApp</button>
          <button className="px-5 py-3 rounded-full bg-white/10 text-white font-medium">Call Us</button>
        </div>
      </div>
    </section>
  );
}
