"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    companyAddress: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          companyName: "",
          companyAddress: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <span className="text-6xl">🎉</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for contacting us. We will process your details and get
              back to you within 24 hours.
            </p>
            <Link
              href="/Products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Header />
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Have questions? We&apos;d love to hear from you
          </p>
        </div>

        <div className="mt-12 bg-white shadow-lg rounded-lg p-7 m-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="flex items-center space-x-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full text-left px-3 py-2 border border-gray-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="flex items-center space-x-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full text-left px-3 py-2 border border-gray-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="flex items-center space-x-2"
              >
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full text-left px-3 py-2 border border-gray-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="companyAddress"
                className="flex items-center space-x-2"
              >
                Company Address
              </label>
              <input
                type="text"
                name="companyAddress"
                id="companyAddress"
                value={formData.companyAddress}
                onChange={handleChange}
                className="w-full text-left px-3 py-2 border border-gray-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="flex items-center space-x-2">
                Message *
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full text-left px-3 py-2 border border-gray-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {submitStatus.type && (
              <div
                className={`rounded-md p-4 ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
