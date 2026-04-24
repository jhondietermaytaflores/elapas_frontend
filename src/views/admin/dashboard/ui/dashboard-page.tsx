"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
    getCortes,
    getLastNDays,
    getRecaudacion,
    type ChartPoint,
} from "@/entities/dashboard";
import { DashboardKpis } from "@/widgets/dashboard-kpis";
import { RecaudacionChart } from "@/widgets/recaudacion-chart";
import { DashboardEmpty } from "@/entities/dashboard";
import { Card } from "@/shared/ui/card/card";

export function AdminDashboardPage() {
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState<ChartPoint[]>([]);
    const [recaudacionHoy, setRecaudacionHoy] = useState(0);
    const [transaccionesHoy, setTransaccionesHoy] = useState(0);
    const [totalCortes, setTotalCortes] = useState(0);
    const [cortesList, setCortesList] = useState<
        Array<Record<string, unknown>>
    >([]);

    useEffect(() => {
        async function loadDashboard() {
            try {
                const distritoRecaudacion = 3;
                const distritoCortes = 1;
                const dates = getLastNDays(7);

                const recaudacionResults = await Promise.all(
                    dates.map((fecha) =>
                        getRecaudacion({
                            fecha,
                            distrito: distritoRecaudacion,
                        })
                    )
                );

                const last = recaudacionResults[recaudacionResults.length - 1];

                const points: ChartPoint[] = recaudacionResults.map((item) => ({
                    time: item.fecha,
                    value: item.totalRecaudadoBs,
                }));

                const cortesResponse = await getCortes({
                    distrito: distritoCortes,
                });

                setChartData(points);
                setRecaudacionHoy(last?.totalRecaudadoBs ?? 0);
                setTransaccionesHoy(last?.transacciones ?? 0);
                setTotalCortes(cortesResponse.totalCortesActivos);
                setCortesList(cortesResponse.cortes);
            } catch (error) {
                console.error("Error al cargar dashboard:", error);
                toast.error("No se pudo cargar el dashboard");
            } finally {
                setLoading(false);
            }
        }

        loadDashboard();
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 p-6 space-y-6 dark:bg-slate-900">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Dashboard Administrativo
                </h1>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Monitoreo general de recaudación y cortes activos
                </p>
            </div>

            <DashboardKpis
                loading={loading}
                recaudacionHoy={recaudacionHoy}
                transaccionesHoy={transaccionesHoy}
                totalCortes={totalCortes}
            />

            <RecaudacionChart data={chartData} loading={loading} />

            {!loading && cortesList.length === 0 ? (
                <DashboardEmpty
                    title="Sin cortes activos"
                    description="Actualmente no existen cortes activos para el distrito consultado."
                />
            ) : (
                <Card className="p-5">
                    <h2 className="mb-4 text-lg font-semibold text-slate-900">
                        Cortes activos
                    </h2>

                    {loading ? (
                        <div className="space-y-3">
                            <div className="h-12 animate-pulse rounded-xl bg-slate-200/80" />
                            <div className="h-12 animate-pulse rounded-xl bg-slate-200/80" />
                            <div className="h-12 animate-pulse rounded-xl bg-slate-200/80" />
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-left text-slate-500 dark:border-slate-800 dark:text-slate-400">
                                        <th className="py-3 pr-4">#</th>
                                        <th className="py-3 pr-4">Usuario</th>
                                        <th className="py-3 pr-4">Latitud</th>
                                        <th className="py-3 pr-4">Longitud</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cortesList.map((corte, index) => (
                                        <tr
                                            key={String(corte.id ?? index)}
                                            className="border-b border-slate-100 dark:border-slate-800"
                                        >
                                            <td className="py-3 pr-4">{String(corte.id ?? index + 1)}</td>
                                            <td className="py-3 pr-4">{String(corte.usuarioId ?? "-")}</td>
                                            <td className="py-3 pr-4">{String(corte.latitud ?? "-")}</td>
                                            <td className="py-3 pr-4">{String(corte.longitud ?? "-")}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </Card>
            )}
        </main>
    );
}