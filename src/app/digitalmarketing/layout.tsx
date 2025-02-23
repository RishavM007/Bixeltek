import React, { ReactNode } from 'react';
import {Header} from '@/sections/Header';
import {Footer} from '@/sections/Footer';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Digital Marketing - Bixeltek",
  description: "At Bixeltek, we specialize in providing tailored IT solutions.",
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
