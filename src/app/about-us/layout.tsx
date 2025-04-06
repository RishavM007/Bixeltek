import React, { ReactNode } from 'react';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { NextSeo } from 'next-seo'; // Use NextSeo for meta tags

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Bixeltek | Digital Marketing Agency That Drives Real Results",
  description: "Bixeltek is a Google Partner digital marketing agency helping businesses grow with ROI-driven SEO, Google Ads, Web Design & Social Media Marketing. Trusted globally.",
  keywords: "Google Ads, Marketing, SEO, PPC, Bixeltek",
  openGraph: {
    title: "GoogleAds - Bixeltek",
    description: "At Bixeltek, we specialize in providing tailored IT solutions.", 
    type: "website",
  },
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
