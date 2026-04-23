import { api } from "./client";
import type { LoginPayload, LoginResponse } from "@/shared/types/auth";

export async function login(payload: LoginPayload): Promise<LoginResponse> {
    const { data } = await api.post("/auth/login", payload);
    return data;
}