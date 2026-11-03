import React from 'react';
import { Compass, Database, Layout, FolderKanban, Check, MapPin, School, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: '01. Analisis & Pemodelan Sistem',
      desc: 'Mendiagnosis kebutuhan organisasi dan menyusun diagram alir data (DFD), pemodelan proses bisnis (BPMN 2.0), serta dokumen spesifikasi kebutuhan perangkat lunak (SKPL) yang presisi.',
    },
    {
      icon: Database,
      title: '02. Arsitektur Basis Data Relasional',
      desc: 'Merancang skema database PostgreSQL dan MySQL dengan prinsip normalisasi data (1NF - 3NF), integritas referensial, serta optimasi query terstruktur.',
    },
    {
      icon: Layout,
      title: '03. Desain UI/UX & Prototipe Web',
      desc: 'Menciptakan antarmuka digital berbasis komponen di Figma yang berfokus pada kemudahan akses, hierarki tipografi bersih, dan standar kontras WCAG AA.',
    },
    {
      icon: FolderKanban,
      title: '04. Manajemen Proyek & Dokumentasi',
      desc: 'Menerapkan metodologi Agile Scrum dan Waterfall dalam kolaborasi tim akademik untuk memastikan milestone tepat waktu dengan dokumentasi teknis rapi.',
    },
  ];

  return (
    <section id="tentang" className="py-20 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Tentang Saya
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight [text-wrap:balance]">
            Menjembatani Kompleksitas Proses Bisnis dengan Solusi Teknologi yang Solutif
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Sebagai mahasiswi di <span className="font-semibold text-neutral-900 dark:text-white">Universitas Komputama</span>, saya percaya bahwa keberhasilan sebuah sistem informasi tidak hanya dinilai dari baris kodenya, melainkan sejauh mana sistem tersebut mampu menyelesaikan masalah nyata pengguna dan mengefisienkan proses kerja.
          </p>
        </div>

        {/* 2-Column Story and Campus Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <p>
              Perjalanan akademik saya di Program Studi Sistem Informasi berfokus pada eksplorasi bagaimana data, orang, dan teknologi saling terhubung. Selama perkuliahan, saya aktif mengerjakan studi kasus nyata mulai dari perancangan ulang sistem akademik, digitalisasi inventaris UMKM di wilayah Cilacap, hingga audit keterpakaian layanan publik.
            </p>
            <p>
              Dalam setiap proyek, saya menempatkan diri sebagai pendengar aktif: menggali pain points pengguna melalui wawancara, memetakan proses ke dalam diagram BPMN, kemudian merancang arsitektur basis data yang kokoh sebelum beralih ke prototipe visual di Figma. Pendekatan terstruktur ini menghindarkan proyek dari risiko kegagalan desain di fase akhir.
            </p>
            <p>
              Saat ini saya mencari kesempatan program magang (internship) atau proyek kolaboratif di bidang <span className="text-neutral-900 dark:text-white font-medium">System Analyst, UI/UX Research, atau Junior Database Specialist</span> guna menerapkan teori akademik ke dalam lingkungan profesional yang dinamis.
            </p>
          </div>

          {/* Academic Snapshot Card */}
          <div className="lg:col-span-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
              <School className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Profil Akademik Kampus</span>
            </h3>

            <dl className="space-y-4 text-sm">
              <div className="flex justify-between py-2 border-b border-neutral-100 dark:border-neutral-800">
                <dt className="text-neutral-500 dark:text-neutral-400">Institusi</dt>
                <dd className="font-semibold text-neutral-900 dark:text-white text-right">Universitas Komputama</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-100 dark:border-neutral-800">
                <dt className="text-neutral-500 dark:text-neutral-400">Program Studi</dt>
                <dd className="font-semibold text-neutral-900 dark:text-white text-right">S1 Sistem Informasi</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-100 dark:border-neutral-800">
                <dt className="text-neutral-500 dark:text-neutral-400">Jenjang & Semester</dt>
                <dd className="font-semibold text-neutral-900 dark:text-white text-right">Semester 5 (Aktif)</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-100 dark:border-neutral-800">
                <dt className="text-neutral-500 dark:text-neutral-400">Indeks Prestasi Kumulatif</dt>
                <dd className="font-mono font-bold text-blue-600 dark:text-blue-400 text-right">3.84 / 4.00</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-100 dark:border-neutral-800">
                <dt className="text-neutral-500 dark:text-neutral-400">Lokasi Kampus</dt>
                <dd className="font-medium text-neutral-800 dark:text-neutral-200 text-right">Cilacap, Jawa Tengah</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt className="text-neutral-500 dark:text-neutral-400">Minat Spesialisasi</dt>
                <dd className="font-medium text-neutral-800 dark:text-neutral-200 text-right">Sistem Informasi Bisnis & UI/UX</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* 4 Pillars of Approach */}
        <div>
          <div className="mb-8">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
              Prinsip Kerja & Metodologi Sistem Informasi
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Standar alur kerja yang saya terapkan dalam setiap pemecahan masalah perangkat lunak
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition-all hover:border-neutral-300 dark:hover:border-neutral-700"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
