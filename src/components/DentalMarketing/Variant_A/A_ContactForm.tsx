export function A_ContactForm() {
  return (
    <section
      id="contact"
      className="bg-[#F5F0E8] py-20 md:py-24 px-6 md:px-10 lg:px-20 font-['DM_Sans',sans-serif]"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section label ── */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-px bg-[#C9A84C]" />
          <span className="text-[11px] tracking-[5px] text-[#C9A84C] uppercase font-semibold">
            THE NEXT STEP
          </span>
        </div>

        {/* ── Outer card: split layout ── */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-5 shadow-2xl shadow-[#1a0f00]/10">

          

          {/* ── Left panel — form ── */}
          <div className="lg:col-span-3 bg-white p-10 lg:p-14">

            <h3 className="font-['Syne',sans-serif] text-xl font-800 text-[#1a0f00] mb-1 font-bold tracking-tight">
              Tell us about your practice
            </h3>
            <p className="text-[#6a5a3a] text-sm mb-8">
              All fields marked <span className="text-red-500">*</span> are required.
            </p>

            <div className="flex flex-col gap-5">

              {/* Row 1: Practice Name + Full Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1a0f00] text-xs font-bold uppercase tracking-[1.5px]">
                    Dental Practice Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Smile Dental Studio"
                    className="w-full border border-[#e0d8c8] bg-[#faf8f4] text-[#1a0f00] placeholder:text-[#b8a88a] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] focus:bg-white focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1a0f00] text-xs font-bold uppercase tracking-[1.5px]">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Dr. Jane Smith"
                    className="w-full border border-[#e0d8c8] bg-[#faf8f4] text-[#1a0f00] placeholder:text-[#b8a88a] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] focus:bg-white focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1a0f00] text-xs font-bold uppercase tracking-[1.5px]">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="jane@smiledental.com"
                    className="w-full border border-[#e0d8c8] bg-[#faf8f4] text-[#1a0f00] placeholder:text-[#b8a88a] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] focus:bg-white focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1a0f00] text-xs font-bold uppercase tracking-[1.5px]">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full border border-[#e0d8c8] bg-[#faf8f4] text-[#1a0f00] placeholder:text-[#b8a88a] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] focus:bg-white focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 3: Website + City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1a0f00] text-xs font-bold uppercase tracking-[1.5px]">
                    Website <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    placeholder="www.smiledental.com"
                    className="w-full border border-[#e0d8c8] bg-[#faf8f4] text-[#1a0f00] placeholder:text-[#b8a88a] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] focus:bg-white focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1a0f00] text-xs font-bold uppercase tracking-[1.5px]">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Atlanta"
                    className="w-full border border-[#e0d8c8] bg-[#faf8f4] text-[#1a0f00] placeholder:text-[#b8a88a] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] focus:bg-white focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 4: Specialty dropdown */}
              {/* <div className="flex flex-col gap-1.5">
                <label className="text-[#1a0f00] text-xs font-bold uppercase tracking-[1.5px]">
                  Practice Specialty <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select className="w-full appearance-none border border-[#e0d8c8] bg-[#faf8f4] text-[#1a0f00] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] focus:bg-white focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200 cursor-pointer pr-10">
                    <option value="" className="text-[#b8a88a]">Select your specialty</option>
                    <option value="general">General Dentistry</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="pediatric">Pediatric Dentistry</option>
                    <option value="oral-surgery">Oral Surgery</option>
                    <option value="periodontics">Periodontics</option>
                    <option value="endodontics">Endodontics</option>
                    <option value="multi">Multi-Specialty</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#C9A84C]">
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div> */}

              {/* Row 5: Message textarea */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#1a0f00] text-xs font-bold uppercase tracking-[1.5px]">
                  Current Challenges
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your current marketing situation, monthly patient volume, and what you're hoping to achieve..."
                  className="w-full border border-[#e0d8c8] bg-[#faf8f4] text-[#1a0f00] placeholder:text-[#b8a88a] text-sm px-4 py-3 outline-none focus:border-[#C9A84C] focus:bg-white focus:ring-1 focus:ring-[#C9A84C]/30 transition-all duration-200 resize-none leading-relaxed"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#1a0f00] text-[#F5F0E8] text-sm font-bold uppercase tracking-[2px] py-4 hover:bg-[#C9A84C] hover:text-[#1a0f00] transition-all duration-300 group flex items-center justify-center gap-3 mt-1"
              >
                Start My Growth Audit
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>

              {/* Legal */}
              <p className="text-[#8a7a5a] text-[11px] leading-relaxed text-center">
                By submitting, you consent to receive informational SMS and appointment reminders from BixelTek. Msg & data rates may apply. Reply STOP to unsubscribe.{" "}
                <a href="/privacy-policy" className="underline underline-offset-2 hover:text-[#C9A84C] transition-colors">
                  Privacy Policy & Terms.
                </a>
              </p>
            </div>
          </div>

          {/* ── Right panel — dark obsidian ── */}
          <div className="lg:col-span-2 bg-[#1a0f00] p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden">

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C9A84C]/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#C9A84C]/8 to-transparent pointer-events-none" />

            <div>
              {/* Gold rule */}
              <div className="w-10 h-[2px] bg-[#C9A84C] mb-8" />

              <h2 className="font-['Syne',sans-serif] text-3xl sm:text-4xl font-black text-[#F5F0E8] leading-[1.1] tracking-[-1.5px] mb-6">
                Get Your Dental<br />
                Growth Audit.
              </h2>

              <p className="text-[#F5F0E8]/50 text-sm leading-relaxed mb-10">
                In one focused session, our dental growth strategists will analyze your Google Ads performance, website conversion rate, and local SEO standing — then show you exactly what it would take to hit your revenue goals.
              </p>

              {/* Trust signals */}
              <div className="flex flex-col gap-4">
                {[
                  ["◈", "A clear picture of where your practice stands online"],
                  ["◎", "Your biggest growth opportunities across Google Ads, SEO, and Web Design"],
                  ["◆", "A custom roadmap built around your revenue targets"],
                  ["◈", "Honest benchmarks so you know what real ROI looks like"],
                ].map(([icon, text]) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="text-[#C9A84C] text-base mt-0.5 flex-shrink-0">{icon}</span>
                    <span className="text-[#F5F0E8]/60 text-sm leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom quote */}
            <div className="mt-12 pt-8 border-t border-[#F5F0E8]/8">
              <p className="font-['Playfair_Display',serif] text-[#F5F0E8]/45 text-[13px] italic leading-relaxed">
                "The audit alone showed us three gaps we hadn't considered."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-6 h-6 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] text-[10px] font-bold flex-shrink-0">
                  SC
                </div>
                <span className="text-[#F5F0E8]/30 text-xs">Dr. Sarah Chen · Atlanta, GA</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}