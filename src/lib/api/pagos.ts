import { api } from "./client";

export async function generarPagoQR(payload: { facturaId: number }) {
    const { data } = await api.post("/pagos/qr", payload);
    return data;
}