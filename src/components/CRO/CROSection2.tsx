"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import analyticsImg from "@/assets/chief-risk-officer-laptop.webp"; 

export default function TrueAnalyticsSection() {
  const metricsPoints = [
    "generate_lead events for form submissions",
    "click_call events for phone number interactions",
    "view_content events for service detail engagement",
    "conversion_value for e-commerce actions",
  ];

  return (
    <section className="bg-white w-[95%] md:w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between py-20 gap-10 md:gap-16">
      {/* Left — Image */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
        <Image
          src={analyticsImg}
          alt="Analytics Dashboard"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Right — Text Content */}
      <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
          What We Mean by <span className="text-blue-500">True Analytics</span>
        </h2>

        <h3 className="mt-6 text-xl md:text-2xl font-semibold text-gray-800">
          From Vanity Metrics to Conversion Metrics
        </h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Metrics like “sessions” or “impressions” mean little on their own. We focus on the micro-actions that create business outcomes: button clicks, call triggers, scroll depth, WhatsApp chats, video plays, form submissions, downloads.
        </p>

        <h3 className="mt-6 text-xl md:text-2xl font-semibold text-gray-800">
          Event-Based Tracking (GA4 Revolution)
        </h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Google Analytics 4 shifted the web from “pageviews” to “events.” We use that flexibility to capture meaningful behavior — not just traffic. For example:
        </p>

        {/* Metrics Points */}
        <ul className="mt-4 space-y-3">
          {metricsPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <Check className="w-5 h-5 text-blue-500 mt-[2px]" />
              <span className="text-sm md:text-base">{point}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-gray-700 leading-relaxed">
          Everything is mapped, measured, and visualized.
        </p>
      </div>
    </section>
  );
}
