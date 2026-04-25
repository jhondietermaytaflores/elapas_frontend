import { apiClient } from "@/shared/api/base-api";
import type { Usuario } from "../model/types";

export async function getUsuarios(): Promise<Usuario[]> {
    const { data } = await apiClient.get("/usuarios");
    return Array.isArray(data) ? data : [];
}