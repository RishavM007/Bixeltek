export const metadata = {
    title: "Stop Losing Patients to Competitors—Let Us Help You Fill More Chairs Every Month",
    description:
        " For 4+ years, Bixeltek has helped dental clinics in USA & Canada turn clicks into calls, and calls into booked appointments. Clinics working with us consistently generate 120+ new patient calls every month.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Stop Losing Patients to Competitors—Let Us Help You Fill More Chairs Every Month",
        description:
            " For 4+ years, Bixeltek has helped dental clinics in USA & Canada turn clicks into calls, and calls into booked appointments. Clinics working with us consistently generate 120+ new patient calls every month.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/services/seo-services",
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
