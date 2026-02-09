// components/CMSProblemSection.js
import Image from 'next/image';
import { Check } from 'lucide-react';
import cmsImage from '@/assets/flat-content-management-system-illustrated.png'; // replace with your image path

export default function CMSProblemSection2() {
  const points = [
    "Slow load times and weak Core Web Vitals.",
    "Overreliance on plugins and page builders.",
    "Disorganized URL and taxonomy structures.",
    "Broken SEO fundamentals (duplicate titles, crawl waste, missing schema).",
    "Security gaps and version conflicts.",
    "Analytics and conversion tracking misfires."
  ];

  return (
    <section className="md:py-16 bg-transparent">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
        {/* Image Left */}
        <div className="lg:w-1/2 w-full">
          <Image
            src={cmsImage}
            alt="CMS Problems Illustration"
            width={700}
            height={500}
          />
        </div>

        {/* Content Right */}
        <div className="lg:w-1/2 md:w-[90%]">
          <h2 className="text-3xl md:text-5xl font-medium mb-6">
            <span className='text-blue-500'>The Problem</span>  — Why Most CMS Websites Underperform
          </h2>
          <p className="mb-6 text-gray-700">
            Most websites fail not because of poor design — but because of poor infrastructure. We’ve audited hundreds of websites across five continents, and the same issues repeat:
          </p>

          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-blue-500 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-700">
            These issues compound over time, eroding SEO performance, increasing ad costs, and limiting scalability. A solid CMS rebuild doesn’t just fix technical problems — it restores control to your marketing and leadership teams.
          </p>
        </div>
      </div>
    </section>
  );
}
