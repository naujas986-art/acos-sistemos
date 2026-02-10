import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "ACOS | Automated Client Operating System",
    description:
        "Transform chaos into clarity. AI-driven automation ecosystem that puts your entire business on autopilot.",
    keywords: [
        "automation",
        "client management",
        "AI",
        "business automation",
        "CRM",
        "Airtable",
    ],
    openGraph: {
        title: "ACOS | Automated Client Operating System",
        description:
            "Transform chaos into clarity. AI-driven automation ecosystem that puts your entire business on autopilot.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} antialiased`}>{children}</body>
        </html>
    );
}
