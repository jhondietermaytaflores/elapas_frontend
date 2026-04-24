import * as React from "react";
import { cn } from "@/shared/lib/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
    return (
        <input
            className={cn(
                "transition-theme w-full rounded-xl border px-4 py-3 text-sm outline-none",
                "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-slate-900",
                "dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-slate-400",
                className
            )}
            {...props}
        />
    );
}