"use client";
import { Search, Monitor, ShoppingCart, Zap, MapPin, Youtube, Compass, Repeat } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder images – replace with your own
import searchImg from "@/assets/seachcamp.webp";
import displayImg from "@/assets/Loom-Google-Display-Blog.webp";
import shoppingImg from "@/assets/google-shopping-reviews-search.webp";
import pmaxImg from "@/assets/Loom-Insights-Google-Performance-Max.webp";
import lsaImg from "@/assets/google-local-service-ads.png";
import youtubeImg from "@/assets/youtube bumper ads.webp";
import discoveryImg from "@/assets/discovery-gif.gif";
import remarketingImg from "@/assets/remarketing-ads.jpg";

const campaigns = [
  {
    id: "search",
    title: "Search Campaigns",
    icon: <Search className="w-8 h-8 text-blue-600" />,
    image: searchImg,
    description:
      "Capture high-intent leads actively searching for your services in Mississauga. With precise keyword targeting, you appear exactly when customers are ready to buy.",
  },
  {
    id: "display",
    title: "Display Campaigns",
    icon: <Monitor className="w-8 h-8 text-purple-600" />,
    image: displayImg,
    description:
      "Build awareness and stay top-of-mind with banner and visual ads across millions of sites. Perfect for retargeting or broad reach.",
  },
  {
    id: "shopping",
    title: "Shopping Ads",
    icon: <ShoppingCart className="w-8 h-8 text-green-600" />,
    image: shoppingImg,
    description:
      "Showcase products directly in Google with images, pricing, and reviews. Drive immediate visibility and attract high-purchase intent traffic.",
  },
  {
    id: "performance-max",
    title: "Performance Max",
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    image: pmaxImg,
    description:
      "Harness Google’s AI across Search, YouTube, Display, Maps, and more. Smart budget allocation adapts in real-time for maximum ROI.",
  },
  {
    id: "lsa",
    title: "Local Service Ads (LSAs)",
    icon: <MapPin className="w-8 h-8 text-red-500" />,
    image: lsaImg,
    description:
      "Pay-per-lead ads with Google Screened badges for service providers. Build instant trust while only paying for real leads.",
  },
  {
    id: "youtube",
    title: "YouTube Video Campaigns",
    icon: <Youtube className="w-8 h-8 text-pink-600" />,
    image: youtubeImg,
    description:
      "Boost brand awareness with engaging video ads. From skippable to bumper ads, reach audiences with impactful storytelling.",
  },
  {
    id: "discovery",
    title: "Discovery Campaigns",
    icon: <Compass className="w-8 h-8 text-indigo-600" />,
    image: discoveryImg,
    description:
      "Reach audiences exploring Gmail, YouTube, and Google Discover. Eye-catching ads designed to spark curiosity and demand.",
  },
  {
    id: "remarketing",
    title: "Remarketing",
    icon: <Repeat className="w-8 h-8 text-orange-500" />,
    image: displayImg,
    description:
      "Re-engage past visitors with dynamic product ads, display banners, and video campaigns until they convert.",
  },
];

export default function GoogleAdsCampaignsCards() {
  return (
    <section className="pt-32 pb-20 bg-black">
      <div className="max-w-[85%] mx-auto px-6">
        {/* Section Header */}
        <h3 className="text-blue-600 text-sm font-semibold uppercase tracking-wide text-center">
          Google Ads Campaigns Tailored to Your Business Goals
        </h3>
        <h2 className="text-3xl md:text-6xl text-white font-bold mt-2 mb-12 text-center ">
          Not all campaigns are the same. <br /> <span className="text-blue-500">We choose the right ones to maximize ROI .</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {campaigns.map((campaign) => (
            <motion.div
              key={campaign.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <Image
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  
                  <h3 className="text-xl font-semibold text-gray-900">{campaign.title}</h3>
                </div>
                <p className="text-gray-600 font-poppins text-sm">{campaign.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <p className="mt-14 text-gray-100 text-lg md:text-xl max-w-3xl mx-auto text-center">
          We don’t just run ads—we tailor the campaign type to your funnel stage, audience, and industry for maximum ROI.
        </p>
      </div>
    </section>
  );
}
