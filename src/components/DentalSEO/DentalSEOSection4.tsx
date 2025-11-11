import React from 'react';
import { 
  FaGoogle, 
  FaRobot, 
  FaGlobeAmericas, 
  FaChartLine, 
  FaSync, 
  FaDatabase,
  FaBolt,
  FaShieldAlt,
  FaChartBar
} from 'react-icons/fa';

interface FeatureCard {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureGridDental = () => {
  const features: FeatureCard[] = [
    {
      id: 1,
      icon: <FaGoogle className="text-white text-xl" />,
      title: 'Google Partner Certified',
      description: 'We possess deep expertise in Google\'s systems and algorithms, going beyond surface-level knowledge to deliver comprehensive SEO solutions that drive measurable results.'
    },
    {
      id: 2,
      icon: <FaRobot className="text-white text-xl" />,
      title: 'AI-Ready SEO Framework',
      description: 'Every website we build is optimized for Search Generative Experience, ensuring your content aligns with AI-driven search logic and future-proofs your digital presence.'
    },
    {
      id: 3,
      icon: <FaGlobeAmericas className="text-white text-xl" />,
      title: 'Cross-Geo Expertise',
      description: 'With successful dental clients across Hyderabad, Brampton, Riyadh, and Seattle, we\'ve mastered local search domination strategies that work across diverse geographical markets.'
    },
    {
      id: 4,
      icon: <FaChartLine className="text-white text-xl" />,
      title: 'Conversion Engineering',
      description: 'We go beyond tracking mere traffic by meticulously monitoring every call, form submission, and WhatsApp message to optimize for actual business conversions and ROI.'
    },
    {
      id: 5,
      icon: <FaSync className="text-white text-xl" />,
      title: 'Full-Funnel Integration',
      description: 'Seamlessly integrate SEO, content marketing, and advanced analytics under one unified performance framework that covers the entire customer journey from awareness to conversion.'
    },
    {
      id: 6,
      icon: <FaDatabase className="text-white text-xl" />,
      title: 'Data-Driven Strategy',
      description: 'Our approach is rooted in comprehensive data analysis and market research, ensuring every decision is backed by concrete insights and performance metrics.'
    },
  
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 ">
            What Makes <br /> <span className='text-red-600'>Bixeltek Different</span> 
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Innovative solutions that drive real results for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200 p-6"
            >
              {/* Background glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover border animation */}
                {/* <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300 ease-out" /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGridDental;