// layout.tsx

import React, { ReactNode } from 'react';
import Script from 'next/script';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Bixeltek – Hyderabad's Premier Web Design & Development Agency",
  description:
    "Bixeltek is Hyderabad’s premier web design & development agency, specializing in custom websites, e-commerce solutions, CMS development, and SEO. Get a high-performance website tailored to your business. Book a free consultation today!",
  keywords:
    "Web design Hyderabad, Web development Hyderabad, E-commerce website development, SEO services Hyderabad, Custom website design, Best website designers Hyderabad, CMS development, Next.js development, React.js web development, Hyderabad digital agency",
  openGraph: {
    title: "Bixeltek – Hyderabad's Web Design & Development Experts",
    description:
      "Bixeltek builds high-performance, SEO-optimized websites in Hyderabad. Specializing in custom web development, e-commerce, CMS solutions, and digital marketing.",
    type: "website",
  },
};




const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* Calendly CSS */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      {/* Calendly JS Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <Header />
      <main className="min-h-screen bg-white">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
