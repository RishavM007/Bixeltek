import Image from "next/image";
import semrush from "@/assets/629a40b63e59ee069da94c81.png";
import seranking from "@/assets/SERanking.png";
import looker from "@/assets/Looker_6f803d7fdc.webp";
import googleadslogo from "@/assets/6929233_google ads_logo_icon.png";
import nextjsicon from "@/assets/icons8-nextjs-96.png";
import reactksicon from "@/assets/1174949_js_react js_logo_react_react native_icon.png";
import shoppingads from "@/assets/645a617a7f00617222c630ee_6452937893cd84e81e81c96e_google_shopping_icon.png";

const topRow = [
  { src: semrush, alt: "Semrush" },
  { src: seranking, alt: "SE Ranking" },
  { src: looker, alt: "Looker Studio" },
  { src: googleadslogo, alt: "Google Ads" },
];

const bottomRow = [
  { src: shoppingads, alt: "Shopping Ads" },
  { src: nextjsicon, alt: "Next.js" },
  { src: reactksicon, alt: "React.js" },
];

const TechStackSection = () => {
  return (
    <section className="bg-[#131313] py-12 md:py-20 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
            The <span className="text-blue-500">Tech Stack</span> Behind <br className="hidden sm:block" /> Profitable Google Ads
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Our campaigns run on a proven stack of tools and technologies. From
            analytics to creative optimization, every component is designed to
            maximize ROI and scale profitably.
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg hover:bg-blue-600 transition duration-300">
            Explore Full Stack
          </button>
        </div>

        {/* RIGHT SIDE GRID */}
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
          {/* Top Row */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6">
            {topRow.map((tool, index) => (
              <div
                key={index}
                className="bg-black border border-blue-800 rounded-2xl flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={tool.src}
                  alt={tool.alt}
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6">
            {bottomRow.map((tool, index) => (
              <div
                key={index}
                className="bg-black border border-blue-800 rounded-2xl flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={tool.src}
                  alt={tool.alt}
                  className="h-10 sm:h-12 w-auto object-contain"
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
