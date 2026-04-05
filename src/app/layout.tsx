import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css"; // <--- Pointing to our new elite styles

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Racham AI | Command Center",
  description: "Architecting the Future of SME Automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        {/* The Global Grid Background */}
        <div className="fixed inset-0 bg-grid-pattern z-[-1] pointer-events-none" />
        
        {/* Subtle Radial Glow */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,136,255,0.05),transparent_50%)] z-[-1] pointer-events-none" />
        
        {children}
      </body>
    </html>
  );
}