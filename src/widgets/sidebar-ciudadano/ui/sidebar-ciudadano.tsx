"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Receipt, BarChart3 } from "lucide-react";
import { cn } from "@/shared/lib/cn";
import { ThemeToggle } from "@/features/theme";

const items = [
    {
        label: "Inicio",
        href: "/ciudadano",
        icon: Home,
    },
    {
        label: "Deudas",
        href: "/ciudadano/deudas",
        icon: Receipt,
    },
    {
        label: "Historial",
        href: "/ciudadano/historial",
        icon: BarChart3,
    },
];

export function SidebarCiudadano() {
    const pathname = usePathname();

    return (
        <aside
            className={cn(
                "transition-theme hidden min-h-screen w-72 border-r lg:block",
                "border-slate-200 bg-white",
                "dark:border-slate-800 dark:bg-slate-950"
            )}
        >
            <div
                className={cn(
                    "border-b px-6 py-5",
                    "border-slate-200",
                    "dark:border-slate-800"
                )}
            >
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                            ELAPAS Ciudadano
                        </h2>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            Portal del usuario
                        </p>
                    </div>

                    <ThemeToggle />
                </div>
            </div>

            <nav className="p-4">
                <ul className="space-y-2">
                    {items.map((item) => {
                        const Icon = item.icon;
                        const active = pathname === item.href;

                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "transition-theme flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium",
                                        active
                                            ? "bg-slate-900 text-white shadow-sm dark:bg-teal-500 dark:text-slate-950"
                                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                                    )}
                                >
                                    <Icon
                                        size={18}
                                        className={cn(
                                            active
                                                ? "text-white dark:text-slate-950"
                                                : "text-slate-700 dark:text-slate-300"
                                        )}
                                    />
                                    <span
                                        className={cn(
                                            active
                                                ? "text-white dark:text-slate-950"
                                                : "text-slate-700 dark:text-slate-300"
                                        )}
                                    >
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}