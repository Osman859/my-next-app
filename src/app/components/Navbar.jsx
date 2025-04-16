'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolling down or up
      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar with delay
        if (currentScrollY > 900) {
          setVisible(false);
        }
      } else {
        // Scrolling up - show navbar
        setVisible(true);
      }
      
      // Set navbar to scrolled state for transparency effect
      if (currentScrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav 
      className={`px-6 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-grey backdrop-blur-sm' : 'bg-black'
      } ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center mx-10">
        <div className="text-green-500 mr-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
            <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
            <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25a.75.75 0 00.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
          </svg>
        </div>
        <span className="text-white text-2xl font-semibold">rednsay</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-10">
        <a
          href="#review"
          className="text-gray-200 hover:text-green-500 duration-300"
        >
          Testimonials
        </a>
        <a
          href="#stories"
          className="text-gray-200 hover:text-green-500 duration-300"
        >
          Works
        </a>
        <a
          href="#services"
          className="text-gray-200 hover:text-green-500 duration-300"
        >
          Services
        </a>
        <a
          href="#about"
          className="text-gray-200 hover:text-green-500 duration-300"
        >
          About
        </a>
      </div>




      {/* CTA Button */}
      <Link href="/getintouch">
        <button className="border-b-2 border-green-500 cursor-pointer text-white px-6 py-2 rounded-md hover:shadow-[0_-4px_6px_rgba(22,163,74,0.5),4px_0_6px_rgba(22,163,74,0.5),-4px_0_6px_rgba(22,163,74,0.5)] transition-shadow duration-300">
          Get in Touch
        </button>
      </Link>

      {/* Mobile Menu Button */}
      <div className="block md:hidden">
        <button className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;