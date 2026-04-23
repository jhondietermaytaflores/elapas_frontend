import * as React from "react";
import { cn } from "@/shared/lib/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
    return (
        <input
            className={cn(
                "transition-theme w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none",
                "placeholder:text-slate-400 focus:border-slate-900",
                className
            )}
            {...props}
        />
    );
}