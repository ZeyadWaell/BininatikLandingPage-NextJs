import React from 'react';
import { ProjectCard } from './ProjectCard';
import { SectionTitle } from '../ui/SectionTitle';
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>{t('projects.heading')}</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={t(project.titleKey)}
              image={project.image}
              category={t(project.categoryKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
