import React from "react";
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav, Footer } from "./components/basicUI";
import { AgeSelector } from "./components/ageSelector";

export default function App() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Set the Web Page Title
    document.title = t("title");

    return (
        <Router>
            <Nav t={t} changeLanguage={changeLanguage} />
            <Routes>
                <Route path="/math_timeline/" element={
                    <AgeSelector t={t}/>
                } />
            </Routes>
            <Footer t={t} />
        </Router>
    );
}