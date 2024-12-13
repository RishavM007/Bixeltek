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
export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Screen />
    <LogoTicker />
    <About />
    <Features />
    <Testimonials />
    <CallToAction />
    <Casestudy />
    <Footer />
    </>
  );
}
