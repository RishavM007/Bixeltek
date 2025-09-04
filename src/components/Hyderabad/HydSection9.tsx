"use client";

import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      
      <div className="absolute bottom-0 left-0 w-full h-[400px] pointer-events-none -z-10">
        <Image
          src="/Abstract.png" 
          alt="Background"
          fill
          className="object-cover z-40"
        />
      </div>

      <div className="text-center mb-16">
        <p className="text-blue-500 font-medium mb-4">How to Know</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          How to Pick the Right <span className="text-blue-500">Agency</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Choosing the right digital marketing agency is crucial. The right
          agency helps you grow. The wrong one wastes time, money, and
          opportunities. Ask the right questions before making the decision.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        
        <div className="bg-black/70 border-2 border-blue-600 rounded-2xl p-8 text-center hover:bg-blue-600/10 transition">
          <div className="counter-text text-6xl mb-6">01</div>
          <h3 className="text-xl font-semibold mb-4">Check Case Studies</h3>
          <p className="text-gray-300">
            Can they showcase <span className="text-blue-400">case studies</span>{" "}
            from businesses like yours? A good agency demonstrates experience in
            your industry and provides proof of past success.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-black/70 border-2 border-blue-600 rounded-2xl p-8 text-center hover:bg-blue-600/10 transition">
          <div className="counter-text text-6xl mb-6">02</div>
          <h3 className="text-xl font-semibold mb-4">Verify Expertise & Certifications</h3>
          <p className="text-gray-300">
            Do they have <span className="text-blue-400">certified expertise</span>{" "}
            and official partnerships? Certifications and partnerships reflect
            professionalism and access to advanced tools and knowledge.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-black/70 border-2 border-blue-600 rounded-2xl p-8 text-center hover:bg-blue-600/10 transition">
          <div className="counter-text text-6xl mb-6">03</div>
          <h3 className="text-xl font-semibold mb-4">Full-Service Offerings</h3>
          <p className="text-gray-300">
            Do they offer <span className="text-blue-400">SEO, Ads, Web, and Branding</span>? 
            Agencies that provide all-round services create integrated strategies,
            avoiding fragmented efforts that fail to deliver results.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-black/70 border-2 border-blue-600 rounded-2xl p-8 text-center hover:bg-blue-600/10 transition">
          <div className="counter-text text-6xl mb-6">04</div>
          <h3 className="text-xl font-semibold mb-4">Transparent Reporting</h3>
          <p className="text-gray-300">
            Do they report results <span className="text-blue-400">transparently</span>, 
            tied to ROI? Clear reporting ensures accountability and lets you 
            track growth—if results are vague, it’s a warning sign.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/contact-us"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition"
        >
          Get Started Now →
        </a>
      </div>
    </section>
  );
}
