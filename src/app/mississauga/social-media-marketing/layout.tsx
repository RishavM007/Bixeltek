
export const metadata = {
    title: "Social Media Marketing Mississauga | Social Media Agency – Bixeltek",
    description:
        "Bixeltek helps Mississauga businesses grow with social media marketing. From content strategy to paid ads and management, we build campaigns that drive engagement, leads, and ROI.",
    keywords:
        "SEO services Mississauga, Best SEO company Mississauga, Local SEO Mississauga, On-page SEO optimization, Off-page SEO strategies, Technical SEO services, Keyword research Mississauga, Link building services, Content marketing Mississauga, E-commerce SEO Mississauga, WordPress SEO optimization, Mobile SEO services, SEO audit Mississauga, Search engine marketing, Google My Business optimization",
    openGraph: {
        title: "Social Media Marketing Mississauga | Social Media Agency – Bixeltek",
        description:
            "Bixeltek helps Mississauga businesses grow with social media marketing. From content strategy to paid ads and management, we build campaigns that drive engagement, leads, and ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/mississauga/social-media-marketing",
    },
};


import React, { ReactNode } from 'react';
import { Whiteheader } from '@/components/Whiteheader';
import { Footer } from '@/sections/Footer';

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
