"use client";
import { useState } from "react";

interface Tab {
    time: string;
    title: string;
    steps: string[];
}

const tabs: Tab[] = [
    {
        title: "Foundation & Setup",
        time: "1 Month",
        steps: [
            "Content Buckets Creation - Define key content themes (educate, inspire, entertain) that align with brand goals.",
            "Profile Optimization - Ensure all social media profiles are complete, visually cohesive, and aligned with brand messaging.",
            "Ideation - Generate content ideas that resonate with each content bucket, targeting specific audience segments.",
            "Content Creation (Posts & Stories) -Compile and organize creative assets for upcoming ads.",
            "Captions - Craft engaging, on-brand captions that drive interaction and align with platform best practices.",
            "Template Creation - Design reusable content templates for consistency across posts, stories, and other formats.",
        ],
    },
    {
        title: "Execution & Analysis",
        time: "2 Months",
        steps: [
            "Content Posting - Begin regular posting, maintaining a consistent schedule based on the media plan.",
            "Content Tracking - Track performance metrics (reach, engagement, clicks) for each post to gauge effectiveness.",
            "Engagement Metrics Analysis - Analyze engagement data to understand what resonates most with the audience.",
        ],
    },
    {
        title: "Optimization & Reporting",
        time: "3 Months",
        steps: [
            "Content Reporting - Compile monthly reports, highlighting performance insights and key takeaways for the client.",
            "Content Optimization - Use insights to refine content strategy—adjust content types, posting frequency, and topics based on what&apos;s working.",
            "Process Refinement - Make iterative improvements to the workflow based on results and feedback.",
        ],
    },
];

const SocialMediaTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <section className="pt-6 pb-20 px-6 md:px-20">
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
                            <p className="text-xl font-sofiasanscondensed">{tab.time}</p>
                            <p className="text-lg ">{tab.title}</p>
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

export default SocialMediaTabs;
