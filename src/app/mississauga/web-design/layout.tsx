
export const metadata = {
    title: "Web Design Services Mississauga | Website Development Company – Bixeltek",
    description:
        "Bixeltek designs conversion-focused websites for Mississauga businesses. From custom builds to ecommerce and branding, we create SEO-ready websites that attract and convert customers.",
    keywords:
       "Web design Mississauga, Best web design company Mississauga, Website development Mississauga, Responsive web design Mississauga, Custom website design Mississauga, E-commerce website design Mississauga, WordPress web design Mississauga, Professional web designers Mississauga, Affordable web design Mississauga, UI/UX design Mississauga, Mobile-friendly website design Mississauga, Small business web design Mississauga, Website redesign services Mississauga, Corporate web design Mississauga, Landing page design Mississauga, Creative web design agency Mississauga",
    openGraph: {
        title: "Web Design Services Mississauga | Website Development Company – Bixeltek",
        description:
            "Bixeltek designs conversion-focused websites for Mississauga businesses. From custom builds to ecommerce and branding, we create SEO-ready websites that attract and convert customers.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/mississauga/web-design",
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
