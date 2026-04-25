export interface CreateCortePayload {
    usuarioId: number;
    fotoEvidencia: string;
    latitud: number;
    longitud: number;
}

export interface CorteActivo {
    id?: number;
    usuarioId?: number;
    latitud?: number;
    longitud?: number;
    fotoEvidencia?: string;
    [key: string]: unknown;
}