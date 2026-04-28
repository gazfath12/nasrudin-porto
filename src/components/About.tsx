"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="tentang" className="py-24 px-6 md:px-12 max-w-6xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-16">
        
        {/* Kolom Foto */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 relative group"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
            <img 
              src="/profile.png" 
              alt="Nasrudin" 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-alam-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-xl hidden md:block border border-alam-100"
          >
            <p className="font-serif text-alam-800 text-2xl font-bold">50+</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Puncak Didaki</p>
          </motion.div>
        </motion.div>

        {/* Kolom Teks */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-7/12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-alam-900 mb-6 leading-tight">Nasrudin</h2>
          <div className="space-y-6 text-gray-600 font-light text-lg">
            <p className="leading-relaxed">
              Halo. Saya adalah seseorang yang menemukan ketenangan di antara riuhnya angin lembah dan dinginnya kabut pagi. Sejak pertama kali memanggul ransel bertahun-tahun lalu, saya sadar bahwa jalanan tanah dan bebatuan adalah tempat saya pulang.
            </p>
            <p className="leading-relaxed">
              Di halaman ini, saya mengumpulkan serpihan ingatan dari berbagai tempat yang pernah menyambut kaki saya. Beberapa indah, beberapa menguji batas fisik, tapi semuanya mengajarkan satu hal: <strong className="font-medium text-alam-800">rasa syukur</strong>.
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-10">
            <div className="h-[1px] w-16 bg-alam-500"></div>
            <span className="text-sm uppercase tracking-widest text-alam-800 font-medium">Berdasarkan Kisah Nyata</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
