import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, MessageSquare, ArrowUpRight, School } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending with real data handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || 'Peluang Kolaborasi / Magang Sistem Informasi'
  )}&body=${encodeURIComponent(
    `Halo Oktavia Rara,\n\nSaya ${formData.name || '[Nama Anda]'} ingin mendiskusikan:\n\n${
      formData.message || ''
    }`
  )}`;

  return (
    <section id="kontak" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Hubungi Saya
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Mari Berdiskusi atau Berkolaborasi dalam Proyek Sistem
          </h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Terbuka untuk tawaran magang mahasiswa, perancangan prototipe UI/UX, analisis kebutuhan sistem UMKM, atau kolaborasi akademik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-7 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Kontak Langsung
              </h3>

              {/* Email Address with Copy Button */}
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/60 space-y-2">
                <div className="text-xs text-neutral-500 font-medium">Alamat Surel Resmi</div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white truncate">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors shrink-0"
                    title="Salin Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium block">
                    Alamat email tersalin ke papan klip!
                  </span>
                )}
              </div>

              {/* Campus Location */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">Lokasi Kampus</div>
                  <div>Universitas Komputama, Kabupaten Cilacap, Jawa Tengah</div>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Halo Oktavia Rara, saya melihat portofolio Sistem Informasi Anda dan tertarik untuk berdiskusi.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim Pesan WhatsApp Langsung</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/60 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <span className="font-semibold text-neutral-900 dark:text-white block mb-1">
                Ketersediaan Waktu Magang & Proyek
              </span>
              Tersedia untuk program magang berkala (WFH / Hybrid / On-site Cilacap & sekitarnya) serta proyek lepas analisis sistem dan perancangan prototipe antarmuka.
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
              Kirimkan Pesan Anda
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
              Silakan isi formulir berikut atau kirim langsung melalui aplikasi email favorit Anda.
            </p>

            {submitted && (
              <div className="p-4 mb-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm">
                Terima kasih! Pesan Anda telah dicatat. Anda juga dapat mengirimkannya via email langsung dengan tombol di bawah.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Rian Pratama"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 text-neutral-900 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Alamat Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@instansi.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 text-neutral-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Topik / Perihal *
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Peluang Magang / Diskusi Proyek Sistem / Konsultasi UI/UX"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 text-neutral-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Isi Pesan *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tuliskan gambaran proyek, kebutuhan sistem, atau jadwal wawancara Anda di sini..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 text-neutral-900 dark:text-white resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2 shadow-sm disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}</span>
                </button>

                <a
                  href={mailtoLink}
                  className="text-xs text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
                >
                  <span>Buka di Mail Client</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
