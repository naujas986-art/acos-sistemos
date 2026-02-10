import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "ACOS",
    description:
        "Paverskite chaosą tvarka. Dirbtiniu intelektu pagrįsta automatizavimo ekosistema, kuri jūsų verslą valdo autopiloto režimu.",
    keywords: [
        "automatizacija",
        "klientų valdymas",
        "dirbtinis intelektas",
        "verslo automatizavimas",
        "CRM",
        "Airtable",
    ],
    openGraph: {
        title: "ACOS | Automatizuota Klientų Aptarnavimo Sistema",
        description:
            "Paverskite chaosą tvarka. Dirbtiniu intelektu pagrįsta automatizavimo ekosistema, kuri jūsų verslą valdo autopiloto režimu.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="lt" className="scroll-smooth">
            <body className={`${inter.variable} antialiased`}>{children}</body>
        </html>
    );
}
