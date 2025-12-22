import React, { ReactNode } from 'react';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { NextSeo } from 'next-seo'; // Use NextSeo for meta tags

interface LayoutProps {
  children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
