import { FiSmile, FiTrendingUp, FiTarget, FiCalendar } from "react-icons/fi";


export function B_Hero() {
    const features = [
  { icon: FiSmile, title: "Custom Website", desc: "Built free, owned by you" },
  { icon: FiTrendingUp, title: "Google Ranking", desc: "SEO that actually works" },
  { icon: FiTarget, title: "Targeted Ads", desc: "ROI tracked to the dollar" },
  { icon: FiCalendar, title: "Auto-Booking", desc: "PMS synced in real-time" },
];
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#F3F8F4] pt-24 md:pt-28 lg:pt-32"
      style={{ fontFamily: "'DM Rounded', 'Nunito', sans-serif" }}
    >
      {/* Blobs (scaled down on mobile) */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#B8D8C4]/40 blur-[80px]" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#E8D5C4]/40 blur-[80px]" />
      <div className="absolute top-[30%] left-[30%] w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full bg-[#7EB8A0]/20 blur-[60px]" />

      {/* Main Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-6 pb-16 md:pb-20 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-88px)]">

        {/* LEFT */}
        <div className="text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 md:mb-8 shadow-sm border border-[#D4EBE0]">
            <span className="w-2 h-2 rounded-full bg-[#2D7A5F] animate-pulse" />
            <span className="text-[#2D7A5F] text-xs font-semibold">
              60+ Dental Practices Trust Us
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-[#0d2b20] leading-[1.1] tracking-[-1.5px] md:tracking-[-2px] mb-6">
            Your Practice<br />
            Deserves a<br />
            <span className="relative inline-block">
              <span className="relative z-10 text-[#2D7A5F]">
                Full Schedule.
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="#B8D8C4" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-[#4a6b5a] text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            We help dental clinics grow revenue with high-performance Google Ads, conversion-focused Web Design, and SEO that dominates local search.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3 mb-10 justify-center lg:justify-start">
            <a
              href="#contact"
              className="bg-[#2D7A5F] text-white rounded-xl px-8 py-4 font-bold text-sm hover:bg-[#1a5a42] transition-all duration-300 shadow-lg shadow-[#2D7A5F]/25 flex items-center justify-center gap-2"
            >
              See How It Works <span>→</span>
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start">
            {[
              "Google Ads Certified",
              "Conversion Optimized Website",
              "SEO-Driven Growth",
              "Built for Dental Practices"
            ].map(t => (
              <div key={t} className="flex items-center gap-2 text-xs md:text-sm text-[#4a6b5a]">
                <div className="w-5 h-5 rounded-full bg-[#D4EBE0] flex items-center justify-center text-[#2D7A5F] text-xs font-bold">
                  ✓
                </div>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mt-12 lg:mt-0">

          {/* Image Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#0d2b20]/20">
            <img
              src="https://images.unsplash.com/photo-1662837625421-1f9f79491cf5?w=500&auto=format&fit=crop&q=60"
              alt="Happy dental patient"
              className="w-full h-[300px] sm:h-[360px] md:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b20]/60 via-transparent to-transparent" />

            {/* Overlay card */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#0d2b20] font-bold text-sm">Monthly Growth</div>
                    <div className="text-[#4a6b5a] text-xs">Last 90 days</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#2D7A5F] text-xl md:text-2xl font-black">+247%</div>
                    <div className="text-[#4a6b5a] text-xs">New Patients</div>
                  </div>
                </div>

                <div className="flex gap-1 mt-3 items-end h-10">
                  {[30,45,35,60,55,75,90,100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-[#2D7A5F]"
                      style={{ height: `${h}%`, opacity: i === 7 ? 1 : 0.3 + i * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {features.map((f) => {
              const Icon = f.icon;

              return (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8F4EE] flex items-center gap-3 transition hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F0F8F4] flex items-center justify-center text-[#4f9f83]">
                    <Icon size={20} />
                  </div>

                  <div>
                    <div className="text-[#0d2b20] font-bold text-sm">
                      {f.title}
                    </div>
                    <div className="text-[#4a6b5a] text-xs">
                      {f.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating Social Proof (hidden on small screens to prevent overlap) */}
          <div className="hidden sm:block absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-[#E8F4EE]">
            <div className="flex items-center gap-1 text-yellow-400 text-sm mb-1">★★★★★</div>
            <div className="text-[#0d2b20] font-bold text-sm">4.9/5 Rating</div>
            <div className="text-[#4a6b5a] text-xs">500+ Reviews</div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="relative z-10 border-t border-[#D4EBE0] bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-6 flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[["60+","Dental Practices Scaled"],["102K+","Patients Acquired"],["$3.7M","Revenue Generated for Clients"],["98%","Client Retention Rate"]].map(([n,l]) => (
              <div key={l} className="flex flex-col md:flex-row text-center md:text-left items-center gap-4">
                <div className="text-2xl md:text-3xl font-black text-[#2D7A5F]">{n}</div>
                <div className="text-[#4a6b5a] text-xs leading-tight md:max-w-[100px]">{l}</div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="bg-[#2D7A5F] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-[#1a5a42] transition-all"
          >
            Book Audit →
          </a>
        </div>
      </div>
    </div>
  );
}