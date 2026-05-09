import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VecindApp — Notificaciones WhatsApp para Administradores de Fincas",
  description:
    "Envía avisos masivos personalizados por WhatsApp a todos tus propietarios en 2 clics. Trazabilidad completa e informe de evidencia legal. Primeros 3 meses gratis.",
  keywords:
    "administrador fincas, whatsapp comunidades, notificaciones propietarios, software administracion fincas españa",
  openGraph: {
    title: "VecindApp — Notificaciones WhatsApp para Administradores de Fincas",
    description:
      "Envía avisos masivos personalizados por WhatsApp a todos tus propietarios en 2 clics.",
    url: "https://vecindapp.es",
    siteName: "VecindApp",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.className}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
