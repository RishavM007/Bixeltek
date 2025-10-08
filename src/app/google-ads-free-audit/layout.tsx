
export const metadata = {
    title: "Google Ads Management Experts | Get a Free Google Ads Audit – Bixeltek",
    description:
        "Not getting results from Google Ads? Get a free audit from Bixeltek — a Google Partner Certified agency trusted by 200+ brands worldwide. We’ll uncover wasted spend, missed keywords, and growth opportunities to 3x your ROI.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Google Ads Management Experts | Get a Free Google Ads Audit – Bixeltek",
        description:
            "Not getting results from Google Ads? Get a free audit from Bixeltek — a Google Partner Certified agency trusted by 200+ brands worldwide. We’ll uncover wasted spend, missed keywords, and growth opportunities to 3x your ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/google-ads-free-audit",
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
