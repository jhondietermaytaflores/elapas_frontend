"use client";

import { create } from "zustand";
import type { SessionUser } from "@/shared/types/auth";

interface AuthState {
    token: string | null;
    user: SessionUser | null;
    setSession: (token: string, user: SessionUser) => void;
    clearSession: () => void;
    loadSession: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    user: null,

    setSession: (token, user) => {
        localStorage.setItem("access_token", token);
        localStorage.setItem("usuario", JSON.stringify(user));
        set({ token, user });
    },

    clearSession: () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("usuario");
        set({ token: null, user: null });
    },

    loadSession: () => {
        if (typeof window === "undefined") return;

        const token = localStorage.getItem("access_token");
        const rawUser = localStorage.getItem("usuario");

        set({
            token,
            user: rawUser ? JSON.parse(rawUser) : null,
        });
    },
}));