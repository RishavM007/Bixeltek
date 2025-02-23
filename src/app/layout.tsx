
import { Inter } from "next/font/google";
import Script from "next/script";
import Head from "next/head";
import "./globals.css";
import {Preloader} from "@/components/Preloader";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            
      <body className={`${inter.className} bg-[black]`}>
        <Script
          src="https://kit.fontawesome.com/d836a1d31c.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        /> 
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}
