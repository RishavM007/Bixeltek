"use client";

import Image from "next/image";
import corporateImg from "@/assets/webdev-corporate-image.jpg";
import ecommerceImg from "@/assets/Flowers Shop Ecommerce Website.png";
import serviceImg from "@/assets/preview_1.jpg";
import landingImg from "@/assets/it-website-templates.webp";
import customAppImg from "@/assets/distance-learning-app-template-ui.png";

export default function BusinessGoalsSection() {
  const services = [
    {
      title: "Corporate Websites",
      desc: "Professional sites for branding, trust, and authority.",
      img: corporateImg,
    },
    {
      title: "Ecommerce Stores",
      desc: "Scalable online shops with SEO-ready product pages.",
      img: ecommerceImg,
    },
    {
      title: "Service Websites",
      desc: "Designed to capture leads with strong CTAs and forms.",
      img: serviceImg,
    },
    {
      title: "Landing Pages",
      desc: "Campaign-specific pages to maximize ad ROI.",
      img: landingImg,
    },
    {
      title: "Custom Web Applications",
      desc: "Bespoke solutions for businesses with unique needs.",
      img: customAppImg,
    },
  ];

  return (
    <section className="bg-black text-white py-0 md:py-20 px-6 lg:px-20">
      <div className="max-w-full mx-auto">
        {/* Heading + Paragraph */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Websites Tailored to <span className="text-blue-500">Your Business Goals</span>
          </h2>
          <p className="text-lg text-neutral-100">
            Different businesses need different solutions. We design and build
            websites that align with your customer journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-10 max-w-[97%] mx-auto md:grid-cols-2 lg:grid-cols-5">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-black font-semibold mb-2">{service.title}</h3>
                <p className="text-neutral-900 font-poppins">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
