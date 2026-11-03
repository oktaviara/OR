import React, { useState } from 'react';
import { ArrowDown, FileText, Mail, Sparkles, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 lg:pb-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero: Left Column Typography, Right Column Visual Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-4 tracking-wide uppercase">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Sistem Informasi</span>
              <span aria-hidden="true">·</span>
              <span>Universitas Komputama</span>
              <span aria-hidden="true">·</span>
              <span>Semester 5</span>
            </div>

            {/* Primary Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
              Merancang Solusi Digital & Arsitektur Sistem Informasi yang Berdampak
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 max-w-2xl">
              Halo! Saya <span className="font-semibold text-neutral-900 dark:text-white">{PERSONAL_INFO.name}</span>, mahasiswi Sistem Informasi di Universitas Komputama (Cilacap). Saya memadukan logika analisis proses bisnis, perancangan skema basis data relasional, dan desain UI/UX berbasis kenyamanan pengguna untuk menghasilkan sistem aplikasi yang efektif dan siap pakai.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#proyek"
                className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 flex items-center gap-2"
              >
                <span>Jelajahi Studi Kasus</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Lihat Curriculum Vitae</span>
              </button>

              <a
                href="#kontak"
                className="px-4 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>Kirim Pesan</span>
              </a>
            </div>

            {/* Quick trust points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-500 dark:text-neutral-400 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Analisis Kebutuhan (BPMN / DFD / ERD)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>PostgreSQL & Desain Database 3NF</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Figma UI/UX & Web Prototyping</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Container with Studio Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl aspect-square">
                {!imageError ? (
                  <img
                    src={PERSONAL_INFO.portraitImage}
                    alt="Potret Oktavia Rara Ramadani - Mahasiswi Sistem Informasi Universitas Komputama"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
                    <GraduationCap className="w-16 h-16 text-blue-600 dark:text-blue-400 mb-3" />
                    <span className="text-base font-bold text-neutral-900 dark:text-white">{PERSONAL_INFO.name}</span>
                    <span className="text-xs text-neutral-500 mt-1">Sistem Informasi Universitas Komputama</span>
                  </div>
                )}
              </div>

              {/* Quiet Student Card Below Image */}
              <div className="mt-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-sm flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-600"></span>
                    <span>Status Akademik Aktif</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                    Universitas Komputama (Kampus Cilacap)
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                    IPK 3.84
                  </div>
                  <div className="text-[11px] text-neutral-500">Skala 4.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column KPI Strip below hero split (§2.B & §5.13) */}
        <div className="mt-16 pt-10 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
