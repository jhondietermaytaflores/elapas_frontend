export interface RecaudacionResponse {
    fecha: string;
    distrito: number;
    totalRecaudadoBs: number;
    transacciones: number;
}

export interface CorteItem {
    id?: number;
    usuarioId?: number;
    latitud?: number;
    longitud?: number;
    fotoEvidencia?: string;
    [key: string]: unknown;
}

export interface CortesResponse {
    totalCortesActivos: number;
    distritoFiltro: string;
    cortes: CorteItem[];
}

export interface ChartPoint {
    time: string;
    value: number;
}