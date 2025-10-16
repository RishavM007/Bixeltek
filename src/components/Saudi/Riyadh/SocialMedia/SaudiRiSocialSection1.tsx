import Image from "next/image";
import leftImage from "@/assets/Instagram-removebg-preview (1).png"; // replace with your actual image path

export function AudienceSection() {
    return (
        <section className="bg-white py-16 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10">
            <div className=" max-w-[95%] md:max-w-[85%] flex flex-col md:flex-row gap-0 justify-center items-center mx-auto">
                {/* LEFT SIDE — IMAGE */}
                <div className="flex-1">
                    <Image
                        src={leftImage}
                        alt="Social Media Illustration"
                        className="w-[90%] h-auto rounded-lg"
                    />
                </div>

                {/* RIGHT SIDE — CONTENT */}
                <div className="flex-1 flex flex-col gap-4">
                    <h2 className="text-3xl md:text-5xl font-medium text-black leading-tight">
                        Where the Audience Scrolls, <span className="text-blue-500">Business Happens.</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-700">
                        Riyadh has become one of the most social-media-active cities in the Middle East. From Instagram to LinkedIn, Saudi audiences are discovering brands, reviewing services, and making purchase decisions online.
                    </p>
                    <p className="text-base md:text-lg text-gray-700">
                        But visibility alone doesn’t build revenue. Likes don’t pay the bills — conversions do.
                    </p>
                    <p className="text-base md:text-lg text-gray-700">
                        At Bixeltek, we help Riyadh businesses turn social channels into predictable lead engines — with creative built for impact and strategy grounded in data.
                    </p>
                    <a href="mailto:zee@bixeltek.com">
                        <button

                            className="px-6 py-3 rounded-full bg-gradient-to-tr shadow-2xl border-2 border-sky-400 shadow-sky-500 hover:shadow-none bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-300"
                        >
                            Get My Free Social Audit
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
