export const metadata = {
    title: "Google Ads Services in Hyderabad | Certified Google Partner Agency",
    description: "Work with a certified Google Partner agency for expert Google Ads services in Hyderabad. ROI-focused PPC campaigns that deliver more leads and measurable growth.",
    keywords: "Google Ads, Marketing, SEO, PPC, Bixeltek",
    openGraph: {
        title: "Google Ads Services in Hyderabad | Certified Google Partner Agency",
        description: "Work with a certified Google Partner agency for expert Google Ads services in Hyderabad. ROI-focused PPC campaigns that deliver more leads and measurable growth.",
        type: "website",
    },
      alternates: {
    canonical: "https://bixeltek.com/google-ads-agency-hyderabad", // 👈 canonical URL here
  },
};

import React from 'react';
import GaHero from '@/components/GaHero';
import GaSection from '@/components/GaSection';
import toast, { Toaster } from 'react-hot-toast';
import AdsFailureSection from '@/components/GaSection2';
import { PhoneCall, MessageCircle, CalendarDays } from "lucide-react"
import Image from 'next/image';
import pet from "@/assets/sincerely-media-VNsdEl1gORk-unsplash.jpg";
import school from '@/assets/school.jpg'
import roofing from "@/assets/digital marketing for roofing industries.jpg";
import ContactFromNew from '@/components/ContactFormNew'
import { FaTooth, FaHospital, FaDog, FaGasPump, FaCar, FaBroom, FaGraduationCap, FaBuilding, FaTree, FaSeedling } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import healthcare from "@/assets/digital marketing for health care practices.jpg";
import lawncare from "@/assets/digital marketing for lawn care services.jpg";
import blackcar from "@/assets/digital marketing for car detailers.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg";
import LightFaqSection from '@/components/LightFaq';
import { Googleadecarosel } from '@/components/Googleadecarosel';
import ContactFrom from '@/components/ContactFrom';
import { LuTrendingUp, LuTarget, LuFlaskConical, LuClipboardList, LuLayoutDashboard, LuLayers } from "react-icons/lu";
import { Googlecard } from '@/components/Cards/Googleadscards';
import HoverDevCards from '@/components/Hovercards';
import { FaChartLine, FaChartPie, FaChartBar } from "react-icons/fa";
import { SiPolestar } from "react-icons/si";
import Link from 'next/link';
import GaWhyUs from '@/components/Hyderabad/GoogleAds/GaWhyUs,';
import GaWorkWithUs from '@/components/Hyderabad/GoogleAds/GaWorkWithUs';
import GaCTA1 from '@/components/Hyderabad/GoogleAds/GaCTA1';
import GaBenefits from '@/components/Hyderabad/GoogleAds/GaBenefits';
import GaCTA2 from '@/components/Hyderabad/GoogleAds/GaCTA2';
import GaHowItWorks from '@/components/Hyderabad/GoogleAds/GaHowItWorks';
import GaTestimonals from '@/components/Hyderabad/GoogleAds/GaTestimonals';
import GaWhatWeDo from '@/components/Hyderabad/GoogleAds/GaWhatWeDo';
import GaResults from '@/components/Hyderabad/GoogleAds/GaResults';
import GaLeads from '@/components/Hyderabad/GoogleAds/GaLeads';
import GaGlimpse from '@/components/Hyderabad/GoogleAds/GaGlimpse';
import GaContact from '@/components/Hyderabad/GoogleAds/GaContact';


const industries = [
    { name: "Dental", icon: <FaTooth /> },
    { name: "Healthcare", icon: <FaHospital /> },
    { name: "Pet Shops", icon: <FaDog /> },
    { name: "Oil & Gas", icon: <FaGasPump /> },
    { name: "Automobile", icon: <FaCar /> },
    { name: "Roof Cleaning", icon: <FaBroom /> },
    { name: "Education", icon: <FaGraduationCap /> },
    { name: "Real Estate", icon: <FaBuilding /> },
    { name: "Arborist & Tree Removal", icon: <FaTree /> },
    { name: "Lawn Care", icon: <FaSeedling /> },
    { name: "E-commerce", icon: <RiShoppingCartFill /> },
];

