"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Check } from "lucide-react";
import img from '@/assets/digital-marketing-1725340_1280.jpg'

export default function RevenueLoopSection() {
    return (<section className="bg-black py-24 px-6 md:px-20"> <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Content */} <div className="flex-1 text-gray-100"> <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Marketing Shouldn’t Just Look Busy —{" "} <span className="text-blue-400">It Should Make Money.</span> </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                When every channel works together, your business enters what we call a{" "}
                <span className="text-white font-semibold">predictable revenue loop.</span>{" "}
                Instead of chasing vanity metrics, you measure true momentum — built on
                data, systems, and consistency.
            </p>

            <p className="text-gray-400 italic mb-10">
                Visual Concept: Ad → Click → Landing Page → Conversion → Retargeting → Repeat
            </p>

            {/* Result Highlights */}
            <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-[2px]" />
                    <p className="text-gray-200 text-lg leading-relaxed">
                        30–50% improvement in ROI across all channels
                    </p>
                </li>

                <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-[2px]" />
                    <p className="text-gray-200 text-lg leading-relaxed">
                        Lower cost per acquisition through compounding optimization
                    </p>
                </li>

                <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-[2px]" />
                    <p className="text-gray-200 text-lg leading-relaxed">
                        Data-informed decisions — not creative assumptions
                    </p>
                </li>

                <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-400 flex-shrink-0 mt-[2px]" />
                    <p className="text-gray-200 text-lg leading-relaxed">
                        Steady, trackable revenue growth month after month
                    </p>
                </li>
            </ul>
        </div>

        {/* Right Image */}
        <div className="flex-1">
            <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                    src={img}
                    alt="Predictable Revenue Loop Concept"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                />
            </div>
        </div>
    </div>
    </section>

    );
}
