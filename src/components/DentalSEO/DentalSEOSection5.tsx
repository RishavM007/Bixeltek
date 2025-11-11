import React from 'react';

const AISEO = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="max-w-[80%] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-medium text-gray-800 mb-6 leading-tight">
            Enter AI SEO — <span className="font-semibold text-red-600">The Future of Search</span> for Dental Clinics
          </h1>
          <p className="text-lg text-gray-800 max-w-5xl mx-auto leading-relaxed">
            Google&apos;s Search Generative Experience (SGE), Gemini, and AI Overviews are changing everything. 
            They no longer just list pages — they summarize answers.
          </p>
         
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - What is AI SEO */}
          <div className="space-y-8">
            {/* What is AI SEO */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-500 rounded-full mr-4"></span>
                2.1 What Is AI SEO?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI SEO (Artificial Intelligence SEO) is about optimizing your online presence so that 
                Google&apos;s machine-learning systems recognize your entity relationships — your brand, 
                services, location, doctors, and reputation — and confidently recommend you in its generated answers.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-400">
                <p className="text-gray-700 font-medium">
                  <span className="text-blue-600 font-semibold">In plain English:</span><br />
                  Traditional SEO teaches Google what you say you do.<br />
                  AI SEO teaches Google who you are and why you&apos;re the best choice.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-8 bg-green-500 rounded-full mr-4"></span>
                2.3 How AI SEO Benefits Dental Clinics
              </h2>
              <div className="space-y-4">
                {[
                  "Appears in AI Overview and voice search results",
                  "Increases 'brand mentions' even beyond website clicks",
                  "Positions you as an authoritative entity in your city",
                  "Prepares your site for the next decade of AI-first search"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 group-hover:bg-green-500 transition-colors duration-300"></div>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Core Elements */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
              <span className="w-2 h-8 bg-purple-500 rounded-full mr-4"></span>
              2.2 Core Elements of AI SEO
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "Entity-Based Optimization",
                  description: "We define your practice, dentists, and treatments as structured 'entities' in Google's knowledge graph using schema and contextual linking.",
                  color: "purple"
                },
                {
                  title: "Topical Mapping",
                  description: "We build interconnected topic clusters — e.g. 'Dental Implants → Aftercare → Cost → FAQ' — so search engines understand depth and expertise.",
                  color: "blue"
                },
                {
                  title: "Semantic Content Writing",
                  description: "We write naturally structured copy that answers questions the way AI reads them — not keyword-stuffed, but intent-driven and contextual.",
                  color: "green"
                },
                {
                  title: "E-E-A-T Signals (Experience, Expertise, Authority, Trust)",
                  description: "We strengthen your reputation through reviews, profiles, and mentions that align with Google's AI confidence models.",
                  color: "red"
                },
               
              ].map((element, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4">
                    <div className={`w-3 h-3 rounded-full mt-2 bg-${element.color}-400 group-hover:bg-${element.color}-500 transition-colors duration-300`}></div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                        {element.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {element.description}
                      </p>
                    </div>
                  </div>
                  {index < 5 && (
                    <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISEO;