import { React, useState } from "react";
import { useTranslation } from 'react-i18next';

import { Nav, Footer } from "./components/basicUI";
import { AgeSelector } from "./components/ageSelector";

export default function App() {
    const { t, i18n } = useTranslation();
    const [state, setState] = useState("AgeSelection");

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Set the Web Page Title
    document.title = t("title");

    return (
        <>
            <Nav t={t} changeLanguage={changeLanguage} />
            {
                (state == "AgeSelection" ? <AgeSelector t={t} setAppState={setState} /> :  <h1>Help</h1>)
            }
            <Footer t={t} />
        </>
    );
}