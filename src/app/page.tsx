import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Screen } from "@/sections/Screen";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Casestudy } from "@/sections/Casestudies";
export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Screen />
    <LogoTicker />
    <Features />
    <Testimonials />
    <CallToAction />
    <Casestudy />
    </>
  );
}
