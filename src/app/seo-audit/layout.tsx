
export const metadata = {
    title: " SEO Services That Deliver | Free SEO Audit & Ranking Forecast – Bixeltek",
    description:
        " Struggling to rank or get traffic? Bixeltek’s SEO experts help your business dominate Google and AI search. Get a free SEO audit and find out how to increase traffic, authority, and conversions.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title:  "SEO Services That Deliver | Free SEO Audit & Ranking Forecast – Bixeltek",
        description:
            " Struggling to rank or get traffic? Bixeltek’s SEO experts help your business dominate Google and AI search. Get a free SEO audit and find out how to increase traffic, authority, and conversions.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/seo-audit",
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
      <main className="min-h-screen bg-white overflow-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
