"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-alam-900/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl text-white tracking-widest uppercase">
          Pejalan.
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-white/90">
          <Link href="#tentang" className="hover:text-white transition-colors">
            Tentang
          </Link>
          <Link href="#kisah" className="hover:text-white transition-colors">
            Jurnal
          </Link>
          <Link href="#galeri" className="hover:text-white transition-colors">
            Galeri
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
