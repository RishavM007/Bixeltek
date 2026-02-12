import Image from "next/image";
import Link from "next/link";
import React from "react";
import img2 from "@/assets/Reflect ✦ MaxiBestOf.jpg";


const WDWhyChooseUs = () =>{
    return(
        <section className="pt-48 pb-16 bg-white">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left: Image with overlay chart */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden">
                            <Image
                                src={img2}
                                alt="Team working"
                                className="w-full object-cover "
                            />

                        </div>
                        {/* Chart or overlay image */}

                    </div>

                    {/* Right: Text Content */}
                    <div>
                        <p className="text-sm text-purple-600 font-semibold uppercase tracking-wider mb-2">
                            Why Choose Us
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Why Bixeltek is the
                            <span className="text-purple-600"> Best Web Design Agency </span>in Hyderabad
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Bixeltek isn’t a freelancer network. We’re a full-service digital marketing agency with in-house designers, developers, SEO specialists, and strategists — all under one roof. We’re Google Partner Certified, and we’ve helped 100+ businesses across India, Canada, the US, and the Middle East scale online.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Unlike others, we don’t start with color palettes or “inspiration sites.” We start with your business problems. Your goals. Your audience behavior. Then we design backward — using data, not guesses — to build a site that actually performs.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We understand what Hyderabad businesses need. We’re based here. We’ve worked with clients in your lanes. And we’re ready to help you win online.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-10">
                            <Link href="tel:+919100032301">
                                <button className="px-6 py-3 border border-black bg-white text-black rounded-md hover:bg-white hover:text-black hover:border-black hover:ring-1 transition">
                                    Get A Quote
                                </button>
                            </Link>

                            <Link href="#form" >
                                <button className="px-6 py-3 border-white bg-black text-white  hover:bg-white hover:text-black hover:border-black hover:ring-1 transition rounded-md hover:bg-transparent  hover:border ">
                                    Book a Free Consultation
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default WDWhyChooseUs