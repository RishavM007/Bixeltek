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
import LocationHeroSection from "@/components/Common/location/LocationHeroSection";
import googleIcon from "@/assets/google-authenticator-svgrepo-com.png";
import clientIcon from "@/assets/star-shine-svgrepo-com.png";
import seoIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import ServicesSection from "@/components/Common/ServicesGrid";
import LocationProcessSection from "@/components/Common/location/LocationProcessSection";
import LocationIndustrySection from "@/components/Common/location/LocationIndustrySection";
import cleaningcomp from "@/assets/environmental-pollution-industry-exterior-daylight.jpg";
import pet from "@/assets/muslim-person-travelling-through-city.jpg"
import roofing from "@/assets/ordinary-life-scene-from-mall-america.jpg"
import dental from "@/assets/asian-man-reading-text-messages-with-his-colleague-making-phone-call-background.jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/top-view-numerous-cars-traffic-dubai-united-arab-emirates.jpg"
import healthcare from "@/assets/beautiful-young-female-doctor-looking-camera-office.jpg"

const proofPoints = [
        { id: 1, text: "Google Partner Certified", icon: googleIcon },
        { id: 2, text: "90% Client Retention", icon: clientIcon },
        { id: 3, text: "SEO Systems Built for Saudi Businesses", icon: seoIcon },
    ];

  
const services = [
    {
      title: "SEO Audit & Strategy",
      description:
        "Full website audit, competitor analysis, and a growth roadmap tailored for Riyadh’s search intent.",
      link: "/riyadh/seo/audit-strategy",
    },
    {
      title: "On-Page Optimization",
      description:
        "Meta tags, structured data, internal linking, keyword placement, and Core Web Vitals optimization for better rankings.",
      link: "/riyadh/seo/on-page-optimization",
    },
    {
      title: "Off-Page SEO & Link Building",
      description:
        "Acquire high-quality backlinks through PR, partnerships, and contextual citations to boost authority and trust.",
      link: "/riyadh/seo/off-page-seo",
    },
    {
      title: "Local SEO",
      description:
        "Google Business optimization, Arabic/English listings, and area-specific pages for districts like Al Olaya, Diriyah, and Qurtubah.",
      link: "/riyadh/seo/local-seo",
    },
    {
      title: "Content Strategy & Blogging",
      description:
        "Topical map-driven content plans aligned with E-E-A-T principles and bilingual storytelling for your target audience.",
      link: "/riyadh/seo/content-strategy",
    },
    {
      title: "Analytics & Reporting",
      description:
        "GA4 + GSC integration, ranking dashboards, and conversion analysis — transparent and measurable results.",
      link: "/riyadh/seo/analytics-reporting",
    },
  ];

 
  const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    text: "Analyze site health, competition, and entity gaps. Identify missing opportunities and growth areas to build a solid SEO foundation.",
    gradient: "from-blue-500 via-cyan-400 to-transparent",
    color: "text-yellow-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "02",
    title: "Keyword & Topical Mapping",
    text: "Build content silos in both Arabic and English. Map keywords and entities to pages to maximize topical authority and relevance.",
    gradient: "from-green-500 via-teal-400 to-transparent",
    color: "text-green-500",
    bgcolor: "hover:bg-orange-500",
  },
  {
    number: "03",
    title: "Technical Optimization",
    text: "Fix website structure, speed, schema markup, and Core Web Vitals to improve crawl efficiency and user experience.",
    gradient: "from-yellow-400 via-yellow-300 to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-yellow-400",
  },
  {
    number: "04",
    title: "Content & Authority Building",
    text: "Publish, interlink, and promote entity-based content. Build backlinks and mentions to strengthen domain authority and E-E-A-T signals.",
    gradient: "from-pink-500 via-purple-400 to-transparent",
    color: "text-red-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "05",
    title: "Tracking & Reporting",
    text: "Monthly ranking, traffic, and conversion insights through transparent dashboards — SEO isn’t a one-time fix, it’s a compounding investment.",
    gradient: "from-green-500 via-transparent to-transparent",
    color: "text-blue-600",
    bgcolor: "hover:bg-yellow-600",
  },
];

