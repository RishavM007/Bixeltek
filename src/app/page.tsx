export const metadata = {
  title: "Best Digital Marketing Agency | SEO, Google Ads & Web Design",
  description:
    "Bixeltek is a Google-certified digital marketing agency offering SEO, Google Ads, web design & social media marketing. Trusted in India, USA, Canada & Saudi. & Saudi.",
  keywords: [
    "digital marketing company Hyderabad",
    "best digital marketing agency Hyderabad",
    "Google Ads agency Hyderabad",
    "SEO services Hyderabad",
    "social media marketing Hyderabad",
    "PPC agency Hyderabad",
  ],
  alternates: {
    canonical: "https://bixeltek.com/",   
  },
  openGraph: {
    title: "Best Digital Marketing Agency | SEO, Google Ads & Web Design",
    description:
      "Bixeltek is a Google-certified digital marketing agency offering SEO, Google Ads, web design & social media marketing. Trusted in India, USA, Canada & Saudi.",
    siteName: "Bixeltek",
    type: "website",
    url: "https://bixeltek.com/",     
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Agency in Hyderabad | Bixeltek",
    description:
      "Google-certified digital marketing agency in Hyderabad offering SEO, Google Ads, Meta Ads & Web Design.",
  },
};

import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { About } from "@/sections/About";
import { Footer } from "@/sections/Footer";
import { ContactButton } from "@/sections/contactButton";
import WhyChoose from "@/sections/WhyChoose";
import CardList from "@/components/ServiceCards";
import CarouselSection from "@/components/industriescarosel";
import FAQSection from "@/sections/HomeFaq";
import Blog from "@/sections/Blog";
import Tech2 from "@/components/Tech2";
import TimelineSection from '@/sections/Process'
import GooglePartner from "@/sections/GooglePartner";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <About />
      <CardList />
      <section className="bg-white">
      <WhyChoose/>
      </section>
      {/* <MetricsSection/> */}
      <CarouselSection />
      <TimelineSection />
      {/* <Testimonials />
      <CallToAction /> */}
      <GooglePartner />
      <Tech2 />
      {/* <Casestudy /> */}
      <FAQSection/>
      <Blog/>
      <ContactButton />
      <Footer />
    </>
  );
}
