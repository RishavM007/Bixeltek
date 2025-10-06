"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";

export default function AreasWeServeVancWeb() {
   const regions = [
    {
      title: "Toronto & GTA",
      cities: [
        { name: "Toronto", link: "/toronto" },
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
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-[95%] md:max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        
        {/* Left Side - Content */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Web Design Services <span className="text-blue-500">Across Greater Vancouver</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
              We work with businesses across Vancouver and its surrounding regions, helping brands create strong, conversion-oriented online presences that grow visibility and revenue.
          </p>

          <ul className="space-y-6 text-lg">
            {regions.map((region, index) => (
              <li key={index} className="flex items-start gap-3">
                <MapPin className="text-blue-500 w-6 h-6 mt-1" />
                <span>
                  <strong>{region.title}</strong> →{" "}
                  {region.cities.map((city, idx) =>
                    city.link ? (
                      <Link key={idx} href={city.link} className="text-blue-400 hover:underline">
                        {city.name}{idx < region.cities.length - 1 ? ", " : ""}
                      </Link>
                    ) : (
                      <span key={idx}>
                        {city.name}{idx < region.cities.length - 1 ? ", " : ""}
                      </span>
                    )
                  )}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-gray-300 text-lg mt-8">
             Wherever your business is based in the Greater Vancouver Area, Bixeltek helps you design websites that convert visitors into customers.
          </p>
        </div>

        {/* Right Side - Map */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166655.41811004592!2d-123.28871046916251!3d49.25761824332818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2z4KS14KWI4KSC4KSV4KWC4KS14KSwLCDgpKzgpY3gpLDgpL_gpJ_gpL_gpLYg4KSV4KWL4KSy4KSC4KSs4KS_4KSv4KS-LCDgpJXgpYXgpKjgpKHgpL4!5e0!3m2!1smr!2sin!4v1759589594976!5m2!1smr!2sin" 
          width="600"
            height="450"
            loading="lazy"
            className="min-h-[500px] w-full"></iframe>
        </div>
      </div>
    </section>
  );
}
