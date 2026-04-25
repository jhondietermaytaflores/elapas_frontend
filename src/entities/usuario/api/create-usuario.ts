import { apiClient } from "@/shared/api/base-api";
import type { CreateUsuarioPayload, Usuario } from "../model/types";

export async function createUsuario(
    payload: CreateUsuarioPayload
): Promise<Usuario> {
    const { data } = await apiClient.post("/usuarios", payload);
    return data;
}