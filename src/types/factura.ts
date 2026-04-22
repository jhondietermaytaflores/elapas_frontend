export interface DeudaFactura {
    id: number;
    periodo: string;
    monto: number;
    estado: string;
    fechaVencimiento?: string;
}

export interface HistorialConsumoItem {
    periodo: string;
    consumoM3: number;
}