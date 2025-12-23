"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function DentalForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    website: "",
    phone: "",
    city: "",
    message: "",
    services: "Dental Marketing", 
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.company ||
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.name ||
      !formData.website
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const loadingToast = toast.loading("Submitting your form...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Submission failed");

      toast.success("Thank you! Our team will contact you shortly.", {
        id: loadingToast,
      });

      setTimeout(() => {
        router.push("/thank-you");
      }, 1000);

      setFormData({
        company: "",
        name: "",
        email: "",
        website: "",
        phone: "",
        city: "",
        message: "",
        services: "Dental Marketing",
      });
    } catch (error: any) {
      toast.error(error.message || "Something went wrong", {
        id: loadingToast,
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 max-w-xl mx-auto">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
        Get Your Free Dental Growth Audit
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Fill out the form and our dental marketing experts will contact you.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Dental Practice Name<span className="text-red-500">*</span>
            </label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Clinic Name"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            />
          </div>
           <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
            <label className="text-sm font-medium text-gray-700">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
            <label className="text-sm font-medium text-gray-700">Website<span className="text-red-500">*</span></label>
            <input
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="www.yourclinic.com"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
            />
          </div>
        <div>
          <label className="text-sm font-medium text-gray-700">
            City<span className="text-red-500">*</span>
          </label>
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
          />
        </div>
        </div>

        {/* Message */}
        <div>
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your current challenges"
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
        >
          Get Free Audit
        </button>

    <p className='text-black text-center mt-5 text-xs' >By submitting the form above, you consent to receive informational SMS and SMS-based appointment reminders from Bixeltek&apos;s Ideas at the phone number provided. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP. Reply HELP for help. <Link href={'privacy-policy'}><span className='underline underline-offset-2'>Privacy Policy & Terms.</span></Link> </p>
      </form>
    </div>
  );
}
