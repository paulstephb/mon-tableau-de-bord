import { useLanguage } from '../context/LanguageContext';

function LanguageToggle() {
  // Étape 3 : consommer le contexte avec le hook personnalisé
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>
      {language === 'fr' ? '🇬🇧' : '🇫🇷'}
    </button>
  );
}

export default LanguageToggle;