import React from 'react';
import { GraduationCap, Award, BookCheck, Quote, CheckCircle } from 'lucide-react';
import { EDUCATION_LIST, CERTIFICATES, TESTIMONIALS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="pendidikan" className="py-20 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Rekam Jejak & Kualifikasi
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Pendidikan, Sertifikasi & Pengakuan Akademik
          </h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Fondasi akademik formal di Universitas Komputama diperkuat dengan sertifikasi kompetensi dan pengalaman berorganisasi.
          </p>
        </div>

        {/* 2-Column Split: Education Timeline on Left, Certificates on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Education Record */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Pendidikan Formal</span>
            </h3>

            {EDUCATION_LIST.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                      {edu.institution}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {edu.degree} · {edu.field}
                    </p>
                  </div>
                  <div className="text-xs text-neutral-500 font-medium sm:text-right">
                    <div>{edu.period}</div>
                    <div className="text-[11px] text-neutral-400">{edu.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono mb-4 text-neutral-700 dark:text-neutral-300">
                  <span className="font-bold text-blue-600 dark:text-blue-400">IPK: {edu.gpa}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-neutral-500">{edu.status}</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Coursework List */}
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                    Mata Kuliah Utama yang Dikuasai
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                    {edu.coursework.map((course, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                    Aktivitas & Penghargaan
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                    {edu.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Certificates */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Sertifikasi Kompetensi</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATES.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {cert.category}
                    </span>
                    <span className="font-mono text-[11px]">{cert.date}</span>
                  </div>

                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white leading-snug">
                    {cert.title}
                  </h4>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    Penerbit: {cert.issuer}
                  </div>

                  <div className="mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px]">
                    <span className="font-mono text-neutral-400">ID: {cert.credentialId}</span>
                    <span className="text-neutral-500 font-medium">Terverifikasi</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials & Academic Endorsements (§1.H Claim-to-Proof Adjacency) */}
        <div>
          <div className="mb-8">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Quote className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Apresiasi & Rekomendasi Kolaborator</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Catatan langsung dari dosen pengampu, rekan satu tim proyek, dan mitra eksternal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 flex flex-col justify-between shadow-sm"
              >
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>

                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {t.role}
                  </div>
                  <div className="text-[11px] font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                    {t.organization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
