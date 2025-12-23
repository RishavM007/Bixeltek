export const metadata = {
  title: "Dental Marketing Agency | Get More Patients & Appointments – Bixeltek",
  description:
    "Bixeltek is a dental marketing agency helping dental clinics grow with SEO, Google Ads, and high-converting dental websites. Get predictable patient growth.",
  keywords:
    "dental marketing, dental marketing agency, marketing for dentists, dental SEO, dentist Google Ads, dental website design, dental practice marketing",
  openGraph: {
    title: "Dental Marketing That Brings Real Patients | Bixeltek",
    description:
      "We help dental practices generate consistent appointments using SEO, Google Ads, and conversion-focused dental websites.",
    type: "website",
  },
  alternates: {
    canonical: "https://bixeltek.com/dental-marketing",
  },
};


import React from 'react';
import { Star,Phone, Mail, TrendingUp, Users, Target, Zap, Award, BarChart3, MessageSquare, Globe, Search, MousePointerClick, Shield } from 'lucide-react';
import AccordianDental from '@/components/Dental/AccordianDental';
import DentalMarketingHero from '@/components/Dental/DentalMarketingHero';
import DentalMarketingPain from '@/components/Dental/DentalMarketingPain';
import DentalMarketingSolutions from '@/components/Dental/DentalMarketingSolutions';
import DentalMarketingProcess from '@/components/Dental/DentalMarketingProcess';
import DentalMarketingExamples from '@/components/Dental/DentalMarketingExamples';
import DentalMarketingWhyChooseUs from '@/components/Dental/DentalMarketingWhyChooseUs';
import DentalMarketingFinalCTA from '@/components/Dental/DentalMarketingFinalCTA';

export default function BixelTekLanding() {


  const services = [
    { icon: Globe, title: "Custom Dental Websites", desc: "Strategically built websites focused on lead generation, patient trust, and consistent bookings" },
    { icon: Search, title: "Local SEO Domination", desc: "Rank #1 on Google Maps and search results in your area" },
    { icon: MousePointerClick, title: "Google Ads & PPC", desc: "High-converting ad campaigns that fill your schedule" },
    { icon: MessageSquare, title: "Social Media Marketing", desc: "Engage your community and build trust on every platform" },
    { icon: Star, title: "Reputation Management", desc: "Get more 5-star reviews and manage your online presence" },
    { icon: TrendingUp, title: "Content Marketing", desc: "Educational content that establishes you as the local expert" },
    { icon: Phone, title: "Call Tracking & Analytics", desc: "Know exactly where every patient comes from" },
    { icon: Mail, title: "Email Marketing", desc: "Keep patients coming back with automated retention campaigns" }
  ];

  const process = [
    { title: "Discovery Call", desc: "We analyze your practice goals, competition, and growth opportunities" },
    { title: "Custom Strategy", desc: "Receive a tailored marketing roadmap designed for your unique practice" },
    { title: "Launch & Implement", desc: "We execute the plan while you focus on delivering exceptional care" },
    { title: "Optimize & Scale", desc: "Continuous optimization ensures maximum ROI and sustainable growth" }
  ];

  const caseStudies = [
    {
      name: "Markham Gateway Dentistry",
      location: "Scarborough, CA",
      challenge: "Started with $20k revenue per month, we scaled them to over $100,000 a month in revenues ",
      result: "127 new patients in 90 days",
      metrics: { patients: "+380%", roi: "520%", calls: "+295%" }
    },
    {
      name: "Revita Family Dentistry",
      location: "Brampton, CA",
      challenge: "From brand new dentistry to $80,000 in revenues a months",
      result: "Ranked #1 for 23 local keywords",
      metrics: { traffic: "+425%", bookings: "+310%", revenue: "+265%" }
    },
    {
      name: "Listiyo Family Dentistry",
      location: "California, US",
      challenge: "Struggling with high competition and low calls , we help them consistently book 50 patients a month",
      result: "Cut cost per patient by 65%",
      metrics: { cpl: "-65%", conversions: "+240%", roi: "680%" }
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      practice: "Summit Dental Care",
      location: "Denver, CO",
      text: "BixelTek transformed our practice. We went from struggling to fill our schedule to having a 3-week waitlist. Their dental expertise makes all the difference.",
      rating: 5
    },
    {
      name: "Dr. James Park",
      practice: "Park Family Dentistry",
      location: "Seattle, WA",
      text: "Finally, a marketing agency that understands dentistry. The ROI has been incredible - we've seen a 300% increase in new patient inquiries.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      practice: "Smile Bright Orthodontics",
      location: "Phoenix, AZ",
      text: "Professional, transparent, and results-driven. BixelTek doesn't just promise results - they deliver them consistently month after month.",
      rating: 5
    }
  ];

  const whyChoose = [
    { icon: Target, title: "Dental-Exclusive Focus", desc: "We only work with dental practices - we know your industry inside out" },
    { icon: BarChart3, title: "Transparent Reporting", desc: "Detailed monthly reports showing exactly where your investment goes" },
    { icon: Shield, title: "No Long Contracts", desc: "Month-to-month agreements because we earn your business every day" },
    { icon: Users, title: "Dedicated Team", desc: "Your own account manager who knows your practice personally" },
    { icon: Award, title: "Proven Track Record", desc: "500+ dental practices grown with our systematic approach" },
    { icon: Zap, title: "Fast Implementation", desc: "Start seeing results within 30-60 days, not 6 months" }
  ];


  const packages = [
    {
      name: "Starter",
      price: "1,499",
      tag: "For New Practices",
      features: [
        "Professional Website Design",
        "Basic Local SEO Setup",
        "Google Business Profile Optimization",
        "Social Media Setup",
        "Monthly Performance Report",
        "Email Support"
      ]
    },
    {
      name: "Growth",
      price: "2,999",
      tag: "Most Popular",
      popular: true,
      features: [
        "Everything in Starter, plus:",
        "Advanced Local SEO",
        "Google Ads Management (up to $2k spend)",
        "Social Media Management (3 posts/week)",
        "Reputation Management",
        "Call Tracking",
        "Priority Phone Support",
        "Dedicated Account Manager"
      ]
    },
    {
      name: "Premium",
      price: "4,999",
      tag: "For Established Practices",
      features: [
        "Everything in Growth, plus:",
        "Multi-Location SEO",
        "Advanced Google Ads (up to $5k spend)",
        "Social Media Management (daily posts)",
        "Content Marketing & Blogging",
        "Email Marketing Automation",
        "Conversion Rate Optimization",
        "Quarterly Strategy Sessions"
      ]
    }
  ];

  return (
    <div className="min-h-screen ">

      <DentalMarketingHero/>      
      <DentalMarketingPain/>
      <DentalMarketingSolutions 
      services={services}
      />
      <DentalMarketingProcess
      process={process}
      />
      <DentalMarketingExamples
      caseStudies={caseStudies}
      />
      <DentalMarketingWhyChooseUs
      whyChoose={whyChoose}
      />
     <AccordianDental/>
     <DentalMarketingFinalCTA/>
    </div>
  );
}