import Link from "next/link";
import { Film, User, Layers } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md z-50 flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,255,163,0.5)]">
          <Film className="w-5 h-5 text-black" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">OneShotV</span>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/" className="text-sm text-gray-400 hover:text-primary transition-colors">Studio</Link>
        <Link href="/gallery" className="text-sm text-gray-400 hover:text-white transition-colors">Gallery</Link>
        <Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</Link>
        <Link href="/docs" className="text-sm text-gray-400 hover:text-white transition-colors">Docs</Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm text-white glass-button px-4 py-2 rounded-full">
          Sign In
        </button>
      </div>
    </nav>
  );
};
