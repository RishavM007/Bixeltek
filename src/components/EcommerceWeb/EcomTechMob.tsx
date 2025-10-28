"use client";
import Image from "next/image";
import googleadslogo from "@/assets/googleads-logo.png";
import shopifylogo from "@/assets/shopifylogo.png";
import react from "@/assets/React-icon.svg (1).png";
import slack from "@/assets/Slack_icon_2019.svg.png";
import woo from "@/assets/woocommerce.png";
import zapier from "@/assets/zapier-icon-svgrepo-com.png";
import magento from "@/assets/magento-2-logo-svgrepo-com.png";
import nextjs from "@/assets/dango-inner-2.webp";
import wordpress from "@/assets/wordpress-color-svgrepo-com.png";
import elementor from "@/assets/Elementor-Logo-Symbol-Red.png";

export default function MobileTechGrid() {
  const topRow = [
    { id: 1, name: googleadslogo, color: "border border-sky-400" },
    { id: 2, name: woo, color: "border border-pink-400" },
    { id: 3, name: shopifylogo, color: "border border-emerald-400" },
    { id: 4, name: slack, color: "border border-violet-400" },
    { id: 9, name: react, color: "border border-cyan-400" },
    { id: 10, name: magento, color: "border border-orange-400" },
  ];

  const bottomRow = [
    { id: 5, name: zapier, color: "border border-orange-400" },
    { id: 6, name: elementor, color: "border border-red-400" },
    { id: 7, name: wordpress, color: "border border-indigo-400" },
    { id: 8, name: nextjs, color: "border border-teal-400" },
  ];

  return (
    <section className="block md:hidden w-full bg-black py-20">
          <div className="text-center mb-6">
          <h2 className="text-white text-4xl md:text-6xl font-bold">
            Your Digital Storefront <span className="text-blue-400">Perfected</span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg md:text-xl">
            Building online stores that sell more, convert faster, and grow endlessly.
          </p>
        </div>
      {/* 🔹 Top Row */}
      <div className="grid grid-cols-3 gap-4 px-6 mb-6">
        {topRow.map((logo) => (
          <div
            key={logo.id}
            className={`aspect-square flex items-center justify-center rounded-2xl ${logo.color} bg-zinc-900/70`}
          >
            <Image
              src={logo.name}
              alt="logo"
              className="w-12 h-12 object-contain"
            />
          </div>
        ))}
      </div>

      {/* 🔸 Bottom Row */}
      <div className="grid grid-cols-3 gap-4 px-6">
        {bottomRow.map((logo) => (
          <div
            key={logo.id}
            className={`aspect-square flex items-center justify-center rounded-2xl ${logo.color} bg-zinc-900/70`}
          >
            <Image
              src={logo.name}
              alt="logo"
              className="w-12 h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
