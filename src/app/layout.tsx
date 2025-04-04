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
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EVJXPZFB2T"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EVJXPZFB2T');
          `}
        </Script>
        <Script id="google-tag-manager-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MC65NV9');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-[black]`}>
        {/* Font Awesome */}
        <Script
          src="https://kit.fontawesome.com/d836a1d31c.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        {/* Google Tag Manager (noscript) - BODY */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MC65NV9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* Preloader */}
        <Preloader>{children}</Preloader>
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/9100032301?text=Hi%20I%20am%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed hidden md:flex bottom-10 z-50 right-10 md:right-20  items-center space-x-3"
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
