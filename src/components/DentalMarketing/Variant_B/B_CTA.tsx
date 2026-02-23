'use client'
import { useInView } from "@/lib/inView";


const trustItems: { icon: string; title: string; desc: string }[] = [
        { icon: "🏆", title: "Dedicated Account Manager", desc: "If we don't bring new patients, you don't pay" },
        { icon: "📋", title: "Ad Copywriting & Creative", desc: "Month-to-month, cancel anytime with 30 days notice" },
        { icon: "🆓", title: "Real-Time Analytics Dashboard", desc: "Custom designed site included, zero upfront cost" },
        { icon: "📊", title: "Transparent Monthly Reporting", desc: "Real-time dashboard tied to your actual production data" },
        { icon: "🔗", title: "SEO Content & Link Building", desc: "Connects with Dentrix, Eaglesoft, Open Dental & more" },
        { icon: "🤝", title: "Dedicated Account Teams", desc: "A real human who knows your practice, not a helpdesk" },
      ];


export function B_CTA() {
  const { ref: ctaRef, inView: ctaIn } = useInView();

  const isTablet =
    typeof window !== "undefined" && window.innerWidth < 1024;
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section
      ref={ctaRef}
      className="py-20 px-5 md:py-24 md:px-10 lg:py-[120px] lg:px-[60px] bg-[#F3F8F4]"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Trust Grid Section */}
        <div className="mb-[60px] md:mb-[80px]">
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(28px,5vw,48px)",
              fontWeight: 900,
              color: "#0d2b20",
              letterSpacing: "-1.5px",
              textAlign: "center",
              marginBottom: "8px",
              opacity: ctaIn ? 1 : 0,
              transform: ctaIn ? "translateY(0)" : "translateY(20px)",
              transition: "all .8s cubic-bezier(.4,0,.2,1)",
            }}
          >
            Everything You Need.
            <br />
            <span style={{ color: "#2D7A5F" }}>
              Nothing You Don't.
            </span>
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#4a6b5a",
              fontSize: "16px",
              maxWidth: "500px",
              margin: "0 auto 48px",
              opacity: ctaIn ? 1 : 0,
              transition:
                "all .8s cubic-bezier(.4,0,.2,1) .1s",
            }}
          >
            We don't sell add-ons or upsells. You get a complete, fully managed dental marketing system focused on one thing — growing your revenue.
          </p>

          {/* Responsive Grid */}
          <div
          className="grid grid-cols-[1fr] md:grid-cols-[1fr 1fr] lg:grid-cols-[1fr,1fr,1fr] gap-[16px]"
          >
            {trustItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "28px 24px",
                  border: "1px solid #E8F4EE",
                  boxShadow:
                    "0 2px 12px rgba(0,0,0,.04)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  opacity: ctaIn ? 1 : 0,
                  transform: ctaIn
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `all .7s cubic-bezier(.4,0,.2,1) ${
                    i * 0.08
                  }s`,
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "#F0F8F4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "15px",
                      color: "#0d2b20",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </div>
                  {/* <div
                    style={{
                      fontSize: "13px",
                      color: "#4a6b5a",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Card */}
        <div
  className={`
    relative overflow-hidden
    bg-[linear-gradient(135deg,#0d2b20,#1a4a32)]
    rounded-[28px]

    px-6 py-10
    sm:px-10 sm:py-14
    lg:p-16

    flex flex-col lg:flex-row
    items-start lg:items-center
    justify-between

    gap-8 lg:gap-10

    transition-all duration-900 delay-300 ease-[cubic-bezier(.4,0,.2,1)]
    ${ctaIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  `}
>
  {/* Blob */}
  <div
    className="
      absolute
      -top-[30%] -right-[5%]
      w-[250px] h-[250px]
      lg:w-[400px] lg:h-[400px]
      rounded-full
      bg-[rgba(184,216,196,.08)]
      blur-[60px]
      pointer-events-none
    "
  />


          {/* Left Content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background:
                  "rgba(255,255,255,.08)",
                borderRadius: "100px",
                padding: "6px 18px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#b8ff00",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  color:
                    "rgba(255,255,255,.7)",
                  fontWeight: 700,
                  letterSpacing: "2px",
                }}
              >
                NO CREDIT CARD REQUIRED
              </span>
            </div> */}

            <h2
              style={{
                fontFamily:
                  "'Nunito', sans-serif",
                fontSize: "clamp(24px,5vw,44px)",
                fontWeight: 900,
                color: "white",
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
              }}
            >
              Start Growing Your Practice
              <br />
              <span style={{ color: "#B8D8C4" }}>
                This Month.
              </span>
            </h2>

            <p
              style={{
                fontSize: "15px",
                color:
                  "rgba(255,255,255,.6)",
                marginTop: "12px",
              }}
            >
              Practices that invest in the right marketing system see measurable ROI within 90 days. Let's build yours.
            </p>
          </div>

          {/* Right Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              width: isMobile ? "100%" : "auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <a
              href="#"
              style={{
                background: "#2D7A5F",
                color: "white",
                borderRadius: "14px",
                padding: "18px 48px",
                fontFamily:
                  "'Nunito', sans-serif",
                fontWeight: 800,
                fontSize: "15px",
                textDecoration: "none",
                boxShadow:
                  "0 8px 32px rgba(45,122,95,.4)",
                textAlign: "center",
                whiteSpace: "nowrap",
                width: isMobile
                  ? "100%"
                  : "auto",
              }}
            >
              Talk to a Growth Strategist →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}