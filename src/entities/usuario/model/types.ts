export type CategoriaTarifaria =
    | "SOLIDARIA"
    | "DOMESTICA"
    | "COMERCIAL"
    | "EDIFICIO";

export type RolUsuario = "ADMIN" | "TECNICO" | "CIUDADANO";

export interface Usuario {
    id?: number;
    nombre: string;
    ci: string;
    categoria: CategoriaTarifaria;
    direccion: string;
    distrito: number;
    numeroSerieMedidor: string;
    rol: RolUsuario;
    password?: string;
    [key: string]: unknown;
}

export interface CreateUsuarioPayload {
    nombre: string;
    ci: string;
    categoria: CategoriaTarifaria;
    direccion: string;
    distrito: number;
    numeroSerieMedidor: string;
    password: string;
    rol: RolUsuario;
}