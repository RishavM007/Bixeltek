import React, { ReactNode } from 'react';
import { Whiteheader } from '@/components/Whiteheader';
import {Footer} from '@/sections/Footer';

interface LayoutProps {
  children: ReactNode;
}
export const metadata = {
  title: "Case Study: 436% ROAS for Local Laundry Brand | TumbleWash",
  description:
    "Discover how TumbleWash, a local laundry business, achieved 436% ROAS and 477+ monthly phone calls — all with half the budget. See the exact strategy used.",
  openGraph: {
    title: "Case Study: 436% ROAS for Local Laundry Brand | TumbleWash",
    description:
      "TumbleWash saw massive growth with our digital strategy — 436% ROAS, 477+ calls/month. Read the full case study.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study: 436% ROAS for Local Laundry Brand | TumbleWash",
    description:
      "How a small laundry brand achieved big results — 436% ROAS and 477+ monthly calls with half the spend. View the breakdown.",
  },
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Whiteheader />
      <main className="min-h-screen bg-white text-black" >{children}</main>
      <Footer />

    </>
  );
};

export default Layout;
