'use client';
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import dentistimg from '@/assets/woman-patient-dentist.jpg'
import pestcontrol from '@/assets/man-with-protective-suit-medium-shot.jpg'
import fashion from '@/assets/medium-shot-women-testing-colours.jpg'

const caseStudies = [
  {
    id: 1,
    title: "Dr. Sandeep's Dental Clinic",
    location: "Banjara Hills",
    shortDesc: "Wix site to SEO boost...",
    fullDesc:
      "Dr. Sandeep had a Wix site with no SEO and poor mobile performance. After we rebuilt it with a service-structured layout, appointment form, and local SEO optimization, he saw 68 new bookings in 60 days — 100% organic.",
    tag: "Healthcare",
    date: "May 2024",
    image: dentistimg,
  },
  {
    id: 2,
    title: "Fashion Brand",
    location: "Gachibowli",
    shortDesc: "Slow Shopify to 2.2x sales...",
    fullDesc:
      "This D2C brand was struggling with a slow Shopify site and high bounce rates. We migrated to a lightning-fast storefront with WhatsApp checkout prompts and optimized product pages. The result? Bounce rate dropped by 41% and sales grew by 2.2x.",
    tag: "D2C / E-Commerce",
    date: "June 2024",
    image: fashion,
  },
  {
    id: 3,
    title: "Pest Control Company",
    location: "Kukatpally",
    shortDesc: "₹20K ads to 12 leads...",
    fullDesc:
      "They were spending ₹20,000/month on Meta ads with zero leads. We launched a hyper-focused landing page with service-specific trust indicators and strong CTAs. Within the first week, they received 12 verified leads.",
    tag: "Services",
    date: "July 2024",
    image: pestcontrol,
  },
];

export default function CaseStudies() {
  const [expanded, setExpanded] = useState<number | null>(null);;

  return (
    <section className=" max-w-7xl mx-auto pt-16 pb-32">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-sm font-medium text-purple-600 uppercase tracking-wide">
              Our Case Studies
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-1">
              What Our <span className=" text-purple-600 ">Hyderabad Clients</span> Achieved
            </h2>
          </div>
          <button className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium flex items-center gap-1">
            See All Cases <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl transition-all">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={240}
                className="w-full h-56 object-cover rounded-2xl"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.location}</p>
                <p className="text-gray-700 text-sm">
                  {expanded === item.id ? item.fullDesc : item.shortDesc}{" "}
                  <button
                    onClick={() =>
                      setExpanded(expanded === item.id ? null : item.id)
                    }
                    className="text-purple-600 underline text-xs ml-1"
                  >
                    {expanded === item.id ? "Read less" : "Read more"}
                  </button>
                </p>
                <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                    {item.tag}
                  </span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
