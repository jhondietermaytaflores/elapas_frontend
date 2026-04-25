"use client";

import { Card } from "@/shared/ui/card/card";
import { Input } from "@/shared/ui/input/input";
import { Button } from "@/shared/ui/button/button";
import { useGenerarFacturaForm } from "../model/use-generar-factura-form";

export function GenerarFacturaForm() {
    const { form, isSubmitting, updateField, handleSubmit } =
        useGenerarFacturaForm();

    return (
        <Card className="p-5">
            <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Generar factura mensual
            </h2>

            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        ID del usuario
                    </label>
                    <Input
                        type="number"
                        value={form.usuarioId || ""}
                        onChange={(e) => 
                        {
                            const value = e.target.value;
                            updateField("usuarioId", value === "" ? 0 : Number(value));
                            /* updateField("usuarioId", Number(e.target.value)); */
                        }}
                        placeholder="456"
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Período
                    </label>
                    <Input
                        value={form.periodo}
                        onChange={(e) => updateField("periodo", e.target.value)}
                        placeholder="2026-04"
                    />
                </div>

                <div className="md:col-span-2">
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Generando..." : "Generar factura"}
                    </Button>
                </div>
            </form>
        </Card>
    );
}