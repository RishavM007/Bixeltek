
export const metadata = {
    title:  "Digital Marketing Agency in Eastern Province | SEO, Google Ads & Web Design – Bixeltek",
    description:
        "Bixeltek is a Google Partner Certified digital marketing agency serving Khobar, Dammam, and Dhahran. We help Saudi businesses scale through SEO, Google Ads, and web design that deliver measurable ROI.",
    openGraph: {
        title: " Digital Marketing Agency in Eastern Province | SEO, Google Ads & Web Design – Bixeltek",
        description:
            "Bixeltek is a Google Partner Certified digital marketing agency serving Khobar, Dammam, and Dhahran. We help Saudi businesses scale through SEO, Google Ads, and web design that deliver measurable ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/saudi-arabia/eastern-province",
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
