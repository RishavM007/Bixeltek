import { A_Comparison } from "@/components/DentalMarketing/Variant_A/A_Comparison";
import { A_ContactForm } from "@/components/DentalMarketing/Variant_A/A_ContactForm";
import { A_Hero } from "@/components/DentalMarketing/Variant_A/A_Hero";
import { A_Process } from "@/components/DentalMarketing/Variant_A/A_Process";
import { A_Reality } from "@/components/DentalMarketing/Variant_A/A_Reality";
import { A_Services } from "@/components/DentalMarketing/Variant_A/A_Services";
import { A_Testimonials } from "@/components/DentalMarketing/Variant_A/A_Testimonials";
import { Whiteheader } from "@/components/Whiteheader";
import { Footer } from "@/sections/Footer";


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
    canonical: "https://bixeltek.com/dental-marketing-001bxt",
  },
};

const Page = () =>{
        
    return(
        <>
        <Whiteheader/>
          
          <A_Hero/>

                <div style={{ background: "#F5F0E8", fontFamily: "'DM Sans', sans-serif" }}>
              <A_Testimonials/>
              <A_Reality/>
              <A_Process/>                  
              <A_Services/>
              <A_Comparison/>
              <A_ContactForm/>
                </div>
                <Footer/>
             </>
          );
        }

export default Page
