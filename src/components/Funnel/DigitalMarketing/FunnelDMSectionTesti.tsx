import React from "react";
import { FiStar, FiBarChart2, FiGlobe } from "react-icons/fi";
import person1 from "@/assets/PERSON1.jpg";
import person2 from "@/assets/PERSON2.jpg";
import person3 from "@/assets/PERSON3.jpg";
import revitaLogo from "@/assets/Revita-Logo-without-background-02-Colored-Font-01.png";
import rootedLogo from "@/assets/Rooted_Logo_new-4-wbg.png";
import tumblewashLogo from "@/assets/TumbleWash-Logo.webp";
import Image from "next/image";
import quotes from "@/assets/end-quotes-svgrepo-com.png";

export default function ClientTrustSection() {
  const trustStats = [
    { title: "Google Partner Certified", icon: <FiStar size={28} /> },
    { title: "Transparent Reporting", icon: <FiBarChart2 size={28} /> },
    { title: "Active in 4 Countries", icon: <FiGlobe size={28} /> },
  ];

  const testimonials = [
    {
      person: person1,
      text: "Working with this team was a game-changer. Our retention improved drastically and we finally have clear, actionable reporting.",
      client: "Revita Dentistry, Canada",
      bgColor: "bg-blue-600",
    },
    {
      person: person2,
      text: "We trusted them without a contract, and they delivered beyond our expectations. Referrals are pouring in consistently now.",
      client: "Rooted Tree Services, USA",
      bgColor: "bg-red-600",
    },
    {
      person: person3,
      text: "No lock-in, just results. 90% retention rate speaks for itself. Their transparency and strategy helped us scale globally.",
      client: "Tumble Wash, UK",
      bgColor: "bg-yellow-500",
    },
  ];

  const clientLogos = [
    { name: "Revita Dentistry", src: revitaLogo },
    { name: "Rooted Tree Services", src: rootedLogo },
    { name: "TumbleWash", src: tumblewashLogo },
  ];

  return (
    <section className="bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading & Paragraph */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            We Don’t <span className="text-blue-500">Lock Clients In</span>. <br /> We Lock Results In.
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We earn retention through proof — not contracts. That’s why 90% of our clients stay, and 70% come through referrals.
          </p>
        </div>

        {/* Trust Stats Row */}
        <div className="flex justify-center gap-10 mb-16 flex-wrap">
          {trustStats.map((stat, index) => (
            <div key={index} className="flex items-center group gap-3 bg-[#1A1A1A] px-6 py-4 rounded-2xl shadow-md hover:bg-blue-600  hover:scale-105 transition-transform duration-300">
              <div className="text-blue-500 group-hover:text-white">{stat.icon}</div>
              <p className="text-gray-200 font-semibold">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Snippets */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white relative text-black p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`rounded-bl-3xl absolute top-0 right-0 p-3 ${t.bgColor}`}>
                <Image src={quotes} alt="end quotes" className="w-10 h-auto" />
              </div>
              <Image src={t.person} alt={t.client} className="rounded-full w-20 h-auto mt-2 mb-5" />
              <p className="text-lg italic mb-6">{t.text}</p>
              <p className="font-semibold">— {t.client}</p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="hidden md:flex justify-center gap-16 flex-wrap items-center">
          {clientLogos.map((client, index) => (
            <div key={index} className="bg-transparent p-4 rounded-2xl hover:scale-105 transition-transform duration-300">
              <Image src={client.src} alt={client.name} className="h-14 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
