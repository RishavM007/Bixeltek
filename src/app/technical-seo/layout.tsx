
export const metadata = {
    title: "Technical SEO Services | Site Speed, Crawl & Schema Experts",
    description:
        " Bixeltek’s Technical SEO systems fix crawl inefficiencies, Core Web Vitals, and site architecture — building search visibility that scales globally.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Technical SEO Services | Site Speed, Crawl & Schema Experts",
        description:
            " Bixeltek’s Technical SEO systems fix crawl inefficiencies, Core Web Vitals, and site architecture — building search visibility that scales globally.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/technical-seo",
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
