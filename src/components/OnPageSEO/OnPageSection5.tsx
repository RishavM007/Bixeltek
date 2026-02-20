"use client";
import Image from "next/image";
import velocityImg from "@/assets/national-seo-services.png";

export default function VisibilityToVelocity() {
    return (
        <section className="relative  px-6 lg:px-20 pt-10 md:py-24 bg-black">
            <div className="lg:max-w-[85%] mx-auto flex flex-col-reverse  lg:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="lg:w-1/2 flex flex-col items-start space-y-6 text-white">
                    <h2 className="text-3xl md:text-6xl font-semibold leading-tight">
                        From <span className="text-blue-600">Visibility</span> to{" "}
                        <span className="text-blue-600">Velocity</span>
                    </h2>

                    <p className="text-lg text-gray-100 max-w-lg">
                        When On-Page SEO is engineered properly, growth isn’t just visible —
                        it accelerates.
                    </p>

                    {/* Quantitative Outcomes */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-blue-500 mb-3">
                            Quantitative Outcomes
                        </h3>
                        <ul className="space-y-2 text-gray-100">
                            <li>+25–60% increase in organic CTR within six weeks.</li>
                            <li>+40% average time-on-page improvement.</li>
                            <li>+20% conversion lift due to clearer UX and copy.</li>
                        </ul>
                    </div>

                    {/* Qualitative Outcomes */}
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-red-500 mb-3">
                            Qualitative Outcomes
                        </h3>
                        <ul className="space-y-2 text-gray-100">
                            <li>
                                Content ranks faster after updates thanks to semantic consistency.
                            </li>
                            <li>Site structure supports AI search inclusion.</li>
                            <li>
                                Brand authority improves through clarity and depth of messaging.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 flex justify-center mb-12 md:mt-0">
                    <div className="relative w-[90%] md:w-[85%] overflow-hidden">
                        <Image
                            src={velocityImg}
                            alt="SEO velocity dashboard"
                            width={700}
                            height={500}
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
