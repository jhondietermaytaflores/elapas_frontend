import { apiClient } from "@/shared/api/base-api";
import type { HistorialConsumoItem } from "../model/types";

export async function getHistorialByCi(ci: string): Promise<HistorialConsumoItem[]> {
    const { data } = await apiClient.get(`/facturas/usuario/${ci}/historial`);
    return data;
}