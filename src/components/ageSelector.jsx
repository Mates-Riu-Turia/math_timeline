import { Form, Button } from "react-bootstrap";

export function AgeSelector({ t }) {
    function handleSubmit(e) {
        e.preventDefault();
        const ageSelector = document.getElementById("ageSelector");
        const age = ageSelector.options[ageSelector.selectedIndex].value;
        document.location = `/math_timeline/timeline/${age}`;
    }

    return (
        <Form id="ageSelectorForm" className="d-flex align-items-center position-absolute top-50 start-50 translate-middle w-75 h-50 bg-body-tertiary rounded-5" onSubmit={handleSubmit}>
            <h2 className="text-center mt-3">{t("ageSelector.intro")}</h2>
            <Form.Select id="ageSelector" label="Choose an age">
                <option value="ancientAge">{t("ageSelector.ancientAge")}</option>
                <option value="medievalAge">{t("ageSelector.medievalAge")}</option>
                <option value="modernAge">{t("ageSelector.modernAge")}</option>
                <option value="contemporaryAge">{t("ageSelector.contemporaryAge")}</option>
            </Form.Select>
            <Button type="submit" variant="success" className="fixed-bottom mb-5" id="startButton">{t("ageSelector.startTrip")}</Button>
        </Form>
    );
}