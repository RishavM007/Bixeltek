export const metadata = {
    title: "Contact Us | Bixeltek",
    description: "Talk to a certified digital marketing experts in Bixeltek. We're here to help your business grow through data driven strategies.",
    keywords:
        "Web design Hyderabad, Web development Hyderabad, E-commerce website development, SEO services Hyderabad, Custom website design, Best website designers Hyderabad, CMS development, Next.js development, React.js web development, Hyderabad digital agency",
    openGraph: {
        title: "Contact Us | Bixeltek",
        description:
            "Talk to a certified digital marketing experts in Bixeltek. We're here to help your business grow through data driven strategies.",
        type: "website",
    },
};
import React from 'react'
import { ContactSection } from '@/components/ContactPageForm'

export default function ContactPage() {
    return (
        <>
            <section>
                <div className="relative h-[100vh] py-12 bg-neutral-900 sm:py-20 lg:py-20 xl:pt-32 xl:pb-44">
                    <div className="absolute inset-0 hidden lg:block">
                        <img className="object-cover object-right-bottom w-full h-full" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/background.png" alt="" />
                    </div>

                    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
                            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">
                                Get in Touch With Us
                            </h1>
                            <p className="mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md xl:pr-0 lg:pr-16">
                                We&apos;d love to hear from you. Whether you have a question about features, pricing, need a demo, or anything else—our team is ready to answer all your questions.
                            </p>

                            <div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
                                <a
                                    href="tel:+919100032301"
                                    title="Send us a message"
                                    className="
          inline-flex
          items-center
          justify-center
          px-3
          py-3
          text-base
          font-bold
          leading-7
          text-gray-900
          transition-all
          duration-200
          bg-white
          border border-transparent
          rounded-md
          sm:px-6
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
          hover:bg-gray-200
        "
                                    role="button"
                                >
                                    Give us a call
                                </a>

                                <a
                                    href="https://www.google.com/maps/place/Bixeltek+-+A+Google+Partner+Agency+%7C+Digital+Marketing+Agency/@17.3626139,78.392247,17z/data=!3m1!4b1!4m6!3m5!1s0x801d7036c2b29689:0x147a268620903039!8m2!3d17.3626139!4d78.3948219!16s%2Fg%2F11y8fkqnh3?entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D"
                                    title="View our location"
                                    target='_blank'
                                    className="
          inline-flex
          items-center
          justify-center
          px-2
          py-3
          text-base
          font-bold
          leading-7
          text-white
          transition-all
          duration-200
          bg-transparent
          border border-transparent
          rounded-md
          sm:px-4
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-700
          hover:bg-gray-700
        "
                                    role="button"
                                >
                                    View Location
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="mt-8 lg:hidden">
                        <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/bg.png" alt="" />
                    </div>
                </div>
            </section>
            <section>
                <ContactSection />
            </section>
        </>
    )
}
