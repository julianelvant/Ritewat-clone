"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    const form = e.currentTarget;
    const data = {
      fullName: (form.fullName as any).value,
      company: (form.company as any).value,
      email: (form.email as any).value,
      phone: (form.phone as any).value,
      subject: (form.subject as any).value,
      message: (form.message as any).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSuccess("Your message has been sent successfully.");
        form.reset();
      } else {
        setError(result.error || "Failed to send message.");
      }
    } catch (err: any) {
      setError("Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-secondary border-b-2 border-primary pb-2">
        Send Us A Message
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="John Smith"
              required
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Your Company Ltd."
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="john@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="+44 123 456 7890"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="How can we help you?"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Please tell us more about your inquiry..."
            required
          ></textarea>
        </div>

        <div className="flex items-center">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            required
          />
          <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
            I agree to the privacy policy and consent to being contacted
            regarding my inquiry.
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-md transition-colors disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
        {success && <p className="text-green-600 font-semibold">{success}</p>}
        {error && <p className="text-red-600 font-semibold">{error}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
