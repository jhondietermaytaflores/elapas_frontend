"use client";

import { ReactNode } from "react";
import { AppToaster } from "@/shared/ui/toast/toaster";

interface ProvidersProps {
    children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return (
        <>
            {children}
            <AppToaster />
        </>
    );
}