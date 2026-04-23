export type CategoriaTarifaria =
    | "SOLIDARIA"
    | "DOMESTICA"
    | "COMERCIAL"
    | "EDIFICIO";

export interface Usuario {
    id?: number;
    nombre: string;
    ci: string;
    categoria: CategoriaTarifaria;
    direccion: string;
    distrito: number;
    numeroSerieMedidor: string;
    rol: "ADMIN" | "TECNICO" | "CIUDADANO";
}