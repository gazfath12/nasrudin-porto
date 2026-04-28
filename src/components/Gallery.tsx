"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "/gallery/image.png",
    "/gallery/image copy.png",
    "/gallery/image copy 2.png",
    "/gallery/image copy 3.png",
    "/gallery/image copy 4.png",
    "/gallery/image copy 5.png",
    "/gallery/image copy 6.png",
    "/gallery/image copy 7.png",
    "/gallery/image copy 8.png",
    "/gallery/image copy 9.png",
    "/gallery/image copy 10.png",
  ];

  return (
    <section id="galeri" className="py-24 bg-alam-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Mata Lensa</h2>
          <p className="text-gray-400 font-light text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Beberapa momen yang beruntung sempat tertangkap oleh kamera sebelum baterainya mati karena dingin.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`overflow-hidden rounded-xl ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              <img 
                src={src} 
                alt="Galeri" 
                className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-700 cursor-pointer opacity-90 hover:opacity-100" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
