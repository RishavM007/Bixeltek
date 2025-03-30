'use client';
import React from 'react'
import { useState } from 'react';

export default function ContactFrom() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        marketingDepartment: '',
        marketingBudget: '',
        services: '',
        message: ''
    });
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDropdownSelect = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) throw new Error('Failed to send message.');
            console.log(formData);
            const result = await response.json();
        console.log("API Response:", result); // Debug log
            alert('Message sent successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                company: '',
                website: '',
                marketingDepartment: '',
                marketingBudget: '',
                services: '',
                message: ''
            });
        } catch (error) {
            console.log(formData);
            console.error("Error submitting form:", error);
            alert('Something went wrong. Please try again later.');
        }
    };
    

        const [isOpen, setIsOpen] = useState(false);
        const [isOpen1, setIsOpen1] = useState(false);
        const [isOpen2, setIsOpen2] = useState(false);

            const toggleDropdown1 = () => {
                setIsOpen1(!isOpen1);
            }
        
            const toggleDropdown2 = () => {
                setIsOpen2(!isOpen2);
            }
            const toggleDropdown = () => {
                setIsOpen(!isOpen);
            }


    return (
        <div className="w-[95%] md:w-1/2 p-6 relative bg-[#1a1a1a] rounded-lg">
            <h3 className="text-3xl md:text-3xl  font-normal text-white mb-4">Get in Touch </h3>
            <div className='absolute w-40 h-1 bg-[#670ef7] translate-y-[-10px] translate-x-[5px]'></div>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row gap-5'>

                    <input
                        type="text"
                        id="name"
                        name="firstName"
                        value={formData.firstName} 
                        onChange={handleInputChange}
                        className="w-full input-field md:w-1/2 mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        id="name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full input-field md:w-1/2 mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                        placeholder="Last Name*"
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-5'>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email} 
                        onChange={handleInputChange}
                        className=" w-full input-field md:w-1/2 mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                        placeholder="Enter your email*"
                    />
                    <input
                        type="phone"
                        id="phone"
                        name="phone"
                        value={formData.phone} 
                        onChange={handleInputChange}
                        className=" w-full input-field md:w-1/2 mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                        placeholder="Enter your phone number"
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-5'>
                    <input
                        type="text"
                        id="name"
                        name="company"
                        value={formData.company} 
                        onChange={handleInputChange}
                        className="w-full input-field md:w-1/2 mt-2 p-3 border-b border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                        placeholder="Company/Organisation*"
                    />
                    <input
                        type="text"
                        id="name"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full input-field md:w-1/2 mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                        placeholder="Website"
                    />

                </div>
                <div className='relative max-w-full flex flex-col md:flex-row gap-4'>
                    <div className="relative max-w-full md:max-w-[50%] inline-block text-left w-full">
                        <button
                            type="button"
                            className="inline-flex w-full justify-between text-left rounded-md border border-gray-600 bg-black px-4 py-3 text-sm font-medium text-gray-300 shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            id="menu-button"
                            aria-expanded={isOpen1}
                            aria-haspopup="true"
                            onClick={toggleDropdown1}
                        >
                            { formData.marketingDepartment || 'How are you running your Marketing Department Currently?'}
                            <svg
                                className={`-mr-1 ml-2 h-5 w-5 text-gray-300 transition-transform ${isOpen1 ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 15 15"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {/* Dropdown menu */}
                        {isOpen1 && (
                            <div className="absolute left-0 z-10 mt-2 w-full origin-top rounded-md bg-black border border-gray-600 shadow-lg ring-1 ring-black ring-opacity-5">
                            {["Inhouse", "Outsourced", "Myself", "Freelancer"].map((option) => (
                              <div
                                key={option}
                                onClick={() => {
                                    handleDropdownSelect("marketingDepartment", option);
                                    setIsOpen1(false);
                                  }}
                                className="cursor-pointer px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                    <div className="relative max-w-full md:max-w-[50%] inline-block text-left w-full">
                        <button
                            type="button"
                            className="inline-flex w-full justify-between rounded-md border text-left border-gray-600 bg-black px-4 py-3 text-sm font-medium text-gray-300 shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            id="menu-button"
                            aria-expanded={isOpen2}
                            aria-haspopup="true"
                            onClick={toggleDropdown2}
                        >
                            {formData.marketingBudget || 'What is the current marketing budget you are looking at?'}
                            <svg
                                className={`-mr-1 ml-2 h-5 w-5 text-gray-300 transition-transform ${isOpen2 ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 15 15"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {/* Dropdown menu */}
                        {isOpen2 && (
                             <div className="absolute left-0 z-10 mt-2 w-full origin-top rounded-md bg-black border border-gray-600 shadow-lg ring-1 ring-black ring-opacity-5">
                             {["INR 1-2 Lacs a month", "INR 2-5 Lacs a month", "INR >5 Lacs a month"].map((option) => (
                               <div
                                 key={option}
                                 onClick={() => {
                                   handleDropdownSelect("marketingBudget", option);
                                   setIsOpen2(false);
                                 }}
                                 className="cursor-pointer px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                               >
                                 {option}
                               </div>
                             ))}
                           </div>
                        )}
                    </div>
                </div>
                <div className="relative max-w-full inline-block text-left w-full">
                    <button
                        type="button"
                        className="inline-flex w-full justify-between rounded-md border border-gray-600 bg-black px-4 py-3 text-sm font-medium text-gray-300 shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                        id="menu-button"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={toggleDropdown}
                    >
                        {formData.services || 'Our Services'}
                        <svg
                            className={`-mr-1 ml-2 h-5 w-5 text-gray-300 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {/* Dropdown menu */}
                    {isOpen && (
                       <div className="absolute left-0 z-10 mt-2 w-full origin-top rounded-md bg-black border border-gray-600 shadow-lg ring-1 ring-black ring-opacity-5">
                       {[
                         "Social Media Management",
                         "SEO Optimization",
                         "E-commerce Solutions",
                         "Content Marketing",
                         "PPC Campaigns",
                       ].map((option) => (
                         <div
                           key={option}
                           onClick={() => {
                             handleDropdownSelect("services", option);
                             setIsOpen(false);
                           }}
                           className="cursor-pointer px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                         >
                           {option}
                         </div>
                       ))}
                     </div>
                    )}
                </div>
                <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your business"
                    className="w-full p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-[#670ef7] text-white py-3 rounded-lg hover:bg-[#5b0cd1] transition"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
