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
  title: "Nasrudin - Portofolio Perjalanan & Petualangan Alam",
  description: "Jejak langkah Nasrudin dalam menjelajahi keindahan alam Indonesia, mulai dari puncak Gunung Lawu hingga pesona Curug Penganten. Temukan cerita petualangan dan momen tak terlupakan di sini.",
  keywords: "Nasrudin, Portofolio Nasrudin, Pendaki Gunung, Jejak Langkah, Petualangan Alam, Gunung Lawu, Gunung Bromo, Bukit Cumbri, Wisata Alam Indonesia",
  authors: [{ name: "Nasrudin" }],
  openGraph: {
    title: "Nasrudin - Portofolio Perjalanan",
    description: "Koleksi jurnal perjalanan dan dokumentasi petualangan Nasrudin.",
    images: ["/profile.png"],
  },
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
