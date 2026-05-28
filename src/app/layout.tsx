import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "./components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PersonaOn | Next-Gen AI User Persona & Focus Group Modeling",
  description: "Understand your target market with hyper-realistic AI simulated buyer personas and interactive focus group sandboxes. Calibrate price elasticity, feature feedback, and brand alignment in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}

