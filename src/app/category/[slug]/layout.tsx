import React, { ReactNode } from 'react';
import {Header} from '@/sections/Header';
import { Whiteheader } from '@/components/Whiteheader';
import {Footer} from '@/sections/Footer';

interface LayoutProps {
  children: ReactNode;
}

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
