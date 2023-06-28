import { React, useState } from "react";
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
                    <img src="favicon.ico" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    {t("title")}
                </a>
                <div className="dropdown me-4">
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

function AgeSelector({ t }) {
    return (
        <form className="d-flex align-items-center position-absolute top-50 start-50 translate-middle w-75 h-50 bg-body-tertiary rounded-5">
            <h2 className="text-center mt-3">Elija en que periodo quiere comenzar su viaje</h2>
            <select className="form-select" aria-label="Default select example">
                <option value="">Edad Antigua (⁓3000 aC - 476 dC)</option>
                <option value="">Edad Medieval (453 dC - 1492 dC)</option>
                <option value="">Edad Moderna (1492 dC - 1789 dC)</option>
                <option value="">Edad Contemporanea (1789 dC - 2023 dC)</option>
            </select>
            <button className="btn btn-success fixed-bottom w-100 mb-5" id="startButtonText">¡Vamos a comenzar el viaje!</button>
        </form>
    );
}

function Footer({ t }) {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top fixed-bottom bg-body-tertiary">
            <p className="col-md-4 mb-0 ms-2 text-body-secondary">© 2023 Departament de Matemàtiques</p>

            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <img src="favicon.ico" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
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
            <AgeSelector />
            <Footer t={t} />
        </>
    );
}