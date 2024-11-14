// app/layout.tsx
import { SessionProvider } from "next-auth/react";
import "@/app/globals.css";


export const metadata = {
  title: "Mi Aplicación",
  description: "Descripción de mi aplicación",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
    <html lang="es">
      <body>

          {children}

      </body>
    </html>
    </SessionProvider>

  );
}
