import React from "react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 mt-[70px] ">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-[#d76279]">About Our Laptop Store</h1>

      {/* Intro */}
      <p className="text-gray-600 leading-relaxed mb-6">
        Welcome to <span className="font-semibold">TechLaptop</span>, your trusted source for high-quality laptops. 
        We specialize in offering the latest technology, affordable prices, and excellent customer service.
        Whether you are a student, professional, or gamer, we have the right laptop for you.
      </p>

      {/* Mission Section */}
      <h2 className="text-2xl font-semibold mb-4 text-[#0473BF]">Our Mission</h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        Our mission is simple — to make modern computing accessible to everyone. 
        We carefully select laptops from top brands and ensure they meet your performance, durability, and budget needs.
      </p>

      {/* Why Choose Us Section */}
      <h2 className="text-2xl font-semibold mb-4 text-[#a04ba4]">Why Choose Us?</h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
        <li>Wide selection of laptops from leading brands.</li>
        <li>Competitive prices with seasonal discounts.</li>
        <li>1-Year warranty and reliable after-sales support.</li>
        <li>Fast shipping and secure packaging.</li>
      </ul>

      {/* Closing */}
      <p className="text-gray-600 leading-relaxed">
        Thank you for choosing <span className="font-semibold">TechLaptop</span>. 
        We look forward to helping you find the perfect laptop that fits your lifestyle and work.
      </p>
    </div>
  );
}
