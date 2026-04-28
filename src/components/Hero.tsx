"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-alam-900/30 to-alam-900/80"></div>
      </div>

      <div className="z-10 flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 tracking-[0.3em] text-sm uppercase mb-4"
        >
          Portofolio Perjalanan
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight max-w-4xl"
        >
          Lebih Jauh Berjalan, <br />
          <span className="italic text-white/90">Lebih Dekat ke Dalam.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-200 text-lg md:text-xl max-w-2xl font-light mb-10"
        >
          Bukan tentang menaklukkan puncak gunung, tapi tentang menaklukkan ego dan mengenali diri sendiri di alam bebas.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link 
            href="#tentang" 
            className="px-8 py-3 border border-white/50 text-white hover:bg-white hover:text-alam-900 transition-all duration-300 rounded-full text-sm font-medium tracking-wide backdrop-blur-sm"
          >
            Mulai Cerita
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white/70" />
      </motion.div>
    </header>
  );
}
