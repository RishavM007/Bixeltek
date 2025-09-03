import React from 'react'
import HydHero from '@/components/Hyderabad/HydSection1'
import HydAbout from '@/components/Hyderabad/HydSection2'
import VideoScrollPage from '@/components/Hyderabad/HydSection3'
import ServicesTabs from '@/components/Hyderabad/HydSection5'
import BenefitsSection from '@/components/Hyderabad/HydSection6'
import ExpertiseSection from '@/components/Hyderabad/HydSection7'
import HydTimeline from '@/components/Hyderabad/HydTimeline'
import HowItWorks from '@/components/Hyderabad/HydSection9'
import HydWhyChooseUs from '@/components/Hyderabad/HydSection10'
import IndustryCarouselSection from '@/components/Hyderabad/HydSection8'
import HydFAQSection8 from '@/components/Hyderabad/HydFaq'
import HydCTA from '@/components/Hyderabad/HydCTA'
import ZoomText from '@/components/Hyderabad/HydSection4'
import HydLogoGrid from '@/components/Hyderabad/HydComp'

export default function page() {
    return (
        <>
            <main className='relative'>
                <div className="perspective-1000">
                    <HydHero />
                    <VideoScrollPage/>
                   <ExpertiseSection/>
                    <HydAbout />
                    {/* <ZoomOutText/> */}
                   <ServicesTabs/>
                   <ZoomText/>
                   <BenefitsSection />
                   <IndustryCarouselSection/>

                   {/* <IndustriesSection /> */}
                   <HydTimeline/>
                   <HydCTA/>
                   <HydWhyChooseUs/>
                   <HowItWorks />
                   <HydLogoGrid/>
                   <HydFAQSection8/>
                </div>
            </main>

        </>
    )
}
