import { Card } from "@/shared/ui/card/card";
import type { Usuario } from "../model/types";

interface UsuarioCardProps {
    usuario: Usuario;
}

export function UsuarioCard({ usuario }: UsuarioCardProps) {
    return (
        <Card className="p-5">
            <div className="grid gap-4 md:grid-cols-4 xl:grid-cols-6">
                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Nombre</p>
                    <p className="font-medium text-slate-900 dark:text-slate-100">
                        {usuario.nombre}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">CI</p>
                    <p className="font-medium text-slate-900 dark:text-slate-100">
                        {usuario.ci}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Categoría</p>
                    <p className="font-medium text-slate-900 dark:text-slate-100">
                        {usuario.categoria}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Distrito</p>
                    <p className="font-medium text-slate-900 dark:text-slate-100">
                        {usuario.distrito}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Medidor</p>
                    <p className="font-medium text-slate-900 dark:text-slate-100">
                        {usuario.numeroSerieMedidor}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Rol</p>
                    <p className="font-medium text-slate-900 dark:text-slate-100">
                        {usuario.rol}
                    </p>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-sm text-slate-500 dark:text-slate-400">Dirección</p>
                <p className="font-medium text-slate-900 dark:text-slate-100">
                    {usuario.direccion}
                </p>
            </div>
        </Card>
    );
}