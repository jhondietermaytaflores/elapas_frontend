"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    FileText,
    ShieldAlert,
} from "lucide-react";
import { cn } from "@/shared/lib/cn";
import { ThemeToggle } from "@/features/theme";

const items = [
    {
        label: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "Usuarios",
        href: "/admin/usuarios",
        icon: Users,
    },
    {
        label: "Facturas",
        href: "/admin/facturas",
        icon: FileText,
    },
    {
        label: "Cortes",
        href: "/admin/cortes",
        icon: ShieldAlert,
    },
];

export function SidebarAdmin() {
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
                            ELAPAS Admin
                        </h2>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            Panel administrativo
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
                                            "shrink-0",
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