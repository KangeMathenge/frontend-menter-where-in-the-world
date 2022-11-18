import React, {useState, createContext, useContext, useEffect} from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}
export function useThemeUpdate() {  
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({children}) {
    const [darkTheme, setDarkTheme] = useState(false);
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            setDarkTheme(true);
        } else {
            setDarkTheme(false);
        }
    }, []);
    useEffect(() => {
        if (darkTheme) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }, [darkTheme]);
    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}