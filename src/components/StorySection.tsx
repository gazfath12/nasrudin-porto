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
      title: "Pesona Mistis Curug Penganten",
      description: "Suara gemuruh air yang jatuh di antara tebing batu memberikan ketenangan yang luar biasa. Salah satu permata tersembunyi yang pernah saya kunjungi.",
      location: "Curug Penganten",
      date: new Date("2025-05-12"),
      imageUrl: "/gallery/dasd.png"
    },
    {
      id: "2",
      title: "Nafas Bumi di Kawah Candradimuka",
      description: "Bau belerang dan uap panas yang membubung tinggi mengingatkan kita betapa kuatnya energi alam semesta ini.",
      location: "Kawah Candradimuka",
      date: new Date("2025-07-20"),
      imageUrl: "/gallery/dasdzsa.png"
    },
    {
      id: "3",
      title: "Lautan Pasir Gunung Bromo",
      description: "Menyaksikan matahari terbit di ufuk timur Bromo adalah pengalaman spiritual yang sulit dilupakan dengan kata-kata.",
      location: "Gunung Bromo",
      date: new Date("2025-09-05"),
      imageUrl: "/gallery/oiweoia.png"
    },
    {
      id: "4",
      title: "Senja di Bukit Jokolangan",
      description: "Warna langit yang berubah menjadi jingga keunguan di puncak bukit ini adalah hadiah terbaik setelah pendakian yang melelahkan.",
      location: "Bukit Jokolangan",
      date: new Date("2025-11-15"),
      imageUrl: "/gallery/owoiq.png"
    },
    {
      id: "5",
      title: "Negeri di Atas Awan Bukit Cumbri",
      description: "Berdiri di tepi tebing Bukit Cumbri serasa berada di atas awan. Angin yang berhembus kencang membawa sejuta cerita.",
      location: "Bukit Cumbri",
      date: new Date("2026-02-10"),
      imageUrl: "/gallery/powoq.png"
    },
    {
      id: "6",
      title: "Eksplorasi Cumbri Gunung",
      description: "Menelusuri setiap jengkal keindahan Cumbri dari sisi yang berbeda, menemukan sudut pandang baru dalam setiap langkah.",
      location: "Cumbri Gunung",
      date: new Date("2026-03-22"),
      imageUrl: "/gallery/powp.png"
    },
    {
      id: "7",
      title: "Atap Jawa Tengah: Gunung Lawu",
      description: "Mendaki Lawu bukan sekadar fisik, tapi juga tentang menghargai kearifan lokal dan sejarah yang tertanam di setiap jalurnya.",
      location: "Gunung Lawu",
      date: new Date("2026-04-18"),
      imageUrl: "/gallery/sdkoaodoa.png"
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
