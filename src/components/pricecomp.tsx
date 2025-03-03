import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const PricingTable = () => {
  const data = [
    { category: "Ad Spends", plans: ["₹2,00,000 - ₹5,00,000", "₹5,00,000 - ₹8,00,000", "₹8,00,000+"] },
    { category: "Google / Youtube / Meta / Snapchat / Native Platforms", header: true },
    { category: "Creation of campaign & ad groups", plans: [true, true, true] },
    { category: "Keyword research & strategizing", plans: [true, true, true] },
    { category: "Sharing of all tracking codes", plans: [true, true, true] },
    { category: "Ad group & campaign optimization", plans: [true, true, true] },
    { category: "Reports", header: true },
    { category: "Weekly Reports", plans: [true, true, true], includesMetrics: true },
    { category: "Fortnightly Reports", plans: [true, true, true], includesMetrics: true },
    { category: "Monthly Reports", plans: [true, true, true], includesMetrics: true },
    { category: "Revenue Channel Wise", plans: [true, true, true] },
    { category: "Strategy for Coming Month/Quarter", plans: [true, true, true] },
    { category: "Creative", header: true },
    { category: "Ad Copies", plans: ["2 Videos - 1 Static", "3 Videos - 2 Statics", "As Per Requirement"] },
    { category: "Statics", plans: ["₹2,000 + GST", "₹2,000 + GST", "₹2,000 + GST"] },
    { category: "Videos*", plans: ["₹3,500 + GST", "₹3,500 + GST", "₹3,500 + GST"] },
  ];

  const reportMetrics = ["Impressions", "Clicks", "CPC", "CTR", "Conversion Rate", "Cost Per Conversion", "ROAS"];

  return (
    <section className="overflow-x-auto p-4">
      <h2 className="text-4xl text-white mb-4">Pricing Plans</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-transparent text-gray-200">
            <th className="p-3 text-left">Service</th>
            <th className="p-3 text-center">Basic</th>
            <th className="p-3 text-center">Standard</th>
            <th className="p-3 text-center">Premium</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            item.header ? (
              <tr key={index} className="bg-transparent text-white font-semibold">
                <td colSpan={4} className="p-3 text-left font-montaga text-3xl">{item.category}</td>
              </tr>
            ) : (
              <>
                <tr key={index} className="text-white text-lg font-sans">
                  <td className="p-3">{item.category}</td>
                  {item.plans && item.plans.map((plan, i) => (
                    <td key={i} className="p-3 text-center">
                      <div className="flex justify-center items-center h-full">
                        {plan === true ? <IoMdCheckmark className="text-blue-500 text-xl" /> : plan}
                      </div>
                    </td>
                  ))}
                </tr>
                
                {/* Add Report Metrics below each plan column when applicable */}
                {item.includesMetrics &&
                  reportMetrics.map((metric, metricIndex) => (
                    <tr key={`${index}-${metricIndex}`} className="text-white text-lg font-sans">
                      <td className="p-3 pl-6"></td>
                      <td className="p-3 text-center">{metric}</td>
                      <td className="p-3 text-center">✔</td>
                      <td className="p-3 text-center">✔</td>
                    </tr>
                  ))}
              </>
            )
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default PricingTable;
