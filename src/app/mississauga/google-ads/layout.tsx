
export const metadata = {
    title: "Google Ads Services Mississauga | Google Partner Agency – Bixeltek",
    description:
        "Bixeltek is a Google Partner Certified agency in Mississauga. We manage Google Ads campaigns across Search, Display, Shopping, Performance Max & more to deliver qualified leads and measurable ROI.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Google Ads Services Mississauga | Google Partner Agency – Bixeltek",
        description:
            "Bixeltek is a Google Partner Certified agency in Mississauga. We manage Google Ads campaigns across Search, Display, Shopping, Performance Max & more to deliver qualified leads and measurable ROI.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/mississauga/google-ads",
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
