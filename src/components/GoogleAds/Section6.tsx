import { Globe, Building2, Landmark } from "lucide-react";
import googleadsimage from '@/assets/googleadsdash.png';
import Image from "next/image";
import Link from "next/link";

export default function GoogleAdsCostSection() {
  return (
    <div className="bg-[#131313] text-white md:py-16  font-poppins">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div className="pr-6 lg:pr-16 px-6 md:px-12 lg:px-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            What Does<br></br> <span className="text-blue-500">Google Ads Cost?</span>
          </h2>
          <p className="text-gray-100 mb-10 text-lg">
            Costs vary by country and industry, but what matters most is{" "}
            <span className="text-white font-semibold">ROI</span>.
          </p>

          {/* Country Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* India */}
            <div className="flex items-start gap-4 p-5 bg-gray-900/60 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <div className="bg-blue-600/20 text-blue-400 p-3 rounded-md flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">🇮🇳 India</h3>
                <p className="text-gray-100 text-sm">
                  ₹15–₹70 CPC (common for healthcare, education, and services)
                </p>
              </div>
            </div>

            {/* USA & Canada */}
            <div className="flex items-start gap-4 p-5 bg-gray-900/60 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <div className="bg-purple-600/20 text-purple-400 p-3 rounded-md flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">🇺🇸 USA & 🇨🇦 Canada</h3>
                <p className="text-gray-100 text-sm">
                  $5–$15 CPC (legal, healthcare, real estate dominate the
                  competition)
                </p>
              </div>
            </div>

            {/* Saudi Arabia */}
            <div className="flex items-start gap-4 p-5 bg-gray-900/60 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <div className="bg-green-600/20 text-green-400 p-3 rounded-md flex items-center justify-center">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">🇸🇦 Saudi Arabia</h3>
                <p className="text-gray-100 text-sm">
                  $1–$7 CPC (fast-growing competition with high scaling
                  potential)
                </p>
              </div>
            </div>

            {/* Placeholder (optional) */}
            <div className="flex items-start gap-4 p-5 bg-gray-900/60 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <div className="bg-pink-600/20 text-pink-400 p-3 rounded-md flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">More Regions</h3>
                <p className="text-gray-100 text-sm">
                  We customize CPC forecasting for every country and industry.
                </p>
              </div>
            </div>
          </div>

          {/* Extra Note */}
          <p className="text-gray-100 mt-10">
            Instead of chasing “cheap clicks,” we focus on{" "}
            <span className="text-white font-semibold">profitable campaigns</span>.  
            Whether you’re in dental healthcare in Canada or eCommerce in Saudi Arabia,  
            we align budgets with measurable business outcomes.
          </p>

          {/* CTA Banner */}
          <div className="mt-10 p-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl text-center shadow-lg">
            <h3 className="text-xl font-bold mb-3">
            Request a Custom Google Ads ROI Forecast
            </h3>
            <Link href={'#form'}>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              Get My Google Ads Audit
            </button>
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="rounded-l-2xl overflow-hidden shadow-lg lg:ml-auto lg:mr-0 lg:pr-0 mx-6 lg:mx-0 ">
          <Image
            src={googleadsimage}
            alt="Google Ads Costs"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
