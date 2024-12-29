import "./globals.css";

import { Albert_Sans } from "next/font/google";

import Navbar from "@/app/components/shared/navbar";

const albertSans = Albert_Sans({
    adjustFontFallback: false,
    display: "swap",
    subsets: ["latin"],
    variable: "--font-albert-sans",
});

export const metadata = {
    description: "To a beautifully finished home with Oda’s expertly crafted packages.",
    title: "Oda",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${albertSans.variable} antialiased overflow-x-hidden`}>
                <Navbar />
                <main className="min-h-screen font-albert-sans">
                    {children}
                </main>
            </body>
        </html>
    );
}
