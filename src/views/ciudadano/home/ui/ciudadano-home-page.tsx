"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getCiFromToken } from "@/shared/lib/jwt";
import { useAuthStore } from "@/features/auth/login-by-credentials";
import { Card } from "@/shared/ui/card/card";
import { getDeudasByCi, getHistorialByCi } from "@/entities/factura";

export function CiudadanoHomePage() {
    const { token, user, loadSession } = useAuthStore();
    const [ci, setCi] = useState<string | null>(null);
    const [deudasCount, setDeudasCount] = useState(0);
    const [historialCount, setHistorialCount] = useState(0);

    useEffect(() => {
        loadSession();
    }, [loadSession]);

    useEffect(() => {
        if (!token) return;
        setCi(getCiFromToken(token));
    }, [token]);

    useEffect(() => {
        async function loadSummary() {
            if (!ci) return;

            try {
                const [deudas, historial] = await Promise.all([
                    getDeudasByCi(ci),
                    getHistorialByCi(ci),
                ]);

                setDeudasCount(deudas.length);
                setHistorialCount(historial.length);
            } catch (error) {
                console.error(error);
                toast.error("No se pudo cargar el resumen del ciudadano");
            }
        }

        loadSummary();
    }, [ci]);

    return (
        <main className="min-h-screen bg-slate-50 p-6 space-y-6 dark:bg-slate-900">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Bienvenido
                </h1>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Consulta tu deuda, historial y consumo de agua
                </p>
            </div>

            <section className="grid gap-4 md:grid-cols-3">
                <Card className="p-5">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Usuario</p>
                    <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                        {user?.nombre ?? "Sin usuario"}
                    </h2>
                </Card>

                <Card className="p-5">
                    <p className="text-sm text-slate-500 dark:text-slate-400">CI</p>
                    <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                        {ci ?? "No disponible"}
                    </h2>
                </Card>

                <Card className="p-5">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Rol</p>
                    <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                        {user?.rol ?? "No disponible"}
                    </h2>
                </Card>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
                <Card className="p-5">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Facturas pendientes
                    </p>
                    <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
                        {deudasCount}
                    </h3>
                </Card>

                <Card className="p-5">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Registros de historial
                    </p>
                    <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
                        {historialCount}
                    </h3>
                </Card>
            </section>
        </main>
    );
}