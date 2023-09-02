import { useTranslation } from "react-i18next";

function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        if (lng === "ar") {
            console.log("IN ar")
            // My real name is kareem hh
            document.body.style.justifyContent = "right";
        }
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("fr")}>Français</button>
            <button onClick={() => changeLanguage("de")}>Deutsch</button>
            <button onClick={() => changeLanguage("ar")}>Arabic</button>

            
        </div>
    );
}

export default LanguageSelector;
