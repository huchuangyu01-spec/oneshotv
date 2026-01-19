import type { Config } from "tailwindcss";

const config: Config = {
  // 确保这里包含所有包含 Tailwind 类名的文件路径
  // 你的项目结构没有 src 目录，所以直接指向 app 和 components
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // 保留以防万一有旧的路由结构
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",   // 如果 lib 中有带样式的工具函数
  ],
  theme: {
    // ... (保持原有的 theme 配置)
  },
  plugins: [],
};
export default config;
