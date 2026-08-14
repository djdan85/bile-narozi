import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Salon Bílé nároží | Krása v centru Plzně",
  description:
    "Kadeřnictví, nehtové studio, pedikúra a kosmetika v centru Plzně. Salon Bílé nároží – péče, klid a profesionální služby na jednom místě.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
