'use client'
import { useInView } from "@/lib/inView";

export function A_Services() {
  const { ref, inView } = useInView();

  const services = [
    {
      icon: "◈",
      title: "Custom Website Build",
      tag: "Included Free",
      desc: "A conversion-optimized dental website that turns visitors into booked appointments. Built fast, mobile-first, and designed specifically for dental practices.",
      highlight: true,
    },
    {
      icon: "◎",
      title: "Your GPM Dashboard",
      tag: "Ongoing",
      desc: "Full visibility into your Google Ads spend, SEO rankings, and lead performance — all in one real-time dashboard so you always know your ROI.",
      highlight: false,
    },
    {
      icon: "◆",
      title: "Paid & Map Ads",
      tag: "Managed",
      desc: "Targeted Google Ads and Google Maps campaigns that put your practice in front of high-intent local patients exactly when they're searching.",
      highlight: false,
    },
    {
      icon: "◉",
      title: "SEO",
      tag: "Real-time",
      desc: "Long-term local SEO strategy that builds authority, improves rankings, and drives consistent organic traffic from patients in your area.",
      highlight: false,
    },
    {
      icon: "◐",
      title: "Review Generation",
      tag: "Automated",
      desc: "A systematic process that grows your 5-star reviews, builds trust, and turns your online reputation into a patient acquisition engine.",
      highlight: false,
    },
    {
      icon: "◑",
      title: "Reputation Monitoring",
      tag: "24/7",
      desc: "Round-the-clock monitoring of your online presence so your brand stays strong and any issues are addressed before they cost you patients.",
      highlight: false,
    },
  ];

  return (
   <section
  ref={ref as React.RefObject<HTMLElement>}
  className="relative overflow-hidden bg-[#F5F0E8] pb-20 px-6 md:py-[120px] md:px-[72px]"
>
  {/* Decorative Vertical Rule (hidden on mobile) */}
  <div className="hidden md:block absolute left-[72px] top-[120px] bottom-[120px] w-[1px] bg-[linear-gradient(to_bottom,transparent,rgba(201,168,76,.3),transparent)]" />

  <div className="max-w-[1120px] mx-auto">

    {/* ── Header ── */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[60px] items-end mb-16 md:mb-[72px]">

      {/* Left */}
      <div
        className={`
          transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-[48px] h-[1px] bg-[#C9A84C]" />
          <span className="font-['DM_Sans',sans-serif] text-[11px] tracking-[5px] text-[#C9A84C] uppercase">
            THE OFFER
          </span>
        </div>

        <h2 className="font-['Syne',sans-serif] text-[clamp(38px,4.5vw,58px)] font-extrabold text-[#1a0f00] leading-[1.05] tracking-[-2px]">
          One Retainer.<br />
          <span className="text-[#C9A84C]">Everything Included.</span>
        </h2>
      </div>

      {/* Right */}
      <div
        className={`
          transition-all duration-700 delay-200 ease-[cubic-bezier(.4,0,.2,1)]
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        <p className="text-[17px] text-[#6a5a3a] leading-[1.8] mb-5">
          No piecemeal services. No hidden costs. One engagement that covers everything your practice needs to dominate local search, convert visitors, and grow revenue.
        </p>
      </div>
    </div>

    {/* ── Service Cards Grid ── */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
      {services.map((s, i) => (
        <div
          key={i}
          className={`
            relative overflow-hidden p-[36px] md:p-[44px]
            transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            ${s.highlight
              ? "bg-[#1a0f00]"
              : "bg-white border border-[rgba(201,168,76,.15)]"}
          `}
          style={{ transitionDelay: `${i * 0.08}s` }}
        >
          {/* Highlight shimmer */}
          {s.highlight && (
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[radial-gradient(circle,rgba(201,168,76,.15),transparent)]" />
          )}

          {/* Top Row */}
          <div className="flex justify-between items-start mb-7">
            <span className="font-['DM_Sans',sans-serif] text-[26px] text-[#C9A84C]">
              {s.icon}
            </span>

            {/* <span
              className={`
                font-['DM_Sans',sans-serif] text-[10px] tracking-[2px] uppercase
                border border-[rgba(201,168,76,.2)]
                py-[3px] px-[10px]
                ${s.highlight
                  ? "text-[rgba(201,168,76,.6)]"
                  : "text-[#8a7a5a]"}
              `}
            >
              {s.tag}
            </span> */}
          </div>

          {/* Title */}
          <div
            className={`
              font-['Syne',sans-serif] font-bold text-[17px] mb-3
              ${s.highlight ? "text-[#F5F0E8]" : "text-[#1a0f00]"}
            `}
          >
            {s.title}
          </div>

          {/* Description */}
          <div
            className={`
              text-[14px] leading-[1.75]
              ${s.highlight
                ? "text-[rgba(245,240,232,.55)]"
                : "text-[#6a5a3a]"}
            `}
          >
            {s.desc}
          </div>

          {/* Bottom Accent Line */}
          <div
            className={`
              absolute bottom-0 left-0 right-0 h-[2px]
              ${
                s.highlight
                  ? "bg-[linear-gradient(to_right,#C9A84C,rgba(201,168,76,.2))]"
                  : "bg-[rgba(201,168,76,.1)]"
              }
            `}
          />
        </div>
      ))}
    </div>

    {/* ── Footer Callout ── */}
    <div className="mt-[2px] bg-[rgba(201,168,76,.06)] border border-[rgba(201,168,76,.15)] p-6 md:p-[32px_40px] flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
      
      <div className="font-['Playfair_Display',serif] text-[17px] md:text-[18px] text-[#1a0f00] italic">
        You deserve better than what you&apos;ve settled for. Your practice and your patients deserve more.
      </div>

      <a
        href="#"
        className="
          bg-[#1a0f00] text-[#F5F0E8]
          py-[14px] px-[36px]
          font-['DM_Sans',sans-serif]
          font-bold text-[13px]
          tracking-[2px] uppercase
          whitespace-nowrap
          transition-all duration-300
          hover:opacity-90
        "
      >
        Let&quot;s Talk →
      </a>
    </div>

  </div>
</section>
  );
}