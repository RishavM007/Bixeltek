import Link from "next/link";
import React from "react";
export const Footer = () => {
  return <footer className="footer-1 bg-black border-t-2 border-slate-600 text-neutral-300 pt-8 sm:pt-12 lg:pt-20 pb-5">
    <div className="max-w-7xl mx-auto px-4">
      <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
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
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
          <h5 className="text-xl font-bold mb-6">Service Areas</h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">India</a>
            </li>
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">USA</a>
            </li>
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Canada</a>
            </li>
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">UAE</a>
            </li>
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Saudi Arabia</a>
            </li>
          </ul>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
          <h5 className="text-xl font-bold mb-6">Help</h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Support</a>
            </li>

            <li className="mb-2">
              <a href="#" className="border-b border-solid border-transparent hover:border-purple-600 hover:text-purple-600">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
          <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
          <div className="flex sm:justify-center xl:justify-start">
            <a href="http://instagram.com/bixeltekagency/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/company/bixeltek" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full ml-2 text-gray-400 hover:text-white hover:bg-blue-400 hover:border-blue-400">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="http://instagram.com/bixeltekagency/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full ml-2 text-gray-400 hover:text-white hover:bg-fuchsia-600 hover:border-fuchsia-600">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>

        </div>
      </div>

      <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h6 className="font-bold mb-2">Address</h6>
          <address className="not-italic mb-4 text-sm">
            Bixeltek,<br /> 3rd Floor, Behind Cult Fit,<br /> K K Convention Road, Suncity Rd, opposite Ratnadeep, Bandlaguda Jagir, Hyderabad, Telangana 500091
          </address>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h6 className="font-bold mb-2">Phone Number</h6>
          <p className="mb-4 text-sm tracking-wider">+91 9100032301</p>
        </div>
        <div className="px-4 md:w-1/4 md:ml-auto mt-4  sm:mt-4 md:mt-0">
          <Link href={"/contact-us"} className="flex items-center justify-center">
          <button className="bg-gradient-to-t from-[#4a208a] to-[#13012e] border border-[#8a45f2] text-white font-normal  text-sm py-2 px-4 rounded-lg shadow-custom">
            <span className="tracking-wider">Lets Talk <i className="fa fa-arrow-right text-sm ml-1" aria-hidden="true"></i></span>
          </button>
          </Link>
        </div>
      </div>
      <div className="text-center">Copyright © 2025 BixelTek IT And Digital Marketing Agency</div>
    </div>
  </footer>;
};
