import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import image5 from '../../images/5.jpg';

export function Hero() {
  const { t } = useTranslation();
  
  // Create a ref for the end of the page
  const endOfPageRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the end of the page
  const scrollToEnd = () => {
    if (endOfPageRef.current) {
      endOfPageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slides = [
    {
      image: image1,
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
      ctaPrimary: t('hero.cta.primary'),
      ctaSecondary: t('hero.cta.secondary'),
    },
    {
      image: image2,
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
      ctaPrimary: t('hero.cta.primary'),
      ctaSecondary: t('hero.cta.secondary'),
    },
    {
      image: image3,
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
      ctaPrimary: t('hero.cta.primary'),
      ctaSecondary: t('hero.cta.secondary'),
    },
    {
      image: image4,
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
      ctaPrimary: t('hero.cta.primary'),
      ctaSecondary: t('hero.cta.secondary'),
    },
    {
      image: image5,
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
      ctaPrimary: t('hero.cta.primary'),
      ctaSecondary: t('hero.cta.secondary'),
    },
  ];

  return (
    <>
      <Container>
        {/* Swiper slider component */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="rounded-lg shadow-2xl"
        >
          {/* Map through slides array to render each slide */}
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Background Image */}
              <div
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
                {/* Slide Title */}
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                >
                  {slide.title}
                </motion.h1>

                {/* Slide Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base md:text-lg mb-6"
                >
                  {slide.subtitle}
                </motion.p>

                {/* Call-to-action Buttons */}
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <button
                    onClick={scrollToEnd}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                  >
                    {slide.ctaPrimary}
                  </button>
                  <button
                    onClick={scrollToEnd}
                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-semibold transition"
                  >
                    {slide.ctaSecondary}
                  </button>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* Invisible element to mark the end of the page */}
      <div ref={endOfPageRef} className="h-1" />
    </>
  );
}
