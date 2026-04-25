export interface DeudaItem {
    id?: number;
    facturaId?: number;
    periodo?: string;
    monto?: number;
    total?: number;
    estado?: string;
    fechaVencimiento?: string;
    [key: string]: unknown;
}

export interface HistorialConsumoItem {
    periodo?: string;
    consumo?: number;
    consumoM3?: number;
    m3?: number;
    [key: string]: unknown;
}

export interface ConsumoChartPoint {
    time: string;
    value: number;
}