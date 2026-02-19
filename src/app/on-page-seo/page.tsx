import OnPageAreas from '@/components/OnPageSEO/OnPageAreas'
import HeroOnPageSEO from '@/components/OnPageSEO/OnpageHero'
import ScienceOfRelevance from '@/components/OnPageSEO/OnpageSection1'
import OnPageSEOFramework from '@/components/OnPageSEO/OnpageSection2'
import UnderstandingWhySection from '@/components/OnPageSEO/OnPageSection3'
import SEOStacked from '@/components/OnPageSEO/OnpageSection4'
import VisibilityToVelocity from '@/components/OnPageSEO/OnPageSection5'
import ContactFromNew from '@/components/ContactFormNew'
import { Check } from 'lucide-react'
import React from 'react'
import OnPageSeoFaq from '@/components/OnPageSEO/OnPageFaq'
import LocationProcessSection from '@/components/Common/location/LocationProcessSection'
import GlobalExpertiseSection from '@/components/Common/GlobalExpertiseSection'
import saudiImg from "@/assets/Saudi Web Design.png";
import indiaImg from "@/assets/india-gate-delhi-1-attr-hero.jpeg";
import uaeImg from "@/assets/pexels-photo-13736456.jpeg";
import canadaImg from "@/assets/m_Toronto_destination_main_1_l_572_1000.webp";
import usaImg from "@/assets/17.jpg";

const steps = [
  {
    number: "01",
    title: "Intent Discovery & Entity Mapping",
    text: "We start with in-depth SERP decoding — understanding how Google interprets your niche through entities, related questions, and semantic relationships. Each keyword is mapped to its intent layer — informational, navigational, or transactional — forming the foundation for relevance.",
    gradient: "from-yellow-500 via-amber-400 to-transparent",
    color: "text-yellow-400",
    bgcolor: "hover:bg-yellow-600",
  },
  {
    number: "02",
    title: "Content Architecture",
    text: "Next, we structure your website like an information pyramid — topics flow logically from H1 to H4, creating a visual and semantic breadcrumb trail. Each paragraph and section plays a role in building contextual depth while keeping UX intuitive and fluid.",
    gradient: "from-blue-500 via-cyan-400 to-transparent",
    color: "text-cyan-400",
    bgcolor: "hover:bg-blue-600",
  },
  {
    number: "03",
    title: "Meta Layering",
    text: "We design meta titles and descriptions not just for clickbait — but for clarity. Each tag balances emotional pull with keyword precision, helping Google connect your page to user intent while boosting CTR organically.",
    gradient: "from-pink-500 via-fuchsia-400 to-transparent",
    color: "text-pink-400",
    bgcolor: "hover:bg-pink-600",
  },
  {
    number: "04",
    title: "Internal Link Flow",
    text: "We engineer authority routing — placing internal links where they make sense both logically and semantically. Every page passes value to the next, ensuring search engines crawl your ecosystem efficiently and users stay within your content universe.",
    gradient: "from-green-400 via-emerald-500 to-transparent",
    color: "text-emerald-400",
    bgcolor: "hover:bg-emerald-500",
  },
  {
    number: "05",
    title: "Schema Enrichment",
    text: "We integrate structured data — defining entities like People, Organization, FAQ, and Article. This allows AI-driven engines to fully ‘understand’ your site, enabling rich snippets and visibility in voice search results.",
    gradient: "from-purple-500 via-indigo-500 to-transparent",
    color: "text-purple-400",
    bgcolor: "hover:bg-purple-600",
  },
];

