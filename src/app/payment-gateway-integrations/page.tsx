import PayAreas from '@/components/PaymentGateway/PayAreas'
import PaymentGatewayFAQ from '@/components/PaymentGateway/PayFaqs'
import PaymentHeroSection from '@/components/PaymentGateway/PayHero'
import PaymentTrustSection from '@/components/PaymentGateway/PaySection1'
import CheckoutTrustBanner from '@/components/PaymentGateway/PaySection2'
import PaymentTypes from '@/components/PaymentGateway/PaySection3'
import PaymentWorkflow from '@/components/PaymentGateway/PaySection4'
import PayFinanceToGrowth from '@/components/PaymentGateway/PaySection5'
import ContactFromNew from '@/components/ContactFormNew'
import React from 'react'

export default function page() {
  return (
    <>
      <PaymentHeroSection />
      <PaymentTrustSection />
      <CheckoutTrustBanner />
      <PaymentTypes />
      <PaymentWorkflow />
      <PayFinanceToGrowth />
      <PayAreas />
      <PaymentGatewayFAQ />
      <section
        className="bg-black py-20 px-4 md:px-20 flex flex-col lg:flex-row items-center gap-10"
        id="checkout-audit"
      >
        {/* LEFT SIDE — TEXT + CTA */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start px-6">
          <h2 className="text-4xl md:text-6xl font-inter font-medium text-white mb-6 leading-snug">
            Let’s Review Your Checkout —{" "}
            <span className="text-purple-500">
              for Security, Compliance, and Speed
            </span>
          </h2>

          <p className="text-gray-100 font-poppins text-base md:text-lg leading-relaxed mb-8">
            Get a full audit of your payment process — from gateway reliability to
            conversion rate optimization.
          </p>

          {/* AUDIT POINTS */}
          <ul className="flex flex-col text-white gap-4 mb-8">
            {[
              "API performance and transaction success rate",
              "PCI-DSS & compliance checks",
              "Refund and webhook reliability",
              "Checkout UX and mobile optimization",
              "30-day improvement roadmap",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* CTA BUTTON */}
          <a
            href="#checkout-audit"
            className="px-7 py-3 rounded-2xl bg-purple-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition"
          >
            Get My Free Audit
          </a>

          {/* BADGES */}
          <ul className="text-sm mt-8 flex flex-row md:flex-row gap-5 md:gap-10 transition-all duration-500">
            <li className="mb-6">
              <a
                href="https://www.google.com/partners/agency?id=2188074075"
                target="_blank"
                className="mt-2 flex justify-start"
              >
                <img
                  src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                  alt="Google Partner Badge"
                  className="w-auto h-16 md:h-24"
                />
              </a>
            </li>
            <li>
              <div>
                <a
                  target="_blank"
                  href="https://www.goodfirms.co/company/bixeltek"
                >
                  <img
                    src="https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg"
                    title="Top Digital Marketing Company"
                    className="w-20 md:w-32 h-auto"
                    alt="Top Digital Marketing Company on GoodFirms"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="w-[95%] lg:w-[50%] lg:mr-20 flex justify-start items-center">
          <ContactFromNew />
        </div>
      </section>
    </>
  )
}
