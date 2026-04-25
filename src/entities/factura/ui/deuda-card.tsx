import { Card } from "@/shared/ui/card/card";
import type { DeudaItem } from "../model/types";

interface DeudaCardProps {
    deuda: DeudaItem;
}

export function DeudaCard({ deuda }: DeudaCardProps) {
    const periodo = String(deuda.periodo ?? "Sin período");
    const monto = Number(deuda.monto ?? deuda.total ?? 0);
    const estado = String(deuda.estado ?? "PENDIENTE");
    const fechaVencimiento = String(deuda.fechaVencimiento ?? "No definida");

    return (
        <Card className="p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Período</p>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                        {periodo}
                    </h3>
                </div>

                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Monto</p>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                        Bs {monto.toFixed(2)}
                    </h3>
                </div>

                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Estado</p>
                    <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
                        {estado}
                    </span>
                </div>

                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Vencimiento</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                        {fechaVencimiento}
                    </p>
                </div>
            </div>
        </Card>
    );
}