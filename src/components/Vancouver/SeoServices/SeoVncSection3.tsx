'use client';

const challenges = [
    {
        title: "Low visibility on Google’s first page",
        description:
            "Without proper keyword targeting and optimization, even the best websites remain invisible to potential customers.",
        hoverBorder: "hover:bg-blue-500",
        iconColor: "bg-blue-500",
    },
    {
        title: "Poorly optimized content",
        description:
            "Content that doesn’t satisfy user intent or leverage semantic SEO fails to engage both users and search engines.",
        hoverBorder: "hover:bg-red-500",
        iconColor: "bg-red-500",
    },
    {
        title: "Technical SEO errors",
        description:
            "Slow loading speeds, broken links, and improper indexing can all hold back your rankings despite great content.",
        hoverBorder: "hover:bg-yellow-500",
        iconColor: "bg-yellow-500",
    },
    {
        title: "Weak internal linking",
        description:
            "Without proper internal links and entity relationships, Google struggles to understand your site structure.",
        hoverBorder: "hover:bg-green-500",
        iconColor: "bg-green-500",
    },
    {
        title: "No topical authority",
        description:
            "Websites without structured content clusters lack credibility, making it hard to rank for competitive topics.",
        hoverBorder: "hover:bg-purple-500",
        iconColor: "bg-purple-500",
    },
    {
        title: "Lack of scalable strategy",
        description:
            "SEO isn’t just about pages—it’s about creating an ecosystem where every piece of content builds authority and trust.",
        hoverBorder: "hover:bg-pink-500",
        iconColor: "bg-pink-500",
    },
];

export default function VancouverSeoChallenges() {
    return (
        <section className="bg-black py-20 px-4 md:px-20">
            <div className="max-w-[95%] md:max-w-[85%] mx-auto flex flex-col gap-12">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6">
                        Why Most Vancouver Businesses Struggle to <span className="text-blue-500">Rank on Google</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        We’ve seen it across hundreds of businesses — beautiful websites, but no traffic. The problem isn’t design; it’s the lack of a scalable, data-backed SEO strategy.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {challenges.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                boxShadow:
                                    "rgba(0, 0, 0, 0) 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px inset",
                            }}
                            onMouseEnter={(e) =>
                            (e.currentTarget.style.boxShadow =
                                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset")
                            }
                            onMouseLeave={(e) =>
                            (e.currentTarget.style.boxShadow =
                                "rgba(0, 0, 0, 0) 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px inset")
                            }
                            className={`border-2 border-transparent group rounded-2xl p-6 bg-transparent transition-all duration-300 hover:scale-105 ${item.hoverBorder}`}
                        >
                            {/* Icon Square */}
                            <div className={`w-14 h-14 mb-4 group-hover:bg-neutral-900 group-hover:shadow-2xl ${item.iconColor} rounded-md flex items-center justify-center text-white`}>
                                {/* Placeholder Icon - Replace with SVG if needed */}
                                <span className="font-semibold text-2xl font-inter">{index + 1}</span>
                            </div>

                            {/* Title & Description */}
                            <div className="pt-10 border-t border-gray-800 group-hover:border-gray-200 mt-5">
                                <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-300 group-hover:text-white text-base">{item.description}</p>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Solution Paragraph */}
                <div className="text-center mt-12">
                    <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                        <span className="font-semibold text-white">Solution:</span> At Bixeltek, we build SEO ecosystems, not just pages — ensuring every blog, landing page, and service builds topical authority, trust, and relevance.
                    </p>
                </div>
            </div>
        </section>
    );
}
