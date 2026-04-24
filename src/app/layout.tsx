import type { Metadata } from "next";
import Script from "next/script";
import { Providers } from "@/app/providers";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
  title: "ELAPAS",
  description: "Sistema de Gestión de Recaudaciones y Cortes",
};

const themeInitScript = `
(function () {
  try {
    var storedTheme = localStorage.getItem("elapas-theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}