import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      submit: "submit",
      cases: "Cases",
      recovered: "Recovered",
      deaths: "Deaths",
      serverError: "There was a problem connecting to the server",
      apiProviderError: "The error is from the information provider",
    },
  },
  de: {
    translation: {
      submit: "einreichen",
      cases: "Fälle",
      recovered: "Wiederhergestellt",
      deaths: "Todesfälle",
      serverError:
        "Beim Herstellen einer Verbindung zum Server ist ein Problem aufgetreten",
      apiProviderError: "Der Fehler stammt vom Informationsanbieter",
    },
  },
  fa: {
    translation: {
      submit: "ثبت",
      cases: "مبتلایان",
      recovered: "بهبود یافتگان",
      deaths: "کشته شدگان",
      serverError: "مشکلی در اتصال به سرور وجود دارد",
      apiProviderError: "خطا از سمت ارائه دهنده اطلاعات می‌باشد",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: true,
  },
});

export default i18n;