const locations = [
    {
        country: "Saudi Arabia",
        emoji: "🇸🇦",
        image: saudiImg,
        desc: (
            <>
                <a
                    href="/saudi-arabia/riyadh/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Riyadh
                </a>
                ,{" "}
                <a
                    href="/saudi-arabia/eastern-province/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Eastern Province
                </a>
                ,{" "}
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    Dhahran
                </a>{" "}
                — bilingual builds with Arabic + English parity, mobile-first layouts,
                and GCC-compliant hosting.
            </>
        ),
    },
    {
        country: "India",
        emoji: "🇮🇳",
        image: indiaImg,
        desc: (
            <>
                <a
                    href="/social-media-marketing-agency-hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Hyderabad
                </a>
                ,{" "}
                <a
                    href="/bangalore/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white "
                >
                    Bangalore
                </a>
                ,{" "}
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white "
                >
                    Mumbai
                </a>{" "}
                — fast, marketing-ready hybrid websites integrating CMS, CRM, and
                automation tools.
            </>
        ),
    },
    {
        country: "UAE",
        emoji: "🇦🇪",
        image: uaeImg,
        desc: (
            <>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    Dubai
                </a>
                ,{" "}
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    Abu Dhabi
                </a>{" "}
                — premium design + high-performance React front-ends for luxury, real
                estate, and financial brands.
            </>
        ),
    },
    {
        country: "Canada",
        emoji: "🇨🇦",
        image: canadaImg,
        desc: (
            <>
                <a
                    href="/toronto/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Toronto
                </a>
                ,{" "}
                <a
                    href="/vancouver/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Vancouver
                </a>,{" "}
                <a
                    href="/mississauga/seo-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Mississauga
                </a>{" "}
                — bilingual (EN/FR) systems built for accessibility, compliance, and
                Core Web Vitals excellence.
            </>
        ),
    },
    {
        country: "United States",
        emoji: "🇺🇸",
        image: usaImg,
        desc: (
            <>
                SaaS and enterprise clients across{" "}
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    the U.S.
                </a>{" "}
                using Next.js + Node for speed, analytics depth, and compliance
                readiness.
            </>
        ),
    },
];

export default function page() {
    
    return (
        <>
            <HeroOnPageSEO />
            <ScienceOfRelevance />
            {/* <OnPageSEOFramework /> */}
            <LocationProcessSection
            heading={
                <span>Where <span className="text-blue-500">Language</span> Meets <span className="text-yellow-400">Engineering</span></span>
            }
            description='True optimization blends linguistics and logic. We analyze how search engines read your content — then design each
        page as a semantic model that satisfies both machines and minds. Every section, tag, and title is engineered to 
        communicate expertise clearly, making your content unmistakably relevant.'
        steps={steps}
        cta={{
            text:'Get My On-Page SEO Audit',
            href:"mailto:zee@bixeltek.com"
        }}
        footerText='Every word becomes a signal. Every signal builds context. And context is what earns you both rankings and reader trust — sustainably.'
            />
            <UnderstandingWhySection />
            <SEOStacked />
            <VisibilityToVelocity />
            {/* <OnPageAreas /> */}
            <GlobalExpertiseSection
            heading={
                <span>Global Expertise,{" "}
                    <span className="text-blue-500">Localized Optimization </span></span>
            }
            description='Our On-Page SEO systems are adapted to regional search behavior and language nuances across :'
            locations={locations}
            footerText='Each deployment includes localized schema, bilingual metadata, and intent-based keyword mapping.'
            /> 
            <OnPageSeoFaq/>
            <section
                className="bg-black py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
                id="seo-gap-audit"
            >
                {/* LEFT SIDE - TEXT & CTA */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
                    <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
                        Find the Gaps That{" "}
                        <span className="text-blue-500">Hold You Back</span>
                    </h2>

                    <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8">
                        Your audit uncovers semantic voids, keyword overlaps, and structural
                        inefficiencies that limit rank potential. Each insight is mapped into
                        a 30-day roadmap designed to fix what’s slowing you down.
                    </p>

                    {/* Includes List */}
                    <ul className="flex flex-col text-white gap-4 mb-8">
                        {[
                            "Entity coverage report",
                            "Title & heading alignment matrix",
                            "Schema validation snapshot",
                            "30-day improvement roadmap",
                        ].map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-[2px]" />
                                <span className="text-gray-100">{point}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA BUTTON */}
                    <ul className="text-sm mt-8 flex flex-row md:flex-row gap-5 md:gap-10 transition-all duration-500">
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

                {/* RIGHT SIDE - FORM OR IMAGE PLACEHOLDER */}
                <div className="lg:w-[50%] lg:mr-10 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>

        </>
    )
}
