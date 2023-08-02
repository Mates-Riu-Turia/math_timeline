import { React, useState } from "react";
import { Dropdown, Container, Navbar, Button } from "react-bootstrap";
import useTheme from "../hooks/useTheme";

import { AccountSelector } from "./account";

export function Nav({ t, changeLanguage }) {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary z-3">
            <Container fluid>
                <Navbar.Brand href="/math_timeline/">
                    <img src="/math_timeline/images/favicon.png" alt="Logo" width="180" height="60" className="d-inline-block align-text-middle" />
                    <span>{t("title")}</span>
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <LanguageSelector t={t} changeLanguage={changeLanguage} />
                    <ThemeSelector t={t} />
                    <AccountSelector t={t} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function LanguageSelector({ t, changeLanguage }) {
    const [state, setState] = useState(" " + t("chooseLang"));

    const changeLanguageHelper = (lang) => {
        changeLanguage(lang);
        setState(" " + lang.toUpperCase());
    }

    return (
        <Dropdown className="ms-auto">
            <Dropdown.Toggle variant="secondary" className="rounded-pill m-1">
                <i className="bi bi-globe-americas"></i>
                <span>{state}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguageHelper("ca")}>Valencià/Català</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguageHelper("es")}>Castellano</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguageHelper("en")}>English</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

function ThemeSelector({ t }) {
    const [getTheme, setTheme] = useTheme();

    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" className="rounded-pill m-1">
                <i className={getTheme()[0]}></i>
                <span>{t(getTheme()[1])}</span>
            </Dropdown.Toggle>
            
            <Dropdown.Menu className="dropdown-menu-lg-end">
                <Dropdown.Item onClick={() => setTheme("light")}>
                    <i className="bi bi-sun-fill">{t("themeSelector.light")}</i>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setTheme("dark")}>
                    <i className="bi bi-moon-stars-fill">{t("themeSelector.dark")}</i>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setTheme("auto")}>
                    <i className="bi bi-circle-half">{t("themeSelector.auto")}</i>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export function Footer({ t }) {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top fixed-bottom bg-body-tertiary">
            <p className="col-md-4 mb-1 ms-2 text-body-secondary">{t("orgName")}</p>

            <a href="/math_timeline/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none me-3">
                <img src="/math_timeline/images/favicon_org.ico" alt="Logo" width="30" height="24" className="align-text-top" />
            </a>
        </footer>
    );
}