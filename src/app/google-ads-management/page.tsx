import React from 'react'
import { LogoTicker2 } from '@/components/GoogleAdsCarousel'
import {
  Target,
  Clock,
  BarChart3,
  Building2,
  MonitorSmartphone,
  Palette,
  Check
} from "lucide-react";
import {
  MdLocalHospital,
  MdStorefront,
  MdLocationCity,
  MdBuild,
} from "react-icons/md";
import { FaGraduationCap, FaRocket } from "react-icons/fa";
import Image from 'next/image';
import image1 from '@/assets/div.png'
import image2 from '@/assets/div2.png'
import FAQSection from '@/components/NewFaq';

export default function page() {
  const services = [
    {
      title: "Precision Targeting",
      description:
        "Reach the right customers at the right time. With advanced targeting—keywords, demographics, locations, devices, and remarketing—we eliminate wasted clicks and focus only on high-intent traffic that converts.",
      icon: Target,
    },
    {
      title: "Real-Time Smart Bidding",
      description:
        "Leverage Google’s AI-driven bidding strategies (Target CPA, Target ROAS, Maximize Conversions) to win auctions at the best price. We fine-tune signals like time, device, and audience intent to optimize spend.",
      icon: Clock,
    },
    {
      title: "Data-Driven Insights",
      description:
        "Every decision is backed by data. From GA4 analytics and Tag Manager tracking to offline conversions and CRM integration, we deliver a complete view of ROI and refine campaigns continuously.",
      icon: BarChart3,
    },
    {
      title: "Industry Solutions",
      description:
        "From dental clinics and eCommerce brands to real estate and service businesses, we apply sector-specific strategies—unique ad messaging, extensions, and funnels designed for your audience’s journey.",
      icon: Building2,
    },
    {
      title: "Cross-Network Campaigns",
      description:
        "Google Ads isn’t just search. We unify your visibility across Search, Display, YouTube, Shopping, Performance Max, and Maps—building campaigns that scale across platforms seamlessly.",
      icon: MonitorSmartphone,
    },
    {
      title: "Creative Ad Copy & Design",
      description:
        "High-performing ads need powerful creatives. We craft compelling ad copy and eye-catching visuals tailored to your brand, ensuring higher click-through rates and stronger engagement.",
      icon: Palette,
    },
  ];

  const STEPS = [
    {
      number: "01",
      title: "Initial Consultation",
      desc: "Maximize visibility and impact with coordinated campaigns across Google, Facebook, LinkedIn, and more.",
    },
    {
      number: "02",
      title: "Strategy Development",
      desc: "Our team crafts a customized advertising strategy utilizing the latest tools and insights to ensure maximum impact.",
    },
    {
      number: "03",
      title: "Campaign Setup",
      desc: "We set up your campaigns with precision, integrating best practices for immediate effectiveness right out of the gate.",
    },
    {
      number: "04",
      title: "Monitoring & Optimization",
      desc: "Our work doesn’t stop at launch. We continuously monitor performance & make real-time adjustments to drive optimal results.",
    },
    {
      number: "05",
      title: "Reporting & Refinement",
      desc: "You receive regular, detailed reports on campaign performance, ensuring full transparency with suggestions for further refinement.",
    },
  ];

  const points = [
    {
      title: "Maximize Efficiency –",
      desc: "Every click counts, zero wasted budget.",
    },
    {
      title: "Enhanced Brand Visibility –",
      desc: "Be present when customers are searching.",
    },
    {
      title: "Qualified Traffic –",
      desc: "Attract high-intent users ready to convert.",
    },
    {
      title: "Scalable Campaigns –",
      desc: "Grow seamlessly across budgets and geographies.",
    },
    {
      title: "Competitive Edge –",
      desc: "Smart bidding and audience insights that outperform competitors.",
    },
    {
      title: "Multi-Platform Targeting –",
      desc: "Search, Display, YouTube, Shopping, and Apps in one ecosystem.",
    },
  ];


  const CARDS = [
    {
      title: "Search Ads",
      desc: "Capture high-intent customers searching for your services with compelling, conversion-optimized ad copy.",
    },
    {
      title: "Display Ads",
      desc: "Build awareness and stay top-of-mind with creative banners across the Google Display Network.",
    },
    {
      title: "Shopping Ads",
      desc: "Perfect for eCommerce—showcase your products directly in Google search and drive qualified purchases.",
    },
    {
      title: "Remarketing Ads",
      desc: "Reconnect with past visitors using tailored messaging that brings them back to convert.",
    },
    {
      title: "YouTube Ads",
      desc: "Engage audiences with impactful video campaigns designed to build brand visibility and drive action.",
    },
    {
      title: "App Promotion Ads",
      desc: "Promote app installs and in-app engagement with campaigns built to grow your mobile audience.",
    },
  ];

  const INDUSTRIES = [
    {
      title: "Healthcare & Dental Clinics",
      desc: "Drive patient bookings, emergency appointments, and brand visibility.",
      icon: <MdLocalHospital className="w-6 h-6 text-[#5FA4E6]" />,
    },
    {
      title: "E-commerce & Retail",
      desc: "Maximize online sales with Shopping Ads, remarketing, and cross-platform strategies.",
      icon: <MdStorefront className="w-6 h-6 text-[#D2AB67]" />,
    },
    {
      title: "Real Estate & Construction",
      desc: "Generate high-quality buyer and investor leads.",
      icon: <MdLocationCity className="w-6 h-6 text-[#665DCD]" />,
    },
    {
      title: "Local Service Businesses",
      desc: "Plumbers, cleaning services, salons, and more—hyperlocal campaigns that bring calls and visits.",
      icon: <MdBuild className="w-6 h-6 text-[#5FA4E6]" />,
    },
    {
      title: "Education & EdTech",
      desc: "Boost student enrollments with geo-targeted campaigns.",
      icon: <FaGraduationCap className="w-6 h-6 text-[#D2AB67]" />,
    },
    {
      title: "Startups & SaaS",
      desc: "Drive sign-ups, demos, and app installs with tailored funnels.",
      icon: <FaRocket className="w-6 h-6 text-[#665DCD]" />,
    },
  ];

  const POINTS2 = [
    { title: "Certified Google Partner Agency" },
    { title: "7+ years of international PPC experience" },
    { title: "Proven frameworks", desc: " for healthcare, eCommerce, real estate, and services" },
    { title: "Transparent pricing & reporting" },
    { title: "Dedicated in-house team", desc: " for execution & growth" },
  ];


  return (
    <>
      <section className="relative flex flex-col items-center justify-center h-[100vh] bg-[#131313] -mt-32 text-center px-6 overflow-hidden">
        <div className='flex justify-center items-center'>
          {/* Blue Sphere Glow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500 opacity-20 blur-3xl pointer-events-none" />

          <div className="relative z-10 mt-40 max-w-7xl">
            {/* Headline */}
            <h1 className="text-4xl md:text-7xl font-bold leading-tight text-white">
              Achieve Growth with{" "}
              <span className="text-blue-500">Google Ads Campaigns</span> That Convert
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Turn searches into customers with precision-targeted campaigns that generate more leads,
              boost sales, and maximize ROI.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Start Your Campaign
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-full border border-gray-400 text-gray-200 hover:bg-gray-800 transition"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
        <LogoTicker2 />
      </section>
      <section className="relative bg-[#131313] mt-20 text-white max-w-7xl mx-auto py-20 px-0">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold">
            Customized <span className="text-blue-500">Google Ads Services</span>{" "}
            Designed for Your Business Success
          </h2>

          {/* Cards Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-6 text-left hover:scale-105 transition-transform"
                >
                  <Icon className="w-10 h-10 text-blue-100 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#131313] w-full px-6 py-20 flex justify-center">
        <div className="w-full max-w-6xl">
          <h2 className="text-center text-white text-3xl font-bold mb-12">
            Here’s How We Do It
          </h2>

          <div className="relative border-l border-white/10 ml-6">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className={`relative mb-12 pl-12 ${i % 2 === 0 ? "translate-x-6" : "-translate-x-6"
                  }`}
              >
                {/* connector dot */}
                <div className="absolute -left-[9px] top-5 w-4 h-4 rounded-full bg-gradient-to-r from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] shadow-md"></div>

                {/* Card */}
                <div className="bg-[#111827] rounded-lg p-6 shadow-lg border border-white/10">
                  <div className="flex items-start gap-4">
                    <h3 className="text-5xl font-bold text-gray-500/80">
                      {step.number}
                    </h3>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-gray-400 text-sm max-w-md">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#131313] mt-20 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Unlock the Potential of <span className="text-blue-500">Google Ads</span>
            </h2>
            <h3 className="text-xl font-semibold mb-6">
              Why Businesses Trust Google Ads with Bixeltek
            </h3>

            <ul className="space-y-4 text-gray-300">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>
                    <span className="text-blue-400 font-medium">{point.title} </span>
                    {point.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex flex-row-reverse justify-center relative">
            {/* Optional glowing background */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-500 opacity-20 blur-3xl -z-10" />

            <Image
              src={image1} // Replace with actual image path in /public
              alt="Google Ads Dashboard"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="mt-[-10px] flex flex-wrap justify-start gap-4">
            <a
              href="#"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Start Your Campaign
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-full border border-gray-400 text-gray-200 hover:bg-gray-800 transition"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>
      <section className="bg-[#131313] w-full px-6 py-16 flex justify-center">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


          <div className="flex justify-center">
            <Image
              src={image2} 
              alt="Why Choose Bixeltek"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Why Choose<span className="text-blue-500"> Bixeltek</span> ?
            </h2>

            <ul className="space-y-4 text-gray-300">
              {POINTS2.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#5FA4E6] flex-shrink-0 mt-1" />
                  <span>
                    <span className="text-white font-medium">{point.title}</span>
                    {point.desc && <span>{point.desc}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#131313] max-w-7xl mx-auto px-6 py-12">
        {/* Top container with title + button */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Comprehensive Google Ads Services
          </h2>
          <button className="px-5 py-3 rounded-full bg-black border border-white text-white font-medium hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-2 md:grid-cols-3">
          {CARDS.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center px-6 py-12 ${i % 2 === 0
                ? "bg-gradient-to-b from-[#665DCD] via-[#5FA4E6] to-[#D2AB67]"
                : "bg-transparent"
                }`}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {stat.title}
              </h3>
              <p className="mt-2 text-sm text-white/80 max-w-[220px]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#131313] relative w-full px-6 py-32 flex justify-center" style={{ backgroundImage: "url('div (1).jpg')" }}>
        <div className="w-full max-w-7xl">
          {/* Title */}
          <h2 className="text-3xl font-inter md:text-6xl font-bold text-white mb-12 text-center">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Icons */}
            <div className="space-y-8">
              {INDUSTRIES.map((item, i) => (
                <div key={i} className="flex border bg-white/5 backdrop:blur-3xl border-white/20 rounded-2xl p-5 items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-2xl font-inter font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm font-poppins text-white/80 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
      <FAQSection/>
    </>
  )
}
