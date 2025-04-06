"use client";
import Image from "next/image";
import BgImg from "@/assets/Layer F.png";
import { motion } from "framer-motion";
import { Bento } from "@/components/AbtHero/AbtHero";
import CreativeSection from "@/components/AbtSection1";
import TeamStatsSection from "@/components/Counter2New";

export default function AboutPage() {
  const timelineEvents = [
    {
      title: "Deep Discovery",
      description: "We listen, research, and analyze before crafting a plan.",
    },
    {
      title: "Custom Strategy",
      description: "Every brand is unique—so our solutions are tailor-made.",
    },
    {
      title: "Performance Obsessed",
      description: "We optimize for clicks, leads, conversions, and sustained growth.",
    },
  ];

  return (
    <>
      <div className="bg-black text-white">
        <section>
          <div className="relative isolate mt-[-60px] md:mt-[-120px] mb-[-70px] overflow-hidden bg-black h-[100vh] flex items-center justify-center">
            <svg
              className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="hero-pattern"
                  width="200"
                  height="200"
                  x="100%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none"></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-pattern)"></rect>
            </svg>
            <div
              className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
              aria-hidden="true"
            >
              <div
                className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#8653f5] to-[#ae07e6] opacity-50"
                style={{
                  clipPath:
                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                }}
              ></div>
            </div>
            <div className="max-w-full px-4 text-center lg:max-w-3xl">
              <h1 className="text-5xl font-bold font-sofiasanscondensed tracking-normal text-white sm:text-6xl">
                We Don&apos;t Just Market Brands.<br /><span className="text-purple-500">We Build Them.</span>
              </h1>
              <p className="mt-10 text-sm lg:text-lg md:leading-8 text-gray-300">
                Bixeltek is a performance-first digital marketing agency empowering startups, clinics, and growing businesses to scale with high-impact digital solutions — <br /><span className="italic font-semibold mt-2">from SEO and Google Ads to Web Design and Social Media.</span>
              </p>
              <button className="backdrop-blur-3xl border border-white text-white font-normal text-sm py-2 px-4 md:px-6 md:py-3 md:text-md rounded-lg mt-14 md:mt-16 shadow-custom">
                Get a Quote <i className="fa-solid fa-arrow-right ml-2" id="get_a_quote"></i>
              </button>
            </div>
          </div>
        </section>
        <section className="pt-32 pb-16 md:pt-0 md:pb-0 md:py-16  overflow-hidden bg-black">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
              <div>
                <p className="px-4 py-1 text-sm w-fit border rounded-lg">Who We Are</p>
                <h1 className="block text-xl mt-4 font-bold lg:leading-tight text-white">Bixeltek is a Hyderabad-based digital marketing agency built for businesses that are ready to grow. From bold startups to established clinics and local service businesses, we help our clients generate more leads, convert better, and dominate online.</h1>
                <p className="mt-3 text-lg text-neutral-400">We&apos;re not your typical agency. No cookie-cutter strategies. No vanity metrics. Just full-funnel marketing that delivers real results.</p>

                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                  <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                    Talk to a Specialist
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </a>
                  
                </div>

                <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
                  <div className="py-5">
                    <div className="flex gap-x-1">
                      <svg className="size-4 text-gray-800 dark:text-neutral-200" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                      </svg>
                      <svg className="size-4 text-gray-800 dark:text-neutral-200" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                      </svg>
                      <svg className="size-4 text-gray-800 dark:text-neutral-200" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                      </svg>
                      <svg className="size-4 text-gray-800 dark:text-neutral-200" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                      </svg>
                      <svg className="size-4 text-gray-800 dark:text-neutral-200" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                      </svg>
                    </div>

                    <p className="mt-3 text-sm text-neutral-200">
                      <span className="font-bold">4.6</span> /5 - from 12k reviews
                    </p>

                    <div className="mt-5">

                      <svg className="h-auto w-16 text-gray-800 dark:text-white" width="80" height="27" viewBox="0 0 80 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.558 9.74046H11.576V12.3752H17.9632C17.6438 16.0878 14.5301 17.7245 11.6159 17.7245C7.86341 17.7245 4.58995 14.7704 4.58995 10.6586C4.58995 6.62669 7.70373 3.51291 11.6159 3.51291C14.6498 3.51291 16.4063 5.42908 16.4063 5.42908L18.2426 3.51291C18.2426 3.51291 15.8474 0.878184 11.4961 0.878184C5.94724 0.838264 1.67578 5.50892 1.67578 10.5788C1.67578 15.5289 5.70772 20.3592 11.6558 20.3592C16.8854 20.3592 20.7177 16.8063 20.7177 11.4969C20.7177 10.3792 20.558 9.74046 20.558 9.74046Z" fill="currentColor" />
                        <path d="M27.8621 7.78442C24.1894 7.78442 21.5547 10.6587 21.5547 14.012C21.5547 17.4451 24.1096 20.3593 27.9419 20.3593C31.415 20.3593 34.2094 17.7645 34.2094 14.0918C34.1695 9.94011 30.896 7.78442 27.8621 7.78442ZM27.902 10.2994C29.6984 10.2994 31.415 11.7764 31.415 14.0918C31.415 16.4072 29.7383 17.8842 27.902 17.8842C25.906 17.8842 24.3491 16.2874 24.3491 14.0519C24.3092 11.8962 25.8661 10.2994 27.902 10.2994Z" fill="currentColor" />
                        <path d="M41.5964 7.78442C37.9238 7.78442 35.2891 10.6587 35.2891 14.012C35.2891 17.4451 37.844 20.3593 41.6763 20.3593C45.1493 20.3593 47.9438 17.7645 47.9438 14.0918C47.9038 9.94011 44.6304 7.78442 41.5964 7.78442ZM41.6364 10.2994C43.4328 10.2994 45.1493 11.7764 45.1493 14.0918C45.1493 16.4072 43.4727 17.8842 41.6364 17.8842C39.6404 17.8842 38.0835 16.2874 38.0835 14.0519C38.0436 11.8962 39.6004 10.2994 41.6364 10.2994Z" fill="currentColor" />
                        <path d="M55.0475 7.82434C51.6543 7.82434 49.0195 10.7784 49.0195 14.0918C49.0195 17.8443 52.0934 20.3992 54.9676 20.3992C56.764 20.3992 57.6822 19.7205 58.4407 18.8822V20.1198C58.4407 22.2754 57.1233 23.5928 55.1273 23.5928C53.2111 23.5928 52.2531 22.1557 51.8938 21.3573L49.4587 22.3553C50.297 24.1517 52.0135 26.0279 55.0874 26.0279C58.4407 26.0279 60.9956 23.9122 60.9956 19.481V8.18362H58.3608V9.26147C57.6423 8.38322 56.5245 7.82434 55.0475 7.82434ZM55.287 10.2994C56.9237 10.2994 58.6403 11.7365 58.6403 14.1317C58.6403 16.6068 56.9636 17.9241 55.2471 17.9241C53.4507 17.9241 51.774 16.4471 51.774 14.1716C51.8139 11.6966 53.5305 10.2994 55.287 10.2994Z" fill="currentColor" />
                        <path d="M72.8136 7.78442C69.62 7.78442 66.9453 10.2994 66.9453 14.0519C66.9453 18.004 69.9393 20.3593 73.093 20.3593C75.7278 20.3593 77.4044 18.8822 78.3625 17.6048L76.1669 16.1277C75.608 17.006 74.6499 17.8443 73.093 17.8443C71.3365 17.8443 70.5381 16.8862 70.0192 15.9281L78.4423 12.4152L78.0032 11.3772C77.1649 9.46107 75.2886 7.78442 72.8136 7.78442ZM72.8934 10.2196C74.0511 10.2196 74.8495 10.8184 75.2487 11.5768L69.6599 13.9321C69.3405 12.0958 71.097 10.2196 72.8934 10.2196Z" fill="currentColor" />
                        <path d="M62.9531 19.9999H65.7076V1.47693H62.9531V19.9999Z" fill="currentColor" />
                      </svg>

                    </div>
                  </div>

                  <div className="py-5">
                    <div className="flex gap-x-1">
                      <svg className="size-4 text-gray-800 dark:text-neutral-200" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                      </svg>
                      <svg className="size-4 text-gray-800 dark:text-neutral-200" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                      </svg>
                      <svg className="size-4 text-gray-800 dark:text-neutral-200" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                      </svg>
                      <svg className="size-4 text-gray-800 dark:text-neutral-200" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                      </svg>
                      <svg className="size-4 text-gray-800 dark:text-neutral-200" width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z" fill="transparent" />
                        <path d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z" fill="currentColor" />
                      </svg>
                    </div>

                    <p className="mt-3 text-sm text-neutral-200">
                      <span className="font-bold">4.8</span> /5 - from 5k reviews
                    </p>

                    <div className="mt-5">

                      <svg className="h-auto w-16 text-gray-800 dark:text-white" width="110" height="28" viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M66.6601 8.35107C64.8995 8.35107 63.5167 8.72875 62.1331 9.48265C62.1331 5.4582 62.1331 1.81143 62.2594 0.554199L53.8321 2.06273V2.81736L54.7124 2.94301C55.8433 3.19431 56.2224 3.82257 56.4715 5.33255C56.725 8.35107 56.5979 24.4496 56.4715 27.0912C58.7354 27.5945 61.1257 27.9722 63.5159 27.9722C70.1819 27.9722 74.2064 23.8213 74.2064 17.281C74.2064 12.1249 70.9366 8.35107 66.6601 8.35107ZM63.7672 26.5878C63.2639 26.5878 62.6342 26.5878 62.258 26.4629C62.1316 24.7023 62.0067 17.281 62.1316 10.7413C62.8862 10.4893 63.3888 10.3637 64.0185 10.3637C66.7872 10.3637 68.2965 13.6335 68.2965 17.6572C68.2957 22.6898 66.4088 26.5878 63.7672 26.5878ZM22.1363 1.0568H0V2.18838L1.25796 2.31403C2.89214 2.56533 3.52184 3.57127 3.77242 5.9608C4.15082 10.4886 4.02445 18.6646 3.77242 22.5619C3.52112 24.9522 2.89287 26.0845 1.25796 26.2087L0 26.4615V27.4674H14.2123V26.4615L12.703 26.2087C11.0681 26.0838 10.4392 24.9522 10.1879 22.5619C10.0615 20.9263 9.93583 18.2847 9.93583 15.0156L12.9543 15.1413C14.8413 15.1413 15.7208 16.6505 16.0985 18.7881H17.2308V9.86106H16.0985C15.7201 11.9993 14.8413 13.5078 12.9543 13.5078L9.93655 13.6342C9.93655 9.35773 10.0622 5.33328 10.1886 2.94374H14.59C17.9869 2.94374 19.7475 5.08125 21.0047 8.85513L22.2626 8.47745L22.1363 1.0568Z" fill="currentColor" />
                        <path d="M29.3053 8.09998C35.5944 8.09998 38.7385 12.3764 38.7385 18.0358C38.7385 23.4439 35.2167 27.9731 28.9276 27.9731C22.6393 27.9731 19.4951 23.6959 19.4951 18.0358C19.4951 12.6277 23.0162 8.09998 29.3053 8.09998ZM28.9276 9.35793C26.1604 9.35793 25.4058 13.1311 25.4058 18.0358C25.4058 22.8149 26.6637 26.7137 29.1796 26.7137C32.0703 26.7137 32.8264 22.9405 32.8264 18.0358C32.8264 13.2567 31.5699 9.35793 28.9276 9.35793ZM75.8403 18.1622C75.8403 13.0054 79.1101 8.09998 85.5248 8.09998C90.8057 8.09998 93.3224 11.9995 93.3224 17.1555H81.6253C81.4989 21.8089 83.7628 25.2051 88.2913 25.2051C90.3038 25.2051 91.3098 24.7033 92.5685 23.8223L93.0703 24.4505C91.8124 26.2111 89.0459 27.9731 85.5248 27.9731C79.8647 27.9724 75.8403 23.9479 75.8403 18.1622ZM81.6253 15.7726L87.5366 15.6463C87.5366 13.1311 87.159 9.35793 85.0214 9.35793C82.8839 9.35793 81.7502 12.8791 81.6253 15.7726ZM108.291 9.10663C106.782 8.47693 104.77 8.09998 102.506 8.09998C97.8538 8.09998 94.9594 10.8665 94.9594 14.137C94.9594 17.4075 97.0955 18.7904 100.118 19.7971C103.261 20.9279 104.142 21.8089 104.142 23.3182C104.142 24.8275 103.01 26.2103 100.997 26.2103C98.6084 26.2103 96.8464 24.8275 95.4635 21.0536L94.5825 21.3063L94.7089 26.84C96.2181 27.4683 98.9846 27.9724 101.375 27.9724C106.28 27.9724 109.425 25.4557 109.425 21.5576C109.425 18.9161 108.041 17.4075 104.771 16.1489C101.249 14.766 99.992 13.8857 99.992 12.2501C99.992 10.6152 101.126 9.48286 102.635 9.48286C104.897 9.48286 106.407 10.8665 107.54 14.2627L108.42 14.0114L108.291 9.10663ZM55.0883 8.6033C52.9508 7.3468 49.1769 7.97433 47.1651 12.5028L47.29 8.1007L38.8642 9.73561V10.4902L39.7444 10.6159C40.8775 10.7423 41.3794 11.3705 41.5057 13.0062C41.757 16.0247 41.6314 21.3078 41.5057 23.9486C41.3794 25.4564 40.8775 26.2111 39.7444 26.3374L38.8642 26.4638V27.4697H50.5606V26.4638L49.0513 26.3374C47.7941 26.2111 47.4164 25.4564 47.29 23.9486C47.0387 21.5584 47.0387 16.7793 47.1651 13.7608C47.7933 12.8798 50.5606 12.1259 53.0757 13.7608L55.0883 8.6033Z" fill="currentColor" />
                      </svg>

                    </div>
                  </div>

                </div>

              </div>


              <div className="relative ms-4">
                <img className="w-full rounded-md" src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80" alt="Hero Image" />
                <div className="absolute inset-0 -z-1 bg-linear-to-tr from-purple-500 via-black to-purple-300 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div>
                <div className="absolute bottom-0 start-0">
                  <svg className="w-2/3 ms-auto h-auto text-white dark:text-neutral-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="531" y="352" width="99" height="99" fill="currentColor" />
                    <rect x="140" y="352" width="106" height="99" fill="currentColor" />
                    <rect x="482" y="402" width="64" height="49" fill="currentColor" />
                    <rect x="433" y="402" width="63" height="49" fill="currentColor" />
                    <rect x="384" y="352" width="49" height="50" fill="currentColor" />
                    <rect x="531" y="328" width="50" height="50" fill="currentColor" />
                    <rect x="99" y="303" width="49" height="58" fill="currentColor" />
                    <rect x="99" y="352" width="49" height="50" fill="currentColor" />
                    <rect x="99" y="392" width="49" height="59" fill="currentColor" />
                    <rect x="44" y="402" width="66" height="49" fill="currentColor" />
                    <rect x="234" y="402" width="62" height="49" fill="currentColor" />
                    <rect x="334" y="303" width="50" height="49" fill="currentColor" />
                    <rect x="581" width="49" height="49" fill="currentColor" />
                    <rect x="581" width="49" height="64" fill="currentColor" />
                    <rect x="482" y="123" width="49" height="49" fill="currentColor" />
                    <rect x="507" y="124" width="49" height="24" fill="currentColor" />
                    <rect x="531" y="49" width="99" height="99" fill="currentColor" />
                  </svg>
                </div>

              </div>

            </div>

          </div>

        </section>
        <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                <div
                    className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                    <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                        <img className=" rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1717741205.png" alt="about Us image" />
                    </div>
                    <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1717741215.png"
                        alt="about Us image" />
                </div>
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-8 flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                          <p className="px-4 py-1 text-sm w-fit border rounded-lg">Our Story</p>
                            <h2
                                className="text-gray-50 text-4xl font-bold font-manrope font-sofiasanscondensed tracking-wide lg:text-start text-center">
                                We started Bixeltek with one goal: to bridge the gap between creative thinking and measurable performance.</h2>
                            <p className="text-gray-100 text-base font-normal leading-relaxed lg:text-start text-center">
                            With years of experience in running successful Google Ads and SEO campaigns for dental clinics across North America, we expanded our reach to serve clients in India, the GCC, and beyond. What began as a small performance marketing team evolved into a full-service growth partner for dozens of brands globally.</p>
                        </div>
                        <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                            <div className="flex-col justify-start items-start inline-flex">
                                <h3 className="text-white text-4xl font-bold font-manrope leading-normal">13+</h3>
                                <h6 className="text-gray-100 text-base font-normal leading-relaxed">Years of Experience</h6>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <h4 className="text-white text-4xl font-bold font-manrope leading-normal">125+</h4>
                                <h6 className="text-gray-100 text-base font-normal leading-relaxed">Successful Projects</h6>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <h4 className="text-white text-4xl font-bold font-manrope leading-normal">52+</h4>
                                <h6 className="text-gray-100 text-base font-normal leading-relaxed">Happy Clients</h6>
                            </div>
                        </div>
                    </div>
                    <button
                        className="sm:w-fit w-full px-3.5 py-2 bg-purple-600 hover:bg-purple-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
                    </button>
                </div>
            </div>
        </div>
    </section>                                      
        {/* Other sections (Bento, Timeline, etc.) */}
        <Bento />
        <section className="pt-10 pb-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
                        className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-between flex-col lg:flex-row"
                    >
                        <div className="w-full md:w-4/5 block text-center mb-5 lg:text-left lg:mb-0">
                            <h2
                                className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2"
                            >
                                Let&apos;s Grow Together
                            </h2>
                            <p className="text-base md:text-xl text-indigo-100">
                            If you&apos;re tired of marketing that doesn&apos;t move the needle, you&apos;re in the right place.Let Bixeltek help you turn clicks into conversions, and campaigns into growth.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/5 flex justify-center items-center">
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
                </div>
            </section>

        <section className="overflow-hidden relative px-8 md:px-20 py-20 bg-black">
          <Image
            src={BgImg}
            height={1500}
            width={1500}
            alt=""
            className="absolute right-0 hidden lg:flex top-[-100px] opacity-100"
          />
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <motion.div
              className="max-w-lg text-left mb-12 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm text-purple-500 text-start">Our Approach</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                Best pathway to our <span className="text-purple-700">clients</span>.
              </h2>
              <p className="text-lg md:text-[16px] leading-wide">
              We blend creativity + analytics + strategy to deliver results that matter.
              </p>
              <div className="mt-8 flex flex-col gap-5 capitalize">
                <p>
                  <i className="fa fa-arrow-circle-o-right mr-2" aria-hidden="true"></i>
                  Clear communication
                </p>
                <p>
                  <i className="fa fa-arrow-circle-o-right mr-2" aria-hidden="true"></i>
                  monthly reports
                </p>
                <p>
                  <i className="fa fa-arrow-circle-o-right mr-2" aria-hidden="true"></i>
                  honest advice
                </p>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-[90%] bg-gray-500"></div>
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-10 ${index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div
                    className={`max-w-sm relative p-8 rounded-lg bg-black flex flex-col text-center justify-start shadow-lg z-[1] ${index % 2 === 0 ? "lg:text-left" : "lg:text-right"
                      }`}
                  >
                    <div className="absolute top-0 left-0 right-0 bottom-0 rounded-lg bg-gradient-to-r from-[#b8cbb8] via-[#cf6cc9] to-[#ee609c] z-0"></div>
                    <div className="absolute top-[2px] left-[2px] right-[2px] bottom-[2px] rounded-lg bg-black z-10"></div>
                    <h5 className="relative z-20 text-lg font-bold font-sans">
                      {event.title}
                    </h5>
                    <p className="relative z-20 text-gray-200 mt-2 text-sm font-mono">
                      {event.description}
                    </p>
                  </div>
                  <div className="absolute left-1/2 hidden lg:block transform-translate-x-1/2 w-2 h-2 rounded-full bg-[#ee609c] z-20 "></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section>
          <CreativeSection />
          <TeamStatsSection />
        </section>
      </div>
    </>
  );
}
