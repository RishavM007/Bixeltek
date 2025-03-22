'use client';
import React from 'react'
import { useState } from 'react'
import ProcessSection from '@/sections/ProcessSection';
import SocialMediaTabs from '@/components/SocialMediaTabs';

export default function DmSteps() {
    const [activetimelineTab, setActiveTimelineTab] = useState("process");
  return (
    <section className='overflow-hidden mt-20'>
                <div className="w-full ml-0 md:ml-10">
                    <div>
                        <div className="flex w-fit gap-6 ml-10 text-2xl font-medium font-sofiasanscondensed">
                            <span
                                className={`cursor-pointer ${activetimelineTab === "process"
                                    ? "text-black underline decoration-blue-700 underline-offset-4 decoration-2"
                                    : "hover:text-black text-black"
                                    }`}
                                onClick={() => setActiveTimelineTab("process")}
                            >
                                Performance
                            </span>

                            <span
                                className={`cursor-pointer ${activetimelineTab === "social"
                                    ? "text-black underline decoration-[#DB4437] underline-offset-4 decoration-2"
                                    : "hover:text-black "
                                    }`}
                                onClick={() => setActiveTimelineTab("social")}
                            >
                                Social Media
                            </span>
                        </div>
                        {activetimelineTab === "process" ? <ProcessSection /> : <SocialMediaTabs />}
                    </div>
                </div>
            </section>
  )
}
