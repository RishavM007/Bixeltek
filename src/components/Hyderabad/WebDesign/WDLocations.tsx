import { MapPin } from "lucide-react";
import React from "react";


const WDLocations = ({locations}:any) =>{
    return(
        <div className="w-full py-10 px-6 lg:px-16 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-20 items-center">

                    {/* Left: Google Map */}
                    <div className="w-full lg:w-1/2 h-[450px] rounded-3xl overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4685.653616836566!2d78.39224697516438!3d17.362613883520346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x801d7036c2b29689%3A0x147a268620903039!2sBixeltek%20-%20A%20Google%20Partner%20Agency%20%7C%20Digital%20Marketing%20Agency!5e1!3m2!1sen!2sin!4v1754213095413!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Right: Areas We Serve */}
                    <div className="w-full lg:w-1/2 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Supporting Local Brands Across Hyderabad’s Key Areas</h2>
                        <p className="text-gray-900 font-poppins text-lg leading-relaxed">
                            We proudly serve clients across:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                            {/* @ts-ignore */}
                            {locations.map((location, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <MapPin className="text-purple-600 w-5 h-5 shrink-0" />
                                    <span className="text-gray-700">{location}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-800 mt-2 font-poppins text-lg">
                            We also work remotely with clients across India, the US, Canada, Saudi Arabia, and the UAE.
                        </p>
                    </div>

                </div>
            </div>
    )
}

export default WDLocations