import React from "react";


export default function DentalMarketingWhyChooseUs({whyChoose}: {whyChoose: {icon: any, title: string, desc: string}[]}) {
    return(
              <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Why Dentist Choose BixelTek</h2>
                    <p className="text-xl text-gray-600">We&apos;re not just another marketing agency; we&apos;re strategic growth partners for dental practices.</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {whyChoose.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                            <Icon className="text-white" size={32} />
                          </div>
                          <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
    )
}