import { apiClient } from "@/shared/api/base-api";
import type { RecaudacionResponse } from "../model/types";

interface GetRecaudacionParams {
    fecha: string;
    distrito: number;
}

export async function getRecaudacion(
    params: GetRecaudacionParams
): Promise<RecaudacionResponse> {
    const { data } = await apiClient.get("/dashboard/recaudacion", { params });
    return data;
}