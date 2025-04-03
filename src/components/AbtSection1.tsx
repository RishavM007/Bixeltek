import { useState, useEffect, useRef } from "react";
import sectionImage from '@/assets/dylan-gillis-KdeqA3aTnBY-unsplash.jpg';
import Image from "next/image";

const CreativeSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="flex flex-col lg:flex-row items-center pt-10 pb-20 md:pt-20 px-10">

            <div className="w-full md:w-2/5 flex items-center justify-center">
                <Image
                    src={sectionImage}
                    alt="Creative Strategy Illustration"
                    className="w-auto h-auto lg:h-[450px] max-h-[600px] rounded-lg shadow-lg"
                />
            </div>


            <div className="w-full md:w-3/5 px-0 md:px-10 lg:px-20 mt-10 md:mt-0 flex flex-col md:flex-row md:justify-start md:items-start   gap-10">

                <div className="w-full md:w-1/2 px-0 lg:px-10 ">
                    <h2 className="text-5xl font-bold mb-5 font-sofiasanscondensed">Strategy & Art Direction.</h2>
                    <p className="leading-relaxed font-poppins md:pr-10">
                        <strong>Established stages</strong>which reader, taken possession of
                        my entire soul, like these sweet mornings of spring of enjoying with
                        the theory of ethics.
                    </p>
                    <p className="leading-relaxed mt-8 font-poppins md:pr-10">
                        Praesent commodo cursus magna, vel scelerisque nisl venenatis dapibus
                        posuere velit aliquet.
                    </p>
                </div>
                <div className="w-full md:w-1/2 px-0 md:px-10 ">
                    <h2 className="text-5xl font-bold mb-5 font-sofiasanscondensed">Website UX/UI Design.</h2>
                    <p className="leading-relaxed font-poppins md:pr-10">
                        Each time when our clients want to porta sem malesuada magna mollis
                        euismod. <strong>Praesent commodo cursus for the scelerisque.</strong>
                    </p>
                    <p className="leading-relaxed mt-8 font-poppins md:pr-10">
                        Scelerisque nisl consectetur of your posuere erat a ante venenatis.
                    </p>
                </div>
                {/* Loader - Only shows when section is visible */}
                {/* <div className="relative w-[20%]">
          <p className="font-bold">Creative Impact</p>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            {isVisible && (
              <div
                className="h-full bg-gradient-to-r from-red-500 to-purple-500 transition-all duration-[2s]"
                style={{ width: "86%" }}
              ></div>
            )}
          </div>
          <span className="absolute right-0 -top-5 bg-black text-white text-xs px-2 py-1 rounded-full">
            86%
          </span>
        </div> */}
            </div>
        </section>
    );
};

export default CreativeSection;
