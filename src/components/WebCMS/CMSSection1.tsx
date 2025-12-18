"use client";
import Image from "next/image";
import React from "react";
import speedGif from "@/assets/analytics.gif";
import dashboardGif from "@/assets/web-development.gif";
import integrationGif from "@/assets/marketing.gif";
import seoGif from "@/assets/idea.gif";
import uxGif from "@/assets/mobile-apps.gif";
import securityGif from "@/assets/design.gif";

export default function CMSProblemsSection() {
  const problems = [
    {
      id: "01",
      title: "Slow Websites That Kill Conversions",
      desc: `Every extra second of page load time can reduce conversions by up to 20%.
      We optimize at the code and server level — combining lazy loading, caching, and CDN delivery to achieve sub-2.5 second loads globally.
      The result: faster pages, lower ad costs, and higher SEO rankings.`,
      img: speedGif,
    },
    {
      id: "02",
      title: "Complex Backends That Limit Marketing Speed",
      desc: `You shouldn’t need a developer for every update.
      We build custom dashboards with reusable content blocks, allowing marketing teams to launch pages, campaigns, and blogs instantly — without breaking design or SEO.`,
      img: dashboardGif,
    },
    {
      id: "03",
      title: "Disconnected Marketing Systems",
      desc: `We integrate your CMS with every essential tool: Google Tag Manager & GA4, Meta Pixel + Conversion API, HubSpot, Odoo, or Zoho CRMs, and WhatsApp & Chat Automations.
      With unified data flow, your marketing finally becomes measurable and scalable.`,
      img: integrationGif,
    },
    {
      id: "04",
      title: "Weak SEO Visibility and Structure",
      desc: `We replace keyword stuffing with semantic architecture — clear content hierarchies, internal linking patterns, and JSON-LD schema that help Google understand your expertise.
      The result: higher authority, faster indexing, and better keyword stability.`,
      img: seoGif,
    },
    {
      id: "05",
      title: "Inconsistent UX Across Devices and Languages",
      desc: `Our multilingual frameworks maintain content and design parity between English, Arabic, and other languages — vital for Saudi, GCC, and Canadian markets.
      Your brand experience stays consistent across languages and devices.`,
      img: uxGif,
    },
    {
      id: "06",
      title: "Security Vulnerabilities & Plugin Conflicts",
      desc: `Our CMS security framework includes real-time malware scanning, firewall protection and SSL, controlled plugin environments, and automated backups and staging updates.
      We make reliability a standard, not a request.`,
      img: securityGif,
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-transparent text-black">
      <div className="max-w-7xl mx-auto text-center">
        {/* 🔹 Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold mb-6">
          Because Your Website’s Problems Are{" "}
          <span className="text-blue-500">Bigger Than “Just a Redesign.”</span>
        </h2>

        {/* 🔹 Copy */}
        <p className="text-gray-900 max-w-4xl mx-auto mb-16">
          Bixeltek’s CMS frameworks are engineered to eliminate the hidden
          inefficiencies that drain performance, lead quality, and scalability.
        </p>

        {/* 🔹 Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {problems.map((item) => (
            <div
              key={item.id}
              className="relative p-6 rounded-2xl group bg-white/5 border border-neutral-300 hover:shadow-2xl backdrop-blur-sm transition hover:bg-white/10 hover:scale-[1.02] duration-300"
            >
              {/* Number Tag */}
              <div className="absolute top-0 right-0 bg-blue-200 group-hover:bg-blue-600 rounded-tr-2xl group-hover:text-white transition-all duration-1000 text-black font-bold px-3 py-1 rounded-sm text-lg font-inter">
                {item.id}
              </div>

              {/* Image */}
              <div className="flex justify-center mb-5">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={70}
                  height={70}
                  className="rounded-md"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              {/* Desc */}
              <p className="text-gray-950 text-sm leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 🔹 Closing Line */}
        <p className="text-gray-900 max-w-4xl mx-auto mt-16 text-lg italic">
          We don’t just design websites; we re-engineer digital ecosystems so
          your CMS works as hard as your marketing team.
        </p>
      </div>
    </section>
  );
}
