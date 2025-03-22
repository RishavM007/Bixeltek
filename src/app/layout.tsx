import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Preloader } from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[black]`}>
        {/* Font Awesome */}
        <Script
          src="https://kit.fontawesome.com/d836a1d31c.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />

        {/* Preloader */}
        <Preloader>{children}</Preloader>

        {/* Floating WhatsApp Button */}

        <a
          href="https://wa.me/9100032301?text=Hi%20I%20am%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 z-50 right-10 md:right-20 flex items-center space-x-3"
        >
          <p className="text-white font-sofiasanscondensed tracking-wide text-sm md:text-lg">Need Help? <span className="font-bold">Chat with us</span></p>

          <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-600 transition-all duration-300">
            <i className="fab fa-whatsapp text-[27px] text-white"></i>
          </div>
        </a>

      </body>
    </html>
  );
}
