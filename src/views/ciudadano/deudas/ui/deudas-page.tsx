"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getCiFromToken } from "@/shared/lib/jwt";
import { useAuthStore } from "@/features/auth/login-by-credentials";
import {
    getDeudasByCi,
    DeudaCard,
    DeudasEmpty,
    FacturaSkeleton,
    type DeudaItem,
} from "@/entities/factura";

export function DeudasPage() {
    const { token, loadSession } = useAuthStore();
    const [loading, setLoading] = useState(true);
    const [deudas, setDeudas] = useState<DeudaItem[]>([]);
    const [ci, setCi] = useState<string | null>(null);

    useEffect(() => {
        loadSession();
    }, [loadSession]);

    useEffect(() => {
        if (!token) return;
        setCi(getCiFromToken(token));
    }, [token]);

    useEffect(() => {
        async function loadDeudas() {
            if (!ci) {
                setLoading(false);
                return;
            }

            try {
                const data = await getDeudasByCi(ci);
                setDeudas(data);
            } catch (error) {
                console.error(error);
                toast.error("No se pudieron cargar las deudas");
            } finally {
                setLoading(false);
            }
        }

        loadDeudas();
    }, [ci]);

    return (
        <main className="min-h-screen bg-slate-50 p-6 space-y-6 dark:bg-slate-900">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Deudas pendientes
                </h1>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Revisa tus facturas pendientes de pago
                </p>
            </div>

            {loading ? (
                <div className="space-y-4">
                    <FacturaSkeleton />
                    <FacturaSkeleton />
                    <FacturaSkeleton />
                </div>
            ) : deudas.length === 0 ? (
                <DeudasEmpty
                    title="No tienes deudas pendientes"
                    description="Actualmente no existen facturas pendientes registradas para tu cuenta."
                />
            ) : (
                <div className="space-y-4">
                    {deudas.map((deuda, index) => (
                        <DeudaCard
                            key={String(deuda.id ?? deuda.facturaId ?? index)}
                            deuda={deuda}
                        />
                    ))}
                </div>
            )}
        </main>
    );
}