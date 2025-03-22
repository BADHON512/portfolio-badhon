import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Logo & Description */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Badhon Dev Hub</h2>
          <p className="text-gray-400 text-sm mt-2">
            Elevating Web Experiences with Cutting-Edge Development.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} Badhon Dev Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
