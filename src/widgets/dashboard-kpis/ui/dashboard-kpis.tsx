import { StatCard } from "@/entities/dashboard";
import { StatCardSkeleton } from "@/shared/ui/skeleton/stat-card-skeleton";

interface DashboardKpisProps {
    loading: boolean;
    recaudacionHoy: number;
    transaccionesHoy: number;
    totalCortes: number;
}

export function DashboardKpis({
    loading,
    recaudacionHoy,
    transaccionesHoy,
    totalCortes,
}: DashboardKpisProps) {
    if (loading) {
        return (
            <section className="grid gap-4 md:grid-cols-3">
                <StatCardSkeleton />
                <StatCardSkeleton />
                <StatCardSkeleton />
            </section>
        );
    }

    return (
        <section className="grid gap-4 md:grid-cols-3">
            <StatCard
                title="Recaudación del día"
                value={`Bs ${recaudacionHoy.toFixed(2)}`}
            />
            <StatCard
                title="Transacciones del día"
                value={transaccionesHoy}
            />
            <StatCard
                title="Cortes activos"
                value={totalCortes}
            />
        </section>
    );
}