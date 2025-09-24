import React from "react";
import websiteicons from "@/assets/website-configuration-setting-svgrepo-com.png";
import seoicon from "@/assets/seo-computer-gauge-speed-monitor-svgrepo-com.png";
import analyticsicon from "@/assets/analytics-svgrepo-com.png";
import googleads from "@/assets/ads-audience-boost-svgrepo-com.png";
import Link from "next/link";
import Image from "next/image";
import { LogoTicker2Dental } from "./DentalLogoTicket";
export default function DentalHero() {
  const services = [
    { id: 1, icon: seoicon, title: "Local SEO" },
    { id: 2, icon: googleads, title: "Google Ads" },
    { id: 3, icon: websiteicons, title: "Conversion-Focused Website" },
    { id: 4, icon: analyticsicon, title: "Retargeting & Social Media" },
  ];

  return (
    <section
      className="relative h-[80vh] md:h-[90vh]  mt-[-110px] pt-20 md:mt-[-125px] flex items-center text-white"
      style={{
        backgroundImage: "url('/hero_slider_1.jpg')", // put your image inside /public
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Overlay */}
      {/* Content */}
      <div className="relative z-10 max-w-5xl text-left px-6 md:ml-20">
        <h1 className="text-3xl text-black md:text-6xl font-inter font-bold leading-tight mb-6">
          Stop Losing <span className="text-blue-600">Patients to Competitors</span> — Let Us Help You Fill More Chairs Every Month
        </h1>
        <p className="text-lg text-gray-800 md:text-xl mb-8 max-w-3xl">
          For 4+ years, Bixeltek has helped dental clinics in USA & Canada turn clicks into calls,
          and calls into booked appointments. Clinics working with us consistently generate
          <span className="font-semibold"> 120+ new patient calls</span> every month.
        </p>
        <Link href={'/contact-us'}>
        <button className="px-8 py-4 bg-blue-700 hover:bg-blue-600 rounded-2xl font-semibold text-lg shadow-lg transition mb-10">
          Get My Free Growth Plan
        </button>
        </Link>
        {/* Cards */}
        
      </div>

    </section>
  );
}
