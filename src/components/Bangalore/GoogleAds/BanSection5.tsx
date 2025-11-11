"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Eye,
  RefreshCw,
  PlayCircle,
  Zap,
  Target
} from "lucide-react";

const BangaloreGoogleAdsCampaigns = () => {
  const campaigns = [
    {
      icon: Search,
      title: "Search Ads",
      description: "Appear at the top of Google results when customers are ready to buy.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Eye,
      title: "Display Ads",
      description: "Build awareness across Google's display network and local websites.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: RefreshCw,
      title: "Remarketing Ads",
      description: "Reconnect with users who previously visited your site.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: PlayCircle,
      title: "YouTube Video Ads",
      description: "Capture attention through visual storytelling.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Performance Max Campaigns",
      description: "Unified automation powered by Google AI.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Target,
      title: "Shopping Ads",
      description: "Showcase products directly in search results with pricing and images.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Types of <span className="text-blue-600">Google Ads Campaigns</span> We Manage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each campaign type is built around conversion objectives and tied directly to your ROI goals.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {campaigns.map((campaign) => (
            <motion.div
              key={campaign.title}
              variants={itemVariants}
              className="relative rounded-2xl p-10 border border-gray-200 overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-xl h-full"
            >
              {/* Animated Background coming from bottom */}
              <div
                className={`absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t ${campaign.color} rounded-b-2xl 
                group-hover:h-full group-hover:rounded-2xl transition-all duration-500 ease-out`}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300
                  ${campaign.color.includes('blue') ? 'bg-blue-100 group-hover:bg-white/20' :
                    campaign.color.includes('green') ? 'bg-green-100 group-hover:bg-white/20' :
                    campaign.color.includes('red') ? 'bg-red-100 group-hover:bg-white/20' :
                    campaign.color.includes('purple') ? 'bg-purple-100 group-hover:bg-white/20' :
                    campaign.color.includes('yellow') ? 'bg-yellow-100 group-hover:bg-white/20' :
                    'bg-indigo-100 group-hover:bg-white/20'}`}>
                  <campaign.icon className={`w-6 h-6 transition-colors duration-300
                    ${campaign.color.includes('blue') ? 'text-blue-600 group-hover:text-white' :
                      campaign.color.includes('green') ? 'text-green-600 group-hover:text-white' :
                      campaign.color.includes('red') ? 'text-red-600 group-hover:text-white' :
                      campaign.color.includes('purple') ? 'text-purple-600 group-hover:text-white' :
                      campaign.color.includes('yellow') ? 'text-yellow-600 group-hover:text-white' :
                      'text-indigo-600 group-hover:text-white'}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors duration-300 flex-grow">
                  {campaign.description}
                </p>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300 pointer-events-none z-20" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Ready to launch high-converting Google Ads campaigns?
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Free Campaign Strategy
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BangaloreGoogleAdsCampaigns;