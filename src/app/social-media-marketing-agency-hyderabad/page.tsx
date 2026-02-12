export const metadata = {
    title: "Social Media Marketing Company in Hyderabad | Instagram & Facebook Ads | Bixeltek",
    description:
        "Elevate your brand with Bixeltek, Hyderabad’s leading social media management agency. Specialized in Instagram ads, Facebook ads, and tailored social media marketing services to drive business growth and conversions.",
    keywords:
        "Bixeltek social media, Social media management Hyderabad, Best social media agency Hyderabad, Instagram marketing, Facebook ads, LinkedIn marketing, Twitter management, Social media strategy, Content creation, Brand growth, Online presence",
    openGraph: {
        title: "Bixeltek | Expert Social Media Marketing Services in Hyderabad",
        description:
            "Boost your brand’s online presence with Bixeltek’s professional social media management services. Drive engagement, increase reach, and build a strong brand identity.",
        type: "website",
    },
            alternates: {
    canonical: "https://bixeltek.com/social-media-marketing-agency-hyderabad", // 👈 canonical URL here
  },
};

import CarouselSection from "@/components/industriescarosel";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import Link from "next/link";
import ContactFrom from "@/components/ContactFrom";
import HowItWorks from "@/components/howitworksSm";
import LightFaqSection from "@/components/LightFaq";
import Image from "next/image";
import cursorimg from '@/assets/images/cursor.png';
import StackingCarousel from "@/components/horcaroselSm";
import messageimage from '@/assets/images/message.png'
import { Toaster } from "react-hot-toast";
//@ts-ignore
import SMHero from "@/components/Hyderabad/SocialMedia/SMHero";
import SMWhyChooseUs from "@/components/Hyderabad/SocialMedia/SMWhyChooseUs";
import SMServices from "@/components/Hyderabad/SocialMedia/SMServices";
import SMCTA from "@/components/Hyderabad/SocialMedia/SMCTA";
export default function SocialMedia() {


    const faqs = [
        {
            question: "Which social media platforms does Bixeltek manage?",
            answer: "Bixeltek expertly manages Instagram, Facebook, LinkedIn, Twitter, and other major social media platforms tailored to your needs.",
        },
        {
            question: "Can Bixeltek tailor social media campaigns specifically for my business?",
            answer: "Yes! Our agency specializes in developing highly customized social media strategies aligned with your specific goals and target audience in Hyderabad.",
        },
        {
            question: "How quickly will I see results?",
            answer: "Typically, clients begin to see noticeable results within the first few weeks of launching a campaign, with significant improvements becoming evident over 2-3 months.",
        },
        {
            question: "What is included in your monthly reporting?",
            answer: "Our comprehensive monthly reports include detailed analytics, performance metrics, audience insights, campaign effectiveness, and actionable recommendations.",
        },
        {
            question: "Do you provide photo and video content services?",
            answer: "Yes, we offer professional photo and video production services tailored specifically for social media platforms to enhance your visual content strategy.",
        },
        {
            question: "How do you determine the right social media strategy for my business?",
            answer: "We conduct an initial discovery session, analyzing your business objectives, market competition, audience behavior, and previous social media performance to develop a tailored strategy.",
        },
        {
            question: "Can Bixeltek help manage social media ads budget?",
            answer: "Absolutely! We optimize and manage your advertising budgets carefully, ensuring you achieve maximum ROI from your Instagram, Facebook, LinkedIn, and Twitter ad campaigns.",
        },
        {
            question: "Do I have to commit to a long-term contract?",
            answer: "We offer flexible contract options, including month-to-month plans, allowing you to scale or adjust services as needed.",
        },
    ];


    return (
        <>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
            <SMHero/>
            <SMWhyChooseUs/>
            <SMServices/>
            <HowItWorks />
            <StackingCarousel />
            <CarouselSection />
            <SMCTA/>
            <LightFaqSection faqs={faqs} />
        </>

    );
}