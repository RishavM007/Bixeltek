"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { FaGoogle, FaInstagram, FaGlobe, FaPalette, FaChartLine } from "react-icons/fa";
import { Dot } from "lucide-react";
import googleads from '@/assets/google-ads-logo.png'
import ahref from '@/assets/Ahrefs-Logo-2010.png';
import semrush from '@/assets/-a31128ab70569bc8525a60ea8256c48f.png';
import seranking from '@/assets/SERanking.png';
import looker from '@/assets/Looker_6f803d7fdc.webp';
import wordpress from '@/assets/WordPress-logotype-wordmark-white.png';
import elementor from '@/assets/Elementor-Logo-Full-White.webp';
import nextjsicon from '@/assets/icons8-nextjs-96.png';
import reactksicon from '@/assets/1174949_js_react js_logo_react_react native_icon.png';
import tailwindcsslogo from '@/assets/Tailwind CSS.png';
import metalogo from '@/assets/meta-brand-color.png'
import reacticon from '@/assets/7423888_react_react native_icon.png';
import googlelogo from '@/assets/Transparent_google_logo_2015.png';
import instagramlogo from '@/assets/6929237_instagram_icon.png';
import photoshoplogo from '@/assets/photoshop.webp'
import illustrator from '@/assets/illustrator.webp'
import searchengineoptimizationlogo from '@/assets/1000174561.png';
import ytlogo from '@/assets/YouTube_2024_(white_text).svg.png'
import semrushlogo from '@/assets/4202007_analytics_google_logo_social_social media_icon.png'
import googleadslogo from '@/assets/6929233_google ads_logo_icon.png'
import facebooklogo from '@/assets/pngimg.com - facebook_logos_PNG19749.png'

const services = [
  {
    title: "SEO",
    desc: "Improve rankings, visibility, and lead flow with proven SEO strategies to dominate Page One.",
    icon: <FaChartLine className="text-white w-5 h-5" />,
    carouselIcons: [ahref, semrush, seranking, googlelogo, semrushlogo],
    marqueeText: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Content Strategy", "Link Building"],
  },
  {
    title: "Google Ads",
    desc: "Launch data-driven ad campaigns that put you in front of ready-to-buy customers instantly.",
    icon: <FaGoogle className="text-white w-5 h-5" />,
    carouselIcons: [googleads, ytlogo, googleadslogo, googlelogo, looker],
    marqueeText: ["Content Creation", "Community Management", "Paid Social Ads", "Analytics Reporting", "Influencer Marketing"],
  },
  {
    title: "Social Media Marketing",
    desc: "Engage audiences daily with campaigns that build awareness, retarget effectively, and convert.",
    icon: <FaInstagram className="text-white w-5 h-5" />,
    carouselIcons: [instagramlogo, facebooklogo, metalogo, ytlogo, googlelogo],
    marqueeText: ["Content Creation", "Community Management", "Paid Social Ads", "Analytics Reporting", "Influencer Marketing"],
  },
  {
    title: "Web Design and Web Development",
    desc: "We design fast, mobile-first websites that are beautiful, optimized, and built to convert.",
    icon: <FaGlobe className="text-white w-5 h-5" />,
    carouselIcons: [wordpress, elementor, nextjsicon, reacticon, tailwindcsslogo],
    marqueeText: ["Content Creation", "Community Management", "Paid Social Ads", "Analytics Reporting", "Influencer Marketing"],
  },
  {
    title: "Comprehensive Branding and Identity",
    desc: "Craft logos, packaging, and identity systems that build brand trust, recall, and preference.",
    icon: <FaPalette className="text-white w-5 h-5" />,
    carouselIcons: [photoshoplogo, illustrator, metalogo, googlelogo, instagramlogo],
    marqueeText: ["Logo Design", "Brand Guidelines", "Visual Identity", "Packaging Design", "Brand Strategy"],
  },
  {
    title: "Analytics & Conversion Tracking",
    desc: "Know exactly where leads and sales come from with advanced analytics and tracking solutions.",
    icon: <FaChartLine className="text-white w-5 h-5" />,
    carouselIcons: [looker, googleads, semrush, ahref, seranking],
    marqueeText: ["Google Analytics", "Conversion Tracking", "Data Visualization", "Performance Reporting", "ROI Analysis"],
  },
];
export default function ServiceCards() {
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const tweenRefs = useRef<gsap.core.Tween[]>([]);
  const marqueeTweenRefs = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, idx) => {
      const service = services[idx];

      // Text marquee animation for other services
      const marquee = card.querySelector(".marquee") as HTMLElement;
      if (marquee) {
        const totalWidth = marquee.scrollWidth / 2;
        gsap.set(marquee, { x: 0 });
        const anim = gsap.to(marquee, {
          x: -totalWidth,
          duration: 15,
          repeat: -1,
          ease: "linear",
          paused: true,
        });
        marqueeTweenRefs.current[idx] = anim;
      }
    });
  }, []);

  const handleMouseEnter = (idx: number) => {
    const service = services[idx];
    marqueeTweenRefs.current[idx]?.play();

  };

  const handleMouseLeave = (idx: number) => {
    const service = services[idx];
    marqueeTweenRefs.current[idx]?.pause();
  };

  return (
    <section className="w-full bg-black py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-bold text-white mb-7 text-center">
          Our Digtal Marketing Services
        </h2>
        <p className="text-white text-base max-w-3xl mx-auto mb-16 text-center"> At Bixeltek, we bring global digital expertise with a local Hyderabad touch. From data-driven advertising and SEO to creative branding and web design, our services are crafted to help Hyderabad businesses scale with confidence.</p>
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, idx) => (
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 inline-block p-[1px] rounded-2xl h-full">
              <div
                key={idx}
                ref={(el: any) => (cardRefs.current[idx] = el!)}
                className="group relative bg-[#181818] px-6 pt-6 pb-14 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
              >
                {/* Top-left rounded icon */}
                <div className="w-16 h-16 rounded-full group-hover:bg-blue-500 group-hover:shadow-sm group-hover:shadow-blue-400 bg-[#212121] flex items-center justify-center mb-4">
                  {service.icon}
                </div>

                {/* Service title and description */}
                <h3 className="text-2xl font-inter font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>

                {/* Marquee text for other services */}
                <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white">
                  <div className="marquee flex items-center gap-4 h-full">
                    {service.marqueeText.concat(service.marqueeText).map((text, i) => (
                      <div key={i} className="flex items-center flex-shrink-0">
                        <span className="text-sm text-gray-900 whitespace-nowrap uppercase font-semibold">
                          {text}
                        </span>
                        &nbsp;<Dot className="text-gray-900 mx-2" size={30} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}