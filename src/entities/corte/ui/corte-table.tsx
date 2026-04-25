import { Card } from "@/shared/ui/card/card";
import type { CorteActivo } from "../model/types";

interface CorteTableProps {
    cortes: CorteActivo[];
}

export function CorteTable({ cortes }: CorteTableProps) {
    return (
        <Card className="p-5">
            <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Cortes activos
            </h2>

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
                        {cortes.map((corte, index) => (
                            <tr
                                key={String(corte.id ?? `${corte.usuarioId}-${index}`)}
                                className="border-b border-slate-100 dark:border-slate-800"
                            >
                                <td className="py-3 pr-4 text-slate-900 dark:text-slate-100">
                                    {String(corte.id ?? index + 1)}
                                </td>
                                <td className="py-3 pr-4 text-slate-900 dark:text-slate-100">
                                    {String(corte.usuarioId ?? "-")}
                                </td>
                                <td className="py-3 pr-4 text-slate-900 dark:text-slate-100">
                                    {String(corte.latitud ?? "-")}
                                </td>
                                <td className="py-3 pr-4 text-slate-900 dark:text-slate-100">
                                    {String(corte.longitud ?? "-")}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}