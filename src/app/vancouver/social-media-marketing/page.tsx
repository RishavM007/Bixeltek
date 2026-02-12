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
import LocationHeroSection from '@/components/Common/location/LocationHeroSection';
import experienceIcon from "@/assets/medal-ribbons-star-svgrepo-com.png";
import retentionIcon from "@/assets/star-shine-svgrepo-com.png";
import partnerIcon from "@/assets/google-authenticator-svgrepo-com.png";
import LocationIndustrySection from '@/components/Common/location/LocationIndustrySection';
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg"
import pet from "@/assets/groupmates-lesson.jpg"
import roofing from "@/assets/digital marketing for roofing industries.jpg"
import dental from "@/assets/close-up-dentist-instruments (1).jpg"
import lawncare from "@/assets/digital marketing for lawn care services.jpg"
import blackcar from "@/assets/digital marketing for car detailers.jpg"
import healthcare from "@/assets/digital marketing for health care practices.jpg"
import LocationFaqSection from '@/components/Common/location/LocationFaqSection';
import ContactCTASection from '@/components/Common/location/LocationCtaSection';
import LocationProcessSection from '@/components/Common/location/LocationProcessSection';

  const proofPoints = [
    { id: 1, text: "4+ Years of Paid & Organic Social Experience", icon: experienceIcon },
    { id: 2, text: "90% Client Retention Rate", icon: retentionIcon },
    { id: 3, text: "Meta & Google Partner Certified", icon: partnerIcon },
  ];

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


  const industries = [
                        {
                            id: "health",
                            img: healthcare,
                            label: "Digital Marketing for Healthcare",
                            text: "Health Care Practices",
                            description: "Local SEO + targeted ads to book 30+ new patients per month.",
                        },
                        {
                            id: "auto",
                            img: blackcar,
                            label: "Digital Marketing for Automobiles",
                            text: "Automobile industry",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "cleaning",
                            img: cleaningcomp,
                            label: "Digital Marketing for Cleaning Companies",
                            text: "Cleaning Industry",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "roofing",
                            img: roofing,
                            label: "Digital Marketing for Roofing Companies",
                            text: "Roofing Industry",
                            description: "High-ticket lead funnels built for real estate and project-based services.",
                        },
                        {
                            id: "lawncare",
                            img: lawncare,
                            label: "Digital Marketing for Lawn Care and Landscaping",
                            text: "Lawn Care Industries",
                            description: "Maps optimization + hyperlocal PPC to drive more calls and foot traffic.",
                        },
                        {
                            id: "dental",
                            img: dental,
                            label: "Digital Marketing for Dental Clinic",
                            text: "Dental Clinics",
                            description: "Local SEO + targeted ads to book 30+ new patients per month.",
                        },
                        {
                            id: "pet",
                            img: pet,
                            label: "Digital Marketing for Pet Stores",
                            text: "Educational Institutes",
                            description: "Product SEO, performance ads & retargeting funnels to scale sales.",
                        },
                        {
                            id: "oil",
                            img: oil,
                            label: "Digital Marketing for Oil Refineries",
                            text: "Oil and Gas Industry",
                            description: "Paid growth loops, demo-booking strategies, and B2B marketing that closes deals.",
                        }
                    ]


 const faqs = [
                      {
    question: "Which platforms do you manage?",
    answer:
      "We handle Facebook, Instagram, YouTube, LinkedIn, and TikTok — both organic and paid.",
  },
  {
    question: "Do I need a big budget for ads?",
    answer:
      "Not necessarily. We build scalable ad strategies that perform even on modest budgets.",
  },
  {
    question: "Can you manage both content and ads?",
    answer:
      "Yes — we offer full-service management including content, design, posting, and performance marketing.",
  },
  {
    question: "How do you measure results?",
    answer:
      "We track KPIs like engagement, cost per lead, ROAS, and conversion metrics — shared through monthly reports.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery & Audience Research",
    text: "We start by understanding your brand, business goals, and audience. Through detailed persona mapping and competitor analysis, we identify which platforms and content formats resonate most with your ideal customers — setting the foundation for every campaign that follows.",
    gradient: "from-blue-500 via-blue-400 to-transparent",
    color: "text-blue-500",
    bgcolor: "hover:bg-blue-500",
  },
  {
    number: "02",
    title: "Strategy Development",
    text: "Based on our research, we craft platform-specific strategies for Meta, Instagram, YouTube, and LinkedIn. Each plan defines tone, content mix, ad funnels, and KPIs — ensuring every action taken aligns with your growth objectives.",
    gradient: "from-teal-500 via-green-400 to-transparent",
    color: "text-teal-500",
    bgcolor: "hover:bg-teal-500",
  },
  {
    number: "03",
    title: "Content Creation",
    text: "Our creative team designs scroll-stopping visuals, writes persuasive copy, and plans narratives that emotionally connect with your audience. From posts and Reels to carousel ads, every piece of content strengthens your brand identity and builds trust.",
    gradient: "from-yellow-400 via-amber-300 to-transparent",
    color: "text-yellow-500",
    bgcolor: "hover:bg-yellow-500",
  },
  {
    number: "04",
    title: "Campaign Launch",
    text: "Once your strategy and content are ready, we launch data-backed ad campaigns tailored to custom audiences and funnel stages. Each campaign includes pixel tracking, conversion objectives, and A/B-tested creatives for maximum impact.",
    gradient: "from-pink-500 via-fuchsia-400 to-transparent",
    color: "text-pink-500",
    bgcolor: "hover:bg-pink-500",
  },
  {
    number: "05",
    title: "Optimization",
    text: "After launch, we continuously refine targeting, ad spend, and creatives based on live performance metrics. Our agile optimization approach ensures your campaigns stay efficient and consistently drive stronger ROI week after week.",
    gradient: "from-indigo-500 via-indigo-400 to-transparent",
    color: "text-indigo-500",
    bgcolor: "hover:bg-indigo-500",
  },
  {
    number: "06",
    title: "Reporting & Scale",
    text: "We believe in full transparency. You’ll receive detailed performance reports with insights on reach, engagement, conversions, and cost-efficiency. Then, we scale the winning campaigns — amplifying results and revenue sustainably.",
    gradient: "from-red-500 via-transparent to-transparent",
    color: "text-red-500",
    bgcolor: "hover:bg-red-500",
  },
];

