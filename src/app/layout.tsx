import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
  title: "ELAPAS",
  description: "Sistema de Gestión de Recaudaciones y Cortes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}