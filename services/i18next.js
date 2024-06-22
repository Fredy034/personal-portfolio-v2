import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import es from '../locales/es.json';

const getLanguage = () => {
  if (localStorage.getItem('lang')) {
    if (localStorage.getItem('lang') === 'spanish') {
      return 'es';
    } else {
      return 'en';
    }
  } else {
    return 'en';
  }
};

export const languageResources = {
  en: { translation: en },
  es: { translation: es },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: getLanguage(),
  fallbackLng: getLanguage(),
  resources: languageResources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
