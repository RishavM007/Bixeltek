import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="footer-1 bg-black border-t-2 border-slate-600 text-neutral-300 pt-8 sm:pt-12 lg:pt-20 pb-5">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="sm:flex  sm:flex-wrap sm:-mx-4 md:py-4">
          {/* Services */}
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/5">
            <h5 className="text-xl font-bold mb-6">Services</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a href="/google-ads-agency-hyderabad" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Google Ads</a>
              </li>
              <li className="mb-2">
                <a href="/seo-agency-hyderabad" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Search Engine Optimization</a>
              </li>
              <li className="mb-2">
                <a href="/web-design-services-hyderabad" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Web Design and Dev</a>
              </li>
              <li className="mb-2">
                <a href="/digitalmarketing" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Digital Marketing</a>
              </li>
              <li className="mb-2">
                <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Content Management</a>
              </li>
              <li className="mb-2">
                <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Youtube Ads</a>
              </li>
            </ul>
          </div>

          {/* More Services */}
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6"><br /></h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Graphic Design and Branding</a>
              </li>
              <li className="mb-2">
                <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Product Photography</a>
              </li>
              <li className="mb-2">
                <a href="/social-media-marketing-agency-hyderabad" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Social Media Management</a>
              </li>
              <li className="mb-2">
                <a href="/pricing" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Service Areas</h5>
            <ul className="list-none footer-links">
              <li className="mb-2"><a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">India</a></li>
              <li className="mb-2"><a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">USA</a></li>
              <li className="mb-2"><a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Canada</a></li>
              <li className="mb-2"><a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">UAE</a></li>
              <li className="mb-2"><a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Saudi Arabia</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Help</h5>
            <ul className="list-none footer-links">
              <li className="mb-2"><a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Support</a></li>
              <li className="mb-2"><a href="/contact-us" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Contact Us</a></li>
            </ul>
          </div>

          {/* Address & Contact Info */}
          <div className="px-4 sm:w-full  md:w-1/2 lg:w-1/3 xl:w-1/4 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Contact Info</h5>
            <div className="text-sm mb-4">
              <p className="mb-2 font-semibold">Address</p>
              <address className="text-base not-italic">
                Bixeltek,<br />
                3rd Floor, Behind Cult Fit,<br />
                K K Convention Road, Suncity Rd,<br />
                opposite Ratnadeep, Bandlaguda Jagir,<br />
                Hyderabad, Telangana 500091
              </address>
            </div>
            <div className="text-sm mb-4">
              <p className="mb-1 font-semibold">Phone</p>
              <a href="tel:+919100032301">
              <p>+91 9100032301</p>
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-3">
            <a href="http://instagram.com/bixeltekagency/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/company/bixeltek" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full text-gray-400 hover:text-white hover:bg-blue-400 hover:border-blue-400">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="http://instagram.com/bixeltekagency/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full text-gray-400 hover:text-white hover:bg-fuchsia-600 hover:border-fuchsia-600">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 text-center">
          <Link href={"/contact-us"}>
            <button className="bg-gradient-to-t from-[#4a208a] to-[#13012e] border border-[#8a45f2] text-white font-normal text-sm py-2 px-4 rounded-lg shadow-custom mt-4">
              <span className="tracking-wider">Let&apos;s Talk <i className="fa fa-arrow-right text-sm ml-1" aria-hidden="true"></i></span>
            </button>
          </Link>
        </div>

        {/* Divider & Copyright */}
        <hr className="border-t border-slate-700 mt-10 mb-4" />
        <div className="text-center text-sm">
          Copyright © 2025 BixelTek IT And Digital Marketing Agency
        </div>
      </div>
    </footer>
  );
};
