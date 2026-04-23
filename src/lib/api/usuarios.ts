import { api } from "./client";
import type { Usuario } from "@/shared/types/usuario";

export async function getUsuarios(): Promise<Usuario[]> {
    const { data } = await api.get("/usuarios");
    return data;
}

export async function getUsuarioByCi(ci: string): Promise<Usuario> {
    const { data } = await api.get(`/usuarios/${ci}`);
    return data;
}

export async function createUsuario(payload: Usuario) {
    const { data } = await api.post("/usuarios", payload);
    return data;
}