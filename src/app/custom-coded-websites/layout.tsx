import React, { ReactNode } from 'react';
import { Header } from '@/sections/Header';
import { Whiteheader } from '@/components/Whiteheader';
import { Footer } from '@/sections/Footer';

interface LayoutProps {
    children: ReactNode;
}
export const metadata = {
    title: "Custom-Coded Websites | Next.js, React & Hybrid Experts",
    description: "Bixeltek builds fast, scalable custom-coded and headless websites using React, Next.js & Node. Hybrid, CMS-integrated systems engineered for speed and ROI.",
    keywords: "Google Ads, Marketing, SEO, PPC, Bixeltek",
    openGraph: {
        title: "Custom-Coded Websites | Next.js, React & Hybrid Experts",
        description: "Bixeltek builds fast, scalable custom-coded and headless websites using React, Next.js & Node. Hybrid, CMS-integrated systems engineered for speed and ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/custom-coded-websites", // 👈 canonical URL here
    },
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Whiteheader />
            <main className="min-h-screen bg-[black]">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
