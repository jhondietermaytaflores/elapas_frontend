import * as React from "react";
import { cn } from "@/shared/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
    return (
        <button
            className={cn(
                "transition-theme inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-medium",
                "bg-slate-900 text-white hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60",
                "dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400",
                className
            )}
            {...props}
        />
    );
}