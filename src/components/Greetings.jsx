import { useLanguage } from '../context/LanguageContext';

function Greeting() {
  const { language } = useLanguage();

  return (
    <h1>{language === 'fr' ? 'Bonjour !' : 'Hello!'}</h1>
  );
}

export default Greeting;