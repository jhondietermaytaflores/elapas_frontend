"use client";

import { useState } from "react";
import { toast } from "sonner";
import { apiClient } from "@/shared/api/base-api";

interface GenerarFacturaPayload {
  usuarioId: number;
  periodo: string;
}

const initialState: GenerarFacturaPayload = {
  usuarioId: 0,
  periodo: "",
};

export function useGenerarFacturaForm() {
  const [form, setForm] = useState<GenerarFacturaPayload>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField<K extends keyof GenerarFacturaPayload>(
    key: K,
    value: GenerarFacturaPayload[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    /* aqui peque cambio brave incog*/
    if (!form.usuarioId || form.usuarioId <= 0) {
      toast.error("El ID de usuario no es válido");
      return;
    }

    if (!/^\d{4}-\d{2}$/.test(form.periodo)) {
      toast.error("El período debe tener formato YYYY-MM");
      return;
    }


    try {
      const { data } = await apiClient.post("/facturas/generar", form);
      console.log("Factura generada:", data);
      toast.success("Factura generada correctamente");
      setForm(initialState);
    } catch (error:any) {
      /* console.error(error); */
      console.error("Backend dice:", error.response?.data);
      toast.error("No se pudo generar la factura");
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