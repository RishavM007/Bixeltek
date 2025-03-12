import React from 'react'
import { LuCodesandbox } from 'react-icons/lu'
import Smfeature from './smfeature'

const features = [
    {
        title: "Custom Web Design & Development",
        description: "We offer bespoke website design services for businesses in Hyderabad and beyond, ensuring high UX/UI standards and optimal conversion-focused designs. Our development stack includes React.js, Next.js, HTML, CSS, PHP, and JavaScript."
    },
    {
        title: "eCommerce Website Development",
        description: "From WooCommerce to Magento and custom-built solutions, we build high-converting online stores with secure payment gateway integrations and multi-currency support."
    },
    {
        title: "B2B & Corporate Websites",
        description: "For businesses in Hyderabad’s booming IT and startup ecosystem, we develop lead-generation-focused corporate websites with CRM, automation, and digital transformation solutions.",
    },
    {
        title: "CMS Website Development",
        description: "Our CMS solutions include WordPress, Drupal, Shopify, and Joomla, offering easy content management and SEO-optimized architecture."
    },
    {
        title: "Payment Gateway Integration",
        description: "We integrate leading Indian and international payment gateways, including Razorpay, PayU, Stripe, PayPal, Square, and Authorize.net, ensuring secure transactions and fraud protection."
    },
    {
        title: "Web App Development",
        description: "We develop Progressive Web Apps (PWAs) and full-stack web applications using React.js, Node.js, and Laravel to enhance business operations."
    }
]

export default function Smfeatures() {
    return (
        <section className='bg-black py-[72px] max-w-[85%] mx-auto text-white'>
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-500">Process</span>
                    <h2 className='font-bold text-5xl tracking-tighter mt-4'>Our WebDev Services</h2>
                    <p className='mt-5 text-xl text-white/70'>We provide high-quality web development solutions tailored to your needs.</p>
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