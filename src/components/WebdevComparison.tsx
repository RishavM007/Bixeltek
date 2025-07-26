import { LiaTimesSolid } from "react-icons/lia";
import { VscCheck } from "react-icons/vsc";

const ComparisonTable = () => {
  const tableData = [
    { freelancer: "One-person setup", agency: "Full team: Dev, Design, SEO, QA" },
    { freelancer: "No SEO focus", agency: "Built-in SEO, tracking & structure" },
    { freelancer: "Missed deadlines", agency: "Project timelines. Weekly updates." },
    { freelancer: "Ghosts after handover", agency: "30-day support & long-term care" },
    { freelancer: "One-size-fits-all", agency: "Strategy-backed, industry-specific sites" },
  ];

  return (
    <section className="bg-black text-white max-w-[85%] mx-auto py-6 md:py-16 px-6">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl md:text-5xl font-sofiasanscondensed font-bold mb-8">
            Before You Hire a Freelance Website Designer in Hyderabad — Read This.
          </h2>
          <p className="text-white text-sm md:text-lg mt-4">
            <span className="font-semibold text-sm text-red-500">Freelancer Vanished. Timeline Missed. Business Delayed.</span> Sound Familiar?
          </p>
          <p className="text-gray-400 text-sm md:text-base mt-4">
            We&apos;ve rebuilt websites for dozens of business owners who tried going the “freelancer” route first — and paid for it later.
          </p>
          <ul className="text-gray-50 mt-4 italic space-y-2">
            <li>“He stopped replying.”</li>

            <li>“It looked okay, but didn&apos;t rank.”</li>
            <li>“We lost 3 months and still had to start over with you guys.”</li>
          </ul>
          <p className="text-gray-300 text-sm md:text-base mt-4">
            A freelance website designer in Hyderabad might promise speed and savings. But when you&apos;re investing in your digital presence, you need more than just someone with a Canva account and a Gmail address.
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto px-0 md:px-10">
          <h3 className="text-3xl font-sofiasanscondensed font-bold text-white pb-8 text-left md:text-center">
            Why Smart Businesses Choose Bixeltek Over Freelancers
          </h3>
          <table className="w-full text-left border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-gray-600  text-white">
                <th className="py-3 text-left text-lg md:pl-5">Freelancer</th>
                <th className="py-3 text-left text-lg md:pl-10">Bixeltek Web Design Agency</th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="border-b  border-gray-700 hover:border-purple-500 transition-all">
                  <td className="py-5 text-gray-300 md:pl-5 text-left">
                    <span className="flex items-center justify-start gap-2">
                      <LiaTimesSolid className="text-red-500 text-lg" /> {row.freelancer}
                    </span>
                  </td>
                  <td className="py-5 text-white text-center md:pl-10">
                    <span className="flex items-center justify-start gap-2">
                      <VscCheck className="text-green-400 font-bold text-lg" /> {row.agency}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-gray-50 font-sofiasanscondensed text-2xl tracking-wide text-center mt-12">
        Don&apos;t gamble your brand&apos;s reputation. Partner with a team that&apos;s built to deliver — and built to stay.
      </p>
    </section>
  );
};

export default ComparisonTable;
