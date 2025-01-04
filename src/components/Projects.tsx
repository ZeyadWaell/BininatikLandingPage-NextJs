import React from 'react';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    titleKey: 'projects.items.modernOffice.title',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    categoryKey: 'projects.items.modernOffice.category'
  },
  {
    titleKey: 'projects.items.sustainableHousing.title',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    categoryKey: 'projects.items.sustainableHousing.category'
  },
  {
    titleKey: 'projects.items.highwayBridge.title',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800',
    categoryKey: 'projects.items.highwayBridge.category'
  }
];

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">{t('projects.heading')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={t(project.titleKey)}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-sm text-red-400">{t(project.categoryKey)}</span>
                <h3 className="text-xl font-semibold">{t(project.titleKey)}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
