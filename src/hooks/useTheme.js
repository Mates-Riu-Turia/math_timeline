import {useState} from "react";

const updateTheme = (theme) => {
    if (theme == "auto") {
        const themeDark = window.matchMedia("(prefers-color-scheme: dark)");

        if (themeDark.matches) {
            updateTheme("dark");
        }
        else {
            updateTheme("light");
        }
    }

    else {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }
};

const loadUserPreferences = () => {
    const theme = localStorage.getItem("theme");

    // Look for a saved theme in localStorage
    if (theme) {
        updateTheme(theme);
        return theme;
    }

    // Look for the default theme of the OS
    else {
        const themeDark = window.matchMedia("(prefers-color-scheme: dark)");

        if (themeDark.matches) {
            updateTheme("dark");
        }
        else {
            updateTheme("light");
        }
        return "auto";
    }

};

const useTheme = () => {
    const [theme, setTheme] = useState(loadUserPreferences());

    const getTheme = () => {
        // Return the appropiate icon class and the key for the translator
        if (theme == "auto") {
            return ["bi bi-circle-half", "themeSelector.auto"];
        }
        else if (theme == "light") {
            return ["bi bi-sun-fill", "themeSelector.light"];
        }
        else {
            return ["bi bi-moon-stars-fill", "themeSelector.dark"];
        }
    }

    const setThemeUpdate = (t) => {
        setTheme(t);
        localStorage.setItem("theme", t);
        updateTheme(t);
    }

    return [getTheme, setThemeUpdate];
};

export default useTheme;