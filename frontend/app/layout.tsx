import type { Metadata } from "next";
import { Inter } from "next/font/google";
// 确保正确引入全局样式文件，这里包含了 Tailwind 的指令
import "./globals.css"; 
import { LiquidBackground } from "@/components/ui/LiquidBackground";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });
// ... (保持原有代码)
