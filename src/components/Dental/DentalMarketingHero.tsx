import React from "react";
import DentalForm from "./DentalForm";


export default function DentalMarketingHero() {
    return (
        <section className=" mt-[-120px] lg:mt-[-128px] pt-48 lg:pt-60 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: "url('/hero_slider_1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"/>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                  🦷 Dental Marketing Specialists
                </span>
              </div>
              <h1 className="text-3xl md:text-6xl font-bold leading-tight text-white">
                Grow Your Dental Practice With a Proven Patient 
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Acquisition Systems</span>
              </h1>
              <p className="text-lg md:text-xl text-white">
               We help dental practices in the USA & Canada generate predictable patient leads and revenue.
              </p>
                <div className="flex items-center md:justify-center lg:justify-normal gap-8 ">
                <div>
                  <p className="text-3xl font-bold text-blue-600">50+</p>
                  <p className="text-white text-sm">Practices Grown</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">3.8K+</p>
                  <p className="text-white text-sm">New Patients/Month</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">6x</p>
                  <p className="text-white text-sm">Average ROI</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <a href="/case-studies/digital-marketing-for-dentists-case-study" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 text-center">
                   See Our Success Stories
                </a>
              </div>

            </div>
            {/* Form */}
           <div className="relative">
              <DentalForm/>
            </div>

          </div>
        </div>
      </section>
    )
}