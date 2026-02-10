"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";

export default function AreasWeServeCanadaDM() {
  const regions = [
    {
      title: "Toronto & GTA",
      cities: [
        { name: "Toronto"},
        { name: "Mississauga", link: "/mississauga" },
        { name: "Brampton" },
        { name: "Vaughan" },
        { name: "Markham" },
        { name: "Oakville" },
      ],
    },
    {
      title: "Ontario & Central Canada",
      cities: [
        { name: "Ottawa" },
        { name: "Hamilton" },
        { name: "Kitchener-Waterloo" },
        { name: "Montreal" },
      ],
    },
    {
      title: "Western Canada",
      cities: [
        { name: "Calgary" },
        { name: "Edmonton" },
        { name: "Vancouver", link: "/vancouver" },
        { name: "Winnipeg" },
      ],
    },
    {
      title: "Atlantic Canada",
      cities: [
        { name: "Halifax" },
        { name: "Moncton" },
        { name: "St. John’s" },
      ],
    },
  ];

  return (
    <section className="w-full bg-black text-white py-10 md:py-20">
      <div className="max-w-[95%] md:max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">
        
        {/* Left Side - Content */}
        <div>
          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            Proudly Serving <span className="text-blue-500">Toronto and the GTA</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8">
            We help businesses across Toronto and the Greater Toronto Area with digital marketing strategies tailored to their competition and audience.
          </p>

          <ul className="space-y-6 text-lg">
            {regions.map((region, index) => (
              <li key={index} className="flex text-base md:text-lg items-start gap-3">
                <MapPin className="text-blue-500 w-6 h-6 mt-1" />
                <span>
                  <strong>{region.title}</strong> →{" "}
                  {region.cities.map((city, idx) =>
                    city.link ? (
                      <Link
                        key={idx}
                        href={city.link}
                        className="text-blue-400 hover:underline"
                      >
                        {city.name}
                        {idx < region.cities.length - 1 ? ", " : ""}
                      </Link>
                    ) : (
                      <span key={idx}>
                        {city.name}
                        {idx < region.cities.length - 1 ? ", " : ""}
                      </span>
                    )
                  )}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-gray-300 md:text-lg mt-8">
            No matter where your business operates, our frameworks adapt to your market, your customers, and your growth goals.
          </p>
        </div>

        {/* Right Side - Map */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369107.53666429064!2d-79.7076989920169!3d43.71776753961089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1758887394177!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
            className="min-h-[500px] w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
