import React from "react";


export default function DentalMarketingExamples({caseStudies}: any) {
    return (

              <section id="results" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real Results for Real Practices</h2>
            <p className="text-xl text-gray-600">See how we&apos;ve transformed dental practices like yours</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study:any, i:any) => (
              <div key={i} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white">
                  <h3 className="font-bold text-xl mb-1">{study.name}</h3>
                  <p className="text-blue-100 text-sm mb-4">{study.location}</p>
                  <div className="bg-gradient-to-r from-orange-400 to-red-400 backdrop-blur-sm p-3 rounded-lg">
                    <p className="text-sm font-semibold mb-1">Challenge:</p>
                    <p className="text-sm">{study.challenge}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-green-800 mb-2">✨ Result:</p>
                    <p className="text-green-700 font-bold">{study.result}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        {/* @ts-ignore */}
                        <p className="text-2xl font-bold text-blue-600">{value}</p>
                        <p className="text-xs text-gray-600 uppercase">{key}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#contact" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105">
              Get Similar Results Like These
            </a>
          </div>
        </div>
      </section>
    )
}