import React, { useState } from "react";


export const Accordion = () => {
    return (
        <section className="relative z-20 overflow-hidden bg-gray-100 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                FAQ
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-dark text-gray-800 sm:text-[40px]/[48px]">
                                Any Questions? Look Here
                            </h2>
                            <p className="text-base text-body-color text-black">
                                Discover answers to the most common queries about our digital marketing services, including strategies, timelines, and results tailored to elevate your business growth.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex  flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="What services do you offer in digital marketing?"
                            text="We offer a wide range of digital marketing services, including SEO, PPC, social media marketing, email marketing, content creation, and analytics tracking to drive your business growth."
                        />
                        <AccordionItem
                            header="How long does it take to see results from SEO?"
                            text="SEO results typically take 3-6 months to become noticeable, as we optimize your website and build authority to improve your rankings in search engines."
                        />
                        <AccordionItem
                            header="Can you manage Google Ads campaigns for my business?"
                            text="Yes, we specialize in Google Ads management to help you reach your target audience effectively while maximizing ROI."
                        />
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="How do you create content for social media?"
                            text="Our team researches your brand, audience, and competitors to craft engaging and visually appealing content tailored to your social media platforms."
                        />
                        <AccordionItem
                            header="What is the cost of your digital marketing services?"
                            text="Our pricing varies depending on the scope and requirements of your project. Contact us for a customized quote that fits your needs."
                        />
                        <AccordionItem
                            header="Do you provide analytics and performance reports?"
                            text="Yes, we provide detailed analytics and performance reports to help you track the success of your campaigns and make data-driven decisions."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;

interface AccordionItemProps {
    header: string;
    text: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ header, text }) => {
    const [active, setActive] = useState<boolean>(false);

    const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setActive(!active);
    };

    return (
        <div className="mb-8 w-full rounded-lg bg-white p-4  dark:bg-dark-2 sm:p-8 lg:px-6 xl:px-8">
            <button
                className={`faq-btn flex w-full text-left`}
                onClick={handleToggle}
            >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
                    <svg
                        className={`fill-primary stroke-primary duration-300 ease-in-out ${active ? "rotate-180" : ""
                            }`}
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill=""
                            stroke=""
                        />
                    </svg>
                </div>

                <div className="w-full">
                    <h4 className="mt-1 text-[16px] font-semibold text-black">
                        {header}
                    </h4>
                </div>
            </button>

            <div
                className={` transition-[max-height] duration-500 ease-in-out ${active ? 'h-auto' : 'h-0 overflow-hidden'}`}
            >
                <p className="py-3 px-16 text-sm leading-relaxed text-body-color dark:text-dark-6">
                    {text}
                </p>
            </div>
        </div>
    );
};
