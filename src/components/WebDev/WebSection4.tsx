import React from 'react'

export default function WebSection4() {

    const webServices = [
        {
            title: 'Custom-Coded Websites',
            description: 'For enterprises and businesses that need complete control, our custom web design services deliver bespoke solutions. Every aspect — from layout to functionality — is built from the ground up, ensuring scalability, advanced integrations, and a truly unique online presence.',
            color: "bg-zinc-500"
        },
        {
            title: 'CMS Website Development (WordPress)',
            description: 'WordPress powers over 40% of the internet, and for good reason. Our WordPress web design services create SEO-friendly, easy-to-manage websites that balance simplicity with performance. From corporate sites to WooCommerce stores, WordPress offers the flexibility most businesses need.',
            color: "bg-violet-400"
        },
        {
            title: 'eCommerce Web Design',
            description: 'We design conversion-focused eCommerce websites that make shopping effortless. From intuitive product pages to secure checkout, we build platforms that increase sales and improve customer experience — whether on WooCommerce, Shopify, or a custom solution.',
            color: "bg-green-500"
        },
        {
            title: 'Payment Gateway Integrations',
            description: 'A smooth payment experience builds trust and boosts conversions. We integrate trusted gateways like Stripe, PayPal, Razorpay, and PayU so your customers can pay quickly and securely in their preferred method.',
        },
        {
            title: 'CRO Landing Page Development',
            description: 'Campaigns and product launches deserve more than generic pages. Our landing page design services create high-converting pages tailored for ads, events, and promotions — designed to capture attention and turn clicks into sales.',
        },
        {
            title: 'Website Redesigns',
            description: 'An outdated website can cost you customers. Our website redesign services transform old, underperforming sites into modern, mobile-first platforms that drive leads and outperform competitors.',
        },

    ];
    return (
        <section className='relative py-24'>
            <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
            <div className="absolute bottom-52 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30 blur-[190px] pointer-events-none"></div>
            <div>
                <div className=' max-w-[80%] mx-auto mb-5 text-center'>
                    <h2 className='text-white text-4xl lg:text-6xl max-w-7xl mx-auto font-inter mb-3 font-semibold '>Our<span className='text-blue-500'> Web Design</span> Services</h2>
                    <p className='text-gray-100 text-base md:text-[17px] tracking-wider mt-4 max-w-3xl mx-auto'>As a leading web design agency, Bixeltek delivers websites tailored to your goals. From fully custom-coded platforms to flexible WordPress builds, our solutions combine aesthetics, performance, and growth.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 max-w-[75%] mx-auto mt-10">
                    {webServices.map((service, index) => (
                        <div
                            key={index}
                            className={`relative w-full h-80 border border-gray-800 bg-black/10 hover:bg-blue-600 transition-all duration-300  flex flex-col justify-center items-center p-10 md:p-16`}>

                            <h3 className="text-white text-2xl font-bold text-center mb-2">{service.title}</h3>
                            <p className="text-gray-300 text-sm text-center">{service.description}</p>

                            {index % 4 === 0 && (
                                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30"><i className="fa fa-plus text-2xl" aria-hidden="true"></i></span>
                            )}

                            {(index % 4 === 1 || index == 0 || index == 2) && (
                                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-gray-300 text-3xl z-30"><i className="fa fa-plus text-2xl" aria-hidden="true"></i></span>
                            )}

                            {(index % 4 === 2 || index == 0 || index == 3) && (
                                <span className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30"><i className="fa fa-plus text-2xl" aria-hidden="true"></i></span>
                            )}

                            {(index % 4 === 3 || index == 5 || index == 6 || index == 8) && (
                                <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-gray-300 text-3xl z-30"><i className="fa fa-plus text-2xl" aria-hidden="true"></i></span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
