import type { Metadata } from "next";

import "./globals.css";

import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header/header";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
    title: "ICS Student Council",
    description: "",
    openGraph: {
        title: "ICS Student Council",
        description: "",
        url: "https://www.icssc.club",
        // images: [
        //     {
        //         url: "/ograph.png",
        //         width: 1728,
        //         height: 934,
        //     },
        // ],
        locale: "en_US",
        type: "website",
    },
};

const font = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    GeistSans.variable,
                    font.variable,
                    `bg-ic-white font-inter antialiased`
                )}
            >
                <div className="flex min-h-[100svh] flex-col">
                    <Header />
                    <div className="mb-16">{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
