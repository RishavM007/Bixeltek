import React from 'react'
import Image from 'next/image'
import lpimg from '@/assets/imac_img.png'
import rocketimg from '@/assets/img_1-800x747.png'
import mobile from '@/assets/mobile_app (1).png'
import pet from "@/assets/sincerely-media-VNsdEl1gORk-unsplash.jpg";
import school from '@/assets/school.jpg'
import roofing from "@/assets/digital marketing for roofing industries.jpg";
import healthcare from "@/assets/digital marketing for health care practices.jpg";
import lawncare from "@/assets/digital marketing for lawn care services.jpg";
import blackcar from "@/assets/digital marketing for car detailers.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg";
import { Factory, MapPin } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { FiPhoneCall } from "react-icons/fi";
import WebDevHero from '@/components/WebDevHero'
import chartimg from '@/assets/visitors-1-1.png'
import CaseStudies from '@/components/Webdevcasestudies'
import ContactFromNew from '@/components/ContactFormNew'

import Counter from '@/components/Counter'
import laptop from '@/assets/laptop mockup.jpg'
import DarkFaqSection from '@/components/DarkFaq';
import hyderabad from '@/assets/Hyderabad.jpg'
import section2img2 from '@/assets/laptop dentist 2.png'
import Link from 'next/link'
import { LucidePhone, LucideSearch, LucideLoader, LucideSmartphone, LucideZap } from 'lucide-react';
import star from '@/assets/star-large-1-1.png'
import ServicesSection from '@/components/glowcards'
import { MdTrendingUp, MdDevices, MdOutlineSupportAgent } from 'react-icons/md';
import { ShieldCheck, MonitorSmartphone, LineChart, Server, Zap, Settings2, CreditCard, PlugZap, Timer } from "lucide-react";
import { PhoneCall, MessageCircle, CalendarDays } from "lucide-react"

import { FaTooth, FaHospital, FaDog, FaGasPump, FaCar, FaBroom, FaGraduationCap, FaBuilding, FaTree, FaSeedling } from "react-icons/fa";
import StepCards from '@/components/WebdevSteps'

