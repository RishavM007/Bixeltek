'use client';
import casestud1image from '@/assets/casestudy-1.jpg';
import Image from "next/image";
import { useState } from 'react';
import { motion } from 'framer-motion';

type ServiceProps = {
  service: boolean;
};

export const ServiceMegamenu: React.FC<ServiceProps> = ({ service }) => {
  const [isVisible, setIsVisible] = useState(false);

  const mouseEnter = () => {
    setIsVisible(true);
  };

  const mouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: service || isVisible ? 1 : 0,
        y: service || isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`relative ${
        service || isVisible ? 'visible' : 'hidden'
      } z-[60] top-[-20px] w-[95%] mx-auto shadow-purple-custom`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="absolute flex flex-row bg-black text-white w-full shadow-lg rounded-3xl">
        <div className="flex w-3/4 flex-row gap-8 px-8 py-14">
          <div className="flex-1 flex flex-wrap gap-4 font-sans">
            {/** Column 1 */}
            <div className="w-1/5">
              <h3 className="text-lg font-medium mb-4">Google Ads</h3>
              <ul>
                {['Pay per click-PPC', 'Backend Development', 'Startups', 'YT Ads'].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05, color: '#A855F7' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-sm py-2 cursor-pointer leading-8"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            {/** Column 2 */}
            <div className="w-1/5">
              <h3 className="text-lg font-medium mb-4">Social Media</h3>
              <ul>
                {['Marketing', 'Prototyping', 'Wireframing', 'Graphic Design'].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05, color: '#A855F7' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-sm py-2  cursor-pointer leading-8"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            {/** Column 3 */}
            <div className="w-1/5">
              <h3 className="text-lg font-medium mb-4">SEO Optimization</h3>
              <ul>
                {['SEO', 'Social Media Marketing', 'Content Marketing', 'Email Campaigns'].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05, color: '#A855F7' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-sm py-2  cursor-pointer leading-8"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            {/** Column 4 */}
            <div className="w-1/5">
              <h3 className="text-lg font-medium mb-4">Web Development</h3>
              <ul>
                {['Web Designing', 'App Development', 'Wordpress', 'Data Migration'].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05, color: '#A855F7' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-sm py-2  cursor-pointer leading-8"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/** Right Image Section */}
        <div className="w-1/2 flex flex-col bg-white items-start justify-center rounded-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mx-5"
          >
            <Image
              src={casestud1image}
              alt="Service Illustration"
              height={200}
              width={200}
              className="rounded-lg shadow-md mb-4"
            />
            <p className="text-lg font-light text-black">Our Services</p>
            <a href="#" className="text-purple-600 hover:underline font-light text-xs text-center">
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
