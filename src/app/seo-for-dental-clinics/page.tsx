export const metadata = {
  title: "SEO for Dental Clinics | Local & AI SEO Systems to Attract More Patients – Bixeltek",
  description: "Bixeltek helps dental clinics dominate Google’s rankings and AI Overviews. From local SEO and content strategy to AI SEO and entity optimization, we turn your dental website into a patient-generation machine.",
  keywords: "SEO for dental clinics, dental SEO agency, dentist marketing Bangalore, dental clinic SEO services, local SEO for dentists, Google Business optimization dental, AI SEO for healthcare, dental website SEO India, dental practice marketing, clinic website optimization, increase dental patient leads, dental SEO experts, healthcare SEO strategy, best SEO company for dentists, dental content marketing, medical SEO Bangalore, dental PPC and SEO integration, Google Maps SEO dental clinics, patient acquisition strategy, dental SEO consultant India",
  openGraph: {
    title: "SEO for Dental Clinics | Local & AI SEO Systems to Attract More Patients – Bixeltek",
    description: "Bixeltek helps dental clinics dominate Google’s rankings and AI Overviews. From local SEO and content strategy to AI SEO and entity optimization, we turn your dental website into a patient-generation machine.",
    type: "website",
  },
  alternates: {
    canonical: "https://bixeltek.com/seo-for-dental-clinics",
  },
};



import FAQAccordion from '@/components/DentalSEO/DentalSEOFaq';
import DentalSEOHero from '@/components/DentalSEO/DentalSEOHero';
import DentalSEOIntro from '@/components/DentalSEO/DentalSEOSection1';
import DentalTraditionalSEO from '@/components/DentalSEO/DentalSEOSection2';
import SEOAISystemSection from '@/components/DentalSEO/DentalSEOSection3';
import FeatureGridDental from '@/components/DentalSEO/DentalSEOSection4';
import AISEO from '@/components/DentalSEO/DentalSEOSection5';
import React from 'react'

export default function page() {
  return (
      <>
      <DentalSEOHero />
      <DentalSEOIntro />
      <DentalTraditionalSEO />
      <SEOAISystemSection />
      <FeatureGridDental />
      <AISEO />
      <FAQAccordion />
      </>
  )
}


