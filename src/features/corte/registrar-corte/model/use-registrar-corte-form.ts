"use client";

import { useState } from "react";
import { toast } from "sonner";
import { createCorte } from "@/entities/corte";
import type { CreateCortePayload } from "@/entities/corte";

const initialState: CreateCortePayload = {
    usuarioId: 0,
    fotoEvidencia: "",
    latitud: 0,
    longitud: 0,
};

export function useRegistrarCorteForm(onSuccess?: () => void) {
    const [form, setForm] = useState<CreateCortePayload>(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function updateField<K extends keyof CreateCortePayload>(
        key: K,
        value: CreateCortePayload[K]
    ) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();


        // VALIDACIONES 🔥
        if (!form.usuarioId || form.usuarioId <= 0) {
            toast.error("Usuario inválido");
            return;
        }

        if (!form.fotoEvidencia || !form.fotoEvidencia.startsWith("http")) {
            toast.error("La URL de la foto no es válida");
            return;
        }

        if (
            isNaN(form.latitud) ||
            form.latitud < -90 ||
            form.latitud > 90
        ) {
            toast.error("Latitud inválida");
            return;
        }

        if (
            isNaN(form.longitud) ||
            form.longitud < -180 ||
            form.longitud > 180
        ) {
            toast.error("Longitud inválida");
            return;
        }


        setIsSubmitting(true);

        try {
            console.log("Enviando corte:", form);

            /* const data = await createCorte(form); */

            const data = await createCorte({
                usuarioId: Number(form.usuarioId),
                fotoEvidencia: form.fotoEvidencia.trim(),
                latitud: Number(form.latitud),
                longitud: Number(form.longitud),
            });


            console.log("Corte registrado:", data);
            toast.success("Corte registrado correctamente");
            setForm(initialState);
            onSuccess?.();
        } catch (error:any) {
            //console.error(error);
            console.error("Backend dice:", error.response?.data); //
            toast.error("No se pudo registrar el corte");
        } finally {
            setIsSubmitting(false);
        }
    }

    return {
        form,
        isSubmitting,
        updateField,
        handleSubmit,
    };
}