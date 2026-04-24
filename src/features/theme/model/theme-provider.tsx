"use client";

import {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

type ThemeMode = "light" | "dark";

interface ThemeContextValue {
    theme: ThemeMode;
    toggleTheme: () => void;
    setTheme: (theme: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "elapas-theme";

function getInitialTheme(): ThemeMode {
    if (typeof window === "undefined") {
        return "light";
    }

    const storedTheme = localStorage.getItem(STORAGE_KEY);

    if (storedTheme === "dark" || storedTheme === "light") {
        return storedTheme;
    }

    return "light";
}

export function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setThemeState] = useState<ThemeMode>("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const initialTheme = getInitialTheme();
        setThemeState(initialTheme);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const root = document.documentElement;

        root.classList.add("theme-transition");

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem(STORAGE_KEY, theme);

        const timeout = window.setTimeout(() => {
            root.classList.remove("theme-transition");
        }, 250);

        return () => {
            window.clearTimeout(timeout);
        };
    }, [theme, mounted]);

    const setTheme = useCallback((nextTheme: ThemeMode) => {
        setThemeState(nextTheme);
    }, []);

    const toggleTheme = useCallback(() => {
        setThemeState((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }, []);

    const value = useMemo(
        () => ({
            theme,
            toggleTheme,
            setTheme,
        }),
        [theme, toggleTheme, setTheme]
    );

    if (!mounted) {
        return null;
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}