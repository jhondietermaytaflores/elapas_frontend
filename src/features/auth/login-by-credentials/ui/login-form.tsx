"use client";

import { Input } from "@/shared/ui/input/input";
import { Button } from "@/shared/ui/button/button";
import { Card } from "@/shared/ui/card/card";
import { useLoginForm } from "../model/use-login-form";

export function LoginForm() {
    const {
        ci,
        password,
        isSubmitting,
        errorMessage,
        setCi,
        setPassword,
        handleSubmit,
    } = useLoginForm();

    return (
        <Card className="fade-in-up w-full max-w-md border-white/20 bg-white/95 p-8 backdrop-blur-sm">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-amber-50 text-center">ELAPAS</h1>
                <p className="mt-2 text-sm text-slate-500">
                    Sistema de Gestión de Recaudaciones y Cortes
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                        Carnet de Identidad
                    </label>
                    <Input
                        type="text"
                        value={ci}
                        onChange={(e) => setCi(e.target.value)}
                        placeholder="Ingrese su CI"
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                        Contraseña
                    </label>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ingrese su contraseña"
                    />
                </div>

                {errorMessage && (
                    <p className="text-sm text-red-600">{errorMessage}</p>
                )}

                <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Ingresando..." : "Iniciar sesión"}
                </Button>
            </form>
        </Card>
    );
}