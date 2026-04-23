export type Rol = "ADMIN" | "TECNICO" | "CIUDADANO";

export interface LoginPayload {
    ci: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
    usuario: {
        nombre: string;
        rol: Rol;
    };
}

export interface SessionUser {
    nombre: string;
    rol: Rol;
}