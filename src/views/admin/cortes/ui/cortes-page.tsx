"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getCortes } from "@/entities/dashboard";
import { CorteTable, CorteSkeleton, type CorteActivo } from "@/entities/corte";
import { RegistrarCorteForm } from "@/features/corte/registrar-corte";
import { DeudasEmpty } from "@/entities/factura";
import { Card } from "@/shared/ui/card/card";
import { Input } from "@/shared/ui/input/input";
import { Button } from "@/shared/ui/button/button";

export function CortesPage() {
    const [loading, setLoading] = useState(true);
    const [distrito, setDistrito] = useState(1);
    const [cortes, setCortes] = useState<CorteActivo[]>([]);

    async function loadCortes(selectedDistrito = distrito) {
        try {
            setLoading(true);
            const data = await getCortes({ distrito: selectedDistrito });
            setCortes((data.cortes ?? []) as CorteActivo[]);
        } catch (error) {
            console.error(error);
            toast.error("No se pudieron cargar los cortes");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadCortes(1);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 p-6 space-y-6 dark:bg-slate-900">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Gestión de cortes
                </h1>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Registro y monitoreo de cortes activos por distrito
                </p>
            </div>

            <RegistrarCorteForm onSuccess={() => loadCortes()} />

            <Card className="p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-end">
                    <div className="w-full max-w-xs">
                        <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Filtrar por distrito
                        </label>
                        <Input
                            type="number"
                            min={1}
                            max={5}
                            value={distrito}
                            onChange={(e) => setDistrito(Number(e.target.value))}
                        />
                    </div>

                    <Button type="button" onClick={() => loadCortes(distrito)}>
                        Consultar cortes
                    </Button>
                </div>
            </Card>

            {loading ? (
                <div className="space-y-4">
                    <CorteSkeleton />
                    <CorteSkeleton />
                </div>
            ) : cortes.length === 0 ? (
                <DeudasEmpty
                    title="Sin cortes activos"
                    description="No existen cortes activos para el distrito consultado."
                />
            ) : (
                <CorteTable cortes={cortes} />
            )}
        </main>
    );
}