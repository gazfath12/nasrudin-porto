export default function Footer() {
  return (
    <footer className="bg-alam-50 py-16 border-t border-alam-200/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
        <div>
          <a href="#" className="font-serif text-3xl text-alam-900 tracking-widest uppercase block mb-3">Pejalan.</a>
          <p className="text-gray-500 text-sm font-light">Berbagi cerita dari ketinggian mdpl.</p>
        </div>
        
        <div className="flex space-x-8 text-sm text-alam-800 font-medium tracking-wide uppercase">
          <a href="#" className="hover:text-alam-500 transition-colors">Instagram</a>
          <a href="#" className="hover:text-alam-500 transition-colors">Strava</a>
          <a href="#" className="hover:text-alam-500 transition-colors">Email</a>
        </div>
      </div>
      <div className="text-center mt-16 text-xs text-gray-400 tracking-wider">
        &copy; {new Date().getFullYear()} Pejalan. Dibangun dengan cinta dan kopi hangat.
      </div>
    </footer>
  );
}
