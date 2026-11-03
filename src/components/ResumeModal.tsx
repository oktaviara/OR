import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, MapPin, School, Check, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EDUCATION_LIST, CERTIFICATES, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-y-auto">
        {/* Sticky Controls Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 no-print">
          <div className="text-sm font-bold text-neutral-900 dark:text-white">
            Curriculum Vitae · {PERSONAL_INFO.name}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Tutup Resume"
              className="p-1.5 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-8 sm:p-12 text-neutral-900 dark:text-neutral-100 font-sans space-y-8 bg-white dark:bg-neutral-900">
          {/* Header Zone */}
          <div className="border-b border-neutral-300 dark:border-neutral-700 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">
              Mahasiswi S1 Sistem Informasi · Universitas Komputama (Cilacap)
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-neutral-600 dark:text-neutral-300 mt-3 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <span>{PERSONAL_INFO.email}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>Cilacap, Jawa Tengah</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>IPK Kumulatif: 3.84 / 4.00</span>
            </div>
          </div>

          {/* Ringkasan Profil */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              Ringkasan Profesional
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {PERSONAL_INFO.bio} Berpengalaman dalam perancangan spesifikasi perangkat lunak (SRS/SKPL), pemodelan DFD & ERD, perancangan skema relasional PostgreSQL/MySQL dengan standar normalisasi hingga 3NF, serta perancangan antarmuka prototipe responsif di Figma.
            </p>
          </div>

          {/* Pendidikan */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
              Pendidikan Formal
            </h2>
            {EDUCATION_LIST.map((edu, i) => (
              <div key={i} className="space-y-1 text-xs sm:text-sm">
                <div className="flex justify-between items-baseline font-bold">
                  <span>{edu.institution} — {edu.field}</span>
                  <span className="font-mono text-xs text-neutral-500">{edu.period}</span>
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-300">
                  Gelar: {edu.degree} · IPK: <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{edu.gpa}</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                  Mata kuliah unggulan: Analisis & Perancangan Sistem, Sistem Basis Data & SQL, Interaksi Manusia dan Komputer (UI/UX), Manajemen Proyek SI, Pemrograman Web.
                </p>
              </div>
            ))}
          </div>

          {/* Proyek Unggulan */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
              Proyek & Studi Kasus Utama
            </h2>
            <div className="space-y-4">
              {PROJECTS.slice(0, 3).map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-neutral-900 dark:text-white">
                      {proj.title}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-500">{proj.date}</span>
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    Peran: {proj.role} · {proj.categoryLabel}
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300">
                    {proj.summary}
                  </p>
                  <div className="text-[11px] text-neutral-500 font-mono">
                    Tech Stack: {proj.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keahlian Teknis */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
              Kompetensi Teknis
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800">
                  <div className="font-bold text-neutral-900 dark:text-white mb-1">
                    {cat.name}
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-300">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sertifikasi */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
              Sertifikasi Kompetensi
            </h2>
            <div className="space-y-2 text-xs">
              {CERTIFICATES.map((cert, cIdx) => (
                <div key={cIdx} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold">{cert.title}</span> — {cert.issuer}
                  </div>
                  <span className="font-mono text-neutral-500 text-[11px]">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
