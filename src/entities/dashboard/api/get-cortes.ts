import { apiClient } from "@/shared/api/base-api";
import type { CortesResponse } from "../model/types";

interface GetCortesParams {
    distrito: number;
}

export async function getCortes(
    params: GetCortesParams
): Promise<CortesResponse> {
    const { data } = await apiClient.get("/dashboard/cortes", { params });
    return data;
}