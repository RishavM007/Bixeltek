import React, { ReactNode } from 'react';
import { Header } from '@/sections/Header';
import { Whiteheader } from '@/components/Whiteheader';
import { Footer } from '@/sections/Footer';

interface LayoutProps {
    children: ReactNode;
}
export const metadata = {
    title: "E-Commerce Website Development | Shopify, Woo & Headless",
    description: "Build high-performance e-commerce websites with Bixeltek. Shopify, WooCommerce & Headless builds designed for speed, SEO, and conversions that scale globally.",
    keywords: "Google Ads, Marketing, SEO, PPC, Bixeltek",
    openGraph: {
        title: "E-Commerce Website Development | Shopify, Woo & Headless",
        description: "Build high-performance e-commerce websites with Bixeltek. Shopify, WooCommerce & Headless builds designed for speed, SEO, and conversions that scale globally.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/ecommerce-website", // 👈 canonical URL here
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
