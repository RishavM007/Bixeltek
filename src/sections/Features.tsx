const tabs = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Boost your visibility with keyword optimization and on-page strategies for better search rankings.",
    isNew: false,
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description: "Drive targeted traffic and maximize ROI with expertly managed PPC campaigns.",
    isNew: false,
  },
  {
    title: "Social Media Marketing",
    description: "Engage audiences across platforms with creative and impactful social media campaigns.",
    isNew: false,
  },
  {
    title: "Email Marketing",
    description: "Build customer loyalty and drive sales with personalized email strategies.",
    isNew: false,
  },
  {
    title: "Web Development",
    description: "Create stunning, user-friendly websites that showcase your brand and drive conversions.",
    isNew: false,
  },
  {
    title: "Analytics & Reporting",
    description: "Track, analyze, and optimize your campaigns for measurable results and growth.",
    isNew: false,
  },
];

export const Features = () => {
  return (
    <section className="text-white mt-10 mb-10">
      <div className="container">
        <h2 className="text-5xl font-medium text-center tracking-tighter">Our Services</h2>
        <p className="text-white/70 text-center text-md lg:text-lg tracking-tight mt-5">
          We offer SEO, PPC, Social Media Marketing, Email Marketing, Web Development, and Web Analytics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="relative p-7 flex flex-col justify-between h-full rounded-lg group bg-black cursor-pointer"
            >
            
              <div
                className="absolute inset-0 rounded-lg z-0 top-[-1px] left-[-1px] right-[-1px] bottom-[-1px]"
                style={{
                  backgroundImage: "linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)",
                  zIndex: "-1",
                  boxShadow: "0 0 10px 1px rgba(112, 40, 228, 0.5)",
                  borderRadius: "inherit",
                }}
              ></div>

           
              <h3 className="text-2xl font-semibold mb-4 z-10">{tab.title}</h3>
           
              <p className="text-sm text-white/60 mt-auto z-10">{tab.description}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
