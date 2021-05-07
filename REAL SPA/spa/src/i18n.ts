import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const fallbackLanguage = 'en';
const acceptedLanguages = ['en'];

export const configureInternationalization = () => {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: fallbackLanguage,
      whitelist: acceptedLanguages,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      }
    });
}