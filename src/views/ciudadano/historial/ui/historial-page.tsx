"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { getCiFromToken } from "@/shared/lib/jwt";
import { useAuthStore } from "@/features/auth/login-by-credentials";
import {
    getHistorialByCi,
    DeudasEmpty,
    type HistorialConsumoItem,
    type ConsumoChartPoint,
} from "@/entities/factura";
import { HistorialConsumoChart } from "@/widgets/historial-consumo-chart";
import { Card } from "@/shared/ui/card/card";
import { Skeleton } from "@/shared/ui/skeleton/skeleton";

function mapHistorialToChart(data: HistorialConsumoItem[]): ConsumoChartPoint[] {
    return data
        .map((item, index) => {
            const periodo = String(item.periodo ?? `Periodo-${index + 1}`);
            const value = Number(item.consumoM3 ?? item.consumo ?? item.m3 ?? 0);

            return {
                time: periodo,
                value,
            };
        })
        .filter((item) => !Number.isNaN(item.value));
}

export function HistorialPage() {
    const { token, loadSession } = useAuthStore();
    const [loading, setLoading] = useState(true);
    const [historial, setHistorial] = useState<HistorialConsumoItem[]>([]);
    const [ci, setCi] = useState<string | null>(null);

    useEffect(() => {
        loadSession();
    }, [loadSession]);

    useEffect(() => {
        if (!token) return;
        setCi(getCiFromToken(token));
    }, [token]);

    useEffect(() => {
        async function loadHistorial() {
            if (!ci) {
                setLoading(false);
                return;
            }

            try {
                const data = await getHistorialByCi(ci);
                setHistorial(data);
            } catch (error) {
                console.error(error);
                toast.error("No se pudo cargar el historial");
            } finally {
                setLoading(false);
            }
        }

        loadHistorial();
    }, [ci]);

    const chartData = useMemo(() => mapHistorialToChart(historial), [historial]);

    return (
        <main className="min-h-screen bg-slate-50 p-6 space-y-6 dark:bg-slate-900">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Historial de consumo
                </h1>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Visualiza tu comportamiento de consumo registrado
                </p>
            </div>

            {loading ? (
                <>
                    <Card className="p-5">
                        <Skeleton className="h-5 w-40" />
                        <Skeleton className="mt-4 h-80 w-full" />
                    </Card>

                    <Card className="p-5">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="mt-4 h-12 w-full" />
                        <Skeleton className="mt-3 h-12 w-full" />
                        <Skeleton className="mt-3 h-12 w-full" />
                    </Card>
                </>
            ) : historial.length === 0 ? (
                <DeudasEmpty
                    title="Sin historial disponible"
                    description="Todavía no existen registros de consumo disponibles para mostrar."
                />
            ) : (
                <>
                    <HistorialConsumoChart data={chartData} loading={false} />

                    <Card className="p-5">
                        <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                            Registros de consumo
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-left text-slate-500 dark:border-slate-800 dark:text-slate-400">
                                        <th className="py-3 pr-4">Período</th>
                                        <th className="py-3 pr-4">Consumo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {historial.map((item, index) => {
                                        const periodo = String(item.periodo ?? `Periodo-${index + 1}`);
                                        const consumo = Number(item.consumoM3 ?? item.consumo ?? item.m3 ?? 0);

                                        return (
                                            <tr
                                                key={`${periodo}-${index}`}
                                                className="border-b border-slate-100 dark:border-slate-800"
                                            >
                                                <td className="py-3 pr-4 text-slate-900 dark:text-slate-100">
                                                    {periodo}
                                                </td>
                                                <td className="py-3 pr-4 text-slate-900 dark:text-slate-100">
                                                    {consumo} m³
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </>
            )}
        </main>
    );
}