import { useEffect, useRef, useState } from "react";
import { Whiteheader } from "@/components/Whiteheader";
import { Footer } from "@/sections/Footer";
import { B_Hero } from "@/components/DentalMarketing/Variant_B/B_Hero";
import { B_Testiomonials } from "@/components/DentalMarketing/Variant_B/B_Testimonials";
import { B_CTA } from "@/components/DentalMarketing/Variant_B/B_CTA";
import { B_Services } from "@/components/DentalMarketing/Variant_B/B_Services";
import { B_Transformation } from "@/components/DentalMarketing/Variant_B/B_Transformation";
import { B_ContactForm } from "@/components/DentalMarketing/Variant_B/B_ContactForm";
import { B_HowItWorks } from "@/components/DentalMarketing/Variant_B/B_HowItWorks";

export const metadata = {
  title: "Dental Marketing Agency | Get More Patients & Appointments – Bixeltek",
  description:
    "Bixeltek is a dental marketing agency helping dental clinics grow with SEO, Google Ads, and high-converting dental websites. Get predictable patient growth.",
  keywords:
    "dental marketing, dental marketing agency, marketing for dentists, dental SEO, dentist Google Ads, dental website design, dental practice marketing",
  openGraph: {
    title: "Dental Marketing That Brings Real Patients | Bixeltek",
    description:
      "We help dental practices generate consistent appointments using SEO, Google Ads, and conversion-focused dental websites.",
    type: "website",
  },
  alternates: {
    canonical: "https://bixeltek.com/dental-marketing-002bxt",
  },
};


const Page = () =>{
        
  return (
    <>
    <Whiteheader/>
    <B_Hero/>

        <div style={{ background: "#F3F8F4", fontFamily: "'Nunito', sans-serif" }}>
        <B_Testiomonials/>
        <B_Transformation/>
        <B_HowItWorks/>              
        <B_Services/>
        <B_CTA/>  
        <B_ContactForm/>
        </div>
        <Footer/>
        </>
      );
  }

export default Page
