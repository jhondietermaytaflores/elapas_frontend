"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api/auth";
import { useAuth } from "@/hooks/use-auth";

export default function LoginPage() {
    const router = useRouter();
    const { setSession } = useAuth();
    const [ci, setCi] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await login({ ci, password });
            setSession(res.accessToken, res.user);

            if (res.user.rol === "ADMIN") router.push("/admin/dashboard");
            else if (res.user.rol === "CIUDADANO") router.push("/ciudadano");
            else router.push("/tecnico");
        } catch {
            setError("Credenciales incorrectas o error del servidor.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
            <form
                onSubmit={onSubmit}
                className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
            >
                <h1 className="text-2xl font-bold mb-2">ELAPAS</h1>
                <p className="text-sm text-slate-500 mb-6">
                    Inicia sesión para acceder al sistema
                </p>

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Carnet de identidad"
                        value={ci}
                        onChange={(e) => setCi(e.target.value)}
                        className="w-full rounded-xl border px-4 py-3"
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-xl border px-4 py-3"
                    />

                    {error && (
                        <p className="text-sm text-red-600">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-xl bg-slate-900 text-white py-3 font-medium"
                    >
                        {loading ? "Ingresando..." : "Ingresar"}
                    </button>
                </div>
            </form>
        </main>
    );
}