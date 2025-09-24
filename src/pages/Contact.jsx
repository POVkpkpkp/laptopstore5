import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}, your message has been sent!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 mt-[70px]">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-[#823e7d]">Contact Us</h1>

      {/* Info Section */}
      <div className="mb-10">
        <p className="text-gray-600 mb-2">
          Have questions about our laptops or need support? We’re here to help.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li><strong>📍 Address:</strong> #123 Street, Phnom Penh, Cambodia</li>
          <li><strong>📞 Phone:</strong> +855 12 345 678</li>
          <li><strong>📧 Email:</strong> support@laptopstore.com</li>
        </ul>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-[#25ab9eaa] p-6 rounded-lg shadow lg:w-[600px] w-[300px]">
        <div>
          <label className="block font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Username"
            className="bg-[#78dbd1] w-[70%] border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="email"
            className="bg-[#78dbd1] w-[70%] border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">FeedBack</label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="write your message"
            className="bg-[#78dbd1] w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
