import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./i18n/en.json";
import et from "./i18n/et.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: en
  },
  et: {
    translation: et
  }
};

function determineInitialLanguge() {
  const languageInLS = localStorage.getItem("language");
  if (languageInLS == null) {
    localStorage.setItem("language", "en");
    return "en";
  }
  if (!Object.keys(resources).includes(languageInLS)) {
    localStorage.setItem("language", "en");
    return "en";
  }
  return languageInLS;
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: determineInitialLanguge(), // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // React escapes what it renders (keep true for t() output in dangerouslySetInnerHTML)
    }
  });

  export default i18n;