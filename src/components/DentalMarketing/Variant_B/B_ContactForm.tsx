export function B_ContactForm() {
  return (
    <section
      id="contact"
      className="bg-[#F3F8F4] py-10 md:py-24 px-6 md:px-10 lg:px-16 font-['Nunito',sans-serif] relative overflow-hidden"
    >
      {/* Decorative blobs — Tailwind arbitrary values */}
      <div className="absolute top-[-8%] right-[-4%] w-[400px] h-[400px] rounded-full bg-[#B8D8C4]/30 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-4%] w-[360px] h-[360px] rounded-full bg-[#D4EBE0]/40 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 border border-[#D4EBE0] shadow-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-[#2D7A5F] animate-pulse flex-shrink-0" />
            <span className="text-[#2D7A5F] text-xs font-bold">Dental Growth Audit</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-[#0d2b20] leading-[1.1] tracking-[-2px] mb-4">
            Get Your Dental<br />
            <span className="text-[#2D7A5F] relative inline-block">
              Growth Audit.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 280 10" fill="none">
                <path d="M2 7 Q70 1 140 7 Q210 13 278 7" stroke="#B8D8C4" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-[#4a6b5a] text-base max-w-md mx-auto leading-relaxed mt-3">
            Stay ahead with dental marketing insights, ROI benchmarks, and practice growth strategies — delivered to your inbox.
          </p>
        </div>

        {/* ── Form card ── */}
        <div className="bg-white rounded-3xl border border-[#E8F4EE] shadow-xl shadow-[#0d2b20]/5 overflow-hidden">

          {/* Card top accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-[#2D7A5F] via-[#5DAF8C] to-[#B8D8C4]" />

          <div className="p-8 md:p-12">

            <div className="flex flex-col gap-6">

              {/* Row 1: Practice Name + Full Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[#0d2b20] text-[13px] font-extrabold">
                    Dental Practice Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Smile Dental Studio"
                    className="w-full rounded-xl border border-[#D4EBE0] bg-[#F3F8F4] text-[#0d2b20] placeholder:text-[#9abfaf] text-sm px-4 py-3.5 outline-none focus:border-[#2D7A5F] focus:bg-white focus:ring-2 focus:ring-[#2D7A5F]/15 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#0d2b20] text-[13px] font-extrabold">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Dr. Jane Smith"
                    className="w-full rounded-xl border border-[#D4EBE0] bg-[#F3F8F4] text-[#0d2b20] placeholder:text-[#9abfaf] text-sm px-4 py-3.5 outline-none focus:border-[#2D7A5F] focus:bg-white focus:ring-2 focus:ring-[#2D7A5F]/15 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[#0d2b20] text-[13px] font-extrabold">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="jane@smiledental.com"
                    className="w-full rounded-xl border border-[#D4EBE0] bg-[#F3F8F4] text-[#0d2b20] placeholder:text-[#9abfaf] text-sm px-4 py-3.5 outline-none focus:border-[#2D7A5F] focus:bg-white focus:ring-2 focus:ring-[#2D7A5F]/15 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#0d2b20] text-[13px] font-extrabold">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-xl border border-[#D4EBE0] bg-[#F3F8F4] text-[#0d2b20] placeholder:text-[#9abfaf] text-sm px-4 py-3.5 outline-none focus:border-[#2D7A5F] focus:bg-white focus:ring-2 focus:ring-[#2D7A5F]/15 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 3: Website + City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[#0d2b20] text-[13px] font-extrabold">
                    Website <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    placeholder="www.smiledental.com"
                    className="w-full rounded-xl border border-[#D4EBE0] bg-[#F3F8F4] text-[#0d2b20] placeholder:text-[#9abfaf] text-sm px-4 py-3.5 outline-none focus:border-[#2D7A5F] focus:bg-white focus:ring-2 focus:ring-[#2D7A5F]/15 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#0d2b20] text-[13px] font-extrabold">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Atlanta"
                    className="w-full rounded-xl border border-[#D4EBE0] bg-[#F3F8F4] text-[#0d2b20] placeholder:text-[#9abfaf] text-sm px-4 py-3.5 outline-none focus:border-[#2D7A5F] focus:bg-white focus:ring-2 focus:ring-[#2D7A5F]/15 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 4: Specialty dropdown */}
              {/* <div className="flex flex-col gap-2">
                <label className="text-[#0d2b20] text-[13px] font-extrabold">
                  Practice Specialty <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-xl border border-[#D4EBE0] bg-[#F3F8F4] text-[#0d2b20] text-sm px-4 py-3.5 outline-none focus:border-[#2D7A5F] focus:bg-white focus:ring-2 focus:ring-[#2D7A5F]/15 transition-all duration-200 cursor-pointer pr-10">
                    <option value="">Select your specialty</option>
                    <option value="general">General Dentistry</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="pediatric">Pediatric Dentistry</option>
                    <option value="oral-surgery">Oral Surgery</option>
                    <option value="periodontics">Periodontics</option>
                    <option value="endodontics">Endodontics</option>
                    <option value="multi">Multi-Specialty</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#2D7A5F]">
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div> */}

              {/* Row 5: Message textarea */}
              <div className="flex flex-col gap-2">
                <label className="text-[#0d2b20] text-[13px] font-extrabold">
                  Current Challenges
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your current marketing situation, monthly patient volume, and what you're hoping to achieve..."
                  className="w-full rounded-xl border border-[#D4EBE0] bg-[#F3F8F4] text-[#0d2b20] placeholder:text-[#9abfaf] text-sm px-4 py-3.5 outline-none focus:border-[#2D7A5F] focus:bg-white focus:ring-2 focus:ring-[#2D7A5F]/15 transition-all duration-200 resize-none leading-relaxed"
                />
              </div>

              {/* ── 3-col trust chips ── */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  ["🔒", "100% Confidential"],
                  ["⚡", "Response in 24 hrs"],
                  ["✓",  "No obligation"],
                ].map(([icon, text]) => (
                  <div key={text} className="flex items-center gap-2.5 bg-[#F3F8F4] rounded-xl px-4 py-3 border border-[#D4EBE0]">
                    <span className="text-[#2D7A5F] text-base flex-shrink-0">{icon}</span>
                    <span className="text-[#2d4a38] text-xs font-bold">{text}</span>
                  </div>
                ))}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#2D7A5F] text-white font-extrabold text-sm rounded-2xl py-4 hover:bg-[#1a5a42] active:scale-[.99] transition-all duration-300 shadow-lg shadow-[#2D7A5F]/25 flex items-center justify-center gap-3 group"
              >
                Subscribe
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>

              {/* Legal */}
              <p className="text-[#6a8a7a] text-[11px] leading-relaxed text-center">
                By submitting, you consent to receive informational SMS and appointment reminders from BixelTek. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP. Reply HELP for help.{" "}
                <a href="/privacy-policy" className="underline underline-offset-2 hover:text-[#2D7A5F] transition-colors font-semibold">
                  Privacy Policy & Terms.
                </a>
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}