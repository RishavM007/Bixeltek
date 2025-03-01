'use client';
import React, { ReactNode } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import PricingTable from "@/components/pricecomp";



const Pricing = () => {
    const [isChecked, setIsChecked] = useState(false);
  return (
<>

<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Pricing</h2>
    <p className="mt-1 text-gray-600 dark:text-neutral-400">Whatever your status, our offers evolve according to your needs.</p>
  </div>

  


  <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
  <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-800">
      <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Scope of Work</h4>
      <span className="mt-7 font-bold text-3xl font-sans text-gray-800 dark:text-neutral-200">Pricing</span>
      <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">Transparent and scalable pricing</p>
      
      <ul className="mt-7 space-y-2.5 text-sm">
        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 dark:text-neutral-400">1 Transaction = Each Data Line Item Entered</span>
        </li>
        
        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 dark:text-neutral-400">Flexible pricing based on usage</span>
        </li>
        
        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 dark:text-neutral-400">Custom enterprise solutions available</span>
        </li>
      </ul>
      
      <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
        Get a Quote
      </a>
    </div>
 
    <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
  <p className="mb-3">
    <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">
      Most popular
    </span>
  </p>
  <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Startup</h4>

  <div className="mt-5 font-bold text-2xl font-sans text-gray-800 dark:text-neutral-200">
    <span className="block text-lg font-medium">One Time Setup Fee</span>
    <span className="font-bold text-lg ">₹</span>35,000
    <span className="text-sm font-medium text-gray-500 dark:text-neutral-500"> +18% GST</span>
  </div>

  <div className="mt-4 font-bold text-2xl font-sans text-gray-800 dark:text-neutral-200">
    <span className="block text-lg font-medium">Monthly Fee</span>
    <span className="font-bold text-lg">₹</span>35,000
    <span className="text-sm font-medium text-gray-500 dark:text-neutral-500"> +18% GST</span>
  </div>

  <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
    All the basics for starting a new business
  </p>

  <ul className="mt-7 space-y-2.5 text-sm">
    <li className="flex gap-x-2">
      <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <span className="text-gray-800 dark:text-neutral-400">2 users</span>
    </li>

    <li className="flex gap-x-2">
      <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <span className="text-gray-800 dark:text-neutral-400">Plan features</span>
    </li>

    <li className="flex gap-x-2">
      <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <span className="text-gray-800 dark:text-neutral-400">Product support</span>
    </li>
  </ul>

  <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
    Get Started
  </a>
</div>
<div className="flex flex-col border border-yellow-200 text-center rounded-xl p-8 dark:border-yellow-500">
  <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Growing Business</h4>
  
  <div className="mt-5 font-bold text-2xl font-sans text-gray-800 dark:text-neutral-200">
    <span className="block text-lg font-medium">One Time Setup Fee</span>
    <span className="font-bold text-2xl ">₹</span>60,000
    <span className="text-sm font-medium text-gray-500 dark:text-neutral-500"> +18% GST</span>
  </div>

  <div className="mt-4 font-bold text-2xl font-sans text-gray-800 dark:text-neutral-200">
    <span className="block text-lg font-medium">Monthly Fee</span>
    <span className="font-bold text-2xl ">₹</span>60,000
    <span className="text-sm font-medium text-gray-500 dark:text-neutral-500"> +18% GST</span>
  </div>

  <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">Everything you need for a growing business</p>

  <ul className="mt-7 space-y-2.5 text-sm">
    <li className="flex gap-x-2">
      <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      <span className="text-gray-800 dark:text-neutral-400">5 users</span>
    </li>

    <li className="flex gap-x-2">
      <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      <span className="text-gray-800 dark:text-neutral-400">Plan features</span>
    </li>

    <li className="flex gap-x-2">
      <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      <span className="text-gray-800 dark:text-neutral-400">Product support</span>
    </li>
  </ul>

  <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-yellow-200 bg-white text-yellow-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-yellow-600 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-yellow-600 dark:focus:bg-neutral-800" href="#">
    Get Started
  </a>
</div>
<div className="flex flex-col border-2 border-gray-200 text-center rounded-xl py-[33px] px-8 dark:border-red-800 flex-grow justify-between">

  <div>
  <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Enterprise</h4>
  
  <span className="mt-5 font-bold text-3xl font-sans text-gray-800 dark:text-neutral-200">
    Contact Sales
  </span>

  <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
    Custom solutions for large-scale needs
  </p>

  <ul className="mt-7 space-y-2.5 text-sm">
    <li className="flex gap-x-2">
      <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <span className="text-gray-800 dark:text-neutral-400">
        Tailored plans for enterprises
      </span>
    </li>

    <li className="flex gap-x-2">
      <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <span className="text-gray-800 dark:text-neutral-400">
        Dedicated account manager
      </span>
    </li>

    <li className="flex gap-x-2">
      <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <span className="text-gray-800 dark:text-neutral-400">
        24/7 priority support
      </span>
    </li>
  </ul>
  </div>
  <div className=" mt-[138px] inline-flex justify-center items-center ">
  <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-red-600 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
     Book a Call
  </a>
  </div>

</div>


  </div>

  <div className="mt-20 lg:mt-32">
    <div className="lg:text-center mb-10 lg:mb-20">
      <h3 className="text-3xl font-semibold dark:text-white font-italiana">Compare plans</h3>
    </div>  
  </div>
  <PricingTable />
</div>


</>
  );
};


export default Pricing;
