export const metadata = {
  title: "Bixeltek | Best Digital Marketing Company in Hyderabad",
  description:
    "Bixeltek is the leading digital marketing company in Hyderabad. We specialize in Google Ads, SEO, social media marketing, and performance-driven campaigns to boost your business growth.",
  keywords: [
    "digital marketing company Hyderabad",
    "best digital marketing agency Hyderabad",
    "Google Ads agency Hyderabad",
    "SEO services Hyderabad",
    "social media marketing Hyderabad",
    "PPC agency Hyderabad",
  ],
  openGraph: {
    title: "Bixeltek | Best Digital Marketing Company in Hyderabad",
    description:
      "Looking to grow your business? Bixeltek offers expert digital marketing services in Hyderabad, including SEO, Google Ads, and social media marketing. Get in touch today!",
    siteName: "Bixeltek",
    type: "website",
  },
  
};

export const dynamic = "force-dynamic";

import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Screen } from "@/sections/Screen";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Casestudy } from "@/sections/Casestudies";
import { About } from "@/sections/About";
import { Footer } from "@/sections/Footer";
import { ContactButton } from "@/sections/contactButton";
import TeamStatsSection from "@/sections/Counter2";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <About />
      <TeamStatsSection />
      <Features />
      <Testimonials />
      <CallToAction />
      <Casestudy />
      <ContactButton />
      <Footer />
    </>
  );
}
