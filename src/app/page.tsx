export const metadata = {
  title: "Best Digital Marketing Agency in Hyderabad | Bixeltek",
  description:
    "Google-certified digital marketing agency in Hyderabad offering SEO, Google Ads, Meta Ads & Web Design. Trusted by clients in India, USA, Canada, UAE & Saudi.",
  keywords: [
    "digital marketing company Hyderabad",
    "best digital marketing agency Hyderabad",
    "Google Ads agency Hyderabad",
    "SEO services Hyderabad",
    "social media marketing Hyderabad",
    "PPC agency Hyderabad",
  ],
  openGraph: {
    title: "Best Digital Marketing Agency in Hyderabad | Bixeltek",
    description:
      "Google-certified digital marketing agency in Hyderabad offering SEO, Google Ads, Meta Ads & Web Design. Trusted by clients in India, USA, Canada, UAE & Saudi.",
    siteName: "Bixeltek",
    type: "website",
  },
  
};

export const dynamic = "force-dynamic";

import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import MetricsSection from "@/components/Counter3";
import { LogoTicker } from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Casestudy } from "@/sections/Casestudies";
import { About } from "@/sections/About";
import { Footer } from "@/sections/Footer";
import { ContactButton } from "@/sections/contactButton";
import ServiceCards from "@/components/ServiceCards";
import CardList from "@/components/ServiceCards";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <About />
      <CardList />
      <MetricsSection/>
      <Testimonials />
      <CallToAction />
      <Casestudy />
      <ContactButton />
      <Footer />
    </>
  );
}
