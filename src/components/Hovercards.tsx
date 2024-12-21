import React from "react";

type CardProps = {
  title: string;

  href: string;
};

const HoverDevCards: React.FC = () => {
  return (
    <div className="p-4">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card title="Advanced Keyword Targeting"  href="#" />
        <Card title="Ad Copy That Converts" href="#" />
        <Card title="A/B Testing Maximizes ROI"  href="#" />
        <Card title="Real-Time Analytics Reporting"  href="#" />
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, href }) => {
    return (
      <a
        href={href}
        className="w-full max-w-md py-10 px-6 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
      >
        <div className="absolute  inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
        <h3 className="font-medium text-center text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
          {title}
        </h3>
      </a>
    );
  };
  
export default HoverDevCards;