const industries = [
                        {
                            id: "health",
                            img: healthcare,
                            label: "Digital Marketing for Healthcare",
                            text: " Healthcare & Dental Clinics",
                            description: "Rank for treatments, attract patients, and grow visibility.",
                        },
                        {
                            id: "auto",
                            img: blackcar,
                            label: "Construction & Engineering",
                            text: "Construction & Engineering",
                            description: " Generate high-intent B2B inquiries from organic traffic.",
                        },
                        {
                            id: "cleaning",
                            img: cleaningcomp,
                            label: "Digital Marketing for Industries",
                            text: " Industrial & Manufacturing Firms ",
                            description: "Build supplier visibility and trust online.",
                        },
                        {
                            id: "roofing",
                            img: roofing,
                            label: "Digital Marketing for Ecommerce",
                            text: "E-commerce & Retail",
                            description: "Rank for products and drive consistent conversions.",
                        },
                        {
                            id: "lawncare",
                            img: pet,
                            label: "Digital Marketing for Education & Training Institutes",
                            text: "Education & Training Institutes",
                            description: "Capture enrollments through search visibility and local maps.",
                        },
                        {
                            id: "dental",
                            img: dental,
                            label: "Digital Marketing for Corporate & Consulting Firms",
                            text: "Corporate & Consulting Firms",
                            description: "Build credibility and inbound visibility for brand trust.",
                        },
                    ]

export default function page() {
  return (
    <>
    {/* <HeroRiyadhSEO/> */}
    <LocationHeroSection
            ctaTheme='green'
            heading={
                <>
                <span>SEO Services in Riyadh{" "}
                            <span className="text-yellow-500">That Build Visibility, Authority, and Leads</span></span>
                </>
            }
            description='We help Saudi businesses dominate Google search through data-driven SEO strategies —
                            from entity-based optimization to bilingual content systems that rank across Arabic and English SERPs.'
              proofPoints={proofPoints}
              primaryCTA={{
                    text: 'Get a Free SEO Audit',
                    action: { type: 'openForm', form: 'seo' },
                }}
                secondaryCTA={{
                    text: 'Talk to an SEO Strategist',
                    variant: 'secondary',
                    action: {
                    type: 'link',
                    href: 'mailto:zee@bixeltek.com',
                    },
                }}
            />
    <SEOOpportunity />
    <SEOIssuesSection />
    <SeoCards />
    <SeoMarqueeRiyadh/>
    {/* <SeoServicesRiyadh/> */}
    <ServicesSection
    theme="green"
    heading="Comprehensive"
    spanText="SEO Services for Riyadh-Based Businesses"
    description="We manage your SEO end-to-end — from keyword research and technical optimization
            to content strategy and analytics — tailored for the Saudi market."
    services={services} 
    hoverStyle="hover:bg-gradient-to-tr hover:from-black hover:via-green-700 hover:to-green-500"       
    />
    {/* <RiyadhSeoWorkflow /> */}
    <LocationProcessSection
    heading={
      <>
      <span>
        From Discovery to Domination <br />{" "}
        <span className="text-yellow-500">A 5-Step SEO Framework.</span>
      </span>
      </>
    }
    description="Our Riyadh-based SEO process transforms websites from being invisible in search to ranking authority. Every step compounds value over time."
    steps={steps}
    footerText="Our framework ensures long-term, measurable SEO growth — no guesswork, no black box, just compounding results that drive authority and traffic."
    cta={{
      text:'Book a Free SEO Strategy Call',
      href:'mailto:zee@bixeltek.com',
      bg:'bg-gradient-to-tr from-green-500 via-green-700 to-green-950 hover:bg-gradient-to-tr hover:from-green-950 hover:via-green-700 hover:to-green-500 text-white'
    }}
    />
    <RiyadhSeoMapSection />
    {/* <SaudiRiSEOIndustry /> */}
    <LocationIndustrySection
    theme="green"
    heading={
      <>
      <span className=" text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500">
                        SEO Tailored for Every Saudi Industry
                    </span>
      </>
    }
    description="Our SEO systems are flexible yet specialized — we build authority for:"
    industries={industries}
    />
    <SeoSystemsSection />
      <section
      className="bg-black py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
      id="seo-cta"
    >
      {/* LEFT SIDE — TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
        <h2 className="text-3xl md:text-6xl font-inter font-bold text-white mb-6">
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
      <div className="lg:w-[50%] lg:mr-10 flex justify-start items-center">
        <ContactFromNew />
      </div>
    </section>
    </>
  )
}
