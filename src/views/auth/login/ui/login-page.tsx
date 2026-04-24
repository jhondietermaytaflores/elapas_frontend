import { LoginForm } from "@/features/auth/login-by-credentials";

export function LoginPage() {
    return (
        <main className="gradient-bg flex min-h-screen items-center justify-center px-4">
            <LoginForm />
        </main>
    );
}