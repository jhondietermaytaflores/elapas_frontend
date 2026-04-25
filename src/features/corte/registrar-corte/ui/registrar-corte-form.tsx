"use client";

import { Card } from "@/shared/ui/card/card";
import { Input } from "@/shared/ui/input/input";
import { Button } from "@/shared/ui/button/button";
import { useRegistrarCorteForm } from "../model/use-registrar-corte-form";

interface RegistrarCorteFormProps {
    onSuccess?: () => void;
}

export function RegistrarCorteForm({ onSuccess }: RegistrarCorteFormProps) {
    const { form, isSubmitting, updateField, handleSubmit } =
        useRegistrarCorteForm(onSuccess);

    return (
        <Card className="p-5">
            <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Registrar corte por mora
            </h2>

            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        ID del usuario
                    </label>
                    <Input
                        type="number"
                        value={form.usuarioId || ""}
                        //onChange={(e) => updateField("usuarioId", Number(e.target.value))}
                        onChange={(e) => {
                            const value = e.target.value;
                            updateField("usuarioId", value === "" ? 0 : Number(value));
                        }}
                        placeholder="123"
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        URL foto evidencia
                    </label>
                    <Input
                        value={form.fotoEvidencia}
                        onChange={(e) => updateField("fotoEvidencia", e.target.value)}
                        placeholder="https://storage.com/corte_123.jpg"
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Latitud
                    </label>
                    <Input
                        type="number"
                        step="any"
                        value={form.latitud}
                        //onChange={(e) => updateField("latitud", Number(e.target.value))}
                        onChange={(e) => {
                            const value = e.target.value;
                            updateField("latitud", value === "" ? 0 : Number(value));
                        }}
                        placeholder="-19.033"
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Longitud
                    </label>
                    <Input
                        type="number"
                        step="any"
                        value={form.longitud}
                        //onChange={(e) => updateField("longitud", Number(e.target.value))}
                        onChange={(e) => {
                            const value = e.target.value;
                            updateField("longitud", value === "" ? 0 : Number(value));
                        }}
                        placeholder="-65.262"
                    />
                </div>

                <div className="md:col-span-2">
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Registrando..." : "Registrar corte"}
                    </Button>
                </div>
            </form>
        </Card>
    );
}