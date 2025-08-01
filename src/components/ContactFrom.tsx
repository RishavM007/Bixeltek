'use client';
import { count } from 'console';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactFrom() {
    
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
           
            window.setTimeout(()=>{ 
                router.push('/thank-you'); // Redirect to thank you page
            },3000)

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
        <div className="w-[95%] md:w-1/2 p-6 relative bg-[#1a1a1a] rounded-lg">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-1/2">
                        <label htmlFor="firstName" className="text-sm font-medium text-gray-50">First Name*</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full input-field mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            placeholder="What's your first name?"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-50">Last Name*</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full input-field mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            placeholder="What's your last name?"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-1/2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-50">Email*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full input-field mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-50">Phone Number*</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full input-field mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            placeholder="Enter your phone number"
                        />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-5'>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="company" className="text-sm font-medium text-gray-50">Company*</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full input-field mt-2 p-3 border-b border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            placeholder="Company Name"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <label htmlFor="website" className="text-sm font-medium text-gray-50">Website*</label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="w-full input-field mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            placeholder="www.example.com"
                        />
                    </div>
                </div>

                <div className='relative max-w-full flex flex-col md:flex-row gap-4'>
                    <div className="flex flex-col w-full md:w-1/2 gap-2">
                        {/* Label for the dropdown */}
                        <label htmlFor="country-dropdown" className="text-sm font-medium text-gray-300">
                            Select Your Country
                        </label>

                        <div className="relative w-full max-w-md">
                            {/* Search Input */}
                            <input
                                type="text"
                                placeholder="Type to search..."
                                value={search}
                                onChange={handleSearch}
                                onFocus={() => setIsOpen4(true)} // Show dropdown when typing
                                className="w-full rounded-md border border-gray-600 bg-black px-4 py-3 text-sm text-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            />

                            {/* Dropdown */}
                            {isOpen4 && (
                                <div
                                    className="absolute z-10 mt-2 max-h-60 w-full overflow-y-auto rounded-md bg-black border border-gray-700 shadow-lg"
                                    role="menu"
                                >
                                    {filteredCountries.length > 0 ? (
                                        filteredCountries.map((country) => (
                                            <div
                                                key={country}
                                                onClick={() => {
                                                    handleDropdownSelect("country", country);
                                                    setIsOpen4(false);
                                                    setSearch(country); // Set the selected value
                                                }}
                                                className="cursor-pointer px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                                            >
                                                {country}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="px-4 py-2 text-sm text-gray-500">No results found</div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>


                    <div className="w-full md:w-1/2">
                        <label htmlFor="budget" className="text-sm font-medium text-gray-300">Marketing Budget</label>
                        <input
                            type="text"
                            id="budget"
                            name="marketingBudget"
                            value={formData.marketingBudget}
                            onChange={handleInputChange}
                            className="w-full input-field mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#670ef7]"
                            placeholder="What is your marketing budget?"
                        />
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
                                 "PPC Campaigns",
                                 "SEO Optimization",
                                 "Social Media Management",
                                 "Web Design and Development",
                                 "E-commerce Solutions",
                                 "Content Creation and Marketing",
                                 "Advertiser Verifications, GMB Verifications",
                                 "other"
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
                    placeholder="What are your current maketing challenges?"
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
