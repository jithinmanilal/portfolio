"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = "light" | "dark";

type ThemeContextType = {
    bgTheme: Theme,
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

const ThemeContextProvider = ({ children }:ThemeContextProviderProps) => {
    const [bgTheme, setBgTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        if (bgTheme === "light") {
        setBgTheme("dark");
        window.localStorage.setItem("bgTheme", "dark")
        document.documentElement.classList.add("dark")
        } else {
        setBgTheme("light");
        window.localStorage.setItem("bgTheme", "light")
        document.documentElement.classList.remove("dark")
        }
    }

    useEffect(()=> {
        const localTheme = window.localStorage.getItem('bgTheme') as Theme | null;
        if (localTheme) {
        setBgTheme(localTheme);
        if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
        }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setBgTheme("dark");
        document.documentElement.classList.add("dark");
        }
    },[])

  return (
    <ThemeContext.Provider value={{ bgTheme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useTheme must be used within ThemeCOntextProvider.")
    }
    return context;
}