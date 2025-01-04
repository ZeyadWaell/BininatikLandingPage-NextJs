import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  image: string;
  category: string;
}

export function ProjectCard({ title, image, category }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg shadow-lg"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
        <span className="text-sm text-red-400 mb-1">{category}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
}