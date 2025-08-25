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
      alternates: {
    canonical: "https://bixeltek.com/contact-us", // 👈 canonical URL here
  },
};
import React from 'react'
import { ContactSection } from '@/components/ContactPageForm'

export default function ContactPage() {
    return (
        <>
            <section>
                <ContactSection />
            </section>
        </>
    )
}
