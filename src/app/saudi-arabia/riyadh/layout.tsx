
export const metadata = {
    title:  " Digital Marketing Agency in Riyadh | SEO, Google Ads & Web Design – Bixeltek",
    description:
        " Bixeltek is a Google Partner Certified digital marketing agency in Riyadh. We help Saudi businesses scale with SEO, Google Ads, and web design built for measurable growth.",
    openGraph: {
        title: " Digital Marketing Agency in Riyadh | SEO, Google Ads & Web Design – Bixeltek",
        description:
            " Bixeltek is a Google Partner Certified digital marketing agency in Riyadh. We help Saudi businesses scale with SEO, Google Ads, and web design built for measurable growth.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/saudi-arabia/riyadh",
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
