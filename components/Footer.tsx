import React from "react";
import { FloatingDock } from "./ui/Dock";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  const links = [
    { title: "Facebook", icon: <FaFacebook size={25} />, href: "https://www.facebook.com/md.badhon.984991" },
    { title: "LinkedIn", icon: <FaLinkedin size={25}/>, href: "https://www.linkedin.com/in/muhammad--badhon/" },
    { title: "Instagram", icon: <FaInstagram size={25}/>, href: "https://www.instagram.com/badhon_9090/" },
    { title: "Twitter", icon: <FaX size={25}/>, href: "#" },
    { title: "GitHub", icon: <FaGithub size={25}/>, href: "https://github.com/BADHON512" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10 my-20 px-5" id="contact">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Badhon Dev Hub</h2>
          <p className="text-gray-400 text-sm mt-2">
            Elevating Web Experiences with Cutting-Edge Development.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm mt-6 md:mt-0">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Social Media Floating Dock */}
        <div className="hidden md:flex items-center">
          <FloatingDock items={links} />
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
