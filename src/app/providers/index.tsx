"use client";

import { ReactNode } from "react";
import { AppToaster } from "@/shared/ui/toast/toaster";
import { ThemeProvider } from "@/features/theme";

interface ProvidersProps {
    children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return (
        <ThemeProvider>
            {children}
            <AppToaster />
        </ThemeProvider>
    );
}