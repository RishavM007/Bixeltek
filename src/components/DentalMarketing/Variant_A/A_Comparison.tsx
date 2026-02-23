'use client'
import { useInView } from "@/lib/inView";

export function A_Comparison() {
  const { ref, inView } = useInView();

  const rows = [
  { label: "Website Build",        them: "Charge $3,000–$8,000 upfront, separate from your retainer",  us: "Included in your retainer. No surprise costs." },
  { label: "Contract Length",      them: "12–24 month lock-in with early exit penalties",               us: "Month-to-month. We earn your business every month." },
  { label: "ROI Visibility",       them: "Vanity metrics — clicks, impressions, traffic reports",        us: "Revenue-tied reporting. You see cost-per-patient, not just clicks." },
  { label: "SEO Approach",         them: "Generic blog posts, slow results, no local focus",            us: "Local-first SEO architecture built to rank your practice fast." },
  { label: "Ad Management",        them: "Optimized for clicks, billed on ad spend percentage",         us: "Optimized for booked appointments and measurable patient ROI." },
  { label: "Practice Integration", them: "Separate tools, siloed data, no system sync",                 us: "Synced with Dentrix, Eaglesoft & your existing practice stack." },
  { label: "Account Management",   them: "High churn, rotating reps with no practice context",          us: "Dedicated strategist who knows your goals, market, and patients." },
  { label: "Industry Expertise",   them: "Generic agency serving every industry",                       us: "Built exclusively for dental practices. No guesswork." },
  ];

  return (
    <section
  ref={ref as React.RefObject<HTMLElement>}
  className="bg-[#1a0f00] py-[100px] px-[24px] md:py-[120px] md:px-[72px]"
>
  <div className="max-w-[1120px] mx-auto">

    {/* ── Header Label ── */}
    <div className="flex items-center gap-3 mb-6">
      <div className="w-[48px] h-[1px] bg-[#C9A84C]" />
      <span className="font-['DM_Sans',sans-serif] text-[11px] tracking-[5px] uppercase text-[#C9A84C]">
        THE DIFFERENCE
      </span>
    </div>

    {/* ── Heading ── */}
    <h2
      className={`
        font-['Syne',sans-serif]
        text-[clamp(36px,4.5vw,58px)]
        font-extrabold
        leading-[1.05]
        tracking-[-2px]
        text-[#F5F0E8]
        mb-12 md:mb-[60px]
        transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      Other Agencies.<br />
      <span className="text-[#C9A84C]">
        Then There&apos;s Relevance.
      </span>
    </h2>

    {/* ── Table Header ── */}
    <div className="hidden lg:grid grid-cols-3 gap-[2px] mb-[2px]">
      <div className="bg-[rgba(255,255,255,.04)] px-6 py-4">
        <span className="font-['DM_Sans',sans-serif] text-[11px] tracking-[3px] uppercase text-[rgba(245,240,232,.3)]">
          Comparison Point
        </span>
      </div>

      <div className="bg-[rgba(255,255,255,.04)] px-6 py-4 flex items-center gap-2">
        <span className="w-[6px] h-[6px] rounded-full bg-[#c44]" />
        <span className="font-['Syne',sans-serif] text-[13px] font-bold text-[#c44]">
          Other Agencies
        </span>
      </div>

      <div className="bg-[rgba(201,168,76,.08)] px-6 py-4 flex items-center gap-2">
        <span className="w-[6px] h-[6px] rounded-full bg-[#C9A84C]" />
        <span className="font-['Syne',sans-serif] text-[13px] font-bold text-[#C9A84C]">
          Relevance
        </span>
      </div>
    </div>

    {/* ── Table Rows ── */}
    {rows.map((r, i) => (
      <div
        key={i}
        className={`
          grid grid-cols-1 lg:grid-cols-3 gap-[2px] mb-[2px]
          transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
          ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
        `}
        style={{ transitionDelay: `${i * 0.06}s` }}
      >
        {/* Label */}
        <div className="bg-[rgba(255,255,255,.025)] px-6 py-5 flex items-center">
          <span className="font-['DM_Sans',sans-serif] text-[14px] font-medium text-[rgba(245,240,232,.5)]">
            {r.label}
          </span>
        </div>

        {/* Them */}
        <div className="bg-[rgba(255,255,255,.02)] px-6 py-5 flex items-center gap-3">
          <span className="text-[#c44] text-[14px] shrink-0">✕</span>
          <span className="font-['DM_Sans',sans-serif] text-[14px] text-[rgba(245,240,232,.38)]">
            {r.them}
          </span>
        </div>

        {/* Us */}
        <div className="bg-[rgba(201,168,76,.05)] px-6 py-5 flex items-center gap-3">
          <span className="text-[#C9A84C] text-[16px] shrink-0">✓</span>
          <span className="font-['DM_Sans',sans-serif] text-[14px] font-medium text-[rgba(245,240,232,.75)]">
            {r.us}
          </span>
        </div>
      </div>
    ))}

    {/* ── Bottom CTA ── */}
    <div className="mt-12 md:mt-[60px] pt-10 border-t border-[rgba(245,240,232,.08)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

      <div>
        <div className="font-['Syne',sans-serif] text-[clamp(22px,3vw,32px)] font-extrabold tracking-[-1px] text-[#F5F0E8]">
          You deserve better than what you&apos;ve settled for.
        </div>
      </div>

      <a
        href="#contact"
        className="
          bg-[#C9A84C] text-[#1a0f00]
          py-[16px] md:py-[18px]
          px-[36px] md:px-[48px]
          font-['DM_Sans',sans-serif]
          font-bold text-[13px] md:text-[14px]
          tracking-[2px] uppercase
          whitespace-nowrap
          transition-all duration-300
          hover:opacity-90
        "
      >
        Partner With Us →
      </a>
    </div>

  </div>
</section>
  );
}