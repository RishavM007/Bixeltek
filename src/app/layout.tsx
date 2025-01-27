import { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {Preloader} from "@/components/Preloader";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });


export const metadata: Metadata = {
  title: "Bixeltek",
  description: "Best Digital Marketing Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
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
