export const metadata = {
    title:  "SEO Services in Riyadh | SEO Agency for Saudi Businesses – Bixeltek",
    description:
        "Bixeltek is a leading SEO agency in Riyadh helping businesses rank higher, attract qualified leads, and dominate search results in Arabic and English.",
    openGraph: {
        title: "SEO Services in Riyadh | SEO Agency for Saudi Businesses – Bixeltek",
        description:
            "Bixeltek is a leading SEO agency in Riyadh helping businesses rank higher, attract qualified leads, and dominate search results in Arabic and English.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/saudi-arabia/riyadh/seo-services",
    },
};



import HeroRiyadhSEO from "@/components/Saudi/Riyadh/SEOServices/SaudiRiSEOHero";
import RiyadhSeoWorkflow from "@/components/Saudi/Riyadh/SEOServices/SaudiRiSEOProcess";
import SEOOpportunity from "@/components/Saudi/Riyadh/SEOServices/SaudiRiSEOSection1";
import SEOIssuesSection from "@/components/Saudi/Riyadh/SEOServices/SaudiRiSEOSection2";
import SeoServicesRiyadh from "@/components/Saudi/Riyadh/SEOServices/SaudiRiSEOSection4";
import SaudiRiSEOIndustry from "@/components/Saudi/Riyadh/SEOServices/SaudiRiSEOSection6";
import SeoSystemsSection from "@/components/Saudi/Riyadh/SEOServices/SaudiRiSEOSection7";
import SeoCards from "@/components/Saudi/Riyadh/SEOServices/SaudiRiSEOService3";
import RiyadhSeoMapSection from "@/components/Saudi/Riyadh/SEOServices/SaudiSEOAreasWeServe";
import SeoMarqueeRiyadh from "@/components/Saudi/Riyadh/SEOServices/SaudiSEOMarquee";
import ContactFromNew from "@/components/ContactFormNew";


export default function page() {
  return (
    <>
    <HeroRiyadhSEO/>
    <SEOOpportunity />
    <SEOIssuesSection />
    <SeoCards />
    <SeoMarqueeRiyadh/>
    <SeoServicesRiyadh/>
    <RiyadhSeoWorkflow />
    <RiyadhSeoMapSection />
    <SaudiRiSEOIndustry />
    <SeoSystemsSection />
      <section
      className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
      id="seo-cta"
    >
      {/* LEFT SIDE — TEXT */}
      <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
        <h2 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6">
          Ready to Rank, Build Authority, and <span className="text-yellow-500"> Dominate Search in Riyadh?</span>
        </h2>

        <p className="text-gray-50 font-poppins text-base md:text-lg leading-relaxed mb-8">
          Let’s make your brand discoverable where it matters most — on Google’s first page. 
          Work with Riyadh’s most advanced <span className="text-yellow-400 font-semibold">SEO team</span> 
          and turn search visibility into measurable revenue.
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
