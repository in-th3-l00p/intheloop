import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/app/header/Header";
import React from "react";
import Footer from "@/app/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "intheloop",
    description: "Tisca Catalin's personal website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
            <Header />

            <main className={"min-h-screen bg-primary"}>
                {children}
            </main>

            <Footer />
            </body>
        </html>
    );
}
