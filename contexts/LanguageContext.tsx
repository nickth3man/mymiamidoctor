"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState<string>('en');

  // Initialize language from localStorage or default to 'en'
  useEffect(() => {
    // This needs to be in a try/catch block because localStorage is not available during SSR
    try {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }, [language]);

  // Change the language
  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    
    // In App Router, we would typically navigate to a different locale path
    // This is a simplified implementation - in a real app, you might need to
    // handle more complex path transformations based on your i18n strategy
    
    // For now, we're just updating the state and letting components re-render
    // with the new language preference
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};