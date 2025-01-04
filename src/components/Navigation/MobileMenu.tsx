import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-slate-900 p-4 shadow-lg"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="hover:text-red-500 transition px-4 py-2">Services</a>
              <a href="#projects" className="hover:text-red-500 transition px-4 py-2">Projects</a>
              <a href="#contact" className="hover:text-red-500 transition px-4 py-2">Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}