"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bgCheckout from "@/assets/2-49.jpg"; // Replace with your background image

export default function CheckoutTrustBanner() {
  return (
    <section className="relative w-full flex justify-center py-10 md:py-20">
      {/* Background Image with Overlay */}
      <div className="relative w-[95%] lg:w-[85%] h-[600px] lg:h-[500px]  rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={bgCheckout}
          alt="Checkout Trust Banner"
          fill
          className="object-cover"
          priority
        />
        {/* <div className="absolute inset-0 bg-white/70" /> */}

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-20"
        >
          <h2 className="text-4xl md:text-6xl font-inter font-medium text-white mb-6 leading-tight">
            Every Checkout Is a <span className="text-blue-200"> <br />Trust Test</span> You Either Pass or Fail
          </h2>

          <p className="text-white text-base md:text-lg max-w-5xl leading-relaxed">
            When customers hesitate, they abandon carts. When transactions fail, they don’t return.
            Studies show that <span className="text-blue-200 font-medium">69% of online carts</span> are
            abandoned, and <span className="text-blue-200 font-medium">20–25%</span> of those are due to
            payment friction — unclear totals, broken redirects, or mistrust in the payment screen.
          </p>

          <p className="text-white text-base md:text-lg max-w-5xl leading-relaxed mt-4">
            Bixeltek solves this by building transparent, localized, and reliable checkout experiences
            that make payment a natural end to the buying journey — not a risk.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