export default function WebDevAd() {
    const features = [
        {
            title: "Conversion-Driven Design",
            desc: "Tailor-made design that aligns with your brand identity and encourages user engagement and actions.",
            icon: <ShieldCheck className="w-6 h-6 text-white" />,
            bg: "bg-blue-500",
        },
        {
            title: "Performance Optimized",
            desc: "Mobile-friendly, lightning-fast pages that meet Google’s Core Web Vitals for better ranking and UX.",
            icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
            bg: "bg-red-500",
        },
        {
            title: "Search Engine Optimisation",
            desc: "Structured HTML, Keyword Research, On Page SEO and more.",
            icon: <LineChart className="w-6 h-6 text-white" />,
            bg: "bg-yellow-400",
        },
        {
            title: "Lead Generation Setup",
            desc: "Strategic forms, CTAs, WhatsApp chat, and click-to-call features to boost your conversions.",
            icon: <Zap className="w-6 h-6 text-white" />,
            bg: "bg-green-500",
        },
        {
            title: "Analytics & Tracking",
            desc: "Integrated with GA4, Search Console, and Meta Pixel to monitor traffic and behavior effectively.",
            icon: <Server className="w-6 h-6 text-white" />,
            bg: "bg-blue-500",
        },
        {
            title: "Hosting & Security",
            desc: "Premium hosting with free SSL, automatic daily backups, and rock-solid security configurations included.",
            icon: <Settings2 className="w-6 h-6 text-white" />,
            bg: "bg-red-500",
        },
        {
            title: "Payment Integrations",
            desc: "Smooth integration with Razorpay, Stripe, and other trusted gateways to collect online payments securely.",
            icon: <CreditCard className="w-6 h-6 text-white" />,
            bg: "bg-yellow-400",
        },
        {
            title: "CRM & Tool Integration",
            desc: "Easily connect CRMs, LMS, booking tools, and other platforms essential for business automation.",
            icon: <PlugZap className="w-6 h-6 text-white" />,
            bg: "bg-green-500",
        },
        {
            title: "Fast Turnaround",
            desc: "Projects completed in 7–15 working days without delays, ensuring quick online presence launch.",
            icon: <Timer className="w-6 h-6 text-white" />,
            bg: "bg-blue-500",
        },
    ];
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
    ];


    const locations = [
        'Hitech City',
        'Gachibowli',
        'Jubilee Hills',
        'Madhapur',
        'Banjara Hills',
        'Kukatpally',
        'Kompally',
        'LB Nagar',
        'Uppal',
        'Kondapur',
        'Begumpet',
    ];

    const problems = [
        {
            icon: <LucideSmartphone className="text-indigo-600 w-6 h-6" />,
            title: 'Your website looks broken or loads slowly on mobile',
            desc: `Over 70% of internet users in Hyderabad browse on mobile. If your site isn’t `
        },
        {
            icon: <LucideZap className="text-indigo-600 w-6 h-6" />,
            title: `You're spending on ads but not seeing results`,
            desc: `Running Google Ads or Instagram promotions without a conversion-optimized website`
        },
        {
            icon: <LucideSearch className="text-indigo-600 w-6 h-6" />,
            title: `You’re invisible on Google`,
            desc: `If your website structure isn’t SEO-friendly, Google won’t rank you — no matter how go.`
        },
        {
            icon: <LucideLoader className="text-indigo-600 w-6 h-6" />,
            title: `You’re stuck with a basic builder (Wix, GoDaddy, Canva-style editors)`,
            desc: `These platforms offer convenience, but limit growth. They’re not built for Hyderabad’s `
        },
        {
            icon: <LucidePhone className="text-indigo-600 w-6 h-6" />,
            title: `Customers can’t contact you easily`,
            desc: `Many sites lack basic conversion flow. No clickable phone number. No WhatsApp integration`
        },
    ];


    const faqs = [
        {
            question: " Do you offer SEO services along with web design?",
            answer: "Yes. Every website we build is SEO-optimized at the structure level, and we also offer full-scale SEO campaigns if needed.",
        },
        {
            question: "What’s your timeline to deliver a website?",
            answer: " Typical delivery time is between 10–30 days, depending on complexity and content readiness.",
        },
        {
            question: "Can you redesign my old WordPress site?",
            answer: "Absolutely. We specialize in redesigns that preserve your SEO value while improving performance and conversions.",
        },
        {
            question: "Will I own the website after delivery?",
            answer: " Yes — 100%. All source code, content, and access credentials are handed over.",
        },
        {
            question: "Can you manage my website post-launch?",
            answer: "Yes. We offer affordable monthly maintenance and update plans.",
        }
    ];


    return (
        <>
            <WebDevHero />
            {/* <WebdevCar/> */}
            <section className="bg-transparent px-8 pt-32 pb-14 text-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
                        {/* Text Content */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold font-inter leading-tight mb-4">
                                Hyderabad’s <span className="text-purple-600">Website Design Experts</span> — Built for Business, Not Just Beauty
                            </h2>
                            <p className="text-gray-800 text-base mb-4">
                                Your website isn’t just a brochure — it’s your digital storefront, your #1 salesperson, and often the first impression of your business.
                                At Bixeltek, we don’t just design pretty websites. We build conversion-focused, SEO-optimized, mobile-first websites that are engineered
                                to grow your business in Hyderabad’s competitive market.
                            </p>
                            <p className="text-gray-800 text-base mb-4">
                                Whether you&apos;re a local service provider, a healthcare clinic, or a D2C brand, we craft digital experiences tailored to your customer journey.
                                Every line of code, every layout decision, and every CTA is backed by strategy, not guesswork.
                            </p>
                            <p className="text-gray-800 text-base">
                                We’re based in Hitech City and serve all of Hyderabad — including Jubilee Hills, Gachibowli, Madhapur, and beyond.
                            </p>
                        </div>

                        {/* Image Placeholder */}
                        <div className="w-full h-full flex items-center justify-center">
                            <Image src={laptop} alt='laptop' className='w-full h-[450px] object-cover rounded-xl' />
                            {/* Replace with your actual image */}

                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 mt-12 border-t pt-10">
                        {/* Card 1 */}
                        <div className="flex items-start gap-10">
                            <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                                <MdDevices className="text-3xl" />

                            </div>
                            <div>
                                <h3 className="text-5xl font-sofiasanscondensed font-bold text-purple-600 mb-2">100%</h3>
                                <p className="text-lg font-semibold text-black mb-3">High-Performance Websites</p>
                                <p className="text-gray-500 text-sm">
                                    All our custom websites are built from scratch with zero templates, delivering lightning-fast load speeds, 100% mobile responsiveness, and optimal Core Web Vitals scores.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex items-start gap-9">
                            <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                                <MdTrendingUp className="text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-5xl font-sofiasanscondensed font-bold text-purple-600 mb-2">120%+</h3>
                                <p className="text-lg font-semibold text-black mb-3">SEO-Optimized Architecture</p>
                                <p className="text-gray-500 text-sm">
                                    Our SEO-first web development approach increases organic traffic and search rankings—clients report up to 200% boost in visibility within the first 3 months of launch.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex items-start gap-10">
                            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-xl">
                                <Factory className="text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-5xl font-sofiasanscondensed font-bold text-purple-600 mb-2">15+</h3>
                                <p className="text-lg font-semibold text-black mb-3">Years of Industry Expertise</p>
                                <p className="text-gray-500 text-sm">
                                    Since 2009, Our founders have empowered 150+ brands globally through performance-driven websites, ongoing maintenance, and conversion-optimized user experiences.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-gradient-to-r from-white to-purple-50 py-6 md:py-16 px-6 md:px-0">
                <div className=" w-full mx-auto flex flex-col md:flex-row justify-between gap-5 md:gap-20 items-center">
                    {/* Left Image with Blue Background */}
                    <div className="relative w-full md:w-1/3 h-80vh bg-purple-100 rounded-r-3xl overflow-visible flex items-center justify-center p-6 md:p-12">
                        <Image src={hyderabad} alt='' className='h-[400px] object-cover translate-x-0 md:translate-x-52 rounded-2xl'></Image>
                    </div>
                    {/* Right Content */}
                    <div className='w-full md:w-2/3 py-20 px-2 md:px-40'>
                        <p className="text-purple-600 text-sm font-semibold uppercase mb-3">Why Choose Us</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                            Built for Hyderabad’s <br />
                            <span className="underline decoration-purple-600 underline-offset-4">Business Ecosystem</span>
                        </h2>

                        <p className="text-gray-700 text-base mb-6 mt-7">
                            Hyderabad is diverse — tech startups in Gachibowli, dental clinics in Jubilee Hills, cloud kitchens in Madhapur, and NGOs in Secunderabad. Each has a different buyer persona, different brand story, and different online behavior.
                            <br /><span className='italic font-semibold'>That’s why we never use templates. We tailor each site to the exact needs of your industry.</span>
                        </p>

                        {/* <div className="flex gap-4 mb-6 flex-wrap">
                            <button className="bg-purple-600 text-white text-sm px-5 py-2.5 rounded-full font-semibold shadow hover:bg-purple-700 transition">
                                Data Analysis
                            </button>
                            <button className="border border-gray-300 text-sm px-5 py-2.5 rounded-full font-medium text-gray-800 hover:bg-gray-100 transition">
                                Mission & Vision
                            </button>
                        </div> */}

                        <p className="text-gray-700 text-base mb-4">
                            If you run a dental clinic, we’ll showcase services, before-after cases, and Google reviews. If you’re in ecommerce, we’ll focus on fast product discovery, secure payment integration, and mobile UX. If you’re a local service provider, we’ll build trust, highlight service zones, and make it easy to call or WhatsApp instantly.

                        </p>
                        <p className="text-gray-700 text-base mb-6">
                            We serve businesses across healthcare, education, ecommerce, real estate, consulting, home services, restaurants, non-profits, and more.
                        </p>

                        <button className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-purple-700 transition text-sm">
                            Get in Touch <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>
            {/* <section className="relative bg-gradient-to-r to-[#5F54D3] from-purple-500 pt-16 pb-16 px-6 md:px-16 text-white overflow-hidden">
                
                <Image
                    src={star}
                    alt="Decorative Star"
                    className="absolute top-0 right-0 w-40 md:w-64 opacity-30 pointer-events-none"
                />

                <div className="max-w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">

                
                    <div className="flex flex-col md:flex-row gap-14 md:gap-24">
                        <div>
                            <h3 className="text-5xl font-bold">200+</h3>
                            <p className="text-sm text-purple-200 mb-1">Websites Delivered</p>
                            <div className="flex justify-center md:justify-start gap-1 text-yellow-400">
                                {'★★★★★'.split('').map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-5xl font-bold">200+</h3>
                            <p className="text-sm text-purple-200 mb-1">Successful Web Projects</p>
                            <div className="flex justify-center md:justify-start gap-1 text-yellow-400">
                                {'★★★★★'.split('').map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-5xl font-bold">100%</h3>
                            <p className="text-sm text-purple-200 mb-1">Client Satisfaction Rate</p>
                            <div className="flex justify-center md:justify-start gap-1 text-yellow-400">
                                {'★★★★★'.split('').map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                        </div>
                    </div>

                   
                    <div className="max-w-md">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">Looking for Web Design in Hyderabad?</h3>
                        <p className="text-purple-200 text-sm mb-6">
                            Bixeltek builds fast, SEO-optimized, and conversion-driven websites for startups, small businesses, and enterprises in Hyderabad.
                            Get a custom web solution that grows with your brand.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block mt-2 bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
                        >
                            Let’s Build Your Website →
                        </a>
                    </div>
                </div>
            </section> */}


            <section className="pt-14 pb-24 px-6 md:px-16 bg-white text-center">
                <p className="text-sm text-purple-500 font-semibold uppercase mb-2">WHAT YOU GET</p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    What’s Included in Every Website
                </h2>
                <p className="text-gray-700 text-base mb-6 mt-7 mx-auto max-w-3xl">
                    When you partner with Bixeltek, you’re not just getting a design — you’re getting a full-stack growth-ready website. Every project includes:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition bg-white"
                        >
                            <div className={`rounded-full p-3 ${feature.bg} shrink-0`}>
                                {feature.icon}
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-2xl font-sofiasanscondensed text-gray-900 mb-1">{feature.title}</h3>
                                <p className="text-gray-700 text-sm font-poppins">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-gray-500 text-sm mt-12 max-w-3xl mx-auto">
                    Every project is managed by an experienced team, small projects are delivered in 2 weeks, and starts from just ₹30,000 — no hidden charges, no unnecessary upsells.
                </p>
            </section>
            <ServicesSection />
            <section className="pt-48 pb-16 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                    {/* Left: Image with overlay chart */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden">
                            <Image
                                src={section2img2}
                                alt="Team working"
                                className="object-cover w-full h-full"
                            />
                            <Image src={chartimg} alt="Team working"
                                className=" absolute bottom-0 left-0 object-cover w-[26%]">

                            </Image>
                        </div>
                        {/* Chart or overlay image */}

                    </div>

                    {/* Right: Text Content */}
                    <div>
                        <p className="text-sm text-purple-600 font-semibold uppercase tracking-wider mb-2">
                            Why Choose Us
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose <span className="text-purple-600">Bixeltek?</span>
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Bixeltek isn’t a freelancer network. We’re a full-service digital marketing agency with in-house designers, developers, SEO specialists, and strategists — all under one roof. We’re Google Partner Certified, and we’ve helped 100+ businesses across India, Canada, the US, and the Middle East scale online.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Unlike others, we don’t start with color palettes or “inspiration sites.” We start with your business problems. Your goals. Your audience behavior. Then we design backward — using data, not guesses — to build a site that actually performs.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We understand what Hyderabad businesses need. We’re based here. We’ve worked with clients in your lanes. And we’re ready to help you win online.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-10">
                            <Link href="tel:+919100032301">
                                <button className="px-6 py-3 border border-black bg-white text-black rounded-md hover:bg-white hover:text-black hover:border-black hover:ring-1 transition">
                                    Get A Quote
                                </button>
                            </Link>

                            <Link href="#form" >
                                <button className="px-6 py-3 border-white bg-black text-white  hover:bg-white hover:text-black hover:border-black hover:ring-1 transition rounded-md hover:bg-transparent  hover:border ">
                                    Book a Free Consultation
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[white] text-black py-20 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Left Side (75%) */}
                    <div className=" col-span-1 md:col-span-3 grid  grid-cols-1 md:grid-rows-2 gap-6">
                        {/* Top Left (65%/25%) */}
                        {/* Top Left (65%/25%) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 h-full">
                            {/* Left Card */}
                            <div
                                className="col-span-1 md:col-span-2 overflow-hidden rounded-2xl pl-6 sm:pt-5 md:pt-0 items-center bg-yellow-500 pb-6 pr-0 flex flex-row justify-between h-full"
                            // style={{
                            //     background: 'radial-gradient(at top left, #CFA1F7 0%, #7FBEA4 100%)',
                            // }}
                            >
                                <div>
                                    <h3 className="text-3xl font-sofiasanscondensed text-black font-semibold mb-2">
                                        Timely and Transparent Communication
                                    </h3>
                                    <p className="text-sm font-poppins text-gray-900 mb-4">
                                        Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum
                                    </p>
                                    <button className="bg-white text-xs text-black font-semibold px-7 py-2 rounded-full w-fit">
                                        LEARN MORE
                                    </button>
                                </div>

                                <div className="mt-0">
                                    <Image src={lpimg} alt="monitor" className=" transalte-x-2 md:translate-x-12" />
                                </div>
                            </div>

                            {/* Right Card */}
                            <div className="bg-[black] text-white rounded-2xl p-6 relative flex flex-col justify-start h-full">
                                <div className="z-10 mr-24">
                                    <h3 className="text-3xl font-sofiasanscondensed font-semibold mb-2">Boost Traffic & Sales</h3>
                                    <p className="text-sm font-poppins text-white mb-4">
                                        Platea rhoncus semper consectetur lêtîus facilisi nec curabitur placerat montes lacinia tincidunt
                                    </p>
                                </div>

                                {/* Rocket image absolutely positioned */}
                                <div className="absolute bottom-0 right-0">
                                    <Image src={rocketimg} alt="rocket" className=' h-[200px] md:h-[400px]  rounded-2xl object-cover' />
                                </div>
                            </div>
                        </div>


                        {/* Bottom Left (25%/65%) */}
                        <div className="grid  grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Left Card (Client Ratings with background image) */}
                            <div className="bg-[#1B1B2B] rounded-2xl p-6 flex justify-center items-center relative overflow-hidden col-span-1">
                                <div className="absolute inset-0 opacity-10">
                                    <Image src="/rating-bg.png" alt="ratings" fill className="object-cover" />
                                </div>
                                <div className="relative z-10 flex flex-col justify-center items-center">
                                    <h4 className="text-5xl font-sofiasanscondensed text-white font-bold">4.7+</h4>
                                    <p className="text-sm font-semibold mt-1 text-white">Client Ratings</p>
                                    <div className="flex mt-2 space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-yellow-400 text-lg">★</span>
                                        ))}
                                    </div>
                                    <p className="text-sm font-poppins text-center text-gray-200 mt-4">
                                        Duis nibh quis aptent tristique nisl aliquam nullam mattis pulvinar
                                    </p>
                                </div>
                            </div>

                            {/* Right Card (Responsive Solutions) */}
                            <div className=" cols-span-1 md:col-span-2 bg-[#7B2CBF] rounded-2xl pr-6 pl-6 pt-0 pb-0 flex justify-between items-end relative overflow-hidden min-h-[500px] md:min-h-[300px]">
                                <div className="z-10 pt-6 pb-8 h-full flex flex-col justify-start md:justify-center">
                                    <h3 className="text-3xl font-sofiasanscondensed text-white mb-2">Responsive and Scalable Solutions</h3>
                                    <p className="text-sm text-gray-200 mb-4 max-w-xs">
                                        Donec massa lacus tortor dis vulputate neque odio venenatis ex ad interdum
                                    </p>
                                    <button className="text-xs text-black font-semibold px-7 py-2 bg-white rounded-full w-fit">
                                        LEARN MORE
                                    </button>
                                </div>

                                {/* Image pinned to bottom right, large */}
                                <div className="absolute bottom-0 -right-5">
                                    <Image src={mobile} alt="wallet UI" width={300} height={400} />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Side (25%) — Support Card */}
                    <div className="bg-gradient-to-b from-[#B28BFC] to-[#FF89CA] rounded-2xl p-6 flex flex-col justify-center gap-5 text-center items-center">
                        <div>
                            {/* Icon */}
                            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-white/20 text-white text-3xl">
                                <FiPhoneCall />
                            </div>

                            {/* Title */}
                            <p className="text-sm uppercase font-medium text-white">24/7 Support</p>

                            {/* Phone Number */}
                            <h3 className="text-2xl font-bold mt-2 mb-1 text-white">(888) 4000-2234</h3>

                            {/* Subtext */}
                            <p className="text-xs text-white/80 mt-2 max-w-xs mx-auto">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                            </p>
                        </div>

                        {/* Button */}
                        <button className="bg-black text-white font-semibold mt-6 py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
                            CALL NOW!
                        </button>
                    </div>
                </div>
            </section>

            <div className="w-full px-4 py-10 md:px-16 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-center">

                    {/* Left: Google Map */}
                    <div className="w-full md:w-1/2 h-[450px] rounded-3xl overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4685.653616836566!2d78.39224697516438!3d17.362613883520346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x801d7036c2b29689%3A0x147a268620903039!2sBixeltek%20-%20A%20Google%20Partner%20Agency%20%7C%20Digital%20Marketing%20Agency!5e1!3m2!1sen!2sin!4v1754213095413!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Right: Areas We Serve */}
                    <div className="w-full md:w-1/2 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Areas We Serve</h2>
                        <p className="text-gray-900 font-poppins text-lg leading-relaxed">
                            We proudly serve clients across:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                            {locations.map((location, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <MapPin className="text-purple-600 w-5 h-5 shrink-0" />
                                    <span className="text-gray-700">{location}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-800 mt-2 font-poppins text-lg">
                            We also work remotely with clients across India, the US, Canada, Saudi Arabia, and the UAE.
                        </p>
                    </div>

                </div>
            </div>
            <section className='w-full flex flex-wrap sm:max-w-[90%] md:max-w-[85%] mx-auto lg:flex-nowrap overflow-y-hidden items-center justify-center py-20 gap-10'>
                {/* Left Content Section */}
                <div className='w-full lg:w-1/2 px-1 md:px-6 py-10 lg:py-14'>
                    <h2 className="text-4xl md:text-5xl font-semibold font-sofiasanscondensed text-black">
                        Building High Converting Websites Across <span className='text-purple-500'>Diverse Industries</span>
                    </h2>
                    <p className="mt-4 text-sm md:text-lg text-gray-900">
                        Our web design expertise spans multiple industries, helping businesses achieve higher conversion rates through stragically designed websites conpatible for SEO, Google Ads and Meta Marketing. From technology and finance to healthcare and retail, we empower brands with actionable insights
                        and cutting-edge digital solutions.
                    </p>
                    <p className="mt-2 text-sm md:text-lg text-gray-900">
                        Explore how our beautifully crafted websites deliver success by increasing engagement rate, by delivering more conversions, leads, sales and brand visibility
                        in a competitive landscape.
                    </p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {industries.map((industry, index) => (
                            <div key={index} className="flex items-center text-lg text-black">
                                <span className="text-black text-xl inline-block  mr-3">{industry.icon}</span>
                                <h2 className='font-poppins text-sm'>Web design services for {industry.name}</h2>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 mt-10">
                        <Link href="/casestudies-bixeltek/Tumblewash-Casestudy" target="_blank">
                            <button className="px-6 py-3 border border-white bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-black hover:ring-1 transition">
                                Get A Quote
                            </button>
                        </Link>

                        <Link href="#form" target="_blank">
                            <button className="px-6 py-3 border-white bg-black text-white  hover:bg-white hover:text-black hover:border-black hover:ring-1 transition rounded-md hover:bg-transparent  hover:border ">
                                Book a Free Consultation
                            </button>
                        </Link>
                    </div>

                </div>
                <div className="flex w-full lg:w-2/5 items-center justify-center gap-4 p-20 md:p-1">
                    <div className='w-1/3 flex flex-col  items-center justify-center gap-3'>
                        <Image src={healthcare} alt='healthcare' className='rounded-xl'></Image>
                        <Image src={oil} alt='oil' className='rounded-xl'></Image>
                    </div>
                    <div className='w-1/3 flex flex-col gap-3'>
                        <Image src={roofing} alt='roofind' className='rounded-xl'></Image>
                        <Image src={pet} alt='pet' className='rounded-xl'></Image>
                        <Image src={school} alt='dental' className='rounded-xl'></Image>
                    </div>
                    <div className='w-1/3 flex flex-col justify-center gap-3'>
                        <Image src={lawncare} alt='lawncare' className='rounded-xl'></Image>
                        <Image src={blackcar} alt='automobiles' className='rounded-xl'></Image>
                    </div>
                </div>
            </section>
            <CaseStudies />
            <DarkFaqSection faqs={faqs} />
            <section className='bg-black p-20 mx-auto flex flex-col justify-center items-center md:flex-row '>
                <div className="w-full mt-14 md:mt-0 flex justify-center items-center px-6">
                    <div className="space-y-5 text-white max-w-xl ">
                        <h2 className="text-4xl md:text-5xl font-sofiasanscondensed font-bold">
                            Let’s Build You a Website That <span className='text-purple-500'>Grows Your Business</span>
                        </h2>
                        <p className="text-white font-poppins text-base leading-relaxed">
                            Your current website might be costing you leads, visibility, and money every single day. Let’s change that.
                        </p>
                        <p className="text-white font-poppins text-base leading-relaxed">
                            Book a free 30-minute strategy call with our Hyderabad-based team. We’ll audit your current website, identify what’s holding you back, and show you how we can fix it — fast.
                        </p>
                        <p className="text-white font-poppins text-base leading-relaxed">
                            Whether you&apos;re looking to rebuild your online presence or launch a new business with a strong digital foundation, <span className="font-semibold">Bixeltek</span> is your trusted web design partner in Hyderabad.
                        </p>

                        <div className="space-y-3 pt-3">
                            <Link href={'tel:+919100032301'}>
                                <div className="flex items-center gap-2">
                                    <PhoneCall size={20} />
                                    <span className="text-white text-sm">Call: +91-9100032301</span>
                                </div>
                            </Link>

                            <div className="flex items-center gap-2">
                                <MessageCircle size={20} />
                                <span className="text-white text-sm">WhatsApp: Start a Chat</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CalendarDays size={20} />
                                <span className="text-white text-sm">
                                    Schedule a Free Consultation:{' '}
                                    <button

                                        className="underline underline-offset-2 text-blue-300 hover:text-blue-400"
                                    >
                                        Book Now
                                    </button>
                                </span>
                            </div>
                        </div>

                        <p className="text-sm text-gray-200 pt-3">
                            Starting at ₹30,000 | Delivered in 7–15 Days | Built for SEO, Ads, and Conversions
                        </p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center' id='form'>
                    <ContactFromNew />
                </div>
            </section>

        </>
    )
}