export default function page() {

    return (
        <>
            {/* <HeroSocialMediaVancouver /> */}
            <LocationHeroSection
            heading={
              <>
              <span>Social Media Marketing in Vancouver{" "}
              <span className="text-blue-500">That Builds Brands and Drives Sales</span></span>
              </>
            }
            description=' Your customers aren’t just searching — they’re scrolling. In Vancouver’s competitive market, social media isn’t optional; it’s where your audience spends their attention and makes buying decisions.
              At Bixeltek, we help brands go beyond likes and followers. Our data-driven social media marketing combines storytelling, targeted Meta Ads, and conversion-optimized content to generate awareness, engagement, and real business growth.
           '
            proofPoints={proofPoints}
            primaryCTA={{
                    text: 'Get a Free Strategy Call',
                    action: { type: 'openForm', form: 'contact' },
                }}
                secondaryCTA={{
                    text: 'Get In Touch With Us',
                    variant: 'secondary',
                    action: {
                    type: 'link',
                    href: 'mailto:zee@bixeltek.com',
                    },
                }}
            />
            <VancouverSocialCitySection />
            <WhyBusinessesStruggleSocial />
            <ServicesSection
            heading='Everything You Need to'
            spanText='Grow Through Social Media'
            description='From organic content planning to high-performing Meta Ads, we manage every aspect of your
          social media presence — focusing on leads, brand authority, and measurable revenue growth.'
            services={services}
            />
            {/* <SocialMediaProcessVancouver /> */}
            <LocationProcessSection
              heading={
                <>
                        <span>Our Social Media Strategy <br /><span className="text-blue-500">That Converts Followers Into Customers</span></span>
                </>
              }
              description='This proven strategy helps Vancouver businesses grow beyond vanity metrics — turning engagement into conversions, and followers into loyal customers.'
              steps={steps}
              cta={{
              text: 'Talk to a Social Media Expert',
              href: 'mailto:zee@bixeltek.com',
            }}
            footerText="This proven strategy helps Vancouver businesses grow beyond vanity metrics — turning engagement into conversions, and followers into loyal customers."

            />
            <SocialTrustSection />
            {/* <SocialVanIndustries /> */}
            <LocationIndustrySection
            heading={
              <>
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
                      Social Media Marketing <br></br> Across Greater Vancouver
                    </span>
              </>
            }
            description='Our social media experts help brands across Vancouver and nearby cities connect with their audience, run impactful campaigns, and grow faster online.'
            industries={industries}
            />
            {/* <VancouverSocialFaqs /> */}
            <LocationFaqSection
            label='Social Media FAQs'
            heading={
              <>
              <h2 className="text-3xl text-center md:text-6xl font-inter font-bold text-white mb-6">
              Social Media Questions for <br />
              <span className="text-blue-500">Vancouver Businesses</span>
            </h2>
              </>
            }
            description='Answers to the most common questions Vancouver businesses have about social media marketing.'
            faqs={faqs}
            />

            <ContactCTASection
            heading='Ready to Grow Your Brand'
            spanText='With Social Media That Converts?'
            description='Stop blending in — it’s time to stand out. Let Bixeltek help your Vancouver business attract followers who convert into customers through powerful, data-driven social media marketing.'
            />
            {/* <section
                className="bg-black py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10"
                id="form"
            >
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start px-6">
                    <h2 className="text-4xl md:text-5xl font-inter font-bold text-white mb-6">
                        Ready to Grow Your Brand  <span className="text-blue-500">With Social Media That Converts?</span>
                    </h2>
                    <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-8">
                        Stop blending in — it’s time to stand out. Let Bixeltek help your Vancouver business attract followers who convert into customers through powerful, data-driven social media marketing.
                    </p>


                </div>

                <div className="w-[95%] md:w-[50%] lg:mr-32 flex justify-start items-center">
                    <ContactFromNew />
                </div>
            </section> */}
        </>
    )
}
