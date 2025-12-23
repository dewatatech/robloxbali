"use client";

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="badge">
            <span className="dot"></span>
            Roblox Bali Community
          </div>
          <h1>
            Cari Teman Mabar, Squad Cepat, & <span className="gradient-text">Ngobrol Santai.</span>
          </h1>
          <p className="subheadline">
            Masuk Discord untuk channel mabar, share creation, rekomendasi game, dan tempat cari teman se-Bali (WITA friendly).
          </p>

          <div className="cta-group">
            <Link href="https://discord.gg/yourinvite" className="btn btn-primary">
              Join Discord Sekarang
            </Link>
            <a href="#discord-preview" className="btn btn-secondary">
              Lihat Preview Discord
            </a>
          </div>

          <div className="stats">
            <span className="stat-item">🔥 15+ Member</span>
            <span className="stat-separator">•</span>
            <span className="stat-item match-ready">🟢 10 Online</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding: 120px 0 80px;
          text-align: center;
          background: radial-gradient(circle at 50% 10%, rgba(59, 130, 246, 0.05) 0%, transparent 60%);
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 99px;
          color: var(--accent-primary);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 24px;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: var(--accent-primary);
          border-radius: 50%;
          display: block;
        }

        h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .gradient-text {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subheadline {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 40px;
          max-width: 600px;
          line-height: 1.6;
        }

        .cta-group {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
        }

        .stats {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .match-ready {
          color: var(--success);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }
          
          .hero-section {
            padding: 80px 0 60px;
          }
          
          .cta-group {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
          }
          
          .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
