import React, { ReactNode } from 'react';
import { Header } from '@/sections/Header';
import { Whiteheader } from '@/components/Whiteheader';
import { Footer } from '@/sections/Footer';

interface LayoutProps {
    children: ReactNode;
}
export const metadata = {
    title: "Payment Gateway Integration Services | Razorpay & Global",
    description: "Integrate Razorpay, PayTabs, Stripe & PayPal with secure, seamless checkout flows. Bixeltek builds PCI-ready, conversion-focused payment systems for global businesses.",
    keywords: "Google Ads, Marketing, SEO, PPC, Bixeltek",
    openGraph: {
        title: "Payment Gateway Integration Services | Razorpay & Global",
        description: "Integrate Razorpay, PayTabs, Stripe & PayPal with secure, seamless checkout flows. Bixeltek builds PCI-ready, conversion-focused payment systems for global businesses.",
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
            <main className="min-h-screen bg-[white]">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
