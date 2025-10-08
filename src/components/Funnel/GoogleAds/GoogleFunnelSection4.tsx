"use client";
import Image from "next/image";
import auditImg from "@/assets/Google_Ads_reporting_tool_3da9e5455e.webp"; // <-- replace with your actual image

export default function FreeAuditSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-[98%] md:max-w-[85%] mx-auto px-6 flex flex-col md:flex-row items-center gap-5">
        {/* Image Left */}
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={auditImg}
            alt="Google Ads Audit"
            width={900}
            height={700}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Right */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Get a Free Google Ads Audit{" "}
            <span className="text-blue-500">(Worth $499)</span> — Yours, Free
          </h2>

          <p className="text-gray-200 leading-relaxed">
            Our experts will analyze your existing Google Ads account and deliver:
          </p>

          <ul className="text-gray-200 space-y-3 list-disc pl-6">
            <li>
              A detailed performance breakdown (CTR, CPC, Quality Score, ROI
              metrics)
            </li>
            <li>Keyword & audience insights for better targeting</li>
            <li>Budget reallocation suggestions to maximize ROI</li>
            <li>Competitor benchmarking & conversion rate insights</li>
          </ul>

          <p className="text-gray-100 italic">
            This isn’t a sales call — it’s a diagnostic session that gives you
            full control over your ad performance.
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="#form"
              className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white font-semibold text-lg py-3 px-8 rounded-full shadow-md"
            >
              Claim My Free Audit Now
            </a>
            <p className="text-blue-500 text-sm font-semibold mt-3">
              Only <span className="text-white font-semibold">10 free audits</span> available this month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
