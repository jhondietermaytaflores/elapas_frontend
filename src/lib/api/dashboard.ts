import { api } from "./client";
import type { RecaudacionKpiItem, CorteActivoItem } from "@/shared/types/dashboard";

export async function getRecaudacion(): Promise<RecaudacionKpiItem[]> {
    const { data } = await api.get("/dashboard/recaudacion");
    return data;
}

export async function getCortesActivos(): Promise<CorteActivoItem[]> {
    const { data } = await api.get("/dashboard/cortes");
    return data;
}