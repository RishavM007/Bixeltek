"use client";
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiChevronDown, HiMenu, HiX } from 'react-icons/hi';
import { link } from 'fs';

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const posts = [

    {
      id: 1,
      title: "Tumblewash Case Study",
      description: "Learn essential steps to begin your journey in the digital marketing world effectively.",
      link: "/casestudies-bixeltek/Tumblewash-Casestudy",
      glowcolor: "bg-purple-500",
    },
    {
      id: 2,
      title: "Eazy Bike Repair Case Study",
      description: "Learn essential steps to begin your journey in the digital marketing world effectively.",
      link: "/casestudies-bixeltek/google-ads-case-study-bike-repair-hyderabad",
      glowcolor: "bg-purple-500",
    },
    {
      id: 3,
      title: "Digital Marketing for Dentists",
      description: "Learn essential steps to begin your journey in the digital marketing world effectively.",
      link: "/casestudies-bixeltek/digital-marketing-for-dentists-case-study",
      glowcolor: "bg-purple-500",
    },

  ];

  return (
    <header className="px-3 py-5  max-w-[90%] mx-auto sticky top-0 z-[60]">
      <div className="container bg-black flex justify-between items-center border-white/15 border-solid border-2 rounded-xl shadow-purple-custom backdrop:blur-3xl">
        <div className="text-white py-4 md:py-6 xl:py-3">
          <Link href={"/"}>
            <Image src='/BIXELTEKLOGO.png'   width={100} height={40} alt="Bixeltek Logo" className='h-7 w-auto' />
          </Link>
        </div>
        <button className="xl:hidden text-white text-3xl" onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="fixed top-0 right-0 h-full w-full bg-black shadow-lg p-6 z-50 xl:hidden"
        >

          <button className="absolute top-4 right-4 text-white text-3xl" onClick={toggleMenu}>
            <HiX />
          </button>
          <nav className="mt-10">

            <ul className="text-white text-xl md:text-2xl font-sofiasanscondensed space-y-4">
              <li><Link href="/" className="block py-2 px-4 hover:bg-purple-600  rounded">Home</Link></li>
              <li>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex justify-between w-full py-2 px-4 hover:bg-purple-600 rounded">
                  Our Services <HiChevronDown className="text-xl md:text-2xl" />
                </button>
                {isDropdownOpen && (
                  <motion.ul initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="ml-4 text-lg md:text-xl space-y-2">
                    <li><Link href="/google-ads-agency-hyderabad" className="block py-2 px-4 hover:bg-gray-700 rounded">Google Ads Management</Link></li>
                    <li><Link href="/seo-agency-hyderabad" className="block py-2 px-4 hover:bg-gray-700 rounded">SEO</Link></li>
                    <li><Link href="/social-media-marketing-agency-hyderabad" className="block py-2 px-4 hover:bg-gray-700 rounded">Social Media Management</Link></li>
                    <li><Link href="/web-design-services-hyderabad" className="block py-2 px-4 hover:bg-gray-700 rounded">Web Development</Link></li>
                    <li><Link href="/web-dev-ad" className="block py-2 px-4 hover:bg-gray-700 rounded">Web Design</Link></li>
                    {/* <li><Link href="/digitalmarketing" className="block py-2 px-4 hover:bg-gray-700 rounded">Digital Marketing</Link></li> */}
                  </motion.ul>
                )}
              </li>
              <li><Link href="/industries" className="block py-2 px-4 hover:bg-purple-600 rounded">Industries</Link></li>
              <li><Link href="/casestudies-bixeltek/Tumblewash-Casestudy" className="block py-2 px-4 hover:bg-purple-600 rounded">Case Studies</Link></li>
              <li><Link href="/blog" className="block py-2 px-4 hover:bg-purple-600 rounded">Blog</Link></li>
              <li><Link href="/about-us" className="block py-2 px-4 hover:bg-purple-600 rounded">About Us</Link></li>
              <li><Link href="/contact-us" className="block py-2 px-4 hover:bg-purple-600 rounded">Contact Us</Link></li>
            </ul>
            <div className=" justify-center  items-center gap-5 py-4">
              <a href="tel:+919100032301">
                <button className="bg-gradient-to-t  from-[#4a208a] to-[#13012e] border border-[#8a45f2] text-white font-normal text-sm py-2 px-4 rounded-lg shadow-custom">
                  <span>Talk to a Specialist</span>
                </button>
              </a>
            </div>

          </nav>
        </motion.div>
        <div className="hidden xl:flex text-[17px] tracking-widest">
          <nav className="flex items-stretch">
            <ul className="flex gap-8 h-auto font-sofiasanscondensed font-normal tracking-widest">
              <li className="flex items-center py-7">
                <Link href="/" className="text-white/70 hover:text-white transition">
                  Home
                </Link>
              </li>

              {/* Our Services Dropdown */}
              <li
                className="relative flex items-center py-7"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a href="#" className="text-white/70 hover:text-white transition flex items-center">
                  Our Services <HiChevronDown className="ml-1 text-xs" />
                </a>

                {/* Dropdown Wrapper */}
                <div className={`absolute top-full left-1/2 -translate-x-[32%] w-[1340px] bg-white rounded-b-2xl shadow-lg py-4 transition-all duration-300 ${isDropdownOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={isDropdownOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-between gap-6 font-sofiasanscondensed text-[16px]"
                  >
                    <div className="w-1/2">
                      <h3 className="text-lg font-semibold px-4 text-[#670ef7]">What we offer</h3>
                      <div className="grid grid-cols-2 gap-4 px-4">
                        <ul>
                          <li>
                            <Link href="/google-ads-agency-hyderabad" className="block hover:bg-[#f5f3ff] p-3 rounded-lg transition">
                              <h3 className="text-lg font-semibold text-black">Google Ads Management</h3>
                              <p className="text-sm text-gray-500">Optimize and manage Google Ads campaigns effectively.</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/seo-agency-hyderabad" className="block hover:bg-[#f5f3ff] p-3 rounded-lg transition">
                              <h3 className="text-lg font-semibold text-black">SEO</h3>
                              <p className="text-sm text-gray-500">Improve your website ranking and visibility.</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/social-media-marketing-agency-hyderabad" className="block hover:bg-[#f5f3ff] p-3 rounded-lg transition">
                              <h3 className="text-lg font-semibold text-black">Social Media Management</h3>
                              <p className="text-sm text-gray-500">Enhance your online presence with expert strategies.</p>
                            </Link>
                          </li>
                        </ul>
                        <ul>
                          {/* <li>
                            <Link href="/services/service2" className="block hover:bg-[#f5f3ff] p-3 rounded-lg transition">
                              <h3 className="text-lg font-semibold text-black">Youtube Ads Management</h3>
                              <p className="text-sm text-gray-500">Reach more audience with tailored video ads.</p>
                            </Link>
                          </li> */}
                          <li>
                            <Link href="/web-design-services-hyderabad" className="block hover:bg-[#f5f3ff] p-3 rounded-lg transition">
                              <h3 className="text-lg font-semibold text-black">Web Development</h3>
                              <p className="text-sm text-gray-500">Build scalable and modern web solutions.</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/web-dev-ad" className="block hover:bg-[#f5f3ff] p-3 rounded-lg transition">
                              <h3 className="text-lg font-semibold text-black">Web Design</h3>
                              <p className="text-sm text-gray-500">Build scalable and modern web solutions.</p>
                            </Link>
                          </li>
                          {/* <li>
                            <Link href="/digitalmarketing" className="block hover:bg-[#f5f3ff] p-3 rounded-lg transition">
                              <h3 className="text-lg font-semibold text-black">Digital Marketing</h3>
                              <p className="text-sm text-gray-500">Comprehensive marketing strategies for growth.</p>
                            </Link>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="w-1/2 border-l border-gray-300 pl-6">
                      <h3 className="text-lg font-semibold text-[#670ef7]">Case Studies</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <ul>
                          {posts.slice(0, Math.ceil(posts.length / 2)).map((post) => (
                            <li key={post.id} className="hover:text-[#670ef7] transition text-[17px] p-2 cursor-pointer">
                              <Link href={`${post.link}`}>
                                {post.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <ul>
                          {posts.slice(Math.ceil(posts.length / 2)).map((post) => (
                            <li key={post.id} className="hover:text-[#670ef7] transition text-[17px] p-2 cursor-pointer">
                              <Link href={`${post.link}`}>
                                {post.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </li>
              <li className="flex items-center py-7">
                <Link href="/industries" className="text-white/70 hover:text-white transition">
                  Industries
                </Link>
              </li>
              <li className="relative group py-7">
                <div className="flex items-center text-white/70 hover:text-white transition cursor-pointer">
                  Case Studies <HiChevronDown className="ml-1 text-xs" />
                </div>

                <ul className="absolute top-full -left-7 mt-0 bg-white rounded-b-md shadow-lg hidden group-hover:block z-50 min-w-[200px]">
                  <li>
                    <Link
                      href="/casestudies-bixeltek/Tumblewash-Casestudy"
                      className="block px-4 py-2 text-black hover:bg-[#670ef7] hover:text-white transition"
                    >
                      Tumblewash Case Study
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/casestudies-bixeltek/google-ads-case-study-bike-repair-hyderabad"
                      className="block px-4 py-2 text-black hover:bg-[#670ef7] hover:text-white transition"
                    >
                      Eazy Bike Repair Case Study
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/casestudies-bixeltek/digital-marketing-for-dentists-case-study"
                      className="block px-4 py-2 text-black hover:bg-[#670ef7] hover:text-white transition"
                    >
                      Dental Clinic Case Study
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="flex items-center py-7">
                <Link href="/blog" className="text-white/70 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li className="flex items-center py-7 lg:inline">
                <Link href='/about-us' className="text-white/70 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li className="flex items-center py-7 lg:inline">
                <Link href='/contact-us' className="text-white/70 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden xl:flex justify-center items-center gap-5 py-4">
          <a href="tel:+919100032301">
            <button className="bg-gradient-to-t from-[#4a208a] to-[#13012e] border border-[#8a45f2] text-white font-normal text-sm py-2 px-4 rounded-lg shadow-custom">
              <span>Talk to a Specialist</span>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};
