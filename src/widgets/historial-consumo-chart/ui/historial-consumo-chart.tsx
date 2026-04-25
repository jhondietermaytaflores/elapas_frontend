"use client";

import { useEffect, useRef } from "react";
import { createChart, LineSeries } from "lightweight-charts";
import type { ConsumoChartPoint } from "@/entities/factura";
import { Card } from "@/shared/ui/card/card";
import { ChartSkeleton } from "@/shared/ui/skeleton/chart-skeleton";

interface HistorialConsumoChartProps {
    data: ConsumoChartPoint[];
    loading: boolean;
}

export function HistorialConsumoChart({
    data,
    loading,
}: HistorialConsumoChartProps) {
    const chartContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!chartContainerRef.current || loading || data.length === 0) return;

        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 320,
            grid: {
                vertLines: { visible: false },
                horzLines: { visible: true },
            },
            rightPriceScale: {
                borderVisible: false,
            },
            timeScale: {
                borderVisible: false,
            },
        });

        const lineSeries = chart.addSeries(LineSeries, {
            lineWidth: 3,
            priceLineVisible: false,
            lastValueVisible: true,
        });

        lineSeries.setData(data);

        const resizeObserver = new ResizeObserver(() => {
            if (!chartContainerRef.current) return;

            chart.applyOptions({
                width: chartContainerRef.current.clientWidth,
            });
        });

        resizeObserver.observe(chartContainerRef.current);

        return () => {
            resizeObserver.disconnect();
            chart.remove();
        };
    }, [data, loading]);

    if (loading) {
        return <ChartSkeleton />;
    }

    return (
        <Card className="p-5">
            <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Historial de consumo
            </h2>
            <div ref={chartContainerRef} className="w-full" />
        </Card>
    );
}