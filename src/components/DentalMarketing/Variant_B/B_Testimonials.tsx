'use client'
import { useInView } from "@/lib/inView";


interface Testimonial {
  quote: string;
  name: string;
  role: string;
  result: string;
}

 const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Before Relevance we averaged 18 new patients a month — now we're consistently hitting 72. The ROI dashboard alone changed how I think about marketing spend.",
    name: "Dr. Sarah Chen",
    role: "General Dentist · Atlanta, GA",
    result: "+300% New Patients",
  },
  {
    quote:
      "We went from page 4 to the #1 Google result in our city in under 60 days. Our phone literally doesn't stop ringing anymore.",
    name: "Dr. Marcus Webb",
    role: "Cosmetic Dentist · Austin, TX",
    result: "#1 Google Ranking",
  },
  {
    quote:
      "Every dollar we spend, I can trace back to a specific patient and their treatment value. I've never had that kind of clarity before.",
    name: "Dr. Priya Nair",
    role: "Orthodontist · Seattle, WA",
    result: "$420K Added Revenue",
  },
];
export function B_Testiomonials() {
  const { ref: testiRef, inView: testiIn } = useInView();

  return (
    <section
      id="testimonals"
      ref={testiRef}
      className="py-20 md:py-28 lg:py-[120px] px-6 sm:px-8 lg:px-[60px] bg-white"
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-8 mb-10 md:mb-14">

          <div className="text-center md:text-left">

            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F3F8F4] rounded-full px-5 py-2 border border-[#D4EBE0] mb-4">
              <span className="text-[12px] font-bold text-[#2D7A5F]">
                ★★★★★ 4.9 Average Rating
              </span>
            </div>

            {/* Title */}
            <h2
              className={`
                font-['Nunito',sans-serif]
                font-black
                text-[clamp(28px,5vw,48px)]
                text-[#0d2b20]
                leading-[1.1]
                tracking-[-1.5px]
                transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
                ${testiIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              `}
            >
              Dentists Who Made<br />
              <span className="text-[#2D7A5F]">the Switch.</span>
            </h2>
          </div>

          {/* CTA Link */}
          <a
            href="#"
            className="text-[#2D7A5F] text-[14px] font-bold flex items-center gap-2 justify-center md:justify-end"
          >
            Be One of them →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">

          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`
                relative
                bg-[#F3F8F4]
                rounded-[20px]
                py-8 px-6
                border border-[#E8F4EE]
                transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
                ${testiIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Quote Mark */}
              <div className="absolute top-5 right-6 font-serif text-[60px] text-[#D4EBE0] leading-none select-none">
                &quot;
              </div>

              {/* Stars */}
              <div className="text-[#f59e0b] text-[14px] mb-4">
                ★★★★★
              </div>

              {/* Result Chip */}
              <div className="inline-block bg-[rgba(45,122,95,.1)] text-[#2D7A5F] text-[12px] px-4 py-1 rounded-full font-bold mb-4">
                {t.result}
              </div>

              {/* Quote */}
              <p className="font-['Nunito',sans-serif] text-[15px] text-[#2d4a38] leading-[1.75] mb-6 italic">
                &quot;{t.quote}&quot;
              </p>

              {/* Footer */}
              <div className="flex items-center gap-3 border-t border-[#D4EBE0] pt-5">
                <div className="w-10 h-10 rounded-full bg-[#2D7A5F] flex items-center justify-center text-white font-extrabold text-[15px]">
                  {t.name.split(" ")[2]?.charAt(0) || t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-extrabold text-[14px] text-[#0d2b20]">
                    {t.name}
                  </div>
                  <div className="text-[12px] text-[#4a6b5a] mt-[2px]">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}