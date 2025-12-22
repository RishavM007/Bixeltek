export const metadata = {
  title: "Dental Marketing Agency | Get More Patients & Appointments – Bixeltek",
  description:
    "Bixeltek is a dental marketing agency helping dental clinics grow with SEO, Google Ads, and high-converting dental websites. Get predictable patient growth.",
  keywords:
    "dental marketing, dental marketing agency, marketing for dentists, dental SEO, dentist Google Ads, dental website design, dental practice marketing",
  openGraph: {
    title: "Dental Marketing That Brings Real Patients | Bixeltek",
    description:
      "We help dental practices generate consistent appointments using SEO, Google Ads, and conversion-focused dental websites.",
    type: "website",
  },
  alternates: {
    canonical: "https://bixeltek.com/dental-marketing",
  },
};


import React from 'react';
import { Menu, X, ChevronDown, Star, CheckCircle, Phone, Mail, MapPin, TrendingUp, Users, Target, Zap, Award, BarChart3, MessageSquare, Globe, Search, MousePointerClick, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ContactFromNew from '@/components/ContactFormNew';
import AccordianDental from '@/components/Dental/AccordianDental';

export default function BixelTekLanding() {


  const services = [
    { icon: Globe, title: "Custom Dental Websites", desc: "Strategically built websites focused on lead generation, patient trust, and consistent bookings" },
    { icon: Search, title: "Local SEO Domination", desc: "Rank #1 on Google Maps and search results in your area" },
    { icon: MousePointerClick, title: "Google Ads & PPC", desc: "High-converting ad campaigns that fill your schedule" },
    { icon: MessageSquare, title: "Social Media Marketing", desc: "Engage your community and build trust on every platform" },
    { icon: Star, title: "Reputation Management", desc: "Get more 5-star reviews and manage your online presence" },
    { icon: TrendingUp, title: "Content Marketing", desc: "Educational content that establishes you as the local expert" },
    { icon: Phone, title: "Call Tracking & Analytics", desc: "Know exactly where every patient comes from" },
    { icon: Mail, title: "Email Marketing", desc: "Keep patients coming back with automated retention campaigns" }
  ];

  const process = [
    { title: "Discovery Call", desc: "We analyze your practice goals, competition, and growth opportunities" },
    { title: "Custom Strategy", desc: "Receive a tailored marketing roadmap designed for your unique practice" },
    { title: "Launch & Implement", desc: "We execute the plan while you focus on delivering exceptional care" },
    { title: "Optimize & Scale", desc: "Continuous optimization ensures maximum ROI and sustainable growth" }
  ];

  const caseStudies = [
    {
      name: "Markham Gateway Dentistry",
      location: "Scarborough, CA",
      challenge: "Started with $20k revenue per month, we scaled them to over $100,000 a month in revenues ",
      result: "127 new patients in 90 days",
      metrics: { patients: "+380%", roi: "520%", calls: "+295%" }
    },
    {
      name: "Revita Family Dentistry",
      location: "Brampton, CA",
      challenge: "From brand new dentistry to $80,000 in revenues a months",
      result: "Ranked #1 for 23 local keywords",
      metrics: { traffic: "+425%", bookings: "+310%", revenue: "+265%" }
    },
    {
      name: "Listiyo Family Dentistry",
      location: "California, US",
      challenge: "Struggling with high competition and low calls , we help them consistently book 50 patients a month",
      result: "Cut cost per patient by 65%",
      metrics: { cpl: "-65%", conversions: "+240%", roi: "680%" }
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      practice: "Summit Dental Care",
      location: "Denver, CO",
      text: "BixelTek transformed our practice. We went from struggling to fill our schedule to having a 3-week waitlist. Their dental expertise makes all the difference.",
      rating: 5
    },
    {
      name: "Dr. James Park",
      practice: "Park Family Dentistry",
      location: "Seattle, WA",
      text: "Finally, a marketing agency that understands dentistry. The ROI has been incredible - we've seen a 300% increase in new patient inquiries.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      practice: "Smile Bright Orthodontics",
      location: "Phoenix, AZ",
      text: "Professional, transparent, and results-driven. BixelTek doesn't just promise results - they deliver them consistently month after month.",
      rating: 5
    }
  ];

  const whyChoose = [
    { icon: Target, title: "Dental-Exclusive Focus", desc: "We only work with dental practices - we know your industry inside out" },
    { icon: BarChart3, title: "Transparent Reporting", desc: "Detailed monthly reports showing exactly where your investment goes" },
    { icon: Shield, title: "No Long Contracts", desc: "Month-to-month agreements because we earn your business every day" },
    { icon: Users, title: "Dedicated Team", desc: "Your own account manager who knows your practice personally" },
    { icon: Award, title: "Proven Track Record", desc: "500+ dental practices grown with our systematic approach" },
    { icon: Zap, title: "Fast Implementation", desc: "Start seeing results within 30-60 days, not 6 months" }
  ];


  const packages = [
    {
      name: "Starter",
      price: "1,499",
      tag: "For New Practices",
      features: [
        "Professional Website Design",
        "Basic Local SEO Setup",
        "Google Business Profile Optimization",
        "Social Media Setup",
        "Monthly Performance Report",
        "Email Support"
      ]
    },
    {
      name: "Growth",
      price: "2,999",
      tag: "Most Popular",
      popular: true,
      features: [
        "Everything in Starter, plus:",
        "Advanced Local SEO",
        "Google Ads Management (up to $2k spend)",
        "Social Media Management (3 posts/week)",
        "Reputation Management",
        "Call Tracking",
        "Priority Phone Support",
        "Dedicated Account Manager"
      ]
    },
    {
      name: "Premium",
      price: "4,999",
      tag: "For Established Practices",
      features: [
        "Everything in Growth, plus:",
        "Multi-Location SEO",
        "Advanced Google Ads (up to $5k spend)",
        "Social Media Management (daily posts)",
        "Content Marketing & Blogging",
        "Email Marketing Automation",
        "Conversion Rate Optimization",
        "Quarterly Strategy Sessions"
      ]
    }
  ];

  return (
    <div className="min-h-screen ">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: "url('/hero_slider_1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center cemter",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"/>
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
              <div className="flex flex-col md:flex-row gap-4">
                <a href="/case-studies/digital-marketing-for-dentists-case-study" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 text-center">
                   See Our Success Stories
                </a>
              </div>
              <div className="flex items-center md:justify-center lg:justify-normal gap-8 pt-4">
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
            </div>
            {/* Form */}
           <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 max-w-xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Get Your Free Dental Growth Audit
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Fill out the form and our dental marketing experts will contact you.
                </p>

                <form className="space-y-4">
                  {/* Row 1: Dental Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Dental Practice Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Clinic Name"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  {/* Row 2: Website & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Website
                      </label>
                      <input
                        type="text"
                        placeholder="www.yourclinic.com"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Phone Number<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  {/* Row 3: City (Full Width) */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      City<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your city"
                      className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your current challenges"
                      className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-[1.02]"
                  >
                    Get Free Audit
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    By submiting the form above, you consent to receive informational SMS and SMS-based appointment reminders from Bixeltek&apos;s Ideas at the phone number provided. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP. Reply HELP for help. Privacy Policy & Terms.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pain Points */}
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

      {/* Services */}
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

      {/* Process */}
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

      {/* Case Studies */}
      <section id="results" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real Results for Real Practices</h2>
            <p className="text-xl text-gray-600">See how we&apos;ve transformed dental practices like yours</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
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
              Get Results Like These
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Dentist Choose BixelTek</h2>
            <p className="text-xl text-gray-600">We&apos;re not just another marketing agency</p>
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

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Dentists Say About Us</h2>
            <p className="text-xl text-gray-600">Don&apos;t just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.practice}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
            <AccordianDental/>

      {/* Final CTA */}
      <section className="w-full bg-gray-50" id='contact'>
      <div
        className="relative flex justify-center items-center text-white min-h-[70vh] shadow-xl p-10 overflow-hidden"
        style={{
          backgroundImage: `url('/cta_bg_1.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay (optional for readability) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 md:container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
          {/* Left Text Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-6xl font-bold mb-4 text-white">
             Ready to Grow Your Practice?
            </h2>
            <p className="text-gray-200 mb-4 max-w-2xl text-lg md:text-xl">
              Every week you delay is another week your competitors&apos; phones keep ringing instead of yours. Patients are searching right now. If they don’t find you, they’ll book with someone else.
            </p>
            <p className="text-gray-200 mb-6 text-lg md:text-xl">
              Let&apos;s discuss your goals - no pressure, just results
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Link href={"tel:+919100032301"}>
                <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Be the First Choice for Patients..!!
                </button>
              </Link>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-transparent rounded-2xl shadow-lg border">
            <ContactFromNew />
          </div>
        </div>
      </div>
    </section>


      {/* Floating CTA Button */}
      {/* <a href="#contact" className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transition transform hover:scale-110 z-40 flex items-center gap-2 font-semibold">
        <Phone size={20} />
        Get Started
      </a> */}
    </div>
  );
}