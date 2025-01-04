import React from 'react';
import { Building2, Construction, Cog, Ruler, Users2, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Building2 className="h-12 w-12 text-red-600" />,
      title: t('services.items.construction.title'),
      desc: t('services.items.construction.desc')
    },
    {
      icon: <Construction className="h-12 w-12 text-red-600" />,
      title: t('services.items.infrastructure.title'),
      desc: t('services.items.infrastructure.desc')
    },
    {
      icon: <Cog className="h-12 w-12 text-red-600" />,
      title: t('services.items.engineering.title'),
      desc: t('services.items.engineering.desc')
    },
    {
      icon: <Ruler className="h-12 w-12 text-red-600" />,
      title: t('services.items.architecture.title'),
      desc: t('services.items.architecture.desc')
    },
    {
      icon: <Users2 className="h-12 w-12 text-red-600" />,
      title: t('services.items.projectManagement.title'),
      desc: t('services.items.projectManagement.desc')
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-red-600" />,
      title: t('services.items.consulting.title'),
      desc: t('services.items.consulting.desc')
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          {t('services.heading')}
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-6 border rounded-lg hover:shadow-lg transition group hover:-translate-y-1 duration-300"
            >
              <div className="transform transition group-hover:scale-110 duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
