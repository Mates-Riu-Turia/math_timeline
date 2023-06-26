import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from 'react-i18next';

function Nav() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    {t('title')}
                </a>
            </div>
        </nav>
    );
}

export default function App() {
    return (
        <Nav />
    );
}