import React from 'react';
import { MobileMenu } from './MobileMenu';
import { LanguageToggle } from '../LanguageToggle';
import { useTranslation } from 'react-i18next';
import logo from '../../images/logoo.png'; // Correct relative import

export function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Increase the logo size */}
          <img src={logo} alt="Binyatik Logo" className="h-16 w-auto" />
          <span className="text-3xl font-bold">BINYATIK</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="hover:text-red-500 transition">{t('nav.services')}</a>
          <a href="#projects" className="hover:text-red-500 transition">{t('nav.projects')}</a>
          <a href="#contact" className="hover:text-red-500 transition">{t('nav.contact')}</a>
          <LanguageToggle />
        </div>
        
        <MobileMenu />
      </div>
    </nav>
  );
}
