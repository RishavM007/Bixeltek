
export const metadata = {
  title: "Digital Marketing Agency in Hyderabad | Bixeltek",
  description:
    "Drive more leads & sales with Hyderabad’s trusted digital marketing agency. SEO, Google Ads & Web Design powered by Google Partner expertise.",
  keywords: [
    "digital marketing company Hyderabad",
    "best digital marketing agency Hyderabad",
    "Google Ads agency Hyderabad",
    "SEO services Hyderabad",
    "social media marketing Hyderabad",
    "PPC agency Hyderabad",
  ],
  alternates: {
    canonical: "https://bixeltek.com/hyderabad",   
  },
  openGraph: {
    title: "Digital Marketing Agency in Hyderabad | Bixeltek",
    description:
      "Drive more leads & sales with Hyderabad’s trusted digital marketing agency. SEO, Google Ads & Web Design powered by Google Partner expertise.",
    siteName: "Bixeltek",
    type: "website",
    url: "https://bixeltek.com/hyderabad",     
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Agency in Hyderabad | Bixeltek",
    description:
      "Google-certified digital marketing agency in Hyderabad offering SEO, Google Ads, Meta Ads & Web Design.",
  },
};




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
import ContactFromNew from '@/components/ContactFormNew'
import Link from 'next/link'
import GradientBorderContainersMobHyd from '@/components/Hyderabad/HydTimelineMobile'
import { PhoneCall } from 'lucide-react'

export default function page() {
    return (
        <>
            <main className='relative'>
                <div className="perspective-1000">
                    <HydHero />
                    <VideoScrollPage/>
                   <ExpertiseSection/>
                   <ServicesTabs/>
                   <BenefitsSection />
                   <IndustryCarouselSection/>

                   {/* <IndustriesSection /> */}
                   <HydTimeline/>
                   <GradientBorderContainersMobHyd/>
                   <HydCTA/>
                   <HydWhyChooseUs/>
                   <HowItWorks />
                   <HydLogoGrid/>
                   <HydFAQSection8/>
                   <section className='bg-black p-2 md:p-20 mx-auto flex flex-col justify-center gap-10 items-center md:flex-row ' id='form'>
                <div className="w-full mt-14 md:mt-0 flex justify-center items-center px-6">
                    <div className="space-y-5 text-white max-w-xl ">
                        <h2 className="text-4xl md:text-4xl capitalize font-bold">
                            Lets grow your<br></br> business with 
                            <span className='text-blue-500'> google ads</span>
                        </h2>
                        <h3 className='text-xl md:text-2xl font-poppins'>Fill the form to get started</h3>
                        <p className="text-white font-poppins text-base leading-relaxed">
                            Ready to stop wasting ad spend and start driving measurable results? Partner with Bixeltek — a Google Partnered agency trusted by businesses worldwide. Fill out the form now to request your free Google Ads audit, and our certified experts will show you exactly how to increase conversions, reduce costs, and scale your growth with precision.
                        </p>
                        <div className="space-y-3 pt-3">
                            <Link href={'tel:+919100032301'}>
                                <div className="flex items-center gap-2">
                                    <PhoneCall size={22} />
                                    <span className="text-white text-base">Call: +91-9100032301</span>
                                </div>
                            </Link>

                            
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center' >
                    <ContactFromNew />
                </div>
            </section>
                </div>
            </main>

        </>
    )
}
