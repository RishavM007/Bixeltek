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
          Ready to <span className="text-yellow-600">Rank, Build Authority, and Dominate Search in Riyadh?</span>
        </h2>

        <p className="text-gray-50 font-poppins text-base md:text-lg leading-relaxed mb-8">
          Let’s make your brand discoverable where it matters most — on Google’s first page. 
          Work with Riyadh’s most advanced <span className="text-yellow-400 font-semibold">SEO team</span> 
          and turn search visibility into measurable revenue.
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
