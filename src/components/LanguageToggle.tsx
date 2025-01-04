import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
    >
      <Globe className="h-5 w-5" />
      <span>{i18n.language === 'ar' ? 'English' : 'العربية'}</span>
    </button>
  );
}