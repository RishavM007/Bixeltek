'use client'
import { useInView } from "@/lib/inView";

export function B_ClientLogos() {
  const { ref, inView } = useInView(0.12);

  const clients = [
  {
    id: 1,
    name: "Markham Dental",
    src: "/markham.png",
    feedback:
      "BixelTek transformed our online presence and delivered consistent patient growth within months.",
  },
  {
    id: 2,
    name: "Revita Dentistry",
    src: "/RevitaDentistryLogo.webp",
    feedback:
      "Their Google Ads strategy gave us measurable ROI and predictable new bookings.",
  },
  {
    id: 3,
    name: "Listiyo Family Dental",
    src: "/ListiyoFamilyDental_Primary_Mark.webp",
    feedback:
      "Professional, data-driven, and transparent — exactly what we needed to scale.",
  },
];

  const stats = [
    { value: "60+",  label: "Practices scaled"             },
    { value: "3.2×", label: "Avg. ROI within 90 days"      },
    { value: "61%",  label: "Lower cost-per-patient"        },
    { value: "98%",  label: "Client retention rate"         },
  ];

  return (
    <section
      id="our-clients"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative bg-white py-20 md:py-28 px-6 md:px-10 lg:px-20 font-['Nunito',sans-serif] overflow-hidden"
    >
      {/* Top gradient rule matching Variant C card style */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#2D7A5F] via-[#5DAF8C] to-[#B8D8C4]" />

      {/* Subtle sage blob */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#D4EBE0]/50 blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F3F8F4] border border-[#D4EBE0] rounded-full px-5 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2D7A5F] flex-shrink-0" />
            <span className="text-[#2D7A5F] text-[11px] font-bold tracking-[3px] uppercase">Dental Clients</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-[50px] font-black text-[#0d2b20] leading-[1.08] tracking-[-2px] mb-5">
            Practices Generating<br />
            <span className="text-[#2D7A5F]">Measurable ROI With Us.</span>
          </h2>

          <p className="text-[#4a6b5a] text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            These dental practices trust BixelTek to turn Google Ads, Web Design, and SEO into predictable, revenue-attributed growth — every month.
          </p>
        </div>

        {/* ── Logo cards — 1 col mobile, 3 col sm+ ── */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
  {clients.map((c, i) => (
    <div
      key={c.id}
      className={`
        group bg-white rounded-2xl border border-[#E8F4EE]
        p-8 flex flex-col items-center text-center
        hover:shadow-xl hover:shadow-[#2D7A5F]/10
        hover:-translate-y-1 transition-all duration-500
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${i * 0.12}s` }}
    >
      {/* Logo */}
      <div className="w-full h-20 flex items-center justify-center mb-6">
        <img
          src={c.src}
          alt={`${c.name} logo`}
          className="max-h-14 max-w-[180px] object-contain transition duration-500"
        />
      </div>

      {/* Short Feedback */}
      <p className="text-[#4a6b5a] text-sm leading-relaxed italic mb-4">
        “{c.feedback}”
      </p>

      {/* Client Name */}
      <div className="text-[#0d2b20] font-bold text-sm">
        {c.name}
      </div>
    </div>
  ))}
</div>

        {/* ── Stats bar — 2-col mobile, 4-col desktop ── */}
        {/* <div
          className={`
            bg-[#F3F8F4] border border-[#D4EBE0] rounded-2xl overflow-hidden
            grid grid-cols-2 lg:grid-cols-4
            divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-[#D4EBE0]
            mb-14
            transition-all duration-700 delay-300
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
          `}
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center px-6 py-8 gap-1">
              <div className="text-3xl sm:text-4xl font-black text-[#2D7A5F] tracking-[-1.5px] leading-none">
                {s.value}
              </div>
              <div className="text-[#4a6b5a] text-xs sm:text-sm font-semibold leading-tight mt-1.5">
                {s.label}
              </div>
            </div>
          ))}
        </div> */}

        {/* ── Dark CTA card — matches Variant C style ── */}
        <div
          className={`
            relative bg-[#0d2b20] rounded-3xl overflow-hidden
            px-8 md:px-14 py-10 md:py-14
            flex flex-col md:flex-row items-start md:items-center justify-between gap-8
            transition-all duration-700 delay-[400ms]
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
          `}
        >
          {/* Blob */}
          <div className="absolute top-[-30%] right-[-5%] w-80 h-80 rounded-full bg-[#2D7A5F]/12 blur-[70px] pointer-events-none" />
          {/* Top accent */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#5DAF8C] via-[#2D7A5F] to-transparent" />

          <div className="relative z-10 flex-1">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-[#B8D8C4]/20 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5DAF8C] flex-shrink-0" />
              <span className="text-[#B8D8C4]/65 text-[11px] font-bold tracking-[2px] uppercase">Google Ads · Web Design · SEO</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.1] tracking-[-1.5px] mb-3">
              Ready to Be the Next<br />
              <span className="text-[#5DAF8C]">Practice on This List?</span>
            </h3>

            <p className="text-white text-sm leading-relaxed max-w-md">
              Google Ads, Web Design, and SEO — all working together, all accountable to your production revenue. Book a strategy call and we&apos;ll show you exactly what&apos;s possible for your market.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-3 flex-shrink-0 w-full sm:w-auto">
            <a
              href="#contact"
              className="bg-[#2D7A5F] hover:bg-[#1a5a42] active:scale-[.98] text-white font-extrabold text-sm rounded-xl px-8 py-4 transition-all duration-300 shadow-lg shadow-[#2D7A5F]/30 text-center whitespace-nowrap flex items-center justify-center gap-2 group"
            >
              Book a Strategy Call
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <a
              href="#roi-calculator"
              className="text-[#B8D8C4]/80 hover:text-[#B8D8C4]/70 text-xs font-semibold text-center transition-colors"
            >
              Calculate your ROI first ↑
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}