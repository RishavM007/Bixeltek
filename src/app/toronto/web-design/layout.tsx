
export const metadata = {
    title: "Web Design Services Toronto | Bixeltek – Websites That Convert & Grow",
    description:
        " Looking for web design services in Toronto? Bixeltek builds custom, SEO-ready, and conversion-focused websites trusted by businesses across Canada.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Web Design Services Toronto | Bixeltek – Websites That Convert & Grow",
        description:
            "Looking for web design services in Toronto? Bixeltek builds custom, SEO-ready, and conversion-focused websites trusted by businesses across Canada.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/toronto/web-design",
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
