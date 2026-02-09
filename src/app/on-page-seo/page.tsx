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

export default function page() {
    return (
        <>
            <HeroOnPageSEO />
            <ScienceOfRelevance />
            <OnPageSEOFramework />
            <UnderstandingWhySection />
            <SEOStacked />
            <VisibilityToVelocity />
            <OnPageAreas />
            <OnPageSeoFaq/>
            <section
                className="bg-black py-20 px-4 md:px-20 flex flex-col lg:flex-row items-center gap-10"
                id="seo-gap-audit"
            >
                {/* LEFT SIDE - TEXT & CTA */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start px-6">
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
                <div className="w-[95%] lg:w-[50%] lg:mr-10 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>

        </>
    )
}
