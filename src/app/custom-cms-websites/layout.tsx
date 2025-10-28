import React, { ReactNode } from 'react';
import { Header } from '@/sections/Header';
import { Whiteheader } from '@/components/Whiteheader';
import { Footer } from '@/sections/Footer';

interface LayoutProps {
    children: ReactNode;
}
export const metadata = {
    title: " Custom CMS Website Development | WordPress, Shopify, Headless",
    description: " Bixeltek builds fast, SEO-optimized CMS websites for global businesses. WordPress, Shopify & Headless CMS solutions engineered for speed, scalability, and ROI.",
    keywords: "Google Ads, Marketing, SEO, PPC, Bixeltek",
    openGraph: {
        title: " Custom CMS Website Development | WordPress, Shopify, Headless",
        description: " Bixeltek builds fast, SEO-optimized CMS websites for global businesses. WordPress, Shopify & Headless CMS solutions engineered for speed, scalability, and ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/custom-cms-websites", // 👈 canonical URL here
    },
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Whiteheader />
            <main className="min-h-screen bg-[#fffdf5]">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
