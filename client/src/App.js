import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from 'react-i18next';

function Nav({ t }) {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="https://portal.edu.gva.es/iesriuturia/wp-content/uploads/sites/139/2022/06/logomoeb1p.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    {t('title')}
                </a>
            </div>
        </nav>
    );
}

function Footer({ t }) {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-cdnter py-3 border-top fixed-bottom bg-body-tertiary">
            <p className="col-md-4 mb-0 text-body-secondary">© 2023 Departament de Matemàtiques</p>

            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <img src="https://portal.edu.gva.es/iesriuturia/wp-content/uploads/sites/139/2022/06/logomoeb1p.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            </a>
        </footer>
    );
}

export default function App() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Set the Web Page Title
    document.title = t("title");

    return (
        <>
            <Nav t={t} />
            <Footer t={t} />
        </>
    );
}