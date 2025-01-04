import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    quoteKey: 'testimonials.items.sarahJohnson.quote',
    authorKey: 'testimonials.items.sarahJohnson.author',
    positionKey: 'testimonials.items.sarahJohnson.position'
  },
  {
    quoteKey: 'testimonials.items.michaelChen.quote',
    authorKey: 'testimonials.items.michaelChen.author',
    positionKey: 'testimonials.items.michaelChen.position'
  },
  {
    quoteKey: 'testimonials.items.davidSmith.quote',
    authorKey: 'testimonials.items.davidSmith.author',
    positionKey: 'testimonials.items.davidSmith.position'
  }
];

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          {t('testimonials.heading')}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg relative"
            >
              <Quote className="h-8 w-8 text-red-600 mb-4" />
              <p className="text-gray-600 mb-4 italic">{t(testimonial.quoteKey)}</p>
              <div className="mt-4">
                <p className="font-semibold">{t(testimonial.authorKey)}</p>
                <p className="text-sm text-gray-500">{t(testimonial.positionKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
