export function NotFound({ t }) {
    // We cannot read properly the NotFound component text unless we set the backgroundImage to none
    document.getElementsByTagName("body")[0].style.backgroundImage = "none";

    return (
        <>
            <div className="text-center position-absolute bottom-0 start-0 end-0 transalte-middle" id="notFoundContainer">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3">
                    <span className="text-danger">{t("notFound.onomatopoeia")}</span>
                    <br />
                    <span>{t("notFound.error")}</span>
                </p>
                <p className="lead">
                    {t("notFound.description")}
                </p>
                <a href="/math_museum/" className="btn btn-primary">
                    {t("notFound.home")}
                    <i className="bi bi-house-fill ms-1"></i>
                </a>
            </div>
        </>
    );
}   