import React from 'react';
import logo from '../../images/logoo.png'; // Correct relative import

export function Navigation() {
  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        {/* Use imported image */}
        <img src={logo} alt="Binyatik Logo" className="h-10 w-auto" />
        <span className="text-2xl font-bold">BINYATIK</span>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#services" className="hover:text-red-500 transition">Services</a>
        <a href="#projects" className="hover:text-red-500 transition">Projects</a>
        <a href="#contact" className="hover:text-red-500 transition">Contact</a>
      </div>
    </nav>
  );
}
