import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, PenTool, Hammer, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const steps = [
  {
    icon: <ClipboardList className="h-8 w-8" />,
    titleKey: 'process.steps.planning.title',
    descKey: 'process.steps.planning.desc'
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    titleKey: 'process.steps.design.title',
    descKey: 'process.steps.design.desc'
  },
  {
    icon: <Hammer className="h-8 w-8" />,
    titleKey: 'process.steps.construction.title',
    descKey: 'process.steps.construction.desc'
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    titleKey: 'process.steps.delivery.title',
    descKey: 'process.steps.delivery.desc'
  }
];

export function Process() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          {t('process.heading')}
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-block p-4 bg-red-600/10 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{t(step.titleKey)}</h3>
              <p className="text-gray-600">{t(step.descKey)}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 w-1/4 h-0.5 bg-red-600/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
