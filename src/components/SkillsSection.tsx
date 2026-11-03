import React, { useState } from 'react';
import { Layers, Database, Palette, Terminal, Calculator, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'telos' | 'normalizer'>('matrix');

  // TELOS Feasibility State
  const [telosScores, setTelosScores] = useState({
    technical: 85,
    economic: 80,
    legal: 95,
    operational: 88,
    schedule: 78,
  });

  const telosAverage = Math.round(
    (telosScores.technical +
      telosScores.economic +
      telosScores.legal +
      telosScores.operational +
      telosScores.schedule) /
      5
  );

  const getFeasibilityVerdict = (score: number) => {
    if (score >= 85) return { label: 'Sangat Layak (High Feasibility)', color: 'text-emerald-600 dark:text-emerald-400', notes: 'Sistem memiliki risiko rendah dan kesiapan infrastruktur serta operasional yang matang.' };
    if (score >= 70) return { label: 'Layak dengan Catatan', color: 'text-blue-600 dark:text-blue-400', notes: 'Dibutuhkan mitigasi pada jadwal dan anggaran sebelum tahap implementasi.' };
    return { label: 'Perlu Revisi Spesifikasi', color: 'text-amber-600 dark:text-amber-400', notes: 'Faktor kelayakan teknis atau operasional memerlukan pengkajian ulang.' };
  };

  const verdict = getFeasibilityVerdict(telosAverage);

  // Normalization step state
  const [normStep, setNormStep] = useState<1 | 2 | 3>(3);

  return (
    <section id="keahlian" className="py-20 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Kompetensi & Keahlian
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Keterampilan Teknis & Analisis Sistem Informasi
          </h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Penguasaan metode rekayasa perangkat lunak, perancangan skema data relasional, desain antarmuka modern, dan alat kolaborasi industri.
          </p>

          {/* Mode Selector for Skills Matrix vs Interactive Lab */}
          <div className="mt-6 flex flex-wrap items-center gap-2 p-1 bg-neutral-100 dark:bg-neutral-850 rounded-xl border border-neutral-200 dark:border-neutral-800 w-fit">
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'matrix'
                  ? 'bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Matriks Keterampilan
            </button>
            <button
              onClick={() => setActiveTab('telos')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'telos'
                  ? 'bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Simulasi Kelayakan (TELOS)
            </button>
            <button
              onClick={() => setActiveTab('normalizer')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'normalizer'
                  ? 'bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Simulasi Normalisasi Basis Data (1NF-3NF)
            </button>
          </div>
        </div>

        {/* View 1: Standard Skills Matrix */}
        {activeTab === 'matrix' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-7 shadow-sm"
              >
                <div className="border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-5">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="group">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View 2: Interactive TELOS Feasibility Simulator */}
        {activeTab === 'telos' && (
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                Alat Analisis Kuantitatif
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mt-1">
                Kalkulator Kelayakan Sistem (TELOS Feasibility Framework)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                Kerangka kerja standar Sistem Informasi untuk menilai apakah sebuah rencana inisiatif perangkat lunak layak dijalankan sebelum memasuki fase perancangan teknis.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Sliders Area */}
              <div className="lg:col-span-7 space-y-5">
                {[
                  { key: 'technical', label: 'T - Technical Feasibility', desc: 'Ketersediaan teknologi, keahlian tim pengembang, dan infrastruktur komputasi.' },
                  { key: 'economic', label: 'E - Economic Feasibility', desc: 'Analisis biaya vs manfaat (Cost-Benefit Analysis) dan proyeksi ROI organisasi.' },
                  { key: 'legal', label: 'L - Legal & Ethical Feasibility', desc: 'Kepatuhan terhadap regulasi PDP (Pelindungan Data Pribadi) dan hak cipta software.' },
                  { key: 'operational', label: 'O - Operational Feasibility', desc: 'Kesiapan pengguna akhir beradaptasi dengan alur kerja baru tanpa resistensi.' },
                  { key: 'schedule', label: 'S - Schedule Feasibility', desc: 'Kelayakan target waktu rilis sistem terhadap batas tenggat (deadline) operasional.' },
                ].map((item) => (
                  <div key={item.key} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                        {item.label}
                      </span>
                      <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                        {telosScores[item.key as keyof typeof telosScores]}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="100"
                      value={telosScores[item.key as keyof typeof telosScores]}
                      onChange={(e) =>
                        setTelosScores({
                          ...telosScores,
                          [item.key]: Number(e.target.value),
                        })
                      }
                      className="w-full accent-blue-600 cursor-pointer h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg"
                    />
                    <p className="text-[11px] text-neutral-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Real-time Feasibility Score Card */}
              <div className="lg:col-span-5 bg-neutral-50 dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-700/80 rounded-xl p-6">
                <div className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                  Indeks Kelayakan Komprehensif
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-mono text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tabular-nums">
                    {telosAverage}
                  </span>
                  <span className="text-sm font-medium text-neutral-500">/ 100</span>
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Status Rekomendasi
                  </div>
                  <div className={`text-base font-bold mt-1 ${verdict.color}`}>
                    {verdict.label}
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
                    {verdict.notes}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700 text-[11px] text-neutral-500">
                  Materi Aplikasi: Mata Kuliah Analisis & Perancangan Sistem Informasi · Dosen Pengampu Universitas Komputama.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View 3: Interactive Database Normalization Step-by-Step */}
        {activeTab === 'normalizer' && (
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                Arsitektur Basis Data
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mt-1">
                Eksplorasi Tahapan Normalisasi Database (1NF → 2NF → 3NF)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                Simulasi pembedahan tabel registrasi mahasiswa & mata kuliah untuk mencegah anomali pembaruan (update), penyisipan (insert), dan penghapusan (delete).
              </p>
            </div>

            {/* Stepper Buttons */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {[
                { step: 1, label: '1NF: First Normal Form', sub: 'Hilangkan Repeating Group' },
                { step: 2, label: '2NF: Second Normal Form', sub: 'Hilangkan Ketergantungan Parsial' },
                { step: 3, label: '3NF: Third Normal Form', sub: 'Hilangkan Ketergantungan Transitif' },
              ].map((s) => (
                <button
                  key={s.step}
                  onClick={() => setNormStep(s.step as any)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors text-left border ${
                    normStep === s.step
                      ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                  }`}
                >
                  <div className="font-bold">{s.label}</div>
                  <div className="text-[10px] opacity-80">{s.sub}</div>
                </button>
              ))}
            </div>

            {/* Normalization Explanation Box */}
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-700/80 mb-6">
              {normStep === 1 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                    Syarat 1NF: Setiap atribut harus bernilai atomik (tunggal)
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1">
                    Pada tabel mentah, satu baris mahasiswa sering berisi kumpulan kode mata kuliah sekaligus. Dalam 1NF, setiap baris mewakili satu kombinasi entitas tunggal, dan Primary Key ditentukan (misal: <code>NIM + Kode_MK</code>).
                  </p>
                </div>
              )}
              {normStep === 2 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                    Syarat 2NF: Memenuhi 1NF dan tidak ada partial functional dependency
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1">
                    Atribut non-kunci seperti <code>Nama_Mahasiswa</code> hanya bergantung pada <code>NIM</code>, bukan pada <code>Kode_MK</code>. Maka tabel dipecah menjadi: Tabel Mahasiswa, Tabel Mata Kuliah, dan Tabel KRS (Penghubung).
                  </p>
                </div>
              )}
              {normStep === 3 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                    Syarat 3NF: Memenuhi 2NF dan bebas ketergantungan transitif (X → Y → Z)
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1">
                    Atribut seperti <code>Nama_Dosen</code> bergantung pada <code>NIP_Dosen</code>, sedangkan <code>NIP_Dosen</code> bergantung pada <code>Kode_MK</code>. Pada 3NF, data dosen dipisah ke entitas Dosen tersendiri untuk menjamin integritas.
                  </p>
                </div>
              )}
            </div>

            {/* Visual Schema Table Grid */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
                <thead className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 font-mono">
                  <tr>
                    <th className="p-3 border-b border-neutral-200 dark:border-neutral-800">Nama Tabel</th>
                    <th className="p-3 border-b border-neutral-200 dark:border-neutral-800">Primary Key (PK)</th>
                    <th className="p-3 border-b border-neutral-200 dark:border-neutral-800">Foreign Key (FK)</th>
                    <th className="p-3 border-b border-neutral-200 dark:border-neutral-800">Atribut Non-Kunci</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 font-mono">
                  {normStep === 3 ? (
                    <>
                      <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40">
                        <td className="p-3 font-bold text-blue-600 dark:text-blue-400">tb_mahasiswa</td>
                        <td className="p-3">nim</td>
                        <td className="p-3 text-neutral-400">-</td>
                        <td className="p-3">nama_lengkap, email, program_studi, angkatan</td>
                      </tr>
                      <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40">
                        <td className="p-3 font-bold text-blue-600 dark:text-blue-400">tb_mata_kuliah</td>
                        <td className="p-3">kode_mk</td>
                        <td className="p-3">nip_dosen_pengampu</td>
                        <td className="p-3">nama_mk, sks, semester_paket</td>
                      </tr>
                      <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40">
                        <td className="p-3 font-bold text-blue-600 dark:text-blue-400">tb_dosen</td>
                        <td className="p-3">nip_dosen</td>
                        <td className="p-3 text-neutral-400">-</td>
                        <td className="p-3">nama_dosen, gelar, bidang_keahlian</td>
                      </tr>
                      <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40">
                        <td className="p-3 font-bold text-blue-600 dark:text-blue-400">tb_krs_detail</td>
                        <td className="p-3">id_krs_detail</td>
                        <td className="p-3">nim, kode_mk</td>
                        <td className="p-3">tahun_akademik, nilai_akhir, status_lulus</td>
                      </tr>
                    </>
                  ) : normStep === 2 ? (
                    <>
                      <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40">
                        <td className="p-3 font-bold text-neutral-800 dark:text-neutral-200">tb_mahasiswa</td>
                        <td className="p-3">nim</td>
                        <td className="p-3 text-neutral-400">-</td>
                        <td className="p-3">nama_mahasiswa, prodi</td>
                      </tr>
                      <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40">
                        <td className="p-3 font-bold text-neutral-800 dark:text-neutral-200">tb_mata_kuliah</td>
                        <td className="p-3">kode_mk</td>
                        <td className="p-3 text-neutral-400">-</td>
                        <td className="p-3">nama_mk, sks, nama_dosen, gelar_dosen (masih transitif)</td>
                      </tr>
                      <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40">
                        <td className="p-3 font-bold text-neutral-800 dark:text-neutral-200">tb_krs</td>
                        <td className="p-3">(nim, kode_mk)</td>
                        <td className="p-3">nim, kode_mk</td>
                        <td className="p-3">nilai_angka</td>
                      </tr>
                    </>
                  ) : (
                    <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40">
                      <td className="p-3 font-bold text-rose-600 dark:text-rose-400">tb_krs_unnormalized</td>
                      <td className="p-3">nim + kode_mk</td>
                      <td className="p-3 text-neutral-400">-</td>
                      <td className="p-3">nama_mhs, kode_mk, nama_mk, sks, dosen, nilai (redundansi tinggi)</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
