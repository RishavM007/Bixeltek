import HeroTechnicalSEO from '@/components/TechnicalSEO/TechnicalHero'
import TechnicalSEOIntroSection from '@/components/TechnicalSEO/TechnicalSection1'
import CrawlOptimizationSection from '@/components/TechnicalSEO/TechnicalSection2'
import TechnicalSEOStacked from '@/components/TechnicalSEO/TechnicalSection3'
import LogFileAnalysisSection from '@/components/TechnicalSEO/TechnicalSection4'
import AIFutureProofSection from '@/components/TechnicalSEO/TechnicalSection5'
import TechnicalTech from '@/components/TechnicalSEO/TechnicalTech'
import ContactFromNew from '@/components/ContactFormNew'
import { Check } from 'lucide-react'
import React from 'react'
import TechnicalSeoFaq from '@/components/TechnicalSEO/TechFaq'

export default function page() {
    return (
        <>
        <HeroTechnicalSEO/>
        <TechnicalSEOIntroSection />
        <CrawlOptimizationSection />
        <TechnicalSEOStacked />
        <LogFileAnalysisSection/>
        <AIFutureProofSection />
        <TechnicalTech />
        <TechnicalSeoFaq/>
         <section
            className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
            id="technical-audit"
        >
            {/* LEFT SIDE - TEXT & CTA */}
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
                    Find Out What’s{" "}
                    <span className="text-blue-500">Holding Your Visibility Back</span>
                </h2>

                {/* Description */}
                <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                    Get a data-driven audit that maps every issue — from crawl depth to Core Web
                    Vitals — and provides a clear, 30-day technical roadmap to reclaim visibility
                    and ranking stability.
                </p>

                {/* Audit Includes List */}
                <ul className="flex flex-col text-white gap-4 mb-8">
                    {[
                        "Crawl & indexation report",
                        "Page speed & Core Web Vitals summary",
                        "Schema coverage audit",
                        "GA4 & GSC diagnostics",
                        "30-day improvement roadmap",
                    ].map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-[2px]" />
                            <span className="text-gray-100">{point}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA BUTTON */}
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
                >
                    Get My Free Audit
                </button>

                {/* Trust Badges */}
                <ul className="text-sm mt-10 flex flex-row md:flex-row gap-5 md:gap-10 transition-all duration-500">
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

            {/* RIGHT SIDE - FORM OR IMAGE */}
            <div className="w-[95%] md:w-[50%] lg:mr-10 flex justify-start items-center">
                <ContactFromNew />
            </div>
        </section>
        </>
    )
}
