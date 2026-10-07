/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useContext } from 'react';


const LanguageContext = createContext();


function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}


function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage doit être utilisé dans un <LanguageProvider>');
  }
  return context;
}

export { LanguageProvider, useLanguage };
