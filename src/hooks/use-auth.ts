"use client";

import { create } from "zustand";
import type { AuthUser } from "@/types/auth";

interface AuthState {
    user: AuthUser | null;
    token: string | null;
    setSession: (token: string, user: AuthUser) => void;
    clearSession: () => void;
    loadSession: () => void;
}

export const useAuth = create<AuthState>((set) => ({
    user: null,
    token: null,

    setSession: (token, user) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        set({ token, user });
    },

    clearSession: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        set({ token: null, user: null });
    },

    loadSession: () => {
        const token = localStorage.getItem("token");
        const rawUser = localStorage.getItem("user");

        if (token && rawUser) {
            set({
                token,
                user: JSON.parse(rawUser),
            });
        }
    },
}));