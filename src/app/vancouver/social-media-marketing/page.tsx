export const metadata = {
    title: "Social Media Marketing Vancouver | Meta & Instagram Ads Agency – Bixeltek",
    description:
        "Bixeltek helps Vancouver businesses grow with social media marketing across Meta, Instagram, and YouTube — combining paid ads, creative strategy, and content to drive engagement and leads.",
    keywords:
        "Web development Vancouver, Best web development company Vancouver, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Social Media Marketing Vancouver | Meta & Instagram Ads Agency – Bixeltek",
        description:
            "Bixeltek helps Vancouver businesses grow with social media marketing across Meta, Instagram, and YouTube — combining paid ads, creative strategy, and content to drive engagement and leads.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/vancouver/social-media-marketing",
    },
};

import React from 'react'
import HeroSocialMediaVancouver from '@/components/Vancouver/SocialMedia/SMVancHero'
import VancouverSocialCitySection from '@/components/Vancouver/SocialMedia/SMVancSection1'
import WhyBusinessesStruggleSocial from '@/components/Vancouver/SocialMedia/SMVancSection2'
import SocialMediaServicesVancouver from '@/components/Vancouver/SocialMedia/SMVancSection3'
import SocialMediaProcessVancouver from '@/components/Vancouver/SocialMedia/SMVancProcess'
import SocialVanIndustries from '@/components/Vancouver/SocialMedia/SMIndustriesVanc'
import VancouverSocialFaqs from '@/components/Vancouver/SocialMedia/SMVancFaq'
import SocialTrustSection from '@/components/Vancouver/SocialMedia/SMVancSection4'
import ContactFromNew from '@/components/ContactFormNew';
import ServicesSection from '@/components/Common/ServicesGrid';
export default function page() {
    const services = [
    {
      title: "Meta Ads (Facebook & Instagram)",
      description:
        "Run highly targeted Meta campaigns that drive real conversions — not just clicks. From creative storytelling to audience segmentation, we optimize every ad for ROI and brand growth.",
      link: "#",
    },
    {
      title: "Content Strategy & Management",
      description:
        "We handle everything from content planning to posting — designing scroll-stopping visuals, writing persuasive captions, and aligning each post with your brand tone and marketing funnel.",
      link: "#",
    },
    {
      title: "Funnel & Remarketing Campaigns",
      description:
        "Turn missed opportunities into loyal customers with smart remarketing campaigns. We re-engage visitors and past engagers using data-driven funnel strategies that convert interest into action.",
      link: "#",
    },
    {
      title: "Paid Video Campaigns (YouTube & Reels)",
      description:
        "Use storytelling and motion to grab attention where it matters. From Reels to YouTube Ads, our paid video campaigns are built to inspire action and increase your reach dramatically.",
      link: "#",
    },
    {
      title: "Social Media Branding & Design",
      description:
        "Every pixel tells your story. We craft cohesive visuals, post templates, and brand kits that ensure your presence across all platforms looks consistent, modern, and memorable.",
      link: "#",
    },
    {
      title: "Analytics, Insights & Reporting",
      description:
        "We don’t guess — we measure. Get transparent insights through real-time dashboards and monthly performance reports that show exactly how your campaigns are performing.",
      link: "#",
    },
  ];
    return (
        <>
            <HeroSocialMediaVancouver />
            <VancouverSocialCitySection />
            <WhyBusinessesStruggleSocial />
            <ServicesSection
            heading='Everything You Need to'
            spanText='Grow Through Social Media'
            description='From organic content planning to high-performing Meta Ads, we manage every aspect of your
          social media presence — focusing on leads, brand authority, and measurable revenue growth.'
            services={services}
            />
            <SocialMediaProcessVancouver />
            <SocialTrustSection />
            <SocialVanIndustries />
            <VancouverSocialFaqs />
            <section
                className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
                id="form"
            >
                {/* Left Side - Text & CTAs */}
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    <h2 className="text-4xl md:text-5xl font-inter font-bold text-white mb-6">
                        Ready to Grow Your Brand  <span className="text-blue-500">With Social Media That Converts?</span>
                    </h2>
                    <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-8">
                        Stop blending in — it’s time to stand out. Let Bixeltek help your Vancouver business attract followers who convert into customers through powerful, data-driven social media marketing.
                    </p>

                    {/* CTA Buttons */}

                </div>

                {/* Right Side - Contact Form */}
                <div className="w-[95%] md:w-[50%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section>
        </>
    )
}
