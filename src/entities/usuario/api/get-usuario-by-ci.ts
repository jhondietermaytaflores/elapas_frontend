import { apiClient } from "@/shared/api/base-api";
import type { Usuario } from "../model/types";

export async function getUsuarioByCi(ci: string): Promise<Usuario> {
    const { data } = await apiClient.get(`/usuarios/${ci}`);
    return data;
}