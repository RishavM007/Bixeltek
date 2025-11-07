
export const metadata = {
    title: " Local SEO Services | Google Business & Map Optimization",
    description:
        " Bixeltek’s Local SEO systems help businesses dominate Google Maps & local search. We optimize GBP, NAP consistency & reviews for calls and foot traffic.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: " Local SEO Services | Google Business & Map Optimization",
        description:
            " Bixeltek’s Local SEO systems help businesses dominate Google Maps & local search. We optimize GBP, NAP consistency & reviews for calls and foot traffic.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/local-seo",
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
      <main className="min-h-screen overflow-hidden bg-white">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
