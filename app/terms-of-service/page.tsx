
"use client";

import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="legal-page">
      <div className="container">
        <header className="page-header">
          <h1>Terms of Service</h1>
          <p>Terakhir Diupdate: {new Date().getFullYear()}</p>
        </header>

        <section className="legal-content">
          <h2>1. Penerimaan Syarat</h2>
          <p>Dengan mengakses website Roblox Bali, Anda setuju untuk terikat dengan syarat dan ketentuan ini.</p>

          <h2>2. Aturan Komunitas</h2>
          <p>
            Meskipun ini adalah website, aturan inti komunitas kami berlaku di platform Discord.
            Kami menjunjung tinggi prinsip:
            <br />- <strong>No Toxicity:</strong> Dilarang menghina, rasis, atau bullying.
            <br />- <strong>No Scamming:</strong> Penipuan dalam bentuk apapun dilarang keras.
            <br />- <strong>Safe Space:</strong> Menjaga lingkungan yang aman untuk semua umur.
          </p>

          <h2>3. Hak Kekayaan Intelektual & Disclaimer</h2>
          <p>
            Roblox, blox, dan logo Roblox adalah merek dagang terdaftar dari Roblox Corporation.
            <strong>Roblox Bali</strong> adalah komunitas penggemar (fan-based) yang independen.
            Website ini tidak disponsori, didukung, atau berafiliasi secara resmi dengan Roblox Corporation.
            Semua konten terkait game adalah hak cipta pemiliknya masing-masing.
          </p>

          <h2>4. Perubahan Syarat</h2>
          <p>Kami berhak mengubah syarat dan ketentuan ini kapan saja tanpa pemberitahuan sebelumnya.</p>

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
        
        strong {
          color: var(--text-primary);
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
