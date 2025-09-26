
export const metadata = {
    title: "SEO Services Toronto | Bixeltek – Trusted SEO Agency",
    description:
        " Bixeltek provides SEO services for Toronto and Canadian businesses. From local SEO to AI SEO, we deliver rankings, organic traffic, and measurable ROI.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: " SEO Services Toronto | Bixeltek – Trusted SEO Agency",
        description:
            " Bixeltek provides SEO services for Toronto and Canadian businesses. From local SEO to AI SEO, we deliver rankings, organic traffic, and measurable ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/services/seo-services",
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
