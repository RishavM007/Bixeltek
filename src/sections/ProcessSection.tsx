"use client";
import { useState } from "react";

interface Tab {
    title: string;
    steps: string[];
}

const tabs: Tab[] = [
    {
        title: "Setup & Launch",
        steps: [
            "Get All Access - Secure necessary access to platforms and tools.",
            "Website Audit - Conduct a detailed audit to identify areas for improvement.",
            "Campaign Structure - Define a world-class strategy & campaign structure.",
            "Creative Structure - Compile and organize creative assets for upcoming ads.",
            "Launch - Activate ad campaigns as per the defined structure.",
        ],
    },
    {
        title: "Fine-Tuning",
        steps: [
            "Performance Tracking - Monitor key metrics and performance.",
            "A/B Testing - Experiment with different strategies for better results.",
            "Content Optimization - Refine messaging for higher engagement.",
            "Ad Placement - Optimize placements for maximum reach.",
        ],
    },
    {
        title: "Strategy & Scaling",
        steps: [
            "Retargeting - Implement advanced audience retargeting strategies.",
            "Scaling Campaigns - Expand successful campaigns for higher ROI.",
            "Automation - Set up automated workflows for efficiency.",
            "Advanced Insights - Leverage data analytics for precise decision-making.",
        ],
    },
];

const ProcessSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <section className="py-6 px-6 md:px-20">
            <h2 className="text-6xl font-sofiasanscondensed font-bold text-center md:text-left mb-10">
                Our Process of Work
            </h2>
            <p className="text-gray-600 max-w-2xl text-center md:text-left mb-8">
                Achieve measurable growth with our phased approach. Each step optimizes
                your marketing strategy, driving precision and results from start to
                finish.
            </p>

            <div className="grid md:grid-cols-2 gap-16">
                {/* Tabs on the left */}
                <div className="flex flex-col space-y-4 w-fit">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`py-5 px-10 font-sofiasanscondensed text-xl text-left font-medium  rounded-lg transition ${activeTab === index && index === 0
                                    ? "bg-blue-600 text-white"
                                    : activeTab === index && index === 1
                                        ? "bg-[#DB4437] text-white" : index === 2 && activeTab === index
                                            ? "bg-[#FBBC05] text-white" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* Timeline on the right */}
                <div className="relative ">
                    {tabs[activeTab].steps.map((step, index) => (
                        <div key={index} className="relative flex items-start mb-10">
                            {/* Timeline Circle */}
                            <div
                                className={`absolute left-0 w-10 h-10 flex items-center justify-center rounded-full font-bold text-white font-sofiasanscondensed text-lg transition`}
                                style={{
                                    backgroundColor:
                                        activeTab === 0
                                            ? "#2563EB" 
                                            : activeTab === 1
                                                ? "#DB4437" 
                                                : activeTab === 2
                                                    ? "#FBBC05" 
                                                    : "#374151", 
                                }}
                            >
                                {index + 1}
                            </div>
                            {/* Dotted Line */}
                            {index !== tabs[activeTab].steps.length - 1 && (
                                <div className="absolute border-r border-gray-800 border-dashed left-[19px] top-10 w-[2px] h-20 "></div>
                            )}
                            {/* Step Text */}
                            <div className="ml-12">
                                <p className="font-semibold font-sofiasanscondensed text-2xl">{step.split(" - ")[0]}</p>
                                <p className="text-gray-600">{step.split(" - ")[1]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;




