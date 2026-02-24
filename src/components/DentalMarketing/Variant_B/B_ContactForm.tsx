'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaLock, FaBolt, FaCheckCircle } from "react-icons/fa";

const items = [
  { icon: FaLock, text: "100% Confidential" },
  { icon: FaBolt, text: "Response in 24 hrs" },
  { icon: FaCheckCircle, text: "No obligation" },
];


export function B_ContactForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    website: "",
    city: "",
    message: "",
    services: "Dental Marketing", 
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.company ||
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.website ||
      !formData.city
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const loadingToast = toast.loading("Submitting your form...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Submission failed");

      toast.success("Thank you! Our team will contact you shortly.", {
        id: loadingToast,
      });

      setFormData({
        company: "",
        name: "",
        email: "",
        phone: "",
        website: "",
        city: "",
        message: "",
        services: "Dental Marketing",
      });

      setTimeout(() => {
        router.push("/thank-you");
      }, 1000);
    } catch (error: any) {
      toast.error(error.message || "Something went wrong", {
        id: loadingToast,
      });
    }
  };
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
        <form onSubmit={handleSubmit}>
  <div className="bg-white rounded-3xl border border-[#E8F4EE] shadow-xl shadow-[#0d2b20]/5 overflow-hidden">

    {/* Card top accent bar */}
    <div className="h-1.5 bg-gradient-to-r from-[#2D7A5F] via-[#5DAF8C] to-[#B8D8C4]" />

    <div className="p-8 md:p-12">
      <div className="flex flex-col gap-6">

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[#0d2b20] text-[13px] font-extrabold">
              Dental Practice Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Dr. Jane Smith"
              className="w-full rounded-xl border border-[#D4EBE0] bg-[#F3F8F4] text-[#0d2b20] placeholder:text-[#9abfaf] text-sm px-4 py-3.5 outline-none focus:border-[#2D7A5F] focus:bg-white focus:ring-2 focus:ring-[#2D7A5F]/15 transition-all duration-200"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[#0d2b20] text-[13px] font-extrabold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full rounded-xl border border-[#D4EBE0] bg-[#F3F8F4] text-[#0d2b20] placeholder:text-[#9abfaf] text-sm px-4 py-3.5 outline-none focus:border-[#2D7A5F] focus:bg-white focus:ring-2 focus:ring-[#2D7A5F]/15 transition-all duration-200"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[#0d2b20] text-[13px] font-extrabold">
              Website <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
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
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Atlanta"
              className="w-full rounded-xl border border-[#D4EBE0] bg-[#F3F8F4] text-[#0d2b20] placeholder:text-[#9abfaf] text-sm px-4 py-3.5 outline-none focus:border-[#2D7A5F] focus:bg-white focus:ring-2 focus:ring-[#2D7A5F]/15 transition-all duration-200"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-[#0d2b20] text-[13px] font-extrabold">
            Current Challenges
          </label>
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your current marketing situation, monthly patient volume, and what you're hoping to achieve..."
            className="w-full rounded-xl border border-[#D4EBE0] bg-[#F3F8F4] text-[#0d2b20] placeholder:text-[#9abfaf] text-sm px-4 py-3.5 outline-none focus:border-[#2D7A5F] focus:bg-white focus:ring-2 focus:ring-[#2D7A5F]/15 transition-all duration-200 resize-none leading-relaxed"
          />
        </div>

        {/* Trust chips (unchanged) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
  {items.map((item, i) => {
    const Icon = item.icon;

    return (
      <div
        key={item.text}
        className="flex items-center gap-2.5 bg-[#F3F8F4] rounded-xl px-4 py-3 border border-[#D4EBE0]"
      >
        <span className="text-[#2D7A5F] text-base flex-shrink-0">
          <Icon size={16} />
        </span>
        <span className="text-[#2d4a38] text-xs font-bold">
          {item.text}
        </span>
      </div>
    );
  })}
      </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#2D7A5F] text-white font-extrabold text-sm rounded-2xl py-4 hover:bg-[#1a5a42] active:scale-[.99] transition-all duration-300 shadow-lg shadow-[#2D7A5F]/25 flex items-center justify-center gap-3 group"
        >
          Subscribe
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </button>

      </div>
    </div>
  </div>
</form>

      </div>
    </section>
  );
}