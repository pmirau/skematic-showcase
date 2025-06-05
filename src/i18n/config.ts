import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import defaultDE from './locales/de/translation.json'
import defaultEN from './locales/en/translation.json'

export const defaultNS = 'default'
export const resources = {
  de: {
    default: defaultDE,
  },
  en: {
    default: defaultEN,
  },
} as const

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'de', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    resources,
    defaultNS,
    ns: ['default'],

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
