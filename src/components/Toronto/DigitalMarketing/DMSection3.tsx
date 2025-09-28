"use client";

import React from 'react';

export default function ServicesToronto() {

  const services = [
    {
      title: 'Google Ads Management',
      description:
        'Many businesses waste budget on ads that don’t convert. We set up and optimize campaigns to target the right audience, helping you generate more leads at a lower cost per acquisition.',
    },
    {
      title: 'SEO Services',
      description:
        'If your business isn’t ranking in Google, you’re invisible to customers. Our SEO strategies improve local and national visibility, bringing in sustainable organic leads and long-term growth.',
    },
    {
      title: 'Web Design & Development',
      description:
        'Outdated websites reduce trust and conversions. We design modern, mobile-first, SEO-ready websites that build credibility and turn visitors into paying customers.',
    },
    {
      title: 'Social Media Marketing',
      description:
        'Low engagement weakens your brand presence. We manage campaigns and create content that boosts visibility, builds trust, and connects you with your target audience.',
    },
    {
      title: 'Analytics & CRO',
      description:
        'Without proper tracking, marketing is guesswork. We provide full analytics and conversion optimization, giving you clarity on performance and helping you improve ROI.',
    },
    {
      title: 'Graphic Design & Branding',
      description:
        'Inconsistent branding confuses customers. Our design team creates logos, ad creatives, and brand assets that strengthen your identity and make your business stand out in Toronto’s competitive market.',
    },
  ];

  return (
    <section className='relative py-24'>
      {/* Background Blobs */}
      <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>

      <div>
        {/* Section Heading */}
        <div className='max-w-[80%] mx-auto mb-5 text-center'>
          <h2 className='text-white text-4xl lg:text-6xl max-w-7xl mx-auto font-inter mb-3 font-semibold'>
            Digital Marketing Services That <span className='text-blue-500'>Solve Your Business Challenges</span>
          </h2>
          <p className='text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto'>
            At Bixeltek, we offer a complete range of digital marketing services in Toronto. Each service is designed to solve a real business problem and deliver measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[75%] mx-auto mt-10 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative w-full h-80 border border-gray-800 bg-black/10 hover:bg-blue-600 transition-all duration-300 flex flex-col justify-center items-center p-10 md:p-16`}
            >
              <h3 className="text-white text-2xl font-bold text-center mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm text-center">{service.description}</p>

              {/* Decorative Plus Icons */}
              {index % 4 === 0 && (
                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 1 || index === 0 || index === 2) && (
                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 2 || index === 0 || index === 3) && (
                <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
              {(index % 4 === 3 || index === 5) && (
                <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                  <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
