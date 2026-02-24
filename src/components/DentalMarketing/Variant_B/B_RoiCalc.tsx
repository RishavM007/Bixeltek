'use client'
import { useInView } from "@/lib/inView";
import { useEffect, useState } from "react";



export function B_ROICalc() {
  const { ref, inView } = useInView(0.1);

  const [patients,  setPatients]  = useState(20);
  const [adValue,   setAdValue]   = useState(800);
  const [closeRate, setCloseRate] = useState(40);


  function useCountUp(target: number, duration = 1200, active = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    setCount(0);
    let current = 0;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(t);
  }, [target, duration, active]);
  return count;
}


  // Same formula as B_ROICalc
  const monthly = Math.round(patients * (adValue * closeRate / 100));
  const withUs  = Math.round(monthly * 3.2);
  const gain    = withUs - monthly;

  const c1 = useCountUp(monthly, 1000, inView);
  const c2 = useCountUp(withUs,  1200, inView);
  const c3 = useCountUp(gain,    1400, inView);

  type SliderConfig = {
    id:          string;
    label:       string;
    val:         number;
    set:         (n: number) => void;
    min:         number;
    max:         number;
    step:        number;
    prefix:      string;
    suffix:      string;
    accent:      string;
    glow:        string;
  };

  const sliders: SliderConfig[] = [
    {
      id: "patients", label: "New patients / month",
      val: patients, set: setPatients,
      min: 5, max: 100, step: 1,
      prefix: "", suffix: "",
      accent: "#5DAF8C", glow: "rgba(93,175,140,.35)",
    },
    {
      id: "value", label: "Average treatment value",
      val: adValue, set: setAdValue,
      min: 200, max: 3000, step: 50,
      prefix: "$", suffix: "",
      accent: "#B8D8C4", glow: "rgba(184,216,196,.35)",
    },
    {
      id: "close", label: "Lead-to-patient close rate",
      val: closeRate, set: setCloseRate,
      min: 10, max: 90, step: 5,
      prefix: "", suffix: "%",
      accent: "#2D7A5F", glow: "rgba(45,122,95,.45)",
    },
  ];

  return (
    <section
      id="roi-calculator"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative overflow-hidden bg-[#0d2b20] py-20 md:py-28 px-6 md:px-10 lg:px-20 font-['Nunito',sans-serif]"
    >
      {/* ── Decorative blobs ── */}
      <div className="absolute top-[-15%] right-[-8%] w-[560px] h-[560px] rounded-full bg-[#2D7A5F]/10 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[-12%] left-[-6%] w-[420px] h-[420px] rounded-full bg-[#5DAF8C]/8 blur-[90px] pointer-events-none" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,216,196,.04) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(184,216,196,.04) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className={`transition-all duration-700 items-center justify-center text-center ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#2D7A5F]/20 border border-[#5DAF8C]/25 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#5DAF8C] animate-pulse flex-shrink-0" />
            <span className="text-[#5DAF8C] text-[11px] font-bold tracking-[3px] uppercase">ROI Calculator</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-[58px] font-black text-white leading-[1.05] tracking-[-2.5px] mb-4">
            What Is Your Practice<br />
            <span className="text-[#5DAF8C]">Actually Capable Of?</span>
          </h2>

          <p className="text-white text-base md:text-lg max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed">
            Drag the sliders — see how Google Ads, Web Design, and SEO working together can compound into measurable monthly revenue for your practice.
          </p>
        </div>

        {/* ── Main 2-col grid → stacks on mobile ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── LEFT: Sliders ── */}
          <div className="bg-white/[0.035] border border-[#B8D8C4]/10 rounded-2xl p-7 sm:p-10 flex flex-col gap-10">

            {sliders.map(({ id, label, val, set, min, max, step, prefix, suffix, accent, glow }) => {
              const pct = ((val - min) / (max - min)) * 100;
              return (
                <div key={id}>
                  {/* Label + current value */}
                  <div className="flex items-center justify-between mb-5 gap-3">
                    <span className="text-white text-sm font-semibold leading-tight">{label}</span>
                    <span
                      className="text-2xl sm:text-3xl font-black tracking-tight flex-shrink-0"
                      style={{ color: accent }}
                    >
                      {prefix}{val.toLocaleString()}{suffix}
                    </span>
                  </div>

                  {/* Slider track */}
                  <div className="relative h-6 flex items-center select-none">
                    {/* BG track */}
                    <div className="absolute inset-x-0 h-[4px] rounded-full bg-white/80" />
                    {/* Fill */}
                    <div
                      className="absolute left-0 h-[4px] rounded-full pointer-events-none"
                      style={{ width: `${pct}%`, background: accent, transition: "width .08s" }}
                    />
                    {/* Thumb dot */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-[2.5px] border-[#0d2b20] pointer-events-none z-10"
                      style={{
                        left: `calc(${pct}% - 10px)`,
                        background: accent,
                        boxShadow: `0 0 0 4px ${glow}`,
                        transition: "left .08s",
                      }}
                    />
                    {/* Native range (invisible, handles interaction) */}
                    <input
                      type="range"
                      min={min} max={max} step={step} value={val}
                      onChange={e => set(Number(e.target.value))}
                      className="absolute inset-0 w-full opacity-0 cursor-pointer z-20 h-full"
                    />
                  </div>

                  {/* Min / max hint */}
                  <div className="flex justify-between mt-2.5">
                    <span className="text-white text-[11px]">{prefix}{min}{suffix}</span>
                    <span className="text-white text-[11px]">{prefix}{max}{suffix}</span>
                  </div>
                </div>
              );
            })}

            {/* Channel tags */}
            <div className="pt-5 border-t border-[#B8D8C4]/10 flex flex-wrap gap-2">
              {["Google Ads", "Web Design", "SEO"].map(ch => (
                <span key={ch} className="text-[11px] font-bold text-[#5DAF8C] bg-[#2D7A5F]/20 border border-[#2D7A5F]/30 rounded-full px-3 py-1">
                  {ch}
                </span>
              ))}
              <span className="text-white text-[11px] mt-0.5 ml-1 self-center">— all tracked to revenue</span>
            </div>
          </div>

          {/* ── RIGHT: Results ── */}
          <div className="flex flex-col gap-3">

            {/* Current revenue */}
            <div className="bg-[#B8D8C4]/5 border border-[#B8D8C4]/15 rounded-2xl p-7 sm:p-9 flex-1">
              <div className="text-white text-[10px] font-bold tracking-[3px] uppercase mb-3">
                Your Current Monthly Revenue
              </div>
              <div className="text-4xl md:text-5xl font-black text-[#B8D8C4] tracking-[-2.5px] leading-none tabular-nums">
                ${c1.toLocaleString()}
              </div>
              <div className="text-[#B8D8C4] text-sm mt-3">Based on your practice inputs</div>
            </div>

            {/* With BixelTek */}
            <div className="relative bg-[#2D7A5F]/12 border border-[#2D7A5F]/30 rounded-2xl p-7 sm:p-9 flex-1 overflow-hidden">
              {/* Accent line top */}
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-[#5DAF8C] via-[#2D7A5F] to-transparent" />
              <div className="text-white text-[10px] font-bold tracking-[3px] uppercase mb-3">
                With BixelTek · Avg. 3.2× ROI
              </div>
              <div className="text-4xl md:text-5xl font-black text-[#5DAF8C] tracking-[-2.5px] leading-none tabular-nums">
                ${c2.toLocaleString()}
              </div>
              <div className="text-[#5DAF8C] text-sm mt-3">
                Conservative estimate · Typical within 90 days
              </div>
            </div>

            {/* Monthly upside + CTA */}
            <div className="bg-white/[0.035] border border-[#B8D8C4]/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <div className="text-white text-[10px] font-bold tracking-[3px] uppercase mb-2">
                  Monthly Revenue Upside
                </div>
                <div className="text-4xl md:text-5xl font-black text-white tracking-[-2px] leading-none tabular-nums">
                  +${c3.toLocaleString()}
                </div>
              </div>
              <a
                href="#contact"
                className="bg-[#2D7A5F] hover:bg-[#1a5a42] active:scale-[.98] text-white font-extrabold text-sm rounded-xl px-7 py-4 transition-all duration-300 shadow-lg shadow-[#2D7A5F]/30 whitespace-nowrap flex-shrink-0 flex items-center gap-2 group w-full sm:w-auto justify-center"
              >
                Capture This Revenue
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Disclaimer ── */}
        <p className="text-center text-white text-[13px] mt-6 leading-relaxed">
          Calculator reflects average ROI improvement across 60+ dental client practices via Google Ads, Web Design & SEO. Individual results vary by market, specialty, and budget.
        </p>
      </div>
    </section>
  );
}
