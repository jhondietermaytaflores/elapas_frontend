"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { loginRequest } from "../api/login";
import { useAuthStore } from "./auth-store";
import { routes } from "@/shared/config/routes";

export function useLoginForm() {
    const router = useRouter();
    const { setSession } = useAuthStore();

    const [ci, setCi] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErrorMessage("");
        setIsSubmitting(true);

        try {
            const response = await loginRequest({ ci, password });

            setSession(response.access_token, response.usuario);

            toast.success(`Bienvenido, ${response.usuario.nombre}`);

            if (response.usuario.rol === "ADMIN") {
                router.push(routes.adminDashboard);
                return;
            }

            if (response.usuario.rol === "CIUDADANO") {
                router.push(routes.ciudadanoHome);
                return;
            }

            router.push(routes.tecnicoHome);
        } catch {
            setErrorMessage("Credenciales incorrectas o error del servidor.");
            toast.error("No se pudo iniciar sesión");
        } finally {
            setIsSubmitting(false);
        }
    }

    return {
        ci,
        password,
        isSubmitting,
        errorMessage,
        setCi,
        setPassword,
        handleSubmit,
    };
}