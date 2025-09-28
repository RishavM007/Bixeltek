export const metadata = {
    title: "Digital Marketing for Dentists | Grow Your Dental Clinic in USA & Canada",
    description:
        "Bixeltek helps dental clinics across USA & Canada book more patients every month. With ROI-driven SEO, Google Ads & websites, our clients consistently generate 120+ monthly patient calls & bookings.",
    keywords:
       "dental SEO, dental marketing, patient acquisition, dental clinic SEO, dental practice marketing",
    openGraph: {
        title: "Digital Marketing for Dentists | Grow Your Dental Clinic in USA & Canada",
        description:
            "Bixeltek helps dental clinics across USA & Canada book more patients every month. With ROI-driven SEO, Google Ads & websites, our clients consistently generate 120+ monthly patient calls & bookings.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/industries/dental-marketing",
    },
};


import React from 'react'
import ExperienceSection from '@/components/Dental/AboutSectionDental';
import DentalHero from '@/components/Dental/DentalHero';
import DentalStrategy from '@/components/Dental/DentalStrategy';
import DentalServicesTabs from '@/components/Dental/ServiceDental';
import BenefitsSectionDental from '@/components/Dental/DentalWhyChooseUs';
import { LogoTicker2Dental } from '@/components/Dental/DentalLogoTicket';
import BlockQuoteSection from '@/components/Dental/Blockquote';
import GradientBorderContainersMobDental from "@/components/Dental/DentalProcess";
import DentalFaq from '@/components/Dental/DentalFaq';
export default function page() {
  return (
  <>
    <DentalHero/>
    <LogoTicker2Dental/>
    <ExperienceSection/>
    <DentalStrategy/>
    <DentalServicesTabs />
    <GradientBorderContainersMobDental/>
    <BenefitsSectionDental />
    <DentalFaq/>
    <BlockQuoteSection/>
  </>
  )
}
