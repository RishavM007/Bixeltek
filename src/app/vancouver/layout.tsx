
export const metadata = {
    title: "Digital Marketing Agency Vancouver | SEO, Google Ads & Web Design – Bixeltek",
    description:
        "Bixeltek is a Google Partner Certified digital marketing agency in Vancouver. We help businesses grow with SEO, Google Ads, web design, social media, and more.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Digital Marketing Agency Vancouver | SEO, Google Ads & Web Design – Bixeltek",
        description:
            "Bixeltek is a Google Partner Certified digital marketing agency in Vancouver. We help businesses grow with SEO, Google Ads, web design, social media, and more.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/vancouver",
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
