import React from "react";

export default function DentalMarketingPain() {
    return (
             <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
              😰 Common Practice Struggles
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Tired of Empty Schedules?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            You&apos;re not alone. Most dental practices face these challenges every single day:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: "🖱️", 
                title: "Non-Converting Website", 
                desc: "Visitors land on your site but don’t book appointments",
                gradient: "from-red-500 to-pink-500",
                bgColor: "bg-red-50",
                borderColor: "border-red-200"
              },
              { 
                icon: "📉", 
                title: "Low Rankings", 
                desc: "Buried on page 3 of Google while competitors thrive",
                gradient: "from-orange-500 to-amber-500",
                bgColor: "bg-orange-50",
                borderColor: "border-orange-200"
              },
              { 
                icon: "💸", 
                title: "Wasted Ad Spend", 
                desc: "Clicks that don't convert into appointments",
                gradient: "from-amber-500 to-yellow-500",
                bgColor: "bg-amber-50",
                borderColor: "border-amber-200"
              },
              { 
                icon: "❓", 
                title: "Irrelevant Clicks & Calls", 
                desc: "Traffic that doesn’t translate into real patients",
                gradient: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-50",
                borderColor: "border-yellow-200"
              }
            ].map((pain, i) => (
              <div key={i} className={`bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${pain.borderColor} group`}>
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${pain.gradient} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {pain.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">{pain.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pain.desc}</p>
                <div className={`mt-4 h-1 w-16 mx-auto rounded-full bg-gradient-to-r ${pain.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white/80 backdrop-blur-sm border-2 border-orange-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Sounds familiar? 
            </p>
            <p className="text-gray-600 mb-4">
              We&apos;ve helped over 500 practices break free from these challenges and achieve consistent growth.
            </p>
            <a href="#contact" className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105">
              Let&apos;s Fix This Together →
            </a>
          </div>
        </div>
      </section>
    )
}