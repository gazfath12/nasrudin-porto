"use client";

import { useState } from "react";
import { uploadStory } from "@/actions/storyActions";
import Link from "next/link";
import { motion } from "framer-motion";
import { UploadCloud, CheckCircle2, AlertCircle } from "lucide-react";

export default function AdminSecret() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const result = await uploadStory(formData);

    if (result.success) {
      setStatus({ type: "success", message: "Cerita berhasil diunggah!" });
      e.currentTarget.reset();
      setPreview(null);
    } else {
      setStatus({ type: "error", message: result.error || "Gagal mengunggah cerita." });
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-alam-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-alam-900 p-8 text-center relative">
          <Link href="/" className="absolute left-6 top-8 text-white/70 hover:text-white text-sm tracking-widest uppercase transition-colors">
            &larr; Kembali
          </Link>
          <h1 className="font-serif text-3xl text-white mt-8 mb-2">Unggah Cerita Baru</h1>
          <p className="text-gray-300 font-light">Tambahkan kisah perjalananmu ke dalam jurnal.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {status.type && (
            <div className={`p-4 rounded-xl flex items-center gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <AlertCircle className="w-5 h-5 text-red-600" />}
              <p className="font-medium">{status.message}</p>
            </div>
          )}

          {/* Image Upload Area */}
          <div className="w-full relative group">
            <label htmlFor="image-upload" className="cursor-pointer block relative rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 overflow-hidden hover:border-alam-500 hover:bg-alam-50 transition-colors aspect-video flex flex-col items-center justify-center">
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-500">
                  <UploadCloud className="w-12 h-12 mb-3 text-alam-500" />
                  <span className="font-medium text-alam-800">Klik untuk memilih foto</span>
                  <span className="text-sm font-light mt-1">PNG, JPG atau WEBP</span>
                </div>
              )}
            </label>
            <input type="file" id="image-upload" name="image" accept="image/*" className="hidden" onChange={handleImageChange} required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium text-gray-700">Judul Cerita</label>
              <input type="text" id="title" name="title" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-alam-500/20 focus:border-alam-500 transition-all bg-gray-50 focus:bg-white" placeholder="Cth: Menyapa Pagi di Plawangan" />
            </div>

            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-medium text-gray-700">Lokasi</label>
              <input type="text" id="location" name="location" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-alam-500/20 focus:border-alam-500 transition-all bg-gray-50 focus:bg-white" placeholder="Cth: Gn. Rinjani" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="date" className="text-sm font-medium text-gray-700">Tanggal Perjalanan</label>
            <input type="date" id="date" name="date" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-alam-500/20 focus:border-alam-500 transition-all bg-gray-50 focus:bg-white" />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium text-gray-700">Kisah Perjalanan</label>
            <textarea id="description" name="description" required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-alam-500/20 focus:border-alam-500 transition-all bg-gray-50 focus:bg-white resize-none" placeholder="Ceritakan pengalamanmu di sini..."></textarea>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-alam-900 text-white rounded-xl font-medium tracking-wide hover:bg-alam-800 transition-colors disabled:opacity-70 flex justify-center items-center"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Mengunggah...
              </span>
            ) : "Simpan Cerita"}
          </button>
        </form>
      </div>
    </div>
  );
}
