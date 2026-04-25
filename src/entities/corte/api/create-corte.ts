import { apiClient } from "@/shared/api/base-api";
import type { CreateCortePayload, CorteActivo } from "../model/types";

export async function createCorte(
    payload: CreateCortePayload
): Promise<CorteActivo> {
    const { data } = await apiClient.post("/cortes", payload);
    return data;
}