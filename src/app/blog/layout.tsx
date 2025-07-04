import React, { ReactNode } from 'react';
import { Header } from '@/sections/Header';
import { Whiteheader } from '@/components/Whiteheader';
import { Footer } from '@/sections/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Whiteheader />
      <main className="min-h-screen relative bg-white overflow-hidden">
<div
  className="absolute inset-0 pointer-events-none z-0"
  style={{
    background: `
      radial-gradient(
        70% 50% at 60% -10%,
        rgba(156, 39, 176, 0.45) 0%,
        rgba(103, 58, 183, 0.35) 30%,
        rgba(255, 255, 255, 0.2) 60%,
        rgba(255, 255, 255, 0.1) 80%,
        transparent 100%
      )
    `,
  }}
/>



        {/* Main content */}
        <div className="relative z-10">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
