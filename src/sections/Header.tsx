"use client";
import Image from 'next/image';
import Bixeltek from '@/assets/BIXELTEKLOGO.png';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiChevronDown, HiMenu, HiX } from 'react-icons/hi';

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const posts = [

    {
      id: 1,
      title: "How to Get Started with Digital Marketing",
      description: "Learn essential steps to begin your journey in the digital marketing world effectively.",
      glowcolor: "bg-purple-500",
    },
    {
      id: 2,
      title: "Top 5 SEO Strategies",
      description: "Boost your website traffic with these proven search engine optimization techniques.",
      glowcolor: "bg-blue-500",
    },
    {
      id: 3,
      title: "The Power of Google Ads",
      description: "Discover how Google Ads can transform your marketing campaigns and increase ROI.",
      glowcolor: "bg-green-500",
    },
    {
      id: 4,
      title: "Social Media Growth Hacks",
      description: "Quick and effective tips to expand your brands presence on social platforms.",
      glowcolor: "bg-yellow-500",
    },
    {
      id: 5,
      title: "AI in Digital Marketing",
      description: "Explore how AI tools revolutionize customer targeting and campaign performance.",
      glowcolor: "bg-fuchsia-500",
    },
    {
      id: 6,
      title: "Email Marketing Best Practices",
      description: "Enhance your email campaigns with proven techniques for higher engagement and conversions.",
      glowcolor: "bg-emerald-500",
    },
    {
      id: 7,
      title: "Content Marketing Made Simple",
      description: "Master the art of creating content that captivates and converts your audience.",
      glowcolor: "bg-sky-500",
    },
    {
      id: 8,
      title: "Video Marketing Trends 2024",
      description: "Stay ahead with these emerging trends in video content creation and promotion.",
      glowcolor: "bg-rose-500",
    },
    {
      id: 9,
      title: "Analytics for Better Marketing",
      description: "Understand key metrics to optimize and refine your marketing strategies effectively.",
      glowcolor: "bg-fuchsia-500",
    },
    {
      id: 10,
      title: "Personalizing Customer Experiences",
      description: "Use personalization techniques to build stronger connections and increase customer loyalty.",
      glowcolor: "bg-purple-500",
    }

  ];

  return (
    <header className="px-3 py-5 max-w-7xl mx-auto sticky top-0 z-[60]">
      <div className="container bg-black flex justify-between items-center border-white/15 border-solid border-2 rounded-xl shadow-purple-custom backdrop:blur-3xl">
        <div className="text-white py-3">
          <Link href={"/"}>
            <Image src={Bixeltek} alt="Bixeltek Logo" className='h-7 w-auto' />
          </Link>
        </div>
        <button className="md:hidden text-white text-3xl" onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="fixed top-0 right-0 h-full w-full bg-black shadow-lg p-6 z-50 md:hidden"
        >

          <button className="absolute top-4 right-4 text-white text-3xl" onClick={toggleMenu}>
            <HiX />
          </button>
          <nav className="mt-10">

            <ul className="text-white text-xl font-sofiasanscondensed space-y-4">
              <li><Link href="/" className="block py-2 px-4 hover:bg-purple-600  rounded">Home</Link></li>
              <li>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex justify-between w-full py-2 px-4 hover:bg-purple-600 rounded">
                  Our Services <HiChevronDown className="text-xl" />
                </button>
                {isDropdownOpen && (
                  <motion.ul initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="ml-4 text-lg space-y-2">
                    <li><Link href="/google-ads-agency-hyderabad" className="block py-2 px-4 hover:bg-gray-700 rounded">Google Ads Management</Link></li>
                    <li><Link href="/seo-agency-hyderabad" className="block py-2 px-4 hover:bg-gray-700 rounded">SEO</Link></li>
                    <li><Link href="/social-media-marketing-agency-hyderabad" className="block py-2 px-4 hover:bg-gray-700 rounded">Social Media Management</Link></li>
                    <li><Link href="/web-design-services-hyderabad" className="block py-2 px-4 hover:bg-gray-700 rounded">Web Development</Link></li>
                    {/* <li><Link href="/digitalmarketing" className="block py-2 px-4 hover:bg-gray-700 rounded">Digital Marketing</Link></li> */}
                  </motion.ul>
                )}
              </li>
              <li><Link href="/industries" className="block py-2 px-4 hover:bg-purple-600 rounded">Industries</Link></li>
              {/* <li><Link href="/" className="block py-2 px-4 hover:bg-purple-600 rounded">Case Studies</Link></li>
              <li><Link href="/" className="block py-2 px-4 hover:bg-purple-600 rounded">Blog</Link></li> */}
              <li><Link href="/about" className="block py-2 px-4 hover:bg-purple-600 rounded">About Us</Link></li>
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
        <div className="hidden md:flex text-[17px] tracking-widest">
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
                <div className={`absolute top-full left-1/2 -translate-x-[37%] w-[1240px] bg-white rounded-b-2xl shadow-lg py-4 transition-all duration-300 ${isDropdownOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}>
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
                      <h3 className="text-lg font-semibold text-[#670ef7]">Case Studies <span className='text-red-600'>(Coming Soon)</span></h3>
                      <div className="grid grid-cols-2 gap-4">
                        <ul>
                          {posts.slice(0, Math.ceil(posts.length / 2)).map((post) => (
                            <li key={post.id} className="hover:text-[#670ef7] transition text-[17px] p-2 cursor-pointer">
                              {post.title}
                            </li>
                          ))}
                        </ul>
                        <ul>
                          {posts.slice(Math.ceil(posts.length / 2)).map((post) => (
                            <li key={post.id} className="hover:text-[#670ef7] transition text-[17px] p-2 cursor-pointer">
                              {post.title}
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
              <li className="flex items-center py-7">
                <Link href="" className="text-white/70 hover:text-white transition flex items-center">
                  Case Studies <HiChevronDown className="ml-1 text-xs" />
                </Link>
              </li>
              <li className="flex items-center py-7">
                <Link href="/blog" className="text-white/70 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li className="flex items-center py-7 lg:inline">
                <Link href='/about' className="text-white/70 hover:text-white transition">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:flex justify-center items-center gap-5 py-4">
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
