"use client";

import { useState } from "react";
import { toast } from "sonner";
import { createUsuario } from "@/entities/usuario";
import type {
    CategoriaTarifaria,
    CreateUsuarioPayload,
    RolUsuario,
} from "@/entities/usuario";

const initialState: CreateUsuarioPayload = {
    nombre: "",
    ci: "",
    categoria: "DOMESTICA",
    direccion: "",
    distrito: 1,
    numeroSerieMedidor: "",
    password: "",
    rol: "CIUDADANO",
};

export function useCreateUsuarioForm(onSuccess?: () => void) {
    const [form, setForm] = useState<CreateUsuarioPayload>(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function updateField<K extends keyof CreateUsuarioPayload>(
        key: K,
        value: CreateUsuarioPayload[K]
    ) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await createUsuario(form);
            toast.success("Usuario registrado correctamente");
            setForm(initialState);
            onSuccess?.();
        } catch (error) {
            console.error(error);
            toast.error("No se pudo registrar el usuario");
        } finally {
            setIsSubmitting(false);
        }
    }

    return {
        form,
        isSubmitting,
        updateField,
        handleSubmit,
        setCategoria: (value: CategoriaTarifaria) => updateField("categoria", value),
        setRol: (value: RolUsuario) => updateField("rol", value),
    };
}