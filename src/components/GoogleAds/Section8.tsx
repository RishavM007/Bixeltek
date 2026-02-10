
import { Globe, Award, Target, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function BixeltekAdvantage() {
    const advantages = [
        {
            icon: <Globe className="w-6 h-6 text-blue-600" />,
            title: "Global-First Agency",
            desc: "We operate across USA, Canada, India & Saudi Arabia with global expertise.",
            color:'border-2 border-blue-500'
        },
        {
            icon: <Award className="w-6 h-6 text-blue-600" />,
            title: "Google Partner Certified",
            desc: "Trained, tested, and officially recognized by Google as trusted experts.",
            color:'border-2 border-red-500'
        },
        {
            icon: <Target className="w-6 h-6 text-blue-600" />,
            title: "ROI-Driven Strategies",
            desc: "We focus on leads, sales, and growth — not vanity clicks or empty metrics.",
            color:'border-2 border-teal-500'
        },
        {
            icon: <Users className="w-6 h-6 text-blue-600" />,
            title: "Full In-House Team",
            desc: "No outsourcing. Our team is fully accountable for your campaign success.",
            color:'border-2 border-yellow-500'
        },
    ];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-start">

                {/* Left Section - Heading & Description */}
                <div>
                    <h2 className="text-3xl md:text-5xl text-white lg:text-6xl font-bold leading-tight mb-6">
                        The <span className="text-blue-500">Bixeltek </span>Advantage
                    </h2>
                    <p className="text-gray-100 text-lg leading-relaxed mb-8">
                        When you choose Bixeltek, you’re not just hiring a PPC agency.
                        You’re gaining a partner that:
                    </p>

                    {/* CTA Banner */}
                    <div className="w-full items-center flex justify-start md:justify-start">
                        <a
                            href="https://www.google.com/partners/agency?id=2188074075"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
                                alt="Google Partners Badge"
                                className="w-52"
                            />
                        </a>
                    </div>

                </div>

                {/* Right Section - Grid of Cards */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    {advantages.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-black rounded-2xl shadow-sm p-8  hover:shadow-md transition duration-300 ${item.color}`}
                        >
                            <div className="w-12 h-12 flex items-center justify-center bg-white shadow rounded-lg mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-100 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-12 max-w-3xl mx-auto text-white p-8 rounded-2xl shadow-md">
                <h3 className="text-xl text-center font-semibold mb-3">
                Work With a Google Partner Agency That Puts ROI First
                </h3>
                <div className="flex justify-center mt-5">
                    <Link href={'tel:+919100032301'}>     
                <button className="px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-sm shadow-lg hover:bg-blue-700 transition">
                    Talk To Our Certified PPC Specialist
                </button>
                </Link>
            </div>
            </div>
        </section>
    );
}
