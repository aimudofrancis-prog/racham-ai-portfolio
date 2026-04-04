import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Racham AI | Command Center",
  description: "Architecting the Future of SME Automation & Infrastructure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0A0A0A] antialiased`}>
        {/* Decorative Background Element */}
        <div className="fixed inset-0 bg-grid z-[-1]" />
        <div className="fixed inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent z-[-1]" />
        
        {children}
      </body>
    </html>
  );
}