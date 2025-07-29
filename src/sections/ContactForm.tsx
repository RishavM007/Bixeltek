import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import webdevads from '@/assets/website post 2.jpg'
type ContactFormProps = {
    isVisible: boolean;
    onClose: () => void;
};

export const ContactForm: React.FC<ContactFormProps> = ({ isVisible, onClose }: ContactFormProps) => {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement | null>(null);
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
        otherservices:'',
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
            alert("Please fill in all required fields.");
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

            console.log("API Response:", result); // Debugging
            router.push('/thank-you')
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
                otherservices:'',
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
    const [isOpen5, setIsOpen5] = useState(false);
    const [search, setSearch] = useState(""); // State for filtering
    const [filteredCountries, setFilteredCountries] = useState(countries); // Dynamic list

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    }
    const toggleDropdown3 = () => {
        setIsOpen4(!isOpen4);
    }

    const toggleDropdown5 = () => {
        setIsOpen5(!isOpen5);
        setIsOpen(false)
    }

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    }
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsOpen5(false)
    }
    const handleSearch = (event: any) => {
        const query = event.target.value.toLowerCase();
        setSearch(query);
        setFilteredCountries(
            countries.filter((country) => country.toLowerCase().includes(query))
        );
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible]);



    return (
        <section
            className={`fixed inset-0 flex justify-center items-center z-[65] bg-black bg-opacity-40 ${isVisible ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
        >
            <div className="w-[95%] max-w-6xl bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 relative max-h-[90vh] overflow-y-auto">
                {/* 🖼 Left Side Image */}
                <div className="hidden md:block">
                    <Image
                        src={webdevads} // Replace with your image path
                        alt="Contact Illustration"
                        className="h-full w-full object-cover hidden md:block"
                    />
                </div>

                {/* ✍️ Right Side Form */}
                <form
                    className="relative space-y-4 p-4 sm:p-6 md:p-8 w-full"
                    onSubmit={handleSubmit}
                    ref={formRef}
                >
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute top-3 right-4 text-gray-500 text-2xl hover:text-red-500 focus:outline-none"
                    >
                        &times;
                    </button>

                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                        Get in Touch
                    </h3>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label className="text-sm text-gray-600">First Name*</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="John"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#670ef7]"
                            />
                        </div>

                        <div className="w-full">
                            <label className="text-sm text-gray-600">Last Name*</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Doe"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#670ef7]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label className="text-sm text-gray-600">Email*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="you@example.com"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#670ef7]"
                            />
                        </div>

                        <div className="w-full">
                            <label className="text-sm text-gray-600">Phone*</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+91 1234567890"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#670ef7]"
                            />
                        </div>
                    </div>

                    {/* Company & Website */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label className="text-sm text-gray-600">Company*</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                placeholder="ABC Pvt. Ltd."
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#670ef7]"
                            />
                        </div>

                        <div className="w-full">
                            <label className="text-sm text-gray-600">Website*</label>
                            <input
                                type="text"
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                                placeholder="www.example.com"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#670ef7]"
                            />
                        </div>
                    </div>

                    {/* Marketing Budget & Country */}
                    {/* <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label className="text-sm text-gray-600">Country</label>
                            <input
                                type="text"
                                value={search}
                                onChange={handleSearch}
                                placeholder="Type your country..."
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#670ef7]"
                                onFocus={() => setIsOpen4(true)}
                            />
                            {isOpen4 && (
                                <div className="mt-1 max-h-40 overflow-y-auto border border-gray-300 bg-white rounded-lg">
                                    {filteredCountries.map((country) => (
                                        <div
                                            key={country}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                                            onClick={() => {
                                                handleDropdownSelect('country', country);
                                                setSearch(country);
                                                setIsOpen4(false);
                                            }}
                                        >
                                            {country}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="w-full">
                            <label className="text-sm text-gray-600">Website Budget</label>
                            <input
                                type="text"
                                name="marketingBudget"
                                value={formData.marketingBudget}
                                onChange={handleInputChange}
                                placeholder="₹50,000/month"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#670ef7]"
                            />
                        </div>
                    </div> */}

                    {/* Services Dropdown */}
                    <div className="w-full">
                        <div className="relative">
                            <button
                                type="button"
                                className="w-full p-3 border border-gray-300 rounded-lg text-left text-gray-700 focus:ring-2 focus:ring-[#670ef7]"
                                onClick={toggleDropdown}
                            >
                                {formData.services || 'Choose a website type'}
                            </button>
                            {isOpen && (
                                <div className="absolute w-full mt-1 max-h-40 overflow-y-auto border border-gray-300 bg-white rounded-lg z-10">
                                    {[
                                        "E-commerce Website",
                                        "Service Based Website",
                                        "Business Websites",
                                        "Lead Generation Website",
                                        "Blogging Website",
                                        "PortFolio Website",
                                        "Corporate Website",
                                    ].map((option) => (
                                        <div
                                            key={option}
                                            onClick={() => {
                                                handleDropdownSelect("services", option);
                                                setIsOpen(false);
                                            }}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="relative">
                            <button
                                type="button"
                                className="w-full p-3 border border-gray-300 rounded-lg text-left text-gray-700 focus:ring-2 focus:ring-[#670ef7]"
                                onClick={toggleDropdown5}
                            >
                                {formData.otherservices || 'Choose an Additional Service'}
                            </button>
                            {isOpen5 && (
                                <div className="absolute w-full mt-1 max-h-40 overflow-y-auto border border-gray-300 bg-white rounded-lg z-10">
                                    {[
                                        "Payment Gateway Integrations",
                                        "Website Migration",
                                        "Periodic Website Maintenance",
                                        "On Page SEO Implementation",
                                        "Speed Optimizations Audits",
                                        "Ecommerce Content Management (Product Uploads Etc)",
                                    ].map((option) => (
                                        <div
                                            key={option}
                                            onClick={() => {
                                                handleDropdownSelect("otherservices", option);
                                                setIsOpen5(false);
                                            }}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            placeholder="Tell Us More About The Kind Of Website..."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#670ef7]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#670ef7] text-white py-3 rounded-lg hover:bg-[#5b0cd1] transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>

    )
};




{/* <section
            className={`fixed inset-0  flex shadow-purple-custom justify-center items-center z-[65] bg-black bg-opacity-50 ${isVisible ? 'visible' : 'hidden'
                }`}
        ></section> */}