import * as React from "react";
import { cn } from "@/shared/lib/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "transition-theme rounded-2xl border shadow-sm",
                "border-slate-200 bg-white text-slate-900",
                "dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100",
                className
            )}
            {...props}
        />
    );
}