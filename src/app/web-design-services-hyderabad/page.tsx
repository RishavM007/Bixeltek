
export const metadata = {
    title: "Best Web Design & Development Company in Hyderabad | Bixeltek",
    description: "Looking for a top website design company in Hyderabad? Bixeltek builds SEO-ready, lightning-fast websites for startups, local businesses & enterprises.",
    keywords:
        "Web design Hyderabad, Web development Hyderabad, E-commerce website development, SEO services Hyderabad, Custom website design, Best website designers Hyderabad, CMS development, Next.js development, React.js web development, Hyderabad digital agency",
    openGraph: {
        title: "Bixeltek – Hyderabad's Web Design & Development Experts",
        description:
            "Bixeltek builds high-performance, SEO-optimized websites in Hyderabad. Specializing in custom web development, e-commerce, CMS solutions, and digital marketing.",
        type: "website",
    },
};


import React from 'react'
import ContactFrom from '@/components/ContactFrom';
import DarkFaqSection from '@/components/DarkFaq';
import TechWeUse from '@/components/TechWeUse';
import landingpage from '@/assets/abstract-sales-landing-page-with-photo.png'
import { FaTooth, FaHospital, FaDog, FaGasPump, FaCar, FaBroom, FaGraduationCap, FaBuilding, FaTree, FaSeedling } from "react-icons/fa";
import { HeroParallax } from '@/components/parallexHero'
import { FiUploadCloud, FiLock, FiRepeat} from "react-icons/fi";
import { LuFingerprint } from "react-icons/lu";
import IndustrySolutions from '@/components/WebdevSection1';
import Counter from '@/components/Counter';
import TestimonialWebdev from '@/components/TestimonialWebdev';
import BeforeHiring from '@/components/WebdevComparison';
import Smfeatures from '@/components/smfeatures';
import Image from 'next/image';
import pet from "@/assets/digital marketing for pet stores.jpg";
import roofing from "@/assets/digital marketing for roofing industries.jpg";
import dental from "@/assets/digital marketing for health care practices.jpg";
import healthcare from "@/assets/digital marketing for health care practices.jpg";
import lawncare from "@/assets/digital marketing for lawn care services.jpg";
import blackcar from "@/assets/digital marketing for car detailers.jpg";
import oil from "@/assets/digital marketing for oil refinaries.jpg";



