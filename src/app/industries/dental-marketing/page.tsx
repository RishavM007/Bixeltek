export const metadata = {
    title: "Stop Losing Patients to Competitors—Let Us Help You Fill More Chairs Every Month",
    description:
        " For 4+ years, Bixeltek has helped dental clinics in USA & Canada turn clicks into calls, and calls into booked appointments. Clinics working with us consistently generate 120+ new patient calls every month.",
    keywords:
       "dental SEO, dental marketing, patient acquisition, dental clinic SEO, dental practice marketing",
    openGraph: {
        title: "Stop Losing Patients to Competitors—Let Us Help You Fill More Chairs Every Month",
        description:
            " For 4+ years, Bixeltek has helped dental clinics in USA & Canada turn clicks into calls, and calls into booked appointments. Clinics working with us consistently generate 120+ new patient calls every month.",
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
