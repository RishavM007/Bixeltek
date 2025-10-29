
export const metadata = {
    title: " On-Page SEO Services | Semantic Optimization & Content Architecture",
    description:
        " Bixeltek engineers intent-driven on-page SEO systems that align structure, semantics & UX to build topical authority and boost organic conversions.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "On-Page SEO Services | Semantic Optimization & Content Architecture",
        description:
            " Bixeltek engineers intent-driven on-page SEO systems that align structure, semantics & UX to build topical authority and boost organic conversions.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/on-page-seo",
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
