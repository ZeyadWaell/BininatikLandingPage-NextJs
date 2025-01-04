import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="container mx-auto px-6 py-24 lg:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Building Tomorrow's Infrastructure Today
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Excellence in construction, engineering, and infrastructure development
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}