const faqs = [
    {
        question: "What is Google Ads, and how can it help my business grow?",
        answer: "Google Ads is a powerful pay-per-click (PPC) advertising platform that helps businesses appear at the top of Google search results. By targeting high-intent keywords, businesses can attract more leads, increase sales, and improve brand visibility.",
    },
    {
        question: "How much does it cost to run a Google Ads campaign?",
        answer: "The cost of running a Google Ads campaign depends on factors like industry competition, keyword bidding, and ad quality. We create **cost-effective PPC campaigns** tailored to your budget, ensuring maximum ROI.",
    },
    {
        question: "Can Google Ads generate high-quality leads for my business?",
        answer: "Yes! Google Ads allows **laser-focused audience targeting** based on location, interests, demographics, and search intent. This ensures you attract **qualified leads** who are ready to convert.",
    },
    {
        question: "How long does it take to see results with Google Ads?",
        answer: "Unlike SEO, which takes months to rank, Google Ads delivers **instant traffic** to your website. However, optimizing your ad campaigns for maximum **click-through rate (CTR)** and conversions may take 2-4 weeks.",
    },
    {
        question: "What types of Google Ads campaigns should I run?",
        answer: "The best **Google Ads campaign** type depends on your business goals. We offer: **Search Ads** (for high-intent keywords), **Display Ads** (for brand awareness), **Shopping Ads** (for e-commerce), **Video Ads** (for YouTube marketing), and **Remarketing Ads** (to retarget past visitors).",
    },
    {
        question: "Can I target a specific audience using Google Ads?",
        answer: "Absolutely! Google Ads provides advanced targeting options like **geo-targeting, device targeting, demographic filters, keyword intent targeting**, and remarketing. This ensures your ads reach the right people at the right time.",
    },
    {
        question: "How do I measure the success of my Google Ads campaign?",
        answer: "We track key performance metrics like **CTR (Click-Through Rate), Conversion Rate, Quality Score, Cost Per Click (CPC), and Return on Ad Spend (ROAS)** to ensure you get the best results from your ad budget.",
    },
    {
        question: "Do I need a large budget to start Google Ads?",
        answer: "No, you can start with a **small Google Ads budget** and scale as you see positive ROI. We optimize ad spending to minimize costs and **maximize lead generation** within your budget.",
    },
    {
        question: "Can you manage my Google Ads campaigns for me?",
        answer: "Yes! Our **Google Ads management services** include **campaign setup, keyword research, A/B testing, conversion tracking, bid optimization, and continuous performance monitoring** to boost your ad results.",
    },
    {
        question: "Why should I choose Bixeltek for Google Ads management?",
        answer: "Bixeltek is a **trusted Google Ads agency** specializing in **high-performance PPC campaigns**. We focus on **increasing conversions, reducing ad spend wastage, and delivering measurable growth** for your business.",
    },
];



export default function Home() {



    const benefits = [
        {
            icon: <LuTrendingUp className="text-purple-600 text-3xl" />,
            title: "Higher ROI",
            description: "We optimize your campaigns for maximum profitability with data-driven insights.",
        },
        {
            icon: <LuTarget className="text-blue-500 text-3xl" />,
            title: "Precise Audience Targeting",
            description: "Refined audience targeting to reach high-converting customers.Now stop worrying about reaching the wrong audience at the wrong time in the wrong place.",
        },
        {
            icon: <LuFlaskConical className="text-red-500 text-3xl" />,
            title: "A/B Ad Testing",
            description: "Continuous testing and optimization to improve ad performance.",
        },
        {
            icon: <LuClipboardList className="text-orange-500 text-3xl" />,
            title: "Advanced Analytics and Conversion Tracking",
            description: "Get detailed reports with actionable insights to track campaign success.",
        },
        {
            icon: <LuLayoutDashboard className="text-indigo-500 text-3xl" />,
            title: "Conversion-Focused Pages (CRO)",
            description: "Landing pages built for maximum engagement and conversions.",
        },
        {
            icon: <LuLayers className="text-purple-500 text-3xl" />,
            title: "Competitor Analysis",
            description: "Stay ahead with adaptive strategies based on competitor analysis.",
        },
    ];

    return (
        <>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
            <GaHero />
            <GaSection />
            <GaWhyUs/>
            <section className='bg-white py-20'>
                <Googlecard />
            </section>
            <GaWorkWithUs/>
            <GaCTA1 />


            <section className='bg-white py-20'>
                <Googleadecarosel />
            </section>
            <GaBenefits benefits={benefits} /> 
            <section>
                <AdsFailureSection />
            </section>
            <GaCTA2/>

           <GaHowItWorks/>
           <GaTestimonals/>
           <GaWhatWeDo/>
           <GaResults industries={industries}/>
            <GaLeads/>
           <GaGlimpse/> 
            <LightFaqSection faqs={faqs} />
            <GaContact/>
        
        </>
    );
}
