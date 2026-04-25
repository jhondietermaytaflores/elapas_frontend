"use client";

import { Card } from "@/shared/ui/card/card";
import { Input } from "@/shared/ui/input/input";
import { Button } from "@/shared/ui/button/button";
import { useCreateUsuarioForm } from "../model/use-create-usuario-form";

interface CreateUsuarioFormProps {
    onSuccess?: () => void;
}

export function CreateUsuarioForm({ onSuccess }: CreateUsuarioFormProps) {
    const {
        form,
        isSubmitting,
        updateField,
        handleSubmit,
        setCategoria,
        setRol,
    } = useCreateUsuarioForm(onSuccess);

    return (
        <Card className="p-5">
            <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Registrar nuevo usuario
            </h2>

            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Nombre completo
                    </label>
                    <Input
                        value={form.nombre}
                        onChange={(e) => updateField("nombre", e.target.value)}
                        placeholder="Nicolas de las Casas Pampañaupa"
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        CI
                    </label>
                    <Input
                        value={form.ci}
                        onChange={(e) => updateField("ci", e.target.value)}
                        placeholder="12345678"
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Distrito
                    </label>
                    <Input
                        type="number"
                        min={1}
                        max={5}
                        value={form.distrito}
                        onChange={(e) => updateField("distrito", Number(e.target.value))}
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Categoría
                    </label>
                    <select
                        className="transition-theme w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                        value={form.categoria}
                        onChange={(e) => setCategoria(e.target.value as never)}
                    >
                        <option value="SOLIDARIA">SOLIDARIA</option>
                        <option value="DOMESTICA">DOMESTICA</option>
                        <option value="COMERCIAL">COMERCIAL</option>
                        <option value="EDIFICIO">EDIFICIO</option>
                    </select>
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Rol
                    </label>
                    <select
                        className="transition-theme w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                        value={form.rol}
                        onChange={(e) => setRol(e.target.value as never)}
                    >
                        <option value="CIUDADANO">CIUDADANO</option>
                        <option value="TECNICO">TECNICO</option>
                        <option value="ADMIN">ADMIN</option>
                    </select>
                </div>

                <div className="md:col-span-2">
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Dirección
                    </label>
                    <Input
                        value={form.direccion}
                        onChange={(e) => updateField("direccion", e.target.value)}
                        placeholder="Calle Calvo #123"
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Número de serie del medidor
                    </label>
                    <Input
                        value={form.numeroSerieMedidor}
                        onChange={(e) => updateField("numeroSerieMedidor", e.target.value)}
                        placeholder="MED-2026-X89"
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Contraseña
                    </label>
                    <Input
                        type="password"
                        value={form.password}
                        onChange={(e) => updateField("password", e.target.value)}
                        placeholder="MiClaveSegura123"
                    />
                </div>

                <div className="md:col-span-2">
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Registrando..." : "Registrar usuario"}
                    </Button>
                </div>
            </form>
        </Card>
    );
}