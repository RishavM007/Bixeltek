
export const metadata = {
    title: "Google Ads Management Toronto | Bixeltek – Google Partner",
    description:
        " Bixeltek is a Google Partner agency in Toronto offering full-cycle Google Ads management. Smarter PPC campaigns, lower CPA, better leads, transparent reporting.",
    keywords:
        "Web development Hyderabad, Best web development company Hyderabad, Custom website design, Next.js development, React.js development, Full-stack web development, Frontend development, Backend development, E-commerce website development, WordPress development, Responsive web design, UI/UX design Hyderabad, Web application development, Modern web technologies",
    openGraph: {
        title: "Google Ads Management Toronto | Bixeltek – Google Partner",
        description:
            " Bixeltek is a Google Partner agency in Toronto offering full-cycle Google Ads management. Smarter PPC campaigns, lower CPA, better leads, transparent reporting.",
        type: "website",
    },
    alternates: {
        canonical: "https://bixeltek.com/toronto/google-ads-management",
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
