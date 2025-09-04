import React, { ReactNode } from 'react';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { Whiteheader } from '@/components/Whiteheader';
import { Toaster } from 'react-hot-toast';
import PageTransition from "@/components/PageLoader";
import TransitionProvider from "@/components/TransitionProvider";
import SmoothScrollProvider from '@/components/SmoothScroll';
interface LayoutProps {
    children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {

    
    return (
        <>
                <Whiteheader />
                <SmoothScrollProvider>
                <main className="min-h-screen bg-black">{children}</main>
                </SmoothScrollProvider>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
                <Footer />
        </>
    );
};

export default Layout;
