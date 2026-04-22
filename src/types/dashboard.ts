export interface RecaudacionKpiItem {
    fecha: string;
    total: number;
    distrito?: number;
}

export interface CorteActivoItem {
    id: number;
    usuarioId: number;
    nombre?: string;
    direccion?: string;
    latitud: number;
    longitud: number;
    fecha?: string;
}