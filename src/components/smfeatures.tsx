import React from 'react'
import { LuCodesandbox } from 'react-icons/lu'
import Smfeature from './smfeature'

const features = [
    {
        title: "Custom WordPress Development",
        description: "We craft 100% custom, high-performance WordPress websites with zero templates and lightning-fast load speeds. Our builds are SEO-optimized, mobile-friendly, and designed for long-term scalability."
    },
    {
        title: "WooCommerce Ecommerce Websites",
        description: "Sell smarter with high-converting, fully responsive eCommerce stores. We optimize product pages, checkout flows, and secure payment integrations to boost sales, user engagement, and search engine rankings."
    },
    {
        title: "Mobile-Responsive Web Design",
        description: "With over 70% of traffic coming from mobile, we create pixel-perfect, ultra-fast, mobile-first designs for a seamless user experience, lower bounce rates, and higher conversions."
    },
    {
        title: "CMS Website Development",
        description: "Our CMS solutions include WordPress, Drupal, Shopify, and Joomla, offering easy content management and SEO-optimized architecture to improve search rankings and user experience."
    },
    {
        title: "Payment Gateway Integration",
        description: "We integrate leading Indian and international payment gateways, including Razorpay, PayU, Stripe, PayPal, Square, and Authorize.net, ensuring frictionless checkout flows, secure transactions, PCI compliance, and fraud protection."
    },
    {
        title: "Web App Development",
        description: "We build Progressive Web Apps (PWAs) and full-stack web applications using React.js, Node.js, and Laravel, ensuring scalability, performance, and seamless business automation."
    }
];


export default function Smfeatures() {
    return (
        <section className='bg-black py-[72px] max-w-[85%] mx-auto text-white'>
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-500">Our Services</span>
                    <h2 className='font-bold text-5xl font-sofiasanscondensed tracking-normal mt-4'>Our Website Development Services in Hyderabad <br /> Are Built for Visibility, Speed & ROI</h2>
                    <p className='mt-5 text-xl max-w-[90%] mx-auto text-white/70'>We&apos;re not just building websites. We&apos;re solving business problems with strategy, design, and code.<br />
                    As a leading website designing company in Hyderabad, we offer full-spectrum development solutions tailored to your goals — whether you're launching, scaling, or overhauling your online presence.</p>
                </div>
                
                {/* Grid Layout */}
                <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {features.map(({ title, description }) => (
                        <Smfeature key={title} title={title} description={description} />
                    ))}
                </div>
            </div>
        </section>
    )
}