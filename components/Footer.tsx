
"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Final CTA Area */}
        <div className="final-cta">
          <h2>Masuk sekarang, cari teman mabar tanpa ribet.</h2>
          <div className="badges">
            <span>Gratis</span> • <span>Rapi</span> • <span>Dimoderasi</span> • <span>Langsung masuk</span>
          </div>
          <Link href="https://discord.gg/yourinvite" className="btn btn-primary btn-cta">
            Join Discord Sekarang
          </Link>
        </div>

        <div className="footer-bottom">
          <div className="legal-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className="separator">•</span>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Roblox Bali Community. Powered by Community Spirit.</p>
        </div>

      </div>

      <style jsx>{`
        .footer-section {
          padding: 80px 0 40px;
          background: white;
          border-top: 1px solid rgba(0,0,0,0.05);
          text-align: center;
          padding-bottom: 100px; /* Space for Sticky CTA */
        }

        .final-cta {
          max-width: 600px;
          margin: 0 auto 60px;
        }

        h2 {
          font-size: 2.2rem;
          margin-bottom: 24px;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .badges {
          margin-bottom: 32px;
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
        }

        .btn-cta {
          padding: 16px 48px;
          font-size: 1.1rem;
          box-shadow: var(--shadow-glow);
        }

        .footer-bottom {
          border-top: 1px solid rgba(0,0,0,0.05);
          padding-top: 32px;
          font-size: 0.85rem;
          color: #999;
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }
        
        .legal-links {
          display: flex;
          gap: 16px;
          justify-content: center;
          align-items: center;
        }
        
        .legal-links a {
           color: var(--text-secondary);
           transition: color 0.2s;
        }
        
        .legal-links a:hover {
           color: var(--accent-primary);
        }
        
        .separator {
           color: #ccc;
        }
      `}</style>
    </footer>
  );
}
