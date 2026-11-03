import React from 'react';
import { ArrowUp, School } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-12 text-neutral-600 dark:text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Attribution */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <span className="font-bold text-neutral-900 dark:text-white text-sm">
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>Mahasiswi S1 Sistem Informasi</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-neutral-700 dark:text-neutral-300">
              <School className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Universitas Komputama (Cilacap)</span>
            </span>
          </div>

          {/* Nav links and scroll top */}
          <div className="flex items-center gap-6">
            <a href="#tentang" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Tentang
            </a>
            <a href="#proyek" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Proyek
            </a>
            <a href="#keahlian" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Keahlian
            </a>
            <a href="#pendidikan" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Pendidikan
            </a>
            <a href="#kontak" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Kontak
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 transition-colors ml-2"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-900 text-center text-neutral-400 text-[11px]">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Hak cipta dilindungi. Portofolio Akademik & Rekayasa Sistem Informasi.
        </div>
      </div>
    </footer>
  );
};
