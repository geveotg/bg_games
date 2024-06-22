import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Home/components/Header";
import Circle from "./Home/components/Circle";
import Footer from "./Home/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bugi Games",
    description: "Games",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link
                rel="short icon"
                href="https://play-lh.googleusercontent.com/3UHZTSB6fs0hpjsPOnTJpY6b4uLxhQJPPeLt3RSCxnSD39FMeifwM_fzlNg2yg30Ljs=s94-rw"
            />
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
