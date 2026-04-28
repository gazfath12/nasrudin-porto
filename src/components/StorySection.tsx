"use client";

import { motion } from "framer-motion";

export type Story = {
  id: string;
  title: string;
  description: string;
  location: string;
  date: Date;
  imageUrl: string;
};

export default function StorySection({ stories }: { stories: Story[] }) {
  // Jika belum ada data dari database, kita bisa pakai data dummy untuk visualisasi
  const displayStories = stories.length > 0 ? stories : [
    {
      id: "1",
      title: "Menyapa Pagi di Plawangan",
      description: "Angin malam di Sembalun menusuk hingga ke tulang, tapi pemandangan lautan bintang di atas sana membuat semuanya sepadan. Seduh kopi pertama di ketinggian selalu terasa berbeda.",
      location: "Gn. Rinjani",
      date: new Date("2025-08-15"),
      imageUrl: "/gallery/oiweoia.png"
    },
    {
      id: "2",
      title: "Tersesat Sengaja di Lebatnya Hijau",
      description: "Jalur ini jarang dilalui orang. Kanopi pohon yang rapat membuat cahaya matahari hanya masuk dari celah kecil. Sunyi, tenang, dan penuh dengan aroma tanah basah.",
      location: "Hutan Lumut",
      date: new Date("2025-10-10"),
      imageUrl: "/gallery/powoq.png"
    },
    {
      id: "3",
      title: "Sabana Tanpa Batas",
      description: "Hamparan rumput hijau sejauh mata memandang. Kami mendirikan tenda, membuka bekal seadanya, dan membiarkan waktu berjalan lebih lambat dari biasanya di kota.",
      location: "Gn. Merbabu",
      date: new Date("2026-01-20"),
      imageUrl: "/gallery/sokadoa.png"
    }
  ];

  return (
    <section id="kisah" className="py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-alam-900 mb-4">Catatan Perjalanan</h2>
            <p className="text-gray-500 font-light text-lg">Cerita dari tenda, jalur pendakian, dan api unggun.</p>
          </div>
          <a href="#" className="hidden md:inline-block text-alam-500 hover:text-alam-800 border-b border-alam-200 transition-colors pb-1 uppercase tracking-wider text-sm font-medium">
            Lihat Semua &rarr;
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {displayStories.map((story, index) => (
            <motion.article 
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="overflow-hidden rounded-2xl mb-6 relative aspect-[4/3] shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                <img 
                  src={story.imageUrl.startsWith('/') ? story.imageUrl : story.imageUrl} 
                  alt={story.title} 
                  className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex-grow flex flex-col">
                <span className="text-xs font-medium text-alam-500 uppercase tracking-widest mb-3 block">
                  {new Date(story.date).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })} • {story.location}
                </span>
                <h3 className="font-serif text-2xl text-alam-900 mb-3 group-hover:text-alam-500 transition-colors leading-snug">
                  {story.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light mb-6 line-clamp-3 flex-grow">
                  {story.description}
                </p>
                <span className="text-sm font-medium text-alam-800 uppercase tracking-wide group-hover:underline underline-offset-4 decoration-alam-200 mt-auto">
                  Baca cerita
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
