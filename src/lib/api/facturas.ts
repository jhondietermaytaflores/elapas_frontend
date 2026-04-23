import { api } from "./client";
import type { DeudaFactura, HistorialConsumoItem } from "@/shared/types/factura";

export async function getDeudasByCi(ci: string): Promise<DeudaFactura[]> {
    const { data } = await api.get(`/facturas/usuario/${ci}/deudas`);
    return data;
}

export async function getHistorialByCi(ci: string): Promise<HistorialConsumoItem[]> {
    const { data } = await api.get(`/facturas/usuario/${ci}/historial`);
    return data;
}

export async function generarFactura(payload: { usuarioId: number; periodo: string }) {
    const { data } = await api.post("/facturas/generar", payload);
    return data;
}