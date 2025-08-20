import Image from "next/image";
import semrush from "@/assets/629a40b63e59ee069da94c81.png";
import seranking from "@/assets/SERanking.png";
import looker from "@/assets/Looker_6f803d7fdc.webp";
import googleadslogo from "@/assets/6929233_google ads_logo_icon.png";
import searchengineoptimizationlogo from "@/assets/1000174561.png";
import nextjsicon from "@/assets/icons8-nextjs-96.png";
import reactksicon from "@/assets/1174949_js_react js_logo_react_react native_icon.png";
import shoppingads from '@/assets/645a617a7f00617222c630ee_6452937893cd84e81e81c96e_google_shopping_icon.png'

const topRow = [
  { src: semrush, alt: "Semrush" },
  { src: seranking, alt: "SE Ranking" },
  { src: looker, alt: "Looker Studio" },
  { src: googleadslogo, alt: "WordPress" },
];

const bottomRow = [
  { src: shoppingads, alt: "Elementor" },
  { src: nextjsicon, alt: "Next.js" },
  { src: reactksicon, alt: "React.js" },
];

const TechStackSection = () => {
  return (
    <section className="bg-[#131313] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-6xl font-bold text-white">
            The <span className="text-blue-500">Tech Stack</span> Behind Profitable Google Ads
          </h2>
          <p className="text-gray-100 leading-relaxed max-w-lg">
            Our campaigns run on a proven stack of tools and technologies. From
            analytics to creative optimization, every component is designed to
            maximize ROI and scale profitably.
          </p>
          <button className="px-7 py-3 rounded-2xl bg-blue-500 text-white font-semibold text-sm shadow-lg hover:bg-blue-600 transition">
            Explore Full Stack
          </button>
        </div>

        {/* RIGHT SIDE GRID */}
        <div className="flex flex-col items-center overflow-hidden gap-6">
          {/* Top Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-6">
            {topRow.map((tool, index) => (
              <div
                key={index}
                className="bg-black border-2 border-blue-800 rounded-2xl flex items-center justify-center h-24 w-24"
              >
                <Image
                  src={tool.src}
                  alt={tool.alt}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-6">
            {bottomRow.map((tool, index) => (
              <div
                key={index}
                className="bg-black border-2 border-blue-800 rounded-2xl flex items-center justify-center h-24 w-24"
              >
                <Image
                  src={tool.src}
                  alt={tool.alt}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;
