import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { LocationCard } from './LocationCard';
import { useTranslation } from 'react-i18next';

export function Location() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <SectionTitle>{t('location.title')}</SectionTitle>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
              alt={t('location.imageAlt')}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{t('location.office.headquarters')}</h3>
                <p className="text-gray-200">{t('location.office.address')}</p>
              </div>
            </div>
          </motion.div>

          <LocationCard />
        </div>
      </Container>
    </section>
  );
}
