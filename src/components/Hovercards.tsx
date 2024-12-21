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
          className="w-full max-w-md py-10 px-6 rounded relative overflow-hidden bg-gradient-to-r from-purple-600 to-violet-400 z-20"
        >
          <div className="absolute inset-0 bg-white rounded m-[2px] z-10"></div>
          <div className="relative z-20">
            <h3 className="font-medium text-center text-lg text-black">
              {title}
            </h3>
          </div>
        </a>
      );      
  };
  
export default HoverDevCards;
