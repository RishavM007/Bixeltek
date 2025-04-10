'use client';
import React, { useState } from 'react';

export default function Newsletter() {
    const [formData, setFormData] = useState({
        email: '',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.email) {
            alert("Please fill in the Email to SignUp");
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) throw new Error(result.error || 'Failed to send message.');

            console.log("API Response:", result);
            setFormData({ email: '' });
        } catch (error: any) {
            console.error("Error submitting form:", error);
            alert(`Something went wrong: ${error.message}`);
        }
    };

    return (
        <div className="border-b border-gray-200 pb-14 flex justify-between items-center flex-col gap-8 lg:gap-0 lg:flex-row">
            <div className="block">
                <h3 className="font-manrope text-3xl text-gray-100 font-bold mb-2 text-center lg:text-left">
                    Sign up to our newsletter
                </h3>
                <p className="text-gray-300 text-center lg:text-left">
                    Stay up to date with the latest update and announcement.
                </p>
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex items-center flex-col gap-4 lg:flex-row"
            >
                <input
                    onChange={handleInputChange}
                    value={formData.email}
                    type="text"
                    name="email"
                    className="py-3 px-6 h-14 border border-gray-300 shadow-sm rounded-full focus:outline-none"
                    placeholder="Enter your mail.."
                />
                <button
                    type="submit"
                    className="h-14 py-3.5 px-7 bg-indigo-600 shadow-sm rounded-full text-white font-bold"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
}
