import Image from 'next/image';
import casestudy1image from '@/assets/casestudy-1.jpg';
import casestudy2image from '@/assets/pexels-pixabay-270669.jpg'
import casestudy3image from '@/assets/pexels-emilio-garcia-96280844-29700658.jpg'

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
        image: casestudy2image,
    },
    {
        title: "Local SEO Overhaul for Top Rankings",
        description:
            "Discover how a restaurant’s website optimization and local SEO strategies secured top Google rankings, leading to a 40% boost in customer visits.",
        image: casestudy3image,
    },
];

export const Casestudy = () => {
    return (
        <section className="mb-24 mt-20">
            <div className="container mx-auto px-4 text-white">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-medium tracking-tighter">
                        Success Stories Unveiled
                    </h2>
                    <p className="text-white/70 mt-5 text-md lg:text-lg tracking-tight max-w-xl mx-auto">
                        Discover how our innovative digital marketing solutions have driven
                        remarkable growth and success for businesses like yours.
                    </p>
                </div>

                <div className="flex flex-col space-y-12">
                    {Casestudies.map((caseStudy, index) => (
                        <div
                            key={index}
                            className={`flex flex-col-reverse md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                        >
                            
                            <div className="w-full md:w-1/2 text-center md:text-left max-w-lg">
                                <h3 className="text-3xl font-semibold mb-4 text-start">{caseStudy.title}</h3>
                                <p className="text-gray-400 text-sm lg:text-md text-start">
                                    {caseStudy.description}
                                </p>
                                <a href="#" className="relative text-sm mt-4 w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-purple-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                                    Read More <i className="fa-solid fa-arrow-right text-white ml-1 text-sm"></i>
                                </a>
                            </div>
                           
                            <div className="w-full md:w-1/2">
                                <Image
                                    src={caseStudy.image}
                                    alt={caseStudy.title}
                                    className="w-full h-auto rounded-lg opacity-80 hover:opacity-90 cursor-pointer"
                                    layout="responsive" 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
