import React, { ReactNode } from 'react';
import {Header} from '@/sections/Header';
import {Footer} from '@/sections/Footer';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Social Media Management Agency in Hyderabad | Instagram & Facebook Ads | Bixeltek",
  description:
    "Elevate your brand with Bixeltek, Hyderabad’s leading social media management agency. Specialized Instagram ads, Facebook ads, and tailored social media marketing services to drive growth and conversions. Schedule your free strategy session today!",
  keywords:
    "Bixeltek social media, Social media management Hyderabad, Best social media agency Hyderabad, Instagram marketing, Facebook ads, LinkedIn marketing, Twitter management, Social media strategy, Content creation, Brand growth, Online presence",
  openGraph: {
    title: "Bixeltek | Expert Social Media Marketing Services in Hyderabad",
    description:
      "Boost your brand’s online presence with Bixeltek’s professional social media management services. Drive engagement, increase reach, and build a strong brand identity.",
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
