import { Dropdown } from "react-bootstrap";

import { app, app_login } from "../db";

export function AccountSelector({ t }) {
    if (app_login.currentUser === null) {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="outline-primary" className="rounded-pill" id="dropdown-basic">
                    <i className="bi bi-person"></i>{t("login.not_logged")}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-lg-end">
                    <Dropdown.Item href="/login/">
                        <i className="bi bi-door-open"> </i>
                        {t("login.login")}</Dropdown.Item>
                    <Dropdown.Item href="/login/register/">
                        <i className="bi bi-person-add"> </i>
                        {t("login.register")}
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-primary" className="rounded-pill" id="dropdown-basic">
                <i className="bi bi-person"></i>{app_login.currentUser.customData.name}
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-lg-end">
                <Dropdown.Item href="/login/account/" target="blank">
                    <i className="bi bi-gear"> </i>
                    {t("login.manage")}
                </Dropdown.Item>
                <Dropdown.Item href="/login/logout/">
                    <i className="bi bi-box-arrow-right"> </i>
                    {t("login.logout")}
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}