export const metadata = {
    title: "Full-System Digital Marketing | Smarter, Measurable Growth – Bixeltek",
    description:
        "Bixeltek drives predictable, measurable growth for businesses through full-system digital marketing — integrating Google Ads, SEO, and Web Design into one data-driven strategy that maximizes ROI.",
    keywords:
        "Digital marketing Hyderabad, Full-system digital marketing, SEO agency Hyderabad, Google Ads management Hyderabad, PPC advertising, Search engine optimization, Web design agency Hyderabad, Web development Hyderabad, Data-driven marketing, Online branding, Conversion optimization, Performance marketing agency, Content marketing, Next.js web development, React.js development, UI/UX design Hyderabad",
    openGraph: {
        title: "Full-System Digital Marketing | Smarter, Measurable Growth – Bixeltek",
        description:
            "Bixeltek’s full-system digital marketing approach unites SEO, Google Ads, and web design to help businesses achieve measurable growth and sustainable ROI.",
        type: "website",
        url: "https://bixeltek.com/digital-marketing-full-system",
    },
    alternates: {
        canonical: "https://bixeltek.com/digital-marketing-full-system",
    },
    robots: {
        index: false, 
        follow: false, 
        googleBot: {
            index: false,
            follow: false,
        },
    },
};


import React, { ReactNode } from 'react';
import { Whiteheader } from '@/components/Whiteheader';
import {Footer} from '@/sections/Footer';

interface LayoutProps {
  children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Whiteheader />
      <main className="min-h-screen overflow-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
