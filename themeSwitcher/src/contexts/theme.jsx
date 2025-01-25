import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { }, 
    lightTheme: () => { },
});

export const ThemeProvider = ThemeContext.Provider

//createContext and useContext is the same thing 
export default function useTheme() {
    return useContext(ThemeContext);
}