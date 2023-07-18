import { React, useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { getBranches } from "./db";

import { Nav, Footer } from "./components/basicUI";
import { AgeSelector } from "./components/ageSelector";
import { Branches } from "./components/branches"
import { NotFound } from "./components/notFound";

export default function App() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Set the Web Page Title
    document.title = t("title");

    // Get the branches list
    const [lang, setLang] = useState(i18n.language);
    const [branches, setBranches] = useState(null);

    if (lang != i18n.language) {
        setLang(i18n.language);
    }

    useEffect(() => {
        const branchesSync = async () => {
            const branchesList = await getBranches(lang.split('-')[0]);
            setBranches(branchesList);
        };
        branchesSync();
    }, [lang]);


    if (branches === null) {
        return (<></>);
    }



    return (
        <Router>
            <Nav t={t} changeLanguage={changeLanguage} />
            <Routes>
                <Route path="/math_timeline/" element={
                    <AgeSelector t={t} />
                } />
                <Route path="/math_timeline/timeline/:age" element={
                    <Branches />
                } />
                <Route path="*" element={
                    <NotFound t={t} />
                } />
            </Routes>
            <Footer t={t} />
        </Router>
    );
}