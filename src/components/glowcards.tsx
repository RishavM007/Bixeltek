'use client';

import {
  Gem,
  ShoppingCart,
  Smartphone,
  LayoutTemplate,
  CreditCard,
  Code,
  ShieldCheck,
  SearchCheck,
  BookText,
} from 'lucide-react';

import Counter from './Counter';
import ShowcaseSection from './Showcase';

const services = [
  {
    icon: <Gem size={36} />,
    title: 'Custom Website Development',
    description:
      'We craft 100% custom, high-performance WordPress websites with zero templates and lightning-fast load speeds. Our builds are SEO-optimized, mobile-friendly, and designed for long-term scalability.',
  },
  {
    icon: <ShoppingCart size={36} />,
    title: 'Ecommerce Websites',
    description:
      'Sell smarter with high-converting, fully responsive eCommerce stores. We optimize product pages, checkout flows, and secure payment integrations to boost sales, user engagement, and search engine rankings.',
  },
  {
    icon: <Smartphone size={36} />,
    title: 'Mobile-Responsive Web Design',
    description:
      'With over 70% of traffic coming from mobile, we create pixel-perfect, ultra-fast, mobile-first designs for a seamless user experience, lower bounce rates, and higher conversions.',
  },
  {
    icon: <LayoutTemplate size={36} />,
    title: 'CMS Website Development',
    description:
      'Our CMS solutions include WordPress, Drupal, Shopify, and Joomla, offering easy content management and SEO-optimized architecture to improve search rankings and user experience.',
  },
  {
    icon: <CreditCard size={36} />,
    title: 'Payment Gateway Integration',
    description:
      'We integrate leading Indian and international payment gateways, including Razorpay, PayU, Stripe, PayPal, Square, and Authorize.net, ensuring frictionless checkout flows, secure transactions, PCI compliance, and fraud protection.',
  },
  {
    icon: <Code size={36} />,
    title: 'Web App Development',
    description:
      'We build Progressive Web Apps (PWAs) and full-stack web applications using React.js, Node.js, and Laravel, ensuring scalability, performance, and seamless business automation.',
  },
  {
    icon: <ShieldCheck size={36} />,
    title: 'Website Migrations & Security',
    description:
      'We offer seamless site migrations with zero downtime and implement advanced security protocols like SSL, firewalls, backups, and malware scans to keep your site safe.',
  },
  {
    icon: <SearchCheck size={36} />,
    title: 'On-Page SEO Optimization',
    description:
      'We optimize metadata, headings, image alt tags, internal links, page structure, and keyword density to boost your site’s visibility and rank higher on search engines.',
  },
  {
    icon: <BookText size={36} />,
    title: 'Ecommerce Content Management',
    description:
      'We handle eCommerce product content updates, descriptions, image optimization, and stock syncing so your online store stays fresh, relevant, and conversion-ready.',
  },
];

export default function ServicesSection() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-32  px-6 lg:px-16 relative  bg-[#fff]"
    // style={{
    //   backgroundImage: "linear-gradient(to top, #e14fad 0%, #f9d423 100%)"
    // }}


    >
      <div className="max-w-7xl mx-auto text-center text-white">
        {/* <h3 className="text-sm uppercase tracking-widest text-purple-500 font-semibold mb-2">
          Why Choose Us
        </h3> */}
        <h2 className="text-4xl md:text-5xl font-inter text-black font-bold mb-10">
          How We Help Your Business <br className="hidden md:block" />
          Grow and Succeed
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="backdrop-blur-sm  group hover:bg-white  p-6 rounded-xl text-left hover:scale-[1.03] transition-all duration-300"
              style={{
                backgroundImage: "linear-gradient(to top, #dfe9f3 0%, white 100%)"
              }}
            >
              <div className="mb-4 text-black">{service.icon}</div>
              <h4 className="text-lg font-semibold text-black mb-2">
                {service.title}
              </h4>
              <p className="text-sm text-black ">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-20'>

      <ShowcaseSection/>
      </div>
      <div className='mb-[-270px] mt-8 md:mt-20'>
        <Counter />
      </div>
    </section>
  );
}
