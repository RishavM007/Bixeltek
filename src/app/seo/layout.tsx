import React, { ReactNode } from 'react';
import {Header} from '@/sections/Header';
import {Footer} from '@/sections/Footer';

interface LayoutProps {
  children: ReactNode;
}
export const metadata = {
  title: "Best SEO Services in Hyderabad | Rank #1 with Bixeltek",
  description:
    "Boost your Google rankings with Bixeltek’s expert SEO services in Hyderabad. We offer on-page SEO, technical SEO, local SEO, and result-driven digital marketing strategies to grow your business. Get a free SEO audit today!",
  keywords:
    "SEO services Hyderabad, Best SEO agency Hyderabad, Digital marketing Hyderabad, Local SEO Hyderabad, Google ranking services, Technical SEO, On-page SEO, Off-page SEO, E-commerce SEO, SEO expert Hyderabad, Increase website traffic, SEO consultant Hyderabad",
  openGraph: {
    title: "Bixeltek – Hyderabad’s Top SEO & Digital Marketing Agency",
    description:
      "Bixeltek helps businesses rank higher on Google with expert SEO strategies. Get local, technical, and e-commerce SEO services for long-term online growth.",
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
