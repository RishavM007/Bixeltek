import React, { ReactNode } from 'react';
import {Header} from '@/sections/Header';
import {Footer} from '@/sections/Footer';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#131313]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
