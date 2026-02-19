"use client";

import React from "react";
import Image from "next/image";
import analyticsImg from "@/assets/dashboard-image.png"; // replace with your image

const PayFinanceToGrowth = () => {
  return (
    <section className="w-full bg-white pt-16 pb-8 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="md:max-w-[85%] mx-auto grid lg:grid-cols-2 items-center gap-16">
        {/* IMAGE LEFT */}
        <div className="relative flex justify-center md:justify-center">
          <div className="relative w-[95%] ">
            <Image
              src={analyticsImg}
              alt="Payment analytics dashboard"
              className="w-full h-auto object-contain "
              priority
            />
          </div>
        </div>

        {/* CONTENT RIGHT */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6 leading-snug">
            We Don’t Just Integrate.{" "}
            <span className="text-purple-600">We Connect Finance to Growth.</span>
          </h2>

          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            Each payment gateway we deploy comes with real-time analytics connectors — syncing
            transactions with Google Analytics, Meta Ads Manager, HubSpot, and Odoo CRM.
          </p>

          <ul className="space-y-4 text-gray-800 text-base">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1">✔</span>
              <p>
                <strong>Revenue attribution</strong> — identify which ad or keyword generated every
                sale.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1">✔</span>
              <p>
                <strong>Cohort tracking</strong> — analyze repeat buyers versus new customers.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1">✔</span>
              <p>
                <strong>Subscription analytics</strong> — monitor MRR, churn, and recovery metrics.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1">✔</span>
              <p>
                <strong>Cross-border settlements</strong> — manage multi-currency transaction
                reports with ease.
              </p>
            </li>
          </ul>

          <p className="text-gray-800 text-base leading-relaxed mt-6">
            Your payment infrastructure becomes part of your{" "}
            <strong>marketing intelligence</strong> — not a disconnected finance system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PayFinanceToGrowth;
