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
            {['Project Kickoff', 'Design & Prototyping', 'Development & Deployment'][i]}
          </div>
          <p className="mt-2 text-sm text-gray-600">
            {[
              'Initial meeting with the client to understand project requirements, target audience, and core objectives.',
              'Create wireframes and design mockups using tools like Figma. Collaborate with the client for feedback and approval.',
              'Build the website using the chosen tech stack. Perform testing, optimize performance, and deploy to production.',
            ][i]}
          </p>

        </div>
      ))}
    </div>
  );
};

export default StepCards;
