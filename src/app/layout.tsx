import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Macro Estetica | home",
  description: "Bienvenido a macro estetica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
