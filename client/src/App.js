import {React, useState} from "react";
import { useTranslation } from 'react-i18next';

function Nav({ t, changeLanguage }) {
    const [state, setState] = useState(" " + t("chooseLang"));

    function changeLanguageCa() {
        changeLanguage("ca");
        setState(" CA");
    }

    function changeLanguageEs() {
        changeLanguage("es");
        setState(" ES");
    }

    function changeLanguageEn() {
        changeLanguage("en");
        setState(" EN")
    }

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="https://portal.edu.gva.es/iesriuturia/wp-content/uploads/sites/139/2022/06/logomoeb1p.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    {t("title")}
                </a>
                <div className="dropdown me-5">
                    <button className="btn btn-secondary dropdown-toggle rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-globe-americas"></i><span id="langSelector">{state}</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" type="button" onClick={changeLanguageCa}>Valencià/Català</button></li>
                        <li><button className="dropdown-item" type="button" onClick={changeLanguageEs}>Castellano</button></li>
                        <li><button className="dropdown-item" type="button" onClick={changeLanguageEn}>English</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function Footer({ t }) {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-cdnter py-3 border-top fixed-bottom bg-body-tertiary">
            <p className="col-md-4 mb-0 ms-2 text-body-secondary">© 2023 Departament de Matemàtiques</p>

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
            <Nav t={t} changeLanguage={changeLanguage} />
            <Footer t={t} />
        </>
    );
}