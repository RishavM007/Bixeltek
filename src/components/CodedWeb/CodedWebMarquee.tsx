"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MarqueeLine = ({
  items,
  textColor,
  bgColor,
  angle = 0,
  duration = 35,
}: {
  items: string[];
  textColor: string;
  bgColor: string;
  angle?: number;
  duration?: number;
}) => {
  return (
    <div
      className={`absolute left-1/2 top-1/2 w-[300vw] -translate-x-1/2 -translate-y-1/2 ${bgColor} py-4`}
      style={{
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        transformOrigin: "center",
      }}
    >
      <motion.div
        className={`whitespace-nowrap text-xl md:text-3xl font-semibold ${textColor}`}
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-10 px-8">
            <span>{item}</span>
            <span className="opacity-100">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const IntersectingTiltedMarquees = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // your marquee text arrays (unchanged)
   const group1 = [
    "Engineered for performance that scales across continents",
    "Optimized for speed, security, and conversion excellence",
    "Built with modular architecture for agile scalability",
    "Next-gen frameworks delivering unmatched efficiency",
    "Performance tuned for Core Web Vitals and user delight",
    "Consistent rendering across all device types and networks",
    "Designed with future-ready development practices in mind",
    "High availability built into every layer of our system",
    "Optimized caching, prefetching, and CDN integration",
    "Resilient APIs powering consistent data delivery",
    "Accessibility-first development for every audience",
    "Automated performance audits baked into CI/CD pipelines",
    "Server infrastructure configured for lightning response",
    "Minimal render blocking with async and lazy strategies",
    "Built for concurrency, security, and long-term uptime",
    "Predictive scaling to handle dynamic traffic spikes",
    "Reduced technical debt through clean, modular codebases",
    "Headless CMS integration for seamless content operations",
    "Optimized React hydration with SSR + SSG hybrid setup",
    "Trusted by enterprises for performance and reliability",
  ];

  const group2 = [
    "SEO-first architecture engineered for high intent keywords",
    "Content clustering and schema markup for search precision",
    "Entity-based linking structure to strengthen semantic value",
    "Code and conversion work together to drive qualified leads",
    "Server-side rendering ensures search engine indexability",
    "Prefetching and route-level optimization for frictionless UX",
    "Structured data powering richer SERP visibility and CTR",
    "SSG/SSR pipelines validated for SEO best practices",
    "Reduced CLS, FID, and LCP across all touchpoints",
    "Optimized for multilingual indexation and local SEO parity",
    "Built-in canonical logic prevents duplication issues",
    "GA4 + server-side tagging ensures data accuracy",
    "Real-time search analytics and trend adaptation",
    "Optimized link depth for efficient crawler flow",
    "Performance tuned for Google Lighthouse benchmarks",
    "Enhanced sitemap and robots logic for search discovery",
    "Modular SEO components for faster campaign adaptation",
    "Integrated schema automation for content freshness",
    "SEO + UX synergy baked into development lifecycle",
    "Conversion-focused architecture built from code up",
  ];

  const group3 = [
    "Data-driven marketing strategy designed for measurable ROI",
    "Full-funnel analytics that unify behavior and conversion data",
    "Predictive performance modeling with clean analytics pipelines",
    "Bixeltek’s systems combine marketing science and technology",
    "Server-side tracking ensures precision in attribution models",
    "Localization logic supporting Arabic, English, and French parity",
    "GA4 event streams linked directly to backend analytics stack",
    "Real-time dashboards that empower faster marketing decisions",
    "Structured data amplifying organic and paid visibility",
    "Cross-channel measurement across ads, SEO, and UX flows",
    "Custom attribution logic for full lifecycle insight",
    "Behavioral segmentation drives personalized remarketing",
    "Integrated analytics for business intelligence at scale",
    "Predictive trend forecasting through machine learning models",
    "In-house data pipelines maintain signal integrity end-to-end",
    "Real-time revenue mapping from clicks to conversions",
    "Optimized data layer for GTM and advanced event tracking",
    "Server-to-server event forwarding ensures privacy compliance",
    "Our builds outperform because every metric is engineered",
    "Conversion insights designed to drive sustainable growth",
  ];

  // 🎯 set mobile angles here
  const angles = {
    group1: isMobile ? 20 : 8,
    group2: isMobile ? -20 : -8,
    group3: isMobile ? 0 : 0,
  };

  return (
    <section className="relative w-full h-[30vh] md:h-[50vh] bg-black overflow-hidden flex items-center justify-center">
      <MarqueeLine
        items={group1}
        bgColor="bg-blue-500"
        textColor="text-white"
        angle={angles.group1}
        duration={30}
      />
      <MarqueeLine
        items={group2}
        bgColor="bg-red-500"
        textColor="text-white"
        angle={angles.group2}
        duration={30}
      />
      <MarqueeLine
        items={group3}
        bgColor="bg-white"
        textColor="text-black"
        angle={angles.group3}
        duration={30}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
    </section>
  );
};

export default IntersectingTiltedMarquees;
