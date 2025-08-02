'use client';
import { useEffect, useState } from "react";

const StepCards = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };

    checkScreenSize(); // initial check
    window.addEventListener("resize", checkScreenSize); // listen on resize

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative flex flex-col items-center md:items-start justify-center space-y-6 md:space-y-0">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={
            isDesktop
              ? {
                  transform: `translate(${i * 150}px, ${i * -20}px)`
                }
              : {}
          }
          className="relative z-10 p-10 rounded-xl bg-white border border-gray-400 w-72 transition-transform duration-500"
        >
          <div className="text-sm text-yellow-600 font-medium mb-1">
            0{i + 1} Step
          </div>
          <div className="text-2xl font-sofiasanscondensed font-semibold text-gray-900">
            {['Initial Consultation', 'Data Analysis', 'Strategy Development'][i]}
          </div>
          <p className="mt-2 text-sm text-gray-600">
            {[
              'Introduction between consultant and the client. Understand the client’s financial situation.',
              'Analyze cash flow, expenses, debts, assets, liabilities, and financial ratios. Identify potential risks.',
              'Work with the client to set short-term and long-term financial goals, retirement planning, debt.',
            ][i]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StepCards;
