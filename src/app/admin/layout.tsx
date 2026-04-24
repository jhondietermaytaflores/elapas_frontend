import { SidebarAdmin } from "@/widgets/sidebar-admin";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50 lg:flex">
            <SidebarAdmin />
            <div className="flex-1">{children}</div>
        </div>
    );
}