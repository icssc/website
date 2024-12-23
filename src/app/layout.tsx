import type { Metadata } from "next";

import "./globals.css";

import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ReactLenis } from "@/lib/lenis";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
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
                    `font-inter bg-ic-white antialiased`
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <ReactLenis root>
                        {children}
                        <Footer />
                    </ReactLenis>
                </ThemeProvider>
            </body>
        </html>
    );
}
