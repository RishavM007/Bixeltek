"use client";
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiChevronDown, HiMenu, HiX } from 'react-icons/hi';
import { link } from 'fs';

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<keyof typeof locations>("canada");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const locations = {
    canada: {
      title: "Canada",
      link: "#",
      cities: [
        {
          name: "Toronto",
          link: "/toronto/digital-marketing",
          services: [
            { name: "Google Ads Management", link: "/toronto/google-ads-management" },
            { name: "Search Engine Optimisation", link: "/toronto/seo-services" },
            { name: "Web Design and Development", link: "/toronto/web-design" },
          ],
        },
        {
          name: "Vancouver",
          link: "#",
          services: [
            { name: "SEO Services in Vancouver", link: "#" },
          ],
        },
      ],
    },
    india: {
      title: "India",
      link: "#",
      cities: [
        {
          name: "Hyderabad",
          link: "/hyderabad",
          services: [
            { name: "Google Ads Management", link: "/google-ads-agency-hydeabad" },
            { name: "Search Engine Optimisation", link: "/seo-agency-hyderabad" },
            { name: "Web Design and Development", link: "/web-design-services-hyderabad" },
            { name: "Social Media Marketing", link: "/social-media-marketing-agency-hyderabad" },
          ],
        },
        {
          name: "Delhi",
          link: "#",
          services: [
            { name: "SEO Services in Delhi", link: "#" },
          ],
        },
        {
          name: "Bangalore",
          link: "#",
          services: [
            { name: "SEO Services in Bangalore", link: "#" },
          ],
        },
      ],
    },
    usa: {
      title: "United States",
      link: "#",
      cities: [
        {
          name: "New York",
          link: "#",
          services: [
            { name: "SEO Services in New York", link: "#" },
            { name: "Social Media Marketing", link: "#" },
          ],
        },
        {
          name: "Chicago",
          link: "#",
          services: [
            { name: "SEO Services in Chicago", link: "#" },
          ],
        },
      ],
    },
    uk: {
      title: "United Kingdom",
      link: "#",
      cities: [
        {
          name: "London",
          link: "#",
          services: [
            { name: "SEO Services in London", link: "#" },
            { name: "PPC in London", link: "#" },
          ],
        },
      ],
    },
    saudi: {
      title: "Saudi Arabia",
      link: "#",
      cities: [
        {
          name: "Riyadh",
          link: "#",
          services: [
            { name: "SEO Services in Riyadh", link: "#" },
            { name: "PPC in Riyadh", link: "#" },
          ],
        },
      ],
    },
    uae: {
      title: "United Arab Emirites",
      link: "#",
      cities: [
        {
          name: "Dubai",
          link: "#",
          services: [
            { name: "SEO Services in Dubai", link: "#" },
            { name: "PPC in Dubai", link: "#" },
          ],
        },
      ],
    },
  };

  const posts = [

    {
      id: 1,
      title: "Tumblewash Case Study",
      description: "Learn essential steps to begin your journey in the digital marketing world effectively.",
      link: "/case-studies/Tumblewash-Casestudy",
      glowcolor: "bg-purple-500",
    },
    {
      id: 2,
      title: "Eazy Bike Repair Case Study",
      description: "Learn essential steps to begin your journey in the digital marketing world effectively.",
      link: "/case-studies/google-ads-case-study-bike-repair-hyderabad",
      glowcolor: "bg-purple-500",
    },
    {
      id: 3,
      title: "Digital Marketing for Dentists",
      description: "Learn essential steps to begin your journey in the digital marketing world effectively.",
      link: "/case-studies/digital-marketing-for-dentists-case-study",
      glowcolor: "bg-purple-500",
    },
    // {
    //   id: 4,
    //   title: "View All",
    //   description: "Learn essential steps to begin your journey in the digital marketing world effectively.",
    //   link: "/casestudies-bixeltek",
    //   glowcolor: "bg-purple-500",
    // },

  ];

  return (
    <header className="px-3 py-5  max-w-[90%] mx-auto sticky top-0 z-[60]">
      <div className="container bg-black flex justify-between items-center border-white/15 border-solid border-2 rounded-xl shadow-purple-custom backdrop:blur-3xl">
        <div className="text-white py-4 md:py-6 xl:py-3">
          <Link href={"/"}>
            <Image src='/BIXELTEKLOGO.png' width={100} height={40} alt="Bixeltek Logo" className='h-7 w-auto' />
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
                  Our Solutions <HiChevronDown className="text-xl md:text-2xl" />
                </button>
                {isDropdownOpen && (
                  <motion.ul initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="ml-4 text-lg md:text-xl space-y-2">
                    <li><Link href="/services/google-ads" className="block py-2 px-4 hover:bg-gray-700 rounded">Google Ads Management</Link></li>
                    <li><Link href="/services/seo-services" className="block py-2 px-4 hover:bg-gray-700 rounded">SEO</Link></li>
                    <li><Link href="/social-media-marketing-agency-hyderabad" className="block py-2 px-4 hover:bg-gray-700 rounded">Social Media Management</Link></li>
                    <li><Link href="/services/web-design" className="block py-2 px-4 hover:bg-gray-700 rounded">Web Design and Development</Link></li>
                    {/* <li><Link href="/web-dev-ad" className="block py-2 px-4 hover:bg-gray-700 rounded">Web Design</Link></li> */}
                    {/* <li><Link href="/digitalmarketing" className="block py-2 px-4 hover:bg-gray-700 rounded">Digital Marketing</Link></li> */}
                  </motion.ul>
                )}
              </li>
              <li><Link href="/industries" className="block py-2 px-4 hover:bg-purple-600 rounded">Industries</Link></li>
              <li>
                <button onClick={() => { setIsDropdownOpen2(!isDropdownOpen2) }} className="flex justify-between w-full py-2 px-4 hover:bg-purple-600 rounded">Case Studies <HiChevronDown className="text-xl md:text-2xl" /></button>
                {isDropdownOpen2 && (
                  <motion.ul initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="ml-4 text-lg md:text-xl space-y-2">
                    <li><Link href="/case-studies/Tumblewash-Casestudy" className="block py-2 px-4 hover:bg-gray-700 rounded">Tumblewash-Casestudy</Link></li>
                    <li><Link href="/case-studies/google-ads-case-study-bike-repair-hyderabad" className="block py-2 px-4 hover:bg-gray-700 rounded">Eazy Bike Repair Case Study</Link></li>
                    <li><Link href="/case-studies/digital-marketing-for-dentists-case-study" className="block py-2 px-4 hover:bg-gray-700 rounded">Digital Marketing for Dentists</Link></li>
                  </motion.ul>
                )}
              </li>
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
                  Our Solutions <HiChevronDown className="ml-1 text-xs" />
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
                            <Link href="/services/google-ads" className="block hover:bg-[#f5f3ff] p-3 rounded-lg transition">
                              <h3 className="text-lg font-semibold text-black">Google Ads Management</h3>
                              <p className="text-sm text-gray-500">Optimize and manage Google Ads campaigns effectively.</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/seo-services" className="block hover:bg-[#f5f3ff] p-3 rounded-lg transition">
                              <h3 className="text-lg font-semibold text-black">Search Engine Optimization</h3>
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
                            <Link href="/services/web-design" className="block hover:bg-[#f5f3ff] p-3 rounded-lg transition">
                              <h3 className="text-lg font-semibold text-black">Web Design and Development</h3>
                              <p className="text-sm text-gray-500">Build scalable and modern web solutions.</p>
                            </Link>
                          </li>
                          {/* <li>
                            <Link href="/web-dev-ad" className="block hover:bg-[#f5f3ff] p-3 rounded-lg transition">
                              <h3 className="text-lg font-semibold text-black">Web Design</h3>
                              <p className="text-sm text-gray-500">Build scalable and modern web solutions.</p>
                            </Link>
                          </li> */}
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
              <li className="flex group relative items-center py-7">
                <Link href="/industries" className="text-white/70 hover:text-white transition">
                  Industries
                </Link>
                <ul className="absolute top-full -left-7 mt-0 bg-white rounded-b-md shadow-lg hidden group-hover:block z-50 min-w-[200px]">
                  <li>
                    <Link
                      href="/industries/dental-marketing"
                      className="block px-4 py-2 text-black hover:bg-[#670ef7] hover:rounded-b-md hover:text-white transition"
                    >
                      Dental Marketing
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="flex group relative items-center py-7">
                <Link href="#" className="text-white/70 hover:text-white transition">
                  Locations
                </Link>

                {/* Mega Menu */}
                <div className="absolute top-full -left-72 rounded-br-2xl  rounded-bl-2xl mt-0 bg-white shadow-lg  hidden group-hover:flex z-50 w-[900px] min-h-[350px]">

                  {/* Tabs (Countries) */}
                  <ul className="w-1/3 border-r border-gray-200 rounded-bl-2xl bg-neutral-950">
                    {Object.keys(locations).map((country) => (
                      <li
                        key={country}
                        onMouseEnter={() => setActiveTab(country as keyof typeof locations)}
                        className={`cursor-pointer px-4 py-3 font-semibold transition 
              ${activeTab === country ? "bg-purple-600 text-white" : "hover:bg-purple-100 text-white"}`}
                      >
                        <Link href={locations[country as keyof typeof locations].link}>
                          {locations[country as keyof typeof locations].title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Content (Cities & Services) */}
                  <div className="w-2/3 p-6">
                    <h3 className="text-xl font-bold text-purple-700 mb-4">
                      <Link href={locations[activeTab].link}>
                        {locations[activeTab].title}
                      </Link>
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      {locations[activeTab].cities.map((city) => (
                        <div key={city.name}>
                          <Link href={city.link} className="block font-semibold text-gray-800 hover:text-purple-600">
                            {city.name}
                          </Link>
                          <ul className="mt-2 space-y-1">
                            {city.services.map((service) => (
                              <li key={service.name}>
                                <Link href={service.link} className="text-sm text-gray-900 hover:text-purple-600">
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
