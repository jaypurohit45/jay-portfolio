import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import { Toaster } from "sonner"; // This is for your popups

// Import your beautiful new font
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Jay Purohit | Full Stack Developer",
  description: "Portfolio of Jay Purohit, a Full Stack Web Developer building modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.className} bg-[#0B1120] text-slate-300 antialiased selection:bg-cyan-500/30 selection:text-cyan-200`}>
        
        {/* Your magical custom cursor */}
        <Cursor />

        {/* Your website content */}
        <main className="relative z-10">
          {children}
        </main>

        {/* The popup notification system */}
        <Toaster 
          theme="dark" 
          position="bottom-right"
          toastOptions={{
            style: { background: '#0f172a', border: '1px solid #1e293b', color: '#fff' }
          }} 
        />
      </body>
    </html>
  );
}