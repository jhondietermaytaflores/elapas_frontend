import { Card } from "@/shared/ui/card/card";
import type { Usuario } from "../model/types";

interface UsuarioTableProps {
    usuarios: Usuario[];
}

export function UsuarioTable({ usuarios }: UsuarioTableProps) {
    return (
        <Card className="p-5">
            <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Catastro de usuarios
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-slate-200 text-left text-slate-500 dark:border-slate-800 dark:text-slate-400">
                            <th className="py-3 pr-4">Nombre</th>
                            <th className="py-3 pr-4">CI</th>
                            <th className="py-3 pr-4">Categoría</th>
                            <th className="py-3 pr-4">Distrito</th>
                            <th className="py-3 pr-4">Medidor</th>
                            <th className="py-3 pr-4">Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario, index) => (
                            <tr
                                key={String(usuario.id ?? `${usuario.ci}-${index}`)}
                                className="border-b border-slate-100 dark:border-slate-800"
                            >
                                <td className="py-3 pr-4 text-slate-900 dark:text-slate-100">
                                    {usuario.nombre}
                                </td>
                                <td className="py-3 pr-4 text-slate-900 dark:text-slate-100">
                                    {usuario.ci}
                                </td>
                                <td className="py-3 pr-4 text-slate-900 dark:text-slate-100">
                                    {usuario.categoria}
                                </td>
                                <td className="py-3 pr-4 text-slate-900 dark:text-slate-100">
                                    {usuario.distrito}
                                </td>
                                <td className="py-3 pr-4 text-slate-900 dark:text-slate-100">
                                    {usuario.numeroSerieMedidor}
                                </td>
                                <td className="py-3 pr-4 text-slate-900 dark:text-slate-100">
                                    {usuario.rol}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}