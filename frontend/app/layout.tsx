import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LiquidBackground } from "@/components/ui/LiquidBackground";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OneShotV | AI Video Studio",
  description: "Cinematic AI Video Generation with Precise Camera Control",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={inter.className}>
        <LiquidBackground />
        <Navbar />
        <main className="pt-16 min-h-screen relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}
