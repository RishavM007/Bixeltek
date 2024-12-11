import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <head>
        <script
          src="https://kit.fontawesome.com/d836a1d31c.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${inter.className} bg-black`}>
        {children}
      </body>
    </html>
  );
}
