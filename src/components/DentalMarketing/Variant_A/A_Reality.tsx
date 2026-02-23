'use client'
import { useInView } from "@/lib/inView";

   interface CaseStudy {
  practice: string;
  type: string;
  before: string;
  after: string;
  metric: string;
  time: string;
}
    const CASE_STUDIES: CaseStudy[] = [
  {
    practice: "Elmwood Family Dental",
    type: "General Practice · Ohio",
    before: "14",
    after: "67",
    metric: "New Patients/Month",
    time: "90 Days",
  },
  {
    practice: "Coastal Smiles Studio",
    type: "Cosmetic · California",
    before: "$38K",
    after: "$147K",
    metric: "Monthly Production",
    time: "4 Months",
  },
  {
    practice: "Bright Orthodontics",
    type: "Orthodontics · Texas",
    before: "Page 7",
    after: "Page 1",
    metric: "Google Position",
    time: "45 Days",
  },
];

export function A_Reality(){

       const { ref: painRef, inView: painIn } = useInView();
  return(
    
   <section
  ref={painRef}
  className="
    relative overflow-hidden
    py-[80px] px-6
    md:py-[100px] md:px-10
    lg:py-[120px] lg:px-[80px]
  "
>
  {/* Decorative background text */}
  <div
    className="
      absolute top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
      font-['Syne'] font-black
      text-[120px]
      sm:text-[180px]
      lg:text-[280px]
      text-[rgba(201,168,76,.05)]
      whitespace-nowrap
      pointer-events-none select-none
      tracking-[-4px]
      sm:tracking-[-6px]
      lg:tracking-[-10px]
    "
  >
    GROWTH
  </div>

  <div className="relative z-[1] max-w-[1100px] mx-auto">

    {/* Section label */}
    <div className="flex items-center gap-3 mb-10 md:mb-12">
      <div className="w-[48px] h-px bg-[#C9A84C]" />
      <span className="font-['DM_Sans'] text-[11px] tracking-[5px] text-[#C9A84C] uppercase">
         THE PROBLEM
      </span>
    </div>

    {/* Grid Layout */}
    <div className="
      grid grid-cols-1
      lg:grid-cols-2
      gap-12
      sm:gap-16
      lg:gap-20
      items-center
    ">

      {/* LEFT SIDE */}
      <div
        className={`
          transition-all duration-[800ms] ease-[cubic-bezier(.4,0,.2,1)]
          ${painIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"}
        `}
      >
        <h2
          className="
            font-['Syne'] font-extrabold
            text-[32px]
            sm:text-[42px]
            lg:text-[clamp(38px,4.5vw,58px)]
            text-[#1a0f00]
            leading-[1.1]
            lg:leading-[1.05]
            tracking-[-1px]
            lg:tracking-[-2px]
            mb-6
            lg:mb-7
          "
        >
          Most Dental Websites<br />
          Are <span className="text-[#C9A84C] italic">Invisible.</span><br />
          <span className="text-[65%] sm:text-[60%] font-normal text-[#6a5a3a]">
            Is yours one of them?
          </span>
        </h2>

        <p className="
          text-[15px]
          sm:text-[16px]
          text-[#6a5a3a]
          leading-[1.8]
          mb-6
          lg:mb-8
        ">
          If your practice isn&quot;t ranking, your ads aren&quot;t converting, and your website isn&quot;t built to drive appointments — you&quot;re funding your competitors&quot; growth. Here&quot;s what that gap looks like in real numbers.
        </p>

        <div className="flex flex-col gap-4">
          {[
            ["Ads spend with no measurable return"],
            ["Website traffic that never converts"],
            ["Competitors ranking above you locally"],
            ["No visibility into what's actually working"],
            ["Revenue that plateaus month after month"],
          ].map(([problem], i) => (
            <div
              key={i}
              className={`
                flex items-start gap-4
                p-4
                bg-[rgba(26,15,0,.03)]
                border-l-[3px] border-[#C9A84C]
                transition-all duration-[700ms] ease-[cubic-bezier(.4,0,.2,1)]
                ${painIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[20px]"}
              `}
              style={{ transitionDelay: `${i * 0.1 + 0.3}s` }}
            >
              <div className="w-[8px] h-[8px] rounded-full bg-[#C9A84C] mt-[7px] flex-shrink-0" />
              <div>
                <div className="font-semibold text-[14px] text-[#1a0f00]">
                  {problem}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className={`
          flex flex-col gap-5 w-full md:w-auto
          transition-all duration-[900ms] ease-[cubic-bezier(.4,0,.2,1)] delay-[200ms]
          ${painIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"}
        `}
      >
        {CASE_STUDIES.map((cs, i) => (
          <div
            key={i}
            className="
              relative overflow-hidden
              bg-white
              p-6
              sm:p-7
              lg:py-7 lg:px-8
              shadow-[0_4px_32px_rgba(26,15,0,.07)]
              border border-[rgba(201,168,76,.2)]
            "
          >
            <div className="
              absolute top-0 right-0
              w-[40px] h-[40px]
              sm:w-[50px] sm:h-[50px]
              lg:w-[60px] lg:h-[60px]
              bg-[linear-gradient(225deg,rgba(201,168,76,.15),transparent)]
            " />

            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="font-['Syne'] font-bold text-[15px] sm:text-[16px] text-[#1a0f00]">
                  {cs.practice}
                </div>
                <div className="text-[12px] text-[#8a7a5a] mt-[2px]">
                  {cs.type}
                </div>
              </div>

              <div className="
                bg-[rgba(201,168,76,.12)]
                text-[#8a6a1a]
                text-[10px]
                sm:text-[11px]
                py-[4px] px-[10px]
                sm:px-[12px]
                font-semibold
                tracking-[1px]
                uppercase
              ">
                {cs.time}
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-5">
              <div className="text-center">
                <div className="text-[12px] sm:text-[13px] text-[#aaa] mb-[4px]">
                  Before
                </div>
                <div className="font-['Syne'] text-[24px] sm:text-[28px] font-extrabold text-[#c44]">
                  {cs.before}
                </div>
              </div>

              <div className="flex-1 text-center">
                <div className="text-[18px] sm:text-[22px] text-[#C9A84C]">→</div>
                <div className="text-[10px] sm:text-[11px] text-[#8a7a5a] tracking-[1px] uppercase mt-[2px]">
                  {cs.metric}
                </div>
              </div>

              <div className="text-center">
                <div className="text-[12px] sm:text-[13px] text-[#aaa] mb-[4px]">
                  After
                </div>
                <div className="font-['Syne'] text-[24px] sm:text-[28px] font-extrabold text-[#2a7a4a]">
                  {cs.after}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  </div>
</section>
  )
}