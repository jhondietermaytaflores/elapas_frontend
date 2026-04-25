"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
    getUsuarios,
    UsuarioTable,
    UsuarioSkeleton,
    type Usuario,
} from "@/entities/usuario";
import { CreateUsuarioForm } from "@/features/usuario/create-usuario";
import { DeudasEmpty } from "@/entities/factura";

export function UsuariosPage() {
    const [loading, setLoading] = useState(true);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    async function loadUsuarios() {
        try {
            setLoading(true);
            const data = await getUsuarios();
            setUsuarios(data);
        } catch (error) {
            console.error(error);
            toast.error("No se pudo cargar la lista de usuarios");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadUsuarios();
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 p-6 space-y-6 dark:bg-slate-900">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Gestión de usuarios
                </h1>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Registro catastral de ciudadanos y medidores
                </p>
            </div>

            <CreateUsuarioForm onSuccess={loadUsuarios} />

            {loading ? (
                <div className="space-y-4">
                    <UsuarioSkeleton />
                    <UsuarioSkeleton />
                    <UsuarioSkeleton />
                </div>
            ) : usuarios.length === 0 ? (
                <DeudasEmpty
                    title="Sin usuarios registrados"
                    description="Todavía no existen usuarios cargados en el catastro."
                />
            ) : (
                <UsuarioTable usuarios={usuarios} />
            )}
        </main>
    );
}