"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../model/use-theme";
import { cn } from "@/shared/lib/cn";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    console.log("Tema actual:", theme);
    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={cn(
                "transition-theme inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium",
                "border-slate-300 bg-white text-slate-800 hover:bg-slate-100",
                "dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            )}
            aria-label="Cambiar tema"
        >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            <span>{theme === "light" ? "Dark" : "Light"}</span>
            
        </button>
        
    );
}