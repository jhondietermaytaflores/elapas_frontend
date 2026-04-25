import { apiClient } from "@/shared/api/base-api";
import type { DeudaItem } from "../model/types";

export async function getDeudasByCi(ci: string): Promise<DeudaItem[]> {
    const { data } = await apiClient.get(`/facturas/usuario/${ci}/deudas`);
    return data;
}