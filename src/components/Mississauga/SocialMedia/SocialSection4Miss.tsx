import React from 'react';
import { Check } from 'lucide-react';

export default function SocialMediaServicesMiss() {
    const services = [
        {
            title: "Content Strategy & Creation",
            description: "We craft branded posts, visuals, and captions designed to captivate your audience and drive meaningful engagement.",
        },
        {
            title: "Paid Social Campaigns",
            description: "Highly targeted ads on Facebook, Instagram, LinkedIn, and TikTok to reach the right audience, increase conversions, and maximize ROI.",
        },
        {
            title: "Community Management",
            description: "We actively engage with your followers, respond to comments and messages, and foster a loyal online community.",
        },
        {
            title: "Social Media Analytics",
            description: "Track performance, engagement, and ROI with detailed reports to optimize strategies and make data-driven decisions.",
        },
        {
            title: "Influencer Collaborations",
            description: "Partner with local creators to amplify your brand’s reach, credibility, and authenticity in Mississauga’s market.",
        },
        {
            title: "Branding & Creative Design",
            description: "Ensure cohesive visuals, messaging, and tone across all social platforms that reflect your brand identity.",
        },
    ];

    return (
        <section className='relative py-12 md:py-24'>
            {/* Background Decorative Blobs */}
            {/* <div className="absolute top-12 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
            <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div> */}

            <div>
                {/* Section Heading */}
                <div className='max-w-[80%] mx-auto mb-5 text-center'>
                    <h2 className='text-white text-4xl lg:text-6xl font-inter mb-3 font-semibold'>
                        Social Media Services <br />
                        <span className='text-blue-500'>Designed for Growth</span>
                    </h2>
                    <p className='text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-4xl mx-auto'>
                        Bixeltek delivers full-service social media marketing for Mississauga businesses, combining strategy, creativity, and data-driven execution to boost visibility, engagement, and conversions.
                    </p>
                </div>

                {/* Services Grid (SEO-style) */}
                <div className="grid grid-cols-1 md:grid-cols-3 max-w-[75%] mx-auto mt-10 gap-0">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative w-full h-80 border border-gray-800 bg-black/10 hover:bg-blue-600 transition-all duration-300 flex flex-col justify-center items-center p-10 md:p-14"
                        >
                            <h3 className="text-white text-2xl font-bold text-center mb-2 flex items-center gap-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-300 text-sm text-center">{service.description}</p>

                            {/* Decorative Plus Icons */}
                            {index % 4 === 0 && (
                                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30">
                                    <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                                </span>
                            )}
                            {(index % 4 === 1 || index === 0 || index === 2) && (
                                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30">
                                    <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                                </span>
                            )}
                            {(index % 4 === 2 || index === 0 || index === 3) && (
                                <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                                    <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                                </span>
                            )}
                            {(index % 4 === 3 || index === 5) && (
                                <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30">
                                    <i className="fa fa-plus text-2xl" aria-hidden="true"></i>
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Closing Line */}
                <div className="max-w-3xl mx-auto text-center mt-12">
                    <p className="text-gray-100 text-lg md:text-xl font-medium">
                        From strategy to execution, our social media services help Mississauga businesses grow, engage their audience, and turn followers into loyal customers.
                    </p>
                </div>
            </div>
        </section>
    );
}
