import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";


const PricingTable = () => {
  const data = [
    { category: "No. of Transactions", plans: ["0-500", "500-1000", "1000+"] },
    { category: "Data Entry", plans: [true, true, true] },
    { category: "Reviews of Books", plans: [true, true, true] },
    { category: "Tax", header: true },
    { category: "GSTR1/3B Calculation & Filing", plans: [true, true, true] },
    { category: "GST2B Reconciliation", plans: [true, true, true] },
    { category: "TDS Calculation & Filing", plans: [true, true, true] },
    { category: "TDS 26AS Reconciliation", plans: [true, true, true] },
    { category: "Profession Tax Calculation & Filing", plans: [true, true, true] },
    { category: "Advance Tax Calculation", plans: [true, true, true] },
    { category: "MIS", header: true },
    { category: "Bifurcation of Sales", plans: [true, true, true] },
    { category: "Bifurcation of Expenses", plans: [true, true, true] },
    { category: "Balance Sheet", plans: [true, true, true] },
    { category: "Cash Flow Report", plans: [true, true, true] },
    { category: "Profit & Loss Statement", plans: [true, true, true] },
    { category: "Debtor & Creditor Ageing", plans: [true, true, true] },
    { category: "E-Commerce", header: true },
    { category: "E-commerce Reconciliation", plans: ["4 Platforms", "6-8 Platforms", "Unlimited"] },
    { category: "Admin", header: true },
    { category: "Vendor Payouts", plans: [true, true, true] },
    { category: "Sales Invoice Creation", plans: [true, true, true] },
  ];

  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full border-collapse ">
        <thead>
          <tr className="bg-transparent text-gray-200">
            <th className=" p-3 text-left">Service</th>
            <th className=" p-3">Start-Up</th>
            <th className=" p-3">Growing Business</th>
            <th className=" p-3">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) =>
            item.header ? (
              <tr key={index} className="bg-transparent text-white font-semibold">
                <td colSpan={4} className={` p-3  ${item.header?'text-left font-montaga text-3xl':'text-center'} `}>{item.category}</td>
              </tr>
            ) : (
              <tr key={index} className="text-white text-lg font-sans">
                <td className=" p-3">{item.category}</td>
                {item.plans && item.plans.map((plan, i) => (
                  <td key={i} className=" p-3 text-center">
                    <div className="flex justify-center items-center h-full">
                      {plan === true ? <IoMdCheckmark className="text-blue-500 text-xl" /> : plan}
                    </div>
                  </td>
                ))}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
