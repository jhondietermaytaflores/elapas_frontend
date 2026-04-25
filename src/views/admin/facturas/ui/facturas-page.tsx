import { GenerarFacturaForm } from "@/features/factura/generar-factura";
import { Card } from "@/shared/ui/card/card";

export function FacturasPage() {
    return (
        <main className="min-h-screen bg-slate-50 p-6 space-y-6 dark:bg-slate-900">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Gestión de facturas
                </h1>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Ejecuta el cálculo tarifario mensual por usuario
                </p>
            </div>

            <GenerarFacturaForm />

            <Card className="p-5">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Información
                </h2>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Este módulo utiliza el endpoint de generación manual de facturas por
                    usuario y período. Más adelante podemos ampliarlo para listar facturas,
                    filtrar por estado y enlazar el pago QR.
                </p>
            </Card>
        </main>
    );
}