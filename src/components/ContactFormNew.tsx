'use client';
import { count } from 'console';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import Aboutusimage from '@/assets/Mk power_.jpeg';
import { PhoneCall, MessageCircle, CalendarDays } from "lucide-react"


export default function ContactFromNew() {

    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        country: '',
        marketingBudget: '',
        services: '',
        message: ''
    });

    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
        "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
        "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus",
        "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti",
        "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
        "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
        "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
        "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
        "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
        "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
        "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
        "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia",
        "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
        "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
        "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
        "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
        "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
        "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
        "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
        "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
        "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
        "Turkey", "Turkmenistan", "Tuvalu", "UAE", "Uganda", "Ukraine", "United Kingdom",
        "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
        "Vietnam", "Yemen", "Zambia", "Zimbabwe", "Other"
    ];


    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleDropdownSelect = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.phone ||
            !formData.company ||
            !formData.services ||
            !formData.message ||
            !formData.website
        ) {
            // alert("Please fill in all required fields.");
            toast.error("Please fill in all required fields.")

            return;
        }
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json(); // Try parsing response

            if (!response.ok) throw new Error(result.error || 'Failed to send message.');

            toast.success('Thank you for filling the form!')

            window.setTimeout(() => {
                router.push('/thank-you'); // Redirect to thank you page
            }, 3000)

            console.log("API Response:", result); // Debugging
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                company: '',
                website: '',
                country: '',
                marketingBudget: '',
                services: '',
                message: ''
            });
        } catch (error: any) {
            console.error("Error submitting form:", error);
            alert(`Something went wrong: ${error.message}`); // Show exact error
        }
    };
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [search, setSearch] = useState(""); // State for filtering
    const [filteredCountries, setFilteredCountries] = useState(countries); // Dynamic list

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    }
    const toggleDropdown3 = () => {
        setIsOpen4(!isOpen4);
    }

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    }
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const handleSearch = (event: any) => {
        const query = event.target.value.toLowerCase();
        setSearch(query);
        setFilteredCountries(
            countries.filter((country) => country.toLowerCase().includes(query))
        );
    };


    return (
        <div className="max-w-[95%] p-2 bg-black mx-auto flex flex-col justify-center items-center md:flex-row   ">
            {/* LEFT: Image */}
            <div className="w-full md:w-1/2 mt-14 md:mt-0 flex justify-center items-center px-6">
                <div className="space-y-5 text-white max-w-xl ">
                    <h2 className="text-5xl md:text-6xl font-sofiasanscondensed font-bold">
                        Let’s Build You a Website That<br/><span className='text-purple-500'>Grows Your Business</span>
                    </h2>
                    <p className="text-white font-poppins text-base leading-relaxed">
                        Your current website might be costing you leads, visibility, and money every single day. Let’s change that.
                    </p>
                    <p className="text-white font-poppins text-base leading-relaxed">
                        Book a free 30-minute strategy call with our Hyderabad-based team. We’ll audit your current website, identify what’s holding you back, and show you how we can fix it — fast.
                    </p>
                    <p className="text-white font-poppins text-base leading-relaxed">
                        Whether you&apos;re looking to rebuild your online presence or launch a new business with a strong digital foundation, <span className="font-semibold">Bixeltek</span> is your trusted web design partner in Hyderabad.
                    </p>

                    <div className="space-y-3 pt-3">
                        <div className="flex items-center gap-2">
                            <PhoneCall size={20} />
                            <span className="text-white text-sm">Call: +91-XXXX-XXXXXX</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MessageCircle size={20} />
                            <span className="text-white text-sm">WhatsApp: Start a Chat</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CalendarDays size={20} />
                            <span className="text-white text-sm">
                                Schedule a Free Consultation: <a href="#" className="underline underline-offset-2 text-blue-300 hover:text-blue-400">Book Now</a>
                            </span>
                        </div>
                    </div>

                    <p className="text-sm text-gray-200 pt-3">
                        Starting at ₹30,000 | Delivered in 7–15 Days | Built for SEO, Ads, and Conversions
                    </p>
                </div>
            </div>

            {/* RIGHT: Form */}
            <div></div>
            <div className="w-full mt-10 md:mt-0 md:w-1/2 p-0 px-4 md:px-0 md:p-32 relative rounded-2xl bg-transparent">
                <form className="space-y-4 p-10 relative rounded-2xl bg-white" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="w-full md:w-1/2">
                            <label htmlFor="firstName" className="text-sm font-medium text-gray-800">First Name*</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full mt-2 p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                placeholder="What's your first name?"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <label htmlFor="lastName" className="text-sm font-medium text-gray-800">Last Name*</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full mt-2 p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                placeholder="What's your last name?"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="w-full md:w-1/2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-800">Email*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full mt-2 p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-800">Phone Number*</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full mt-2 p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                placeholder="Enter your phone number"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="w-full md:w-1/2">
                            <label htmlFor="company" className="text-sm font-medium text-gray-800">Company*</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="w-full mt-2 p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                placeholder="Company Name"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <label htmlFor="website" className="text-sm font-medium text-gray-800">Website*</label>
                            <input
                                type="text"
                                id="website"
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                                className="w-full mt-2 p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                placeholder="www.example.com"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="w-full md:w-1/2">
                            <label htmlFor="country" className="text-sm font-medium text-gray-800">Country</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleSearch}
                                className="w-full mt-2 p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                placeholder="Type to search..."
                                onFocus={() => setIsOpen4(true)}
                            />
                            {isOpen4 && (
                                <div className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-md bg-white border border-gray-300 shadow-lg">
                                    {filteredCountries.map((country) => (
                                        <div
                                            key={country}
                                            onClick={() => {
                                                handleDropdownSelect("country", country);
                                                setIsOpen4(false);
                                                setSearch(country);
                                            }}
                                            className="cursor-pointer px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                        >
                                            {country}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="w-full md:w-1/2">
                            <label htmlFor="budget" className="text-sm font-medium text-gray-800">Marketing Budget</label>
                            <input
                                type="text"
                                id="budget"
                                name="marketingBudget"
                                value={formData.marketingBudget}
                                onChange={handleInputChange}
                                className="w-full mt-2 p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                                placeholder="Your marketing budget?"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <label className="text-sm font-medium text-gray-800">Our Services</label>
                        <button
                            type="button"
                            className="mt-2 w-full flex justify-between items-center px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            onClick={toggleDropdown}
                        >
                            {formData.services || "Select a service"}
                            <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
                        </button>
                        {isOpen && (
                            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                                {[
                                    "PPC Campaigns",
                                    "SEO Optimization",
                                    "Social Media Management",
                                    "Web Design and Development",
                                    "E-commerce Solutions",
                                    "Content Creation and Marketing",
                                    "Advertiser Verifications",
                                    "Other"
                                ].map((option) => (
                                    <div
                                        key={option}
                                        onClick={() => {
                                            handleDropdownSelect("services", option);
                                            setIsOpen(false);
                                        }}
                                        className="cursor-pointer px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
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
                        placeholder="What are your current marketing challenges?"
                        className="w-full mt-2 p-3 border border-gray-300 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-[#670ef7] text-white py-3 rounded-lg hover:bg-[#5b0cd1] transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>

    )
}
