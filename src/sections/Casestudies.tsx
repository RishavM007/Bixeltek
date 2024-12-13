import Image from 'next/image';
import casestudy1image from '@/assets/casestudy-1.jpg';
import casestudy2image from '@/assets/pexels-pixabay-270669.jpg';
import casestudy3image from '@/assets/pexels-emilio-garcia-96280844-29700658.jpg';
import Link from 'next/link';

const Casestudies = [
    {
        title: "PPC Success: 90% Sales Growth",
        description:
            "This case study details how targeted PPC campaigns with optimized keywords and creative A/B testing drove a 90% increase in e-commerce sales for a fashion retailer.",
        image: casestudy1image,
    },
    {
        title: "Social Media Buzz for Fitness Brand",
        description:
            "Learn how influencer collaborations and engaging social media content helped a fitness brand double its followers and significantly increase customer engagement.",
        image: casestudy3image,
    },
    {
        title: "Local SEO Overhaul for Top Rankings",
        description:
            "Discover how a restaurant’s website optimization and local SEO strategies secured top Google rankings, leading to a 40% boost in customer visits and much more.",
        image: casestudy3image,
    },
];

export const Casestudy = () => {
    return (
        <section className="mb-24 mt-20">
            <div className="w-full text-white">
                <div className="w-[90%] lg:w-[85%] mx-auto rounded-t-xl border-white/20 border-b-0 border-2 border-solid backdrop:blur-3xl">
                    <h2 className="text-4xl lg:text-5xl font-medium tracking-tighter text-center py-10 lg:py-20">
                        Success Stories Unveiled
                    </h2>
                    <p className="text-white/70 mt-5 text-sm lg:text-lg tracking-tight max-w-xl mx-auto text-center py-16 lg:py-32">
                        Discover how our innovative digital marketing solutions have driven
                        remarkable growth and success for businesses like yours.
                    </p>
                </div>

                <div className="flex w-full justify-between border-t-2 border-white/20 items-center">
                    <div className="w-[90%] lg:w-[85%] border border-white/20 border-t-0 border-solid mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {Casestudies.map((caseStudy, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-start text-left border border-white/20 border-t-0 p-3 sm:p-4 lg:p-5 overflow-hidden shadow-custom-inset"
                            >
                                <h3 className="text-lg lg:text-xl font-semibold mb-3 mt-5">
                                    {caseStudy.title}
                                </h3>
                                <p className="text-white/70 text-sm lg:text-base mb-5">
                                    {caseStudy.description}
                                </p>
                                <Link
                                    href="#"
                                    className="relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-purple-400 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
                                >
                                    Learn More
                                </Link>

                                <div className="mt-10 md:mt-20 mb-44 md:mb-52 overflow-hidden">
                                    <Image
                                        src={caseStudy.image.src}
                                        alt={caseStudy.title}
                                        width={600}
                                        height={400}
                                        className="rounded-lg object-cover w-full h-auto absolute right-[-15%]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative w-full">
                    <div className="absolute bottom-0 left-0 w-full border-t-2 border-white/20"></div>


                    <div className="w-[90%] lg:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 relative">
                        <div className="border border-white/20 p-6 py-20 flex flex-col justify-start">
                            <h3 className="text-4xl lg:text-3xl font-bold mb-4">400% ROI</h3>
                            <p className="text-white/70 text-sm lg:text-base">
                                Our strategies delivered a staggering 400% return on investment,
                                helping businesses thrive in competitive markets.
                            </p>
                        </div>
                        <div className="border border-white/20 p-6 flex py-20 flex-col justify-start">
                            <h3 className="text-4xl lg:text-3xl font-bold mb-4">200% Engagement</h3>
                            <p className="text-white/70 text-sm lg:text-base">
                                Innovative campaigns doubled engagement rates, capturing audiences
                                like never before.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
