"use client";

import { MapPin } from "lucide-react";

export default function AreasWeServeCanadaDMMiss() {
  const regions = [
    {
      title: "Toronto & GTA",
      cities: "Toronto, Mississauga, Brampton, Vaughan, Markham, Oakville",
    },
    {
      title: "Ontario & Central Canada",
      cities: "Ottawa, Hamilton, Kitchener-Waterloo, Montreal",
    },
    {
      title: "Western Canada",
      cities: "Calgary, Edmonton, Vancouver, Winnipeg",
    },
    {
      title: "Atlantic Canada",
      cities: "Halifax, Moncton, St. John’s",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-20">
      <div className=" max-w-[95%] md:max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        
        {/* Left Side - Content */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Supporting Businesses Across <span className="text-blue-500">Mississauga and Beyond</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
              We work with businesses not just in Mississauga, but across the Greater Toronto Area, helping them grow with digital strategies tailored to local competition.
          </p>

          <ul className="space-y-6 text-lg">
            {regions.map((region, index) => (
              <li key={index} className="flex items-start gap-3">
                <MapPin className="text-blue-500 w-6 h-6 mt-1" />
                <span>
                  <strong>{region.title}</strong> → {region.cities}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-gray-300 text-lg mt-8">
            No matter where your business operates, our frameworks adapt to your market, your customers, and your growth goals.
          </p>
        </div>

        {/* Right Side - Map */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748682.433081404!2d-80.13519826979584!3d43.49331472186339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b469fe76b05b7%3A0x3146cbed75966db!2z4KSu4KWJ4KSo4KWN4KSf4KWN4KSw4KS_4KSv4KSyLCDgpJHgpKjgpY3gpJ_gpL7gpLDgpL_gpK_gpYssIOCkleClheCkqOCkoeCkvg!5e0!3m2!1smr!2sin!4v1759167404760!5m2!1smr!2sin"
            height="450"
            loading="lazy"
            className="min-h-[500px] w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
