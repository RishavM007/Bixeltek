import React, { ReactNode } from 'react';
import {Header} from '@/sections/Header';
import {Footer} from '@/sections/Footer';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Bixeltek | Best Digital Marketing Services in Hyderabad",
  description:
    "Bixeltek is Hyderabad’s leading digital marketing agency, offering expert SEO, PPC, Google Ads, and social media marketing. Drive traffic, increase conversions, and grow your brand with our data-driven strategies. Get a free consultation today!",
  keywords:
    "Bixeltek digital marketing, Digital marketing agency Hyderabad, Best SEO services Hyderabad, Google Ads management, PPC advertising, Social media marketing, Lead generation, Online marketing strategies, Search engine optimization, Content marketing",
  openGraph: {
    title: "Bixeltek | Expert Digital Marketing Services in Hyderabad",
    description:
      "Maximize your online presence with Bixeltek’s top-tier digital marketing services. From SEO and PPC to social media management, we help businesses grow effectively.",
    type: "website",
  },
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-black" >{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
