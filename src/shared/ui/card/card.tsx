import * as React from "react";
import { cn } from "@/shared/lib/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "transition-theme rounded-2xl border border-slate-200 bg-white shadow-sm",
                className
            )}
            {...props}
        />
    );
}