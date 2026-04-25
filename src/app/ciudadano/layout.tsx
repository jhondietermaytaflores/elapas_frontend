import { SidebarCiudadano } from "@/widgets/sidebar-ciudadano";

export default function CiudadanoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50 lg:flex dark:bg-slate-900">
            <SidebarCiudadano />
            <div className="flex-1">{children}</div>
        </div>
    );
}