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
