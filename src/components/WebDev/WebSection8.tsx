"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";

const locations = [
  {
    country: "India",
    cities: [
      { name: "Hyderabad", url: "/hyderabad", hasLink: true },
      { name: "Bangalore", url: "", hasLink: false },
      { name: "Delhi", url: "", hasLink: false },
      { name: "Mumbai", url: "", hasLink: false }
    ]
  },
  {
    country: "USA",
    cities: [
      { name: "New York", url: "", hasLink: false },
      { name: "Los Angeles", url: "", hasLink: false },
      { name: "Chicago", url: "", hasLink: false },
      { name: "Dallas", url: "", hasLink: false }
    ]
  },
  {
    country: "Canada",
    cities: [
      { name: "Toronto", url: "/toronto/web-design", hasLink: true },
      { name: "Vancouver", url: "/vancouver/web-design-services", hasLink: true },
      { name: "Calgary", url: "", hasLink: false },
      { name: "Montreal", url: "", hasLink: false },
      { name: "Missssauga", url: "/mississauga/web-design", hasLink: true },
    ]
  },
  {
    country: "UAE",
    cities: [
      { name: "Dubai", url: "", hasLink: false },
      { name: "Abu Dhabi", url: "", hasLink: false },
      { name: "Sharjah", url: "", hasLink: false }
    ]
  },
  {
    country: "Saudi Arabia",
    cities: [
      { name: "Riyadh", url: "/saudi-arabia/riyadh/web-design-services", hasLink: true },
      { name: "Eastern Province", url: "/saudi-arabia/eastern-province/web-design-services", hasLink: true },
      { name: "Jeddah", url: "", hasLink: false },
      { name: "Dammam", url: "", hasLink: false }
    ]
  },
  {
    country: "UK",
    cities: [
      { name: "London", url: "", hasLink: false },
      { name: "Manchester", url: "", hasLink: false },
      { name: "Birmingham", url: "", hasLink: false }
    ]
  }
];

export default function AreasWeServe() {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-[95%] md:max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        
        {/* Left Side - Areas */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Areas We Serve</h2>
          <ul className="space-y-6 text-lg">
            {locations.map((location, index) => (
              <li key={index} className="flex items-start gap-3">
                <MapPin className="text-blue-500 w-6 h-6 mt-1 flex-shrink-0" />
                <span>
                  <strong>{location.country}</strong> →{" "}
                  {location.cities.map((city, cityIndex) => (
                    <span key={cityIndex}>
                      {city.hasLink ? (
                        <Link 
                          href={city.url} 
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {city.name}
                        </Link>
                      ) : (
                        <span className="text-white">{city.name}</span>
                      )}
                      {cityIndex < location.cities.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Iframe */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0231806286224!2d78.39298110875555!3d17.36261755181946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x801d7036c2b29689%3A0x147a268620903039!2sBixeltek%20-%20A%20Google%20Partner%20Agency%20%7C%20Digital%20Marketing%20Agency!5e0!3m2!1smr!2sin!4v1757509966447!5m2!1smr!2sin" 
            width="100%" 
            height="100%" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}