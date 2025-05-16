import { useLanguage } from './LanguageContext';
import pt from '../i18n/pt';
import en from '../i18n/en';
import es from '../i18n/es';
import it from '../i18n/it';
import fr from '../i18n/fr';

const translations = { pt, en, es, it, fr };

export function useTranslation() {
  const { language } = useLanguage();
  return translations[language];
} 