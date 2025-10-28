"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import paymentImg from "@/assets/easypaymentsgateway-panel-responsive-1200-desktop-tablet-mobile-no-padding.png"; // replace with your image
import { ShieldCheck, Smartphone, Workflow } from "lucide-react";

const points = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
    text: "Security-first architecture: API authentication, tokenization, encryption, and fraud prevention.",
  },
  {
    icon: <Smartphone className="w-5 h-5 text-purple-600" />,
    text: " UX refinement: optimized checkout flows, mobile responsiveness, and minimal redirects.",
  },
  {
    icon: <Workflow className="w-6 h-6 text-purple-600" />,
    text: "Business alignment: tax logic, split payments, and subscription workflows integrated with your backend or CRM.",
  },
];

export default function PaymentTrustSection() {
  return (
    <section className="bg-transparent text-black pt-32 pb-20 px-6 md:px-20">
      <div className="max-w-[95%] md:max-w-[85%] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={paymentImg}
              alt="Payment Integration"
              className="object-contain w-full h-auto md:h-[500px]"
              priority
            />
          </div>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-inter font-semibold leading-tight">
            Where Business Meets Trust<span className="text-purple-600"> and Code Makes It Work</span>
          </h2>

          <p className="text-gray-900 text-base md:text-lg leading-relaxed">
            A payment gateway is the bridge between your customer’s intent to buy and your business’s
            ability to get paid — safely, instantly, and globally.
          </p>

          <p className="text-gray-900 text-base md:text-lg leading-relaxed">
            Integration is not just about embedding a “Pay Now” button. It’s about creating a secure,
            frictionless experience that builds confidence at the most critical moment of conversion.
          </p>

          <ul className="space-y-4 pt-2">
            {points.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-900">
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-900 text-base md:text-lg leading-relaxed pt-4">
            Because a seamless payment experience isn’t optional — it’s fundamental to conversion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
