import Image from 'next/image';
import cleaningcomp from "@/assets/digital marketing servies for cleaning companies.jpg";
import demoimg from "@/assets/zyro-w48LglCMKFI-unsplash.jpg"


const industries = [
  {
    title: 'Dental Clinics & Healthcare Providers',
    subtitle: 'New Patients. Booked. Monthly.',
    description: `From dental practices to skin and wellness clinics, we help healthcare providers increase bookings, improve local visibility, and build a strong online presence. With proven results across North America and India, we know how to grow your practice fast.`,
    offerings: [
      'High-converting Google Ads campaigns',
      'Local SEO and Google Business optimization',
      'Branded clinic websites & landing pages',
      'Meta ads and engagement-focused social media',
    ],
    image: demoimg,
  },
  {
    title: 'Real Estate & Construction',
    subtitle: 'Sell Properties. Fill Projects. Build Brand Trust.',
    description: `The real estate market is competitive — we help you stand out. Whether you’re an agent, broker, or builder, our marketing systems generate serious buyer/seller leads and keep your pipeline strong.`,
    offerings: [
      'Lead generation Google & Meta campaigns',
      'Real estate website design with MLS integration',
      'SEO for location + property type keywords',
      'Video content for listings and walkthroughs',
    ],
    image: demoimg,
  },
  {
    title: 'Local Service Businesses',
    subtitle: 'More Bookings. More Revenue. Less Wasted Budget.',
    description: `We work with everyday local heroes — bike repair shops, laundry services, cleaning crews, electricians, designers — and help them dominate local search, drive phone calls, and stay fully booked.`,
    offerings: [
      'Google Local Ads & Maps optimization',
      'Local SEO for “near me” searches',
      'Review building and reputation management',
      'Mobile-friendly websites with call tracking',
    ],
    image: demoimg,
  },
  {
    title: 'E-commerce & D2C Brands',
    subtitle: 'Turn Visitors Into Customers. Grow Monthly Revenue.',
    description: `Selling online? Let’s make it frictionless. We work with product-first businesses to boost conversions, optimize ads, and build scroll-stopping shopping experiences.`,
    offerings: [
      'Full-funnel Performance Max campaigns',
      'Product photography & video shoots',
      'Shopify/WooCommerce store builds',
      'Retargeting and upsell automation',
    ],
    image: demoimg,
  },
];

export default function IndustrySections() {
  return (
    <section className="py-12 px-6 max-w-[90%] mx-auto bg-black text-white">
      {industries.map((industry, index) => (
        <div key={index} className={`flex flex-col  md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-12`}>          
          <div className="md:w-1/2 ">
            <Image src={industry.image} alt={industry.title} className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 rounded-xl">
            <h2 className="text-5xl font-sofiasanscondensed font-bold mb-7">{industry.title}</h2>
            <h3 className=" text-2xl text-gray-50 mb-4">{industry.subtitle}</h3>
            <p className="text-gray-50  mb-4">{industry.description}</p>
            <ul className="list-disc pl-5 mb-4">
              {industry.offerings.map((offer, i) => (
                <li key={i} className="text-white">{offer}</li>
              ))}
            </ul>
            <a href="#" className="text-purple-500 font-semibold hover:underline">Learn More →</a>
          </div>
        </div>
      ))}
    </section>
  );
}
