import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    supportedLngs: ['sk', 'en', 'de'],
    fallbackLng: 'sk', // default language of the page
    debug: false, // should be disabled in production
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
  })

export default i18n

