"use client";

import { motion } from "framer-motion";
import {
  Gem,
  ShoppingCart,
  Smartphone,
  LayoutTemplate,
  CreditCard,
  Code,
} from "lucide-react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: <Gem size={36} />,
    title: "Custom Website Development",
    description:
      "We craft 100% custom, high-performance WordPress websites with zero templates and lightning-fast load speeds. Our builds are SEO-optimized, mobile-friendly, and designed for long-term scalability.",
  },
  {
    icon: <ShoppingCart size={36} />,
    title: "Ecommerce Websites",
    description:
      "Sell smarter with high-converting, fully responsive eCommerce stores. We optimize product pages, checkout flows, and secure payment integrations to boost sales, user engagement, and search engine rankings.",
  },
  {
    icon: <Smartphone size={36} />,
    title: "Mobile-Responsive Web Design",
    description:
      "With over 70% of traffic coming from mobile, we create pixel-perfect, ultra-fast, mobile-first designs for a seamless user experience, lower bounce rates, and higher conversions.",
  },
  {
    icon: <LayoutTemplate size={36} />,
    title: "CMS Website Development",
    description:
      "Our CMS solutions include WordPress, Drupal, Shopify, and Joomla, offering easy content management and SEO-optimized architecture to improve search rankings and user experience.",
  },
  {
    icon: <CreditCard size={36} />,
    title: "Payment Gateway Integration",
    description:
      "We integrate leading Indian and international payment gateways, including Razorpay, PayU, Stripe, PayPal, Square, and Authorize.net, ensuring frictionless checkout flows, secure transactions, PCI compliance, and fraud protection.",
  },
  {
    icon: <Code size={36} />,
    title: "Web App Development",
    description:
      "We build Progressive Web Apps (PWAs) and full-stack web applications using React.js, Node.js, and Laravel, ensuring scalability, performance, and seamless business automation.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-[85%] mx-auto">
        <div className="text-center mb-14">
                    <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-500">Our Services</span>
                    <h2 className='font-bold  text-4xl md:text-5xl font-sofiasanscondensed tracking-normal mt-4'>Our Website Development Services in Hyderabad <br /> Are Built for Visibility, Speed & ROI</h2>
                    <p className='mt-5 md:text-xl md:max-w-[90%] mx-auto text-white/70'>We&apos;re not just building websites. We&apos;re solving business problems with strategy, design, and code.<br />
                    As a leading website designing company in Hyderabad, we offer full-spectrum development solutions tailored to your goals — whether you&apos;re launching, scaling, or overhauling your online presence.</p>
                </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl p-[2px] overflow-hidden"
            >
              {/* Animated Border Layer */}
              <motion.div
                className="absolute inset-0 z-0 rounded-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  background: `conic-gradient(from 0deg, 
        #7b61ff, 
        #c77dff, 
        #ff66cc, 
        #ff9933, 
        #ffff33, 
        #33ffcc, 
        #7b61ff)`,
                }}
              />

              {/* Card Inner Content */}
              <div className="relative z-10 bg-gradient-to-br from-[#1e1e1e] via-[#2b1e35] to-[#000000] text-white rounded-[inherit] p-6 h-full flex flex-col justify-between">
                <div className="text-[#bf47ff] mb-4 text-2xl drop-shadow-md">{service.icon}</div>

                <div>
                  <h3 className="font-semibold text-3xl font-sofiasanscondensed mb-3 text-white mt-7">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-white drop-shadow-sm">
                    {service.description}
                  </p>
                </div>

                <ArrowUpRight className="absolute top-4 right-4 text-[#bf47ff]" />
              </div>
            </motion.div>



          ))}
        </div>
      </div>
    </section>
  );
}
