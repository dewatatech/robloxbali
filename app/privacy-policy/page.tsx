
"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <div className="container">
        <header className="page-header">
          <h1>Privacy Policy</h1>
          <p>Terakhir Diupdate: {new Date().getFullYear()}</p>
        </header>

        <section className="legal-content">
          <h2>1. Pendahuluan</h2>
          <p>Selamat datang di Roblox Bali. Privasi Anda penting bagi kami. Kebijakan ini menjelaskan bagaimana kami menangani informasi di komunitas ini.</p>

          <h2>2. Data yang Kami Kumpulkan</h2>
          <p>
            Saat ini, kami tidak mengumpulkan data pribadi secara langsung melalui website ini.
            Website ini berfungsi sebagai portal informasi untuk komunitas Discord kami.
            Data yang Anda bagikan di server Discord tunduk pada Kebijakan Privasi Discord.
          </p>

          <h2>3. Cookies dan Analytics</h2>
          <p>
            Website ini menggunakan <strong>Google Analytics</strong> untuk membantu kami memahami bagaimana pengunjung berinteraksi dengan situs.
            Google Analytics menggunakan "cookies" untuk mengumpulkan informasi log internet standar dan perilaku pengunjung secara anonim.
            Informasi ini digunakan untuk menyusun laporan statistik aktivitas website demi meningkatkan pengalaman komunitas.
          </p>

          <h2>4. Link Pihak Ketiga</h2>
          <p>
            Website kami berisi tautan ke pihak ketiga, terutama Discord dan Roblox.
            Kami tidak bertanggung jawab atas praktik privasi situs-situs tersebut.
          </p>

          <h2>5. Hubungi Kami</h2>
          <p>Jika Anda memiliki pertanyaan tentang privasi, silakan hubungi moderator melalui server Discord kami.</p>

          <div className="back-link">
            <Link href="/" className="btn btn-secondary">← Kembali ke Home</Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        .legal-page {
          padding: 80px 0;
          background: var(--bg-secondary);
          min-height: 100vh;
        }

        .page-header {
          text-align: center;
          margin-bottom: 60px;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 12px;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .legal-content {
          background: white;
          padding: 60px;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          max-width: 800px;
          margin: 0 auto;
        }

        h2 {
          font-size: 1.5rem;
          margin-top: 32px;
          margin-bottom: 16px;
          color: var(--text-primary);
        }
        
        h2:first-of-type {
          margin-top: 0;
        }

        p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .back-link {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid rgba(0,0,0,0.05);
        }

        @media (max-width: 768px) {
          .legal-content {
            padding: 32px;
          }
          h1 { font-size: 2.5rem; }
        }
      `}</style>
    </main>
  );
}
