"use client";

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ru' : 'en';
    setLanguage(newLanguage);
  };
  
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center px-3 py-1.5 text-sm text-navy border border-gray-200 rounded-full"
      aria-label={language === 'en' ? 'Switch to Russian language' : 'Switch to English language'}
    >
      <span className="mr-1">{language === 'en' ? '🇷🇺' : '🇺🇸'}</span>
      <span>{language === 'en' ? 'RU' : 'EN'}</span>
    </button>
  );
};