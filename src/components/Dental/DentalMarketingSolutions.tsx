import React from "react";

export default function DentalMarketingSolutions({services}: {services: {icon: any, title: string, desc: string}[]}) {
    return(
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Dental Marketing Solutions</h2>
            <p className="text-xl text-gray-600">Everything you need to dominate your local market</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <a href="#contact" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105">
              See How We Can Help Your Practice
            </a>
          </div>
        </div>
      </section>
    )
}