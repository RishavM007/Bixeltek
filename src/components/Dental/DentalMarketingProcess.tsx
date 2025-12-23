import React from "react";

export default function DentalMarketingProcess({process}: {process: {title: string, desc: string}[]}) {
    return(
          <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Path to a Thriving Practice</h2>
            <p className="text-xl text-blue-100">Simple, proven process that delivers results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition">
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-blue-100">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/30"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105">
              Start Your Journey Today
            </a>
          </div>
        </div>
      </section>
    )
}