export default function Webdev() {



    const products = [
        {
            title: "Product 1",
            link: "/product-1",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 2",
            link: "/product-2",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 3",
            link: "/product-3",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 4",
            link: "/product-4",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 5",
            link: "/product-5",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 6",
            link: "/product-6",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 7",
            link: "/product-7",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 8",
            link: "/product-8",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 9",
            link: "/product-9",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 10",
            link: "/product-10",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 11",
            link: "/product-11",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 12",
            link: "/product-12",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 13",
            link: "/product-13",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 14",
            link: "/product-14",
            thumbnail: landingpage.src,
        },
        {
            title: "Product 15",
            link: "/product-15",
            thumbnail: landingpage.src,
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

    const faqs = [
        {
            question: "How much does a website cost in Hyderabad?",
            answer: "The cost of a website in Hyderabad depends on its features, design, and complexity. Contact us for a custom quote based on your business needs.",
        },
        {
            question: "Do you provide web development services outside Hyderabad?",
            answer: "Yes! We serve clients across India, the USA, the UK, the UAE, Canada, and other countries with professional web development services.",
        },
        {
            question: "Can you improve my website’s Google ranking with SEO in Hyderabad?",
            answer: "Yes, we offer SEO-optimized web design to help your website rank higher on Google and increase online visibility.",
        },
        {
            question: "Which payment gateways can you integrate into my website?",
            answer: "We integrate popular payment gateways like Razorpay, PayU, Stripe, PayPal, and other secure options for smooth online transactions.",
        },
        {
            question: "Do you offer website maintenance and support services?",
            answer: "Yes, we provide ongoing website maintenance, security updates, and technical support to ensure your site runs smoothly.",
        },
        {
            question: "How long does it take to develop a website?",
            answer: "Website development timelines vary based on project complexity. Most business websites are completed within 2-6 weeks.",
        },
        {
            question: "Do you build custom e-commerce websites in Hyderabad?",
            answer: "Yes, we specialize in e-commerce website development with secure payment integration, product management, and a seamless user experience.",
        },
        {
            question: "Will my website be mobile-friendly and responsive?",
            answer: "Absolutely! We design fully responsive websites that work seamlessly on mobile phones, tablets, and desktops.",
        },
        {
            question: "Can I edit and manage my website content myself?",
            answer: "Yes, we provide CMS-based websites (like WordPress or Strapi) that allow you to update content easily without coding knowledge.",
        },
        {
            question: "Do you provide domain registration and website hosting services?",
            answer: "Yes, we offer domain registration and reliable web hosting solutions to ensure your website remains online 24/7.",
        },
    ];

    return (

        <>
            <section>
                <HeroParallax products={products} />
            </section>

            <section className=" pt-8 flex justify-center items-center max-w-[100%] md:max-w-[85%] mx-auto text-gray-100 sm:py-24">
                <div className="mx-auto flex max-w-md flex-col md:flex-row justify-center items-center rounded-lg lg:max-w-screen-xl lg:flex-row">
                    <div className="w-full md:w-1/2 px-4 pb-10 md:pb-0 lg:pr-24">
                        <h3 className="mb-2 text-purple-600">Why Choose Us?</h3>
                        <h2 className="mb-5 text-3xl font-semibold capitalize">We are the best website designers in Hyderabad</h2>
                        <p className="mb-16 text-sm md:text-lg text-gray-200">Bixeltek blends local expertise with global standards to create exceptional digital experiences for businesses of all sizes. From startups and SMEs to multinational corporations, we help brands establish a strong online identity with high-performance websites. We are a 5-star rated web design agency, trusted by over 100+ satisfied clients worldwide.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Hyderabad-Based, Global Reach",
                                    description: "Trusted by businesses in India, USA, UAE, UK, and Canada.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                    ),
                                },
                                {
                                    title: "Custom Web Design Solutions",
                                    description: "Tailored websites designed to meet unique business needs.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    ),
                                },
                                {
                                    title: "Secure Payment Gateway Integration",
                                    description: "Seamless transactions via PayPal, Stripe, Razorpay, Square, and more.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    ),
                                },
                                {
                                    title: "SEO-Optimized & Mobile-Ready Websites",
                                    description: "Enhanced Google visibility for local and international markets.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    ),
                                },
                                {
                                    title: "Scalable & Future-Proof Development",
                                    description: "Websites that evolve with your business.",
                                    icon: (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    ),
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-4 bg-black rounded-xl">
                                    <div className="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-purple-600">
                                            {item.icon}
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[16px] font-semibold text-white mb-1">{item.title}</p>
                                        <span className="text-gray-300 text-xs">{item.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                    <ContactFrom />
                </div>
            </section>
            <section className="bg-black text-white py-16 px-6">
                <div className="max-w-4xl xl:max-w-5xl  mx-auto text-center">
                    <p className="text-purple-500 font-medium">Deploy faster</p>
                    <h2 className="text-4xl max-w-4xl mx-auto font-bold mt-2">
                    Why Businesses Trust Bixeltek as the Best Website Design And Development Company in Hyderabad
                    </h2>
                    <p className="text-gray-400 mt-6 leading-relaxed">
                    At Bixeltek, we don&apos;t just build websites — we build growth engines.<br />

From sleek landing pages for funded startups to high-performance platforms for clinics and real estate brands, we&apos;ve delivered over 100+ websites that look sharp, load fast, and actually perform.
We&apos;re a full-stack, results-driven team of developers, designers, and digital marketers who live and breathe performance. <br />
 <span className='font-medium italic text-lg text-purple-500'>And yes, we&apos;re proudly Hyderabad-based.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-5xl mx-auto">
                    {/* Feature 1 */}
                    <div className="flex items-start gap-7">
                        <div className="bg-purple-500 p-3 rounded-xl">
                            <FiUploadCloud size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Push to deploy</h3>
                            <p className="text-gray-400 mt-3 leading-relaxed tracking-wide">
                                Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse
                                semper morbi. Odio urna massa nunc massa.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-start gap-7">
                        <div className="bg-purple-500 p-3 rounded-xl">
                            <FiLock size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">SSL certificates</h3>
                            <p className="text-gray-400 mt-3 leading-relaxed tracking-wide">
                                Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget.
                                Sem sodales gravida quam turpis enim lacus amet.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-start gap-7">
                        <div className="bg-purple-500 p-3 rounded-xl">
                            <FiRepeat size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Simple queues</h3>
                            <p className="text-gray-400 mt-3 leading-relaxed tracking-wide">
                                Quisque est vel vulputate cursus. Risus proin diam nunc commodo.
                                Lobortis auctor congue commodo diam neque.
                            </p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex items-start gap-7">
                        <div className="bg-purple-500 p-3 rounded-xl">
                            <LuFingerprint size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Advanced security</h3>
                            <p className="text-gray-400 mt-3 leading-relaxed tracking-wide">
                                Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
                                aliquet hac quis. Id hac maecenas ac donec pharetra eget.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-20'>
                <div className='flex items-center justify-center'>
                    <p className="text-sm bg-gray-100 inline-block px-3 py-1 rounded-md">About Agency</p>
                </div>
                <div className="flex flex-col  text-white  md:flex-row items-center max-w-[93%] mx-auto justify-between px-6 md:px-20 py-5 overflow-hidden">
                    <div className="relative flex flex-col items-center md:items-start -translate-x-1/3 md:translate-x-16 md:-translate-y-28 mb-52 md:mb-0 space-y-6">
                        <div className="w-40 h-40 border border-white bg-white rounded-full flex items-center  justify-center text-black font-medium">
                            Development
                        </div>
                        <div className="w-40 h-40 bg-black border-2 rounded-full flex items-center justify-center text-white font-medium absolute top-24 left-16 md:left-20">
                            Web Design
                        </div>
                        <div className="w-40 h-40 bg-yellow-400 rounded-full px-2 text-center flex items-center justify-center text-black font-medium absolute top-56 left-32 md:left-40">
                            Mobile Apps Design
                        </div>
                    </div>

                    <div className="md:w-[55%] mt-16  md:mt-0 text-center md:text-left">

                        <h2 className="text-3xl text-white  md:text-[40px] leading-[50px] font-bold mt-4 ">
                            Technology Transforming Ideas Into Reality Empowering Brands With
                            <span className="bg-purple-500 px-2 ml-4">BIXELTEK</span>
                        </h2>
                        <p className="text-gray-300 mt-10 leading-7">
                            At our web design agency, we specialize in creating visually stunning and highly functional websites that help businesses stand out in the digital world. Our team of talented designers and developers are passionate about crafting.
                        </p>

                        <div className="mt-10 grid grid-cols-2 gap-4  text-left">
                            <p className="flex items-center"><span className="text-purple-500 text-lg mr-2">✔</span> Digital Product Design</p>
                            <p className="flex items-center"><span className="text-purple-500 text-lg mr-2">✔</span> SEO Optimization</p>
                            <p className="flex items-center"><span className="text-purple-500 text-lg mr-2">✔</span> Web Development</p>
                            <p className="flex items-center"><span className="text-purple-500 text-lg mr-2">✔</span> Mobile Apps Design</p>
                        </div>

                        <button className="mt-10 px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition">
                            Explore Our Projects
                        </button>
                    </div>

                </div>

            </section>
            <Counter />
            <section>
                <Smfeatures />
            </section>
            <section className="pt-2">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-between flex-col lg:flex-row"
                    >
                        <div className="block text-center mb-5 lg:text-left lg:mb-0">
                            <h2
                                className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2"
                            >
                                Connect & grow with your targeted customers
                            </h2>
                            <p className="text-xl text-indigo-100">
                                Contact us with any query or any idea.
                            </p>
                        </div>
                        <a
                            href="#"
                            className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500"
                        >Get In Touch
                            <svg
                                width="19"
                                height="14"
                                viewBox="0 0 19 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                                    stroke="#4F46E5"
                                    stroke-width="2.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <section>
                <IndustrySolutions />
            </section>
            <section className="py-24 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
                        <div className="w-full flex-col justify-start items-center gap-3 flex">
                            <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-500 text-center">Process</span>
                            <h2 className="w-full text-center text-gray-100 text-4xl font-bold font-manrope leading-normal">Our Process – How We Work</h2>
                        </div>
                        <div className="w-full justify-start items-center gap-4 flex md:flex-row flex-col">
                            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                                <h3 className="text-center text-purple-500 text-4xl font-extrabold font-manrope">1</h3>
                                <h4 className="text-center text-gray-100 text-xl font-semibold">Discovery & Strategy</h4>
                                <p className="text-center text-white text-base font-normal">Understanding your business goals, target audience, and market opportunities.</p>
                            </div>
                            <svg className="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5.5 6L11.5 12L5.5 18M12.5 6L18.5 12L12.5 18" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                                <h3 className="text-center text-purple-500 text-4xl font-extrabold font-manrope">2</h3>
                                <h4 className="text-center text-gray-100 text-xl font-semibold">UI/UX Design</h4>
                                <p className="text-center text-white text-base font-normal">Creating wireframes, mockups, and user-centric prototypes.</p>
                            </div>
                            <svg className="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5.5 6L11.5 12L5.5 18M12.5 6L18.5 12L12.5 18" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                                <h3 className="text-center text-purple-500 text-4xl font-extrabold font-manrope">3</h3>
                                <h4 className="text-center text-gray-100 text-xl font-semibold">Development & Coding</h4>
                                <p className="text-center text-white text-base font-normal">Building secure, scalable, and fast web solutions aligned with industry best practices.</p>
                            </div>
                        </div>


                        <div className="w-full flex justify-end items-center pr-44 py-4">
                            <svg className="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6 5.5L12 11.5L18 5.5M6 12.5L12 18.5L18 12.5" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>


                        <div className="w-full justify-start items-center gap-4 flex md:flex-row flex-col-reverse">
                            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                                <h3 className="text-center text-purple-500 text-4xl font-extrabold font-manrope">6</h3>
                                <h4 className="text-center text-gray-100 text-xl font-semibold">Launch & Growth Support</h4>
                                <p className="text-center text-white text-base font-normal">Providing ongoing maintenance, SEO, and digital marketing strategies for sustained success.</p>
                            </div>
                            <svg className="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.5 6L12.5 12L18.5 18M11.5 6L5.5 12L11.5 18" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                                <h3 className="text-center text-purple-500 text-4xl font-extrabold font-manrope">5</h3>
                                <h4 className="text-center text-gray-100 text-xl font-semibold">Testing & Quality Assurance</h4>
                                <p className="text-center text-white text-base font-normal">Ensuring page speed, security, and mobile responsiveness for a seamless experience.</p>
                            </div>
                            <svg className="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.5 6L12.5 12L18.5 18M11.5 6L5.5 12L11.5 18" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                                <h3 className="text-center text-purple-500 text-4xl font-extrabold font-manrope">4</h3>
                                <h4 className="text-center text-gray-100 text-xl font-semibold">SEO & Localization</h4>
                                <p className="text-center text-white text-base font-normal">Optimizing for Hyderabad-based search rankings and global scalability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TestimonialWebdev />
            <BeforeHiring />
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-14 text-center">
                        <span
                            className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600 text-center">Excellence</span>
                        <h2 className="text-4xl text-center font-bold text-gray-50 py-5">
                            Why Partner with Bixeltek?
                        </h2>
                        <p className="text-lg font-normal text-white max-w-md md:max-w-2xl mx-auto">
                            Bixeltek delivers innovative, results-driven web solutions with cutting-edge technology and market expertise.
                        </p>
                    </div>
                    <div
                        className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                        <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                            <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                                <svg className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                                        stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-50 mb-3 capitalize">
                                Cutting-edge Technologies
                            </h4>
                            <p className="text-sm font-normal text-gray-300">
                                Constant innovation with advanced web technologies.
                            </p>
                        </div>
                        <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                            <div className="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                                <svg className="stroke-pink-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                                        stroke="" stroke-width="2"></path>
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-50 mb-3 capitalize">
                                Local Insights, Global Impact
                            </h4>
                            <p className="text-sm font-normal text-gray-300">
                                Combining deep Hyderabad market insights with international standards in web design.
                            </p>
                        </div>
                        <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                            <div className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
                                <svg className="stroke-teal-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.75 26.25H26.25M6.25 22.875C4.86929 22.875 3.75 21.8676 3.75 20.625V12.75C3.75 11.5074 4.86929 10.5 6.25 10.5C7.63071 10.5 8.75 11.5074 8.75 12.75V20.625C8.75 21.8676 7.63071 22.875 6.25 22.875ZM15 22.875C13.6193 22.875 12.5 21.8676 12.5 20.625V9.375C12.5 8.13236 13.6193 7.125 15 7.125C16.3807 7.125 17.5 8.13236 17.5 9.375V20.625C17.5 21.8676 16.3807 22.875 15 22.875ZM23.75 22.875C22.3693 22.875 21.25 21.8676 21.25 20.625V6C21.25 4.75736 22.3693 3.75 23.75 3.75C25.1307 3.75 26.25 4.75736 26.25 6V20.625C26.25 21.8676 25.1307 22.875 23.75 22.875Z"
                                        stroke="" stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-50 mb-3 capitalize">
                                Proven Success
                            </h4>
                            <p className="text-sm font-normal text-gray-300">
                                Trusted by numerous businesses and recognized for exceptional service delivery.
                            </p>
                        </div>
                        <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                            <div className="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
                                <svg className="stroke-orange-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.4167 12.0833V21.25M5.41667 21.25V20.8333C5.41667 19.262 5.41667 18.4763 5.90482 17.9882C6.39298 17.5 7.17865 17.5 8.75 17.5H22.0833C23.6547 17.5 24.4404 17.5 24.9285 17.9882C25.4167 18.4763 25.4167 19.262 25.4167 20.8333V21.25M15.4167 9.16667C13.8453 9.16667 13.0596 9.16667 12.5715 8.67851C12.0833 8.19036 12.0833 7.40468 12.0833 5.83333C12.0833 4.26198 12.0833 3.47631 12.5715 2.98816C13.0596 2.5 13.8453 2.5 15.4167 2.5C16.988 2.5 17.7737 2.5 18.2618 2.98816C18.75 3.47631 18.75 4.26198 18.75 5.83333C18.75 7.40468 18.75 8.19036 18.2618 8.67851C17.7737 9.16667 16.988 9.16667 15.4167 9.16667ZM7.08333 25.8333C7.08333 26.7538 6.33714 27.5 5.41667 27.5C4.49619 27.5 3.75 26.7538 3.75 25.8333C3.75 24.9129 4.49619 24.1667 5.41667 24.1667C6.33714 24.1667 7.08333 24.9129 7.08333 25.8333ZM17.0833 25.8333C17.0833 26.7538 16.3371 27.5 15.4167 27.5C14.4962 27.5 13.75 26.7538 13.75 25.8333C13.75 24.9129 14.4962 24.1667 15.4167 24.1667C16.3371 24.1667 17.0833 24.9129 17.0833 25.8333ZM27.0833 25.8333C27.0833 26.7538 26.3371 27.5 25.4167 27.5C24.4962 27.5 23.75 26.7538 23.75 25.8333C23.75 24.9129 24.4962 24.1667 25.4167 24.1667C26.3371 24.1667 27.0833 24.9129 27.0833 25.8333Z"
                                        stroke="" stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-50 mb-3 capitalize">
                                Results-Driven Approach
                            </h4>
                            <p className="text-sm font-normal text-gray-300">
                                Websites strategically built to achieve measurable business goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <TechWeUse />
            <section className='w-full flex flex-wrap max-w-[90%] mx-auto lg:flex-nowrap overflow-y-hidden items-center'>
                {/* Left Content Section */}
                <div className='w-full lg:w-1/2 px-6 py-10 lg:py-14'>
                    <h2 className="text-5xl font-semibold text-gray-800 font-sofiasanscondensed dark:text-white">
                        Proven Results Across <span className='text-purple-500'>Diverse Industries</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Our expertise spans multiple industries, helping businesses achieve growth through data-driven strategies and
                        innovative solutions. From technology and finance to healthcare and retail, we empower brands with actionable insights
                        and cutting-edge digital solutions.
                    </p>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                        Explore how our tailored approach delivers measurable success, increasing engagement, conversions, and brand visibility
                        in a competitive landscape.
                    </p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {industries.map((industry, index) => (
                            <div key={index} className="flex items-center text-lg text-white">
                                <span className="text-white text-xl inline-block  mr-3">{industry.icon}</span>
                                <h2 className='font-poppins text-sm'>{industry.name}&nbsp;SEO</h2>
                            </div>
                        ))}
                    </div>
                    <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700">
                        Learn More
                    </button>
                </div>
                <div className="flex w-full lg:w-1/2 justify-center gap-4 p-10">
                    <div className='w-1/3 flex flex-col  items-center justify-center gap-3'>
                        <Image src={healthcare} alt='healthcare' className='rounded-xl'></Image>
                        <Image src={oil} alt='oil' className='rounded-xl'></Image>
                    </div>
                    <div className='w-1/3 flex flex-col gap-3'>
                        <Image src={pet} alt='pet' className='rounded-xl'></Image>
                        <Image src={roofing} alt='roofind' className='rounded-xl'></Image>
                        <Image src={dental} alt='dental' className='rounded-xl'></Image>
                    </div>
                    <div className='w-1/3 flex flex-col justify-center gap-3'>
                        <Image src={lawncare} alt='lawncare' className='rounded-xl'></Image>
                        <Image src={blackcar} alt='automobiles' className='rounded-xl'></Image>
                    </div>
                </div>
            </section>
            <DarkFaqSection faqs={faqs} />
        </>
    )
}
