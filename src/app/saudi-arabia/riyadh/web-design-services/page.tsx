export const metadata = {
    title:  "Top Web Design Company in Riyadh | Fast & SEO-Ready",
    description:
        " Rank higher and sell faster with a conversion-focused website. Bixeltek builds premium, bilingual sites that perform across Google Ads and SEO..",
    openGraph: {
        title: " Top Web Design Company in Riyadh | Fast & SEO-Ready",
        description:
            " Rank higher and sell faster with a conversion-focused website. Bixeltek builds premium, bilingual sites that perform across Google Ads and SEO.",
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
import WebDevRiyadhShowcase from '@/components/Saudi/Riyadh/WebDesign/SaudiRiWDSection3';

export default function page() {
  return (
   <>
   <HeroRiyadhWebDesign/>
   <WebSpeedRiyadh />
   <SaudiRiWDSection2 />
   <GradientCards/>
   <WebDesignServicesRiyadh/>
   <RiyadhWebDesignWorkflow />
   <WebDevRiyadhShowcase />
   {/* <ShowcaseSectionVanc/> */}
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
  </div>

  {/* RIGHT SIDE — FORM */}
  <div className="w-[95%] md:w-[50%] lg:mr-10 flex justify-start items-center">
    <ContactFromNew />
  </div>
</section>

   </>

  )
}
