export type Rol = "ADMIN" | "TECNICO" | "CIUDADANO";

export interface LoginPayload {
    ci: string;
    password: string;
}

export interface AuthUser {
    id?: number;
    nombre: string;
    ci: string;
    rol: Rol;
}

export interface LoginResponse {
    accessToken: string;
    user: AuthUser;
}