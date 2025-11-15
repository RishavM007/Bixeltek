export const metadata = {
  title: "SEO for Dental Clinics | Local & AI SEO Systems to Attract More Patients – Bixeltek",
  description: "Bixeltek helps dental clinics dominate Google’s rankings and AI Overviews. From local SEO and content strategy to AI SEO and entity optimization, we turn your dental website into a patient-generation machine.",
  keywords: "SEO for dental clinics, dental SEO agency, dentist marketing Bangalore, dental clinic SEO services, local SEO for dentists, Google Business optimization dental, AI SEO for healthcare, dental website SEO India, dental practice marketing, clinic website optimization, increase dental patient leads, dental SEO experts, healthcare SEO strategy, best SEO company for dentists, dental content marketing, medical SEO Bangalore, dental PPC and SEO integration, Google Maps SEO dental clinics, patient acquisition strategy, dental SEO consultant India",
  openGraph: {
    title: "SEO for Dental Clinics | Local & AI SEO Systems to Attract More Patients – Bixeltek",
    description: "Bixeltek helps dental clinics dominate Google’s rankings and AI Overviews. From local SEO and content strategy to AI SEO and entity optimization, we turn your dental website into a patient-generation machine.",
    type: "website",
  },
  alternates: {
    canonical: "https://bixeltek.com/seo-for-dental-clinics",
  },
};



import FAQAccordion from '@/components/DentalSEO/DentalSEOFaq';
import DentalSEOHero from '@/components/DentalSEO/DentalSEOHero';
import DentalSEOIntro from '@/components/DentalSEO/DentalSEOSection1';
import DentalTraditionalSEO from '@/components/DentalSEO/DentalSEOSection2';
import SEOAISystemSection from '@/components/DentalSEO/DentalSEOSection3';
import FeatureGridDental from '@/components/DentalSEO/DentalSEOSection4';
import AISEO from '@/components/DentalSEO/DentalSEOSection5';
import ContactFromNew from '@/components/ContactFormNew';
import { Check } from 'lucide-react';
import React from 'react'

export default function page() {
  return (
    <>
      <DentalSEOHero />
      <DentalSEOIntro />
      <DentalTraditionalSEO />
      <SEOAISystemSection />
      <FeatureGridDental />
      <AISEO />
      <FAQAccordion />
      <section
        className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
        id="#form"
      >
        {/* LEFT SIDE — Text & CTAs */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-inter font-medium text-white mb-6 leading-tight">
            Ready to Build a{" "}
            <span className="text-red-500">Search-Dominant Dental Brand?</span>
          </h2>

          {/* Description */}
          <p className="text-gray-100 font-poppins text-sm md:text-base leading-relaxed mb-8">
            Bixeltek’s <span className="text-red-400 font-medium">AI + SEO systems</span> don’t just
            improve rankings — they <span className="text-red-400 font-medium">build local authority ecosystems</span>.
            Whether you’re a single-chair practice or a multi-city dental group, our strategies ensure your clinic
            appears in front of patients <span className="text-red-400 font-medium">right when they need you most.</span>
          </p>

          {/* Audit Points / Highlights */}
          <ul className="flex flex-col text-white gap-4 mb-8">
            {[
              "Advanced local + AI SEO integration for maximum visibility",
              "Optimized Google Business Profile for top map-pack rankings",
              "Content architecture built for treatment-based keyword dominance",
              "High-trust backlink and citation strategy for authority growth",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-red-500 flex-shrink-0 mt-[2px]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:zee@bixeltek.com"
              className="px-7 py-3 rounded-2xl bg-gradient-to-tr from-red-500 via-red-700 to-red-900 hover:from-red-900 hover:via-red-700 hover:to-red-500 text-white font-semibold text-sm transition"
            >
              Get My Free SEO Audit
            </a>
            <a
              href="https://calendly.com/bixeltek/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-2xl border border-red-500 text-red-200 hover:bg-red-500 hover:text-white font-semibold text-sm transition"
            >
              Schedule Strategy Call
            </a>
          </div>

          {/* Trust Badges */}
          <ul className="text-sm mt-10 flex flex-row gap-5 md:gap-10 transition-all duration-500">
            <li>
              <a
                href="https://www.google.com/partners/agency?id=2188074075"
                target="_blank"
                rel="noopener noreferrer"
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.goodfirms.co/company/bixeltek"
              >
                <img
                  src="https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg"
                  title="Top Digital Marketing Company"
                  className="w-20 md:w-32 h-auto"
                  alt="Top Digital Marketing Company on GoodFirms"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE — Contact Form */}
        <div className="w-[95%] md:w-[50%] lg:mr-10 flex justify-start items-center">
          <ContactFromNew />
        </div>
      </section>

    </>
  )
}


