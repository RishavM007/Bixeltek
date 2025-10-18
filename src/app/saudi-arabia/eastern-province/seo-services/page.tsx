export const metadata = {
    title: "SEO Services in Eastern Province | SEO Agency for Khobar & Dammam – Bixeltek",
    description:
        " Bixeltek offers advanced SEO services across Khobar, Dammam, and Dhahran. Start ranking in just 60 days with AI-driven, intent-based SEO systems that improve visibility and conversions across Google, Gemini, and AI Overviews.",
    openGraph: {
        title: "SEO Services in Eastern Province | SEO Agency for Khobar & Dammam – Bixeltek",
        description:
            " Bixeltek offers advanced SEO services across Khobar, Dammam, and Dhahran. Start ranking in just 60 days with AI-driven, intent-based SEO systems that improve visibility and conversions across Google, Gemini, and AI Overviews.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/saudi-arabia/eastern-province/seo-services",
    },
};


import HeroEasternProvinceSEO from '@/components/Saudi/EasternProvince/SEOServices/SaudiEPSEO'
import SaudiEPSEOIndustries from '@/components/Saudi/EasternProvince/SEOServices/SaudiEPSEOInd';
import SEOMarqueeSaudi from '@/components/Saudi/EasternProvince/SEOServices/SaudiEPSEOMarquee';
import SEOGrowthEasternProvince from '@/components/Saudi/EasternProvince/SEOServices/SaudiEPSEOSection1'
import SemanticSEOSection from '@/components/Saudi/EasternProvince/SEOServices/SaudiEPSEOSection2';
import SEOAuthorityCards from '@/components/Saudi/EasternProvince/SEOServices/SaudiEPSEOSection3';
import SEOProcessFramework from '@/components/Saudi/EasternProvince/SEOServices/SaudiEPSEOSection4';
import SEOServicesEasternProvince from '@/components/Saudi/EasternProvince/SEOServices/SaudiEPSEOSection5';
import FutureSEOSection from '@/components/Saudi/EasternProvince/SEOServices/SaudiEPSEOSection6';
import ContactFromNew from '@/components/ContactFormNew';
import React from 'react'

export default function page() {
    return (
        <>
            <HeroEasternProvinceSEO />
            <SEOGrowthEasternProvince />
            <SemanticSEOSection />
            <SEOMarqueeSaudi />
            <SEOAuthorityCards />
            <SEOProcessFramework />
            <SEOServicesEasternProvince />
            <SaudiEPSEOIndustries />
            <FutureSEOSection />
            <section
                className="bg-[#fffdf5] py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
                id="seo-form"
            >
                {/* LEFT SIDE — TEXT */}
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    <h2 className="text-4xl md:text-6xl font-inter font-bold text-black mb-6">
                        Start Ranking in 60 Days —{" "}
                        <span className="text-yellow-500">Let’s Build Your SEO System Today</span>
                    </h2>

                    <p className="text-gray-950 font-poppins text-base md:text-lg leading-relaxed mb-8">
                        Stop guessing. Start growing.
                        With Bixeltek’s structured SEO framework, you can start seeing measurable
                        ranking improvements in just{" "}
                        <span className="font-semibold text-green-700">60 days</span> — and dominate
                        search visibility for the long term.
                    </p>
                     <ul className="text-sm mt-5 flex flex-row md:flex-row gap-5 md:gap-10  transition-all duration-500">
            <li className="mb-6"><a href="https://www.google.com/partners/agency?id=2188074075" target="_blank" className="mt-2 flex justify-start">
              <img src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                alt="Google Partner Badge"
                className="w-auto h-16 md:h-24" />
            </a></li>
            <li>
              <div><a target="_blank" href="https://www.goodfirms.co/company/bixeltek"> <img src="https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg" title="Top Digital Marketing Company" className="w-20 md:w-32 h-auto" alt="Top Digital Marketing Company on GoodFirms" /></a></div>
            </li>

          </ul>

                    {/* CTA BUTTONS (optional) */}
                    {/* <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <a href="/seo-audit">
        <button className="px-7 py-3 rounded-2xl bg-yellow-600 text-white font-semibold text-sm shadow-lg hover:bg-yellow-700 transition">
          Get a Free SEO Audit
        </button>
      </a>
      <a href="/contact-us">
        <button className="px-7 py-3 rounded-2xl bg-white text-black font-semibold text-sm shadow-lg hover:bg-gray-100 transition">
          Talk to an Expert
        </button>
      </a>
    </div> */}
                </div>

                {/* RIGHT SIDE — CONTACT FORM */}
                <div className="w-[95%] md:w-[50%] lg:mr-10 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>

        </>
    )
}
