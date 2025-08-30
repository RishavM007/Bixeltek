import React, { ReactNode } from 'react';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { Whiteheader } from '@/components/Whiteheader';
import { Toaster } from 'react-hot-toast';
import PageTransition from "@/components/PageLoader";
import TransitionProvider from "@/components/TransitionProvider";

interface LayoutProps {
    children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <PageTransition />

            <TransitionProvider>
                <Whiteheader />
                <main className="min-h-screen bg-black">{children}</main>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
                <Footer />
            </TransitionProvider>
        </>
    );
};

export default Layout;
