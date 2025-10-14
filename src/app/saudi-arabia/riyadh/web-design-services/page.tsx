export const metadata = {
    title:  " Web Design Company in Riyadh That Turns Clicks Into Clients",
    description:
        " We design high-performance, SEO-ready, bilingual websites built for conversion. From Riyadh startups to enterprise brands, our sites load fast, rank high, and sell better.",
    openGraph: {
        title: " Web Design Company in Riyadh That Turns Clicks Into Clients",
        description:
            " We design high-performance, SEO-ready, bilingual websites built for conversion. From Riyadh startups to enterprise brands, our sites load fast, rank high, and sell better.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/saudi-arabia/riyadh/web-design-services",
    },
};



import HeroRiyadhWebDesign from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDHero';
import SaudiRiWebIndustry from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDInd';
import RiyadhWebDesignWorkflow from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDProcess';
import WebSpeedRiyadh from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDSection1';
import SaudiRiWDSection2 from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDSection2';
import GradientCards from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDSection4';
import WebDesignServicesRiyadh from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDSection5';
import RiyadhWebMapSection from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDSection6';
import ShowcaseSectionVanc from '@/components/Vancouver/WebDesign/ShowcaseWebVanc';
import ContactFromNew from '@/components/ContactFormNew';
import React from 'react'

export default function page() {
  return (
   <>
   <HeroRiyadhWebDesign/>
   <WebSpeedRiyadh />
   <SaudiRiWDSection2 />
   <GradientCards/>
   <WebDesignServicesRiyadh/>
   <RiyadhWebDesignWorkflow />
   <ShowcaseSectionVanc/>
   <RiyadhWebMapSection />
   <SaudiRiWebIndustry />
   <section
  className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
  id="webdesign-cta"
>
  {/* LEFT SIDE — TEXT */}
  <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
    <h2 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6">
      Ready to Build a Website That<span className="text-yellow-500"> Converts Visitors Into Customers?</span>
    </h2>

    <p className="text-gray-50 font-poppins text-base md:text-lg leading-relaxed mb-8">
      Your website is your growth engine. Let <span className="text-yellow-400 font-semibold">Bixeltek</span> design, develop, 
      and optimize a high-performance site built for Riyadh’s fast-moving digital economy.
    </p>
  </div>

  {/* RIGHT SIDE — FORM */}
  <div className="w-[95%] md:w-[50%] lg:mr-10 flex justify-start items-center">
    <ContactFromNew />
  </div>
</section>

   </>

  )
}
