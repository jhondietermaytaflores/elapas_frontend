import { apiClient } from "@/shared/api/base-api";
import type { LoginPayload, LoginResponse } from "@/shared/types/auth";

export async function loginRequest(payload: LoginPayload): Promise<LoginResponse> {
    const { data } = await apiClient.post("/auth/login", payload);
    console.log("CAPA API LOGIN RESPONSE:", data);
    return data;
}