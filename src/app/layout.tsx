import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ["normal", "italic"],
  variable: "--font-playfair" 
});

export const metadata: Metadata = {
  title: "Jejak Langkah - Nasrudin",
  description: "Portofolio perjalanan dan jurnal pendakian, menangkap momen keindahan alam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-alam-50 text-gray-800 selection:bg-alam-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
