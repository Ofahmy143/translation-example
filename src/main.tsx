import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import enTranslation from "./assets/locales/en/translation.json";
import frTranslation from "./assets/locales/fr/translation.json";
import deTranslation from "./assets/locales/de/translation.json";
import arTranslation from "./assets/locales/ar/translation.json";

i18n.use(initReactI18next).init({
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    resources: {
        en: {
            translation: enTranslation,
        },
        fr: {
            translation: frTranslation,
        },
        de: {
            translation: deTranslation,
        },
        ar: {
            translation: arTranslation,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
