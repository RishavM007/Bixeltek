import React, { ReactNode } from 'react';
import {Header} from '@/sections/Header';
import {Footer} from '@/sections/Footer';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Google Ads Agency in Hyderabad | Best Google Ads Management Company — Bixeltek",
  description: "Looking for a trusted Google Ads agency in Hyderabad? Bixeltek is a Google Partner providing expert PPC services with proven ROI. Book your free Google Ads audit today!",
  keywords: "Google Ads, Marketing, SEO, PPC, Bixeltek",
  openGraph: {
    title: "Google Ads Agency in Hyderabad | Best Google Ads Management Company — Bixeltek",
    description: "Looking for a trusted Google Ads agency in Hyderabad? Bixeltek is a Google Partner providing expert PPC services with proven ROI. Book your free Google Ads audit today!", 
    type: "website",
  },
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
