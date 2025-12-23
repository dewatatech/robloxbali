
"use client";

export default function StickyCTA() {
  return (
    <div className="sticky-bar">
      <div className="container">
        <div className="bar-content">
          <div className="trust-indicators">
            <span>Gratis</span>
            <span className="dot">•</span>
            <span>Moderasi aktif</span>
            <span className="dot">•</span>
            <span>Anti spam</span>
          </div>

          <div className="actions">
            <a href="#discord-preview" className="preview-link">
              Lihat Preview
            </a>
            <a href="https://discord.gg/yourinvite" className="join-btn">
              Join Discord
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sticky-bar {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 800px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 12px 20px;
          border-radius: var(--radius-full);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          z-index: 1000;
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideUp {
          from { transform: translate(-50%, 100px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }

        .bar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .trust-indicators {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .dot {
          color: #ccc;
        }

        .actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .preview-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .join-btn {
          background: var(--text-primary);
          color: white;
          padding: 8px 20px;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 0.9rem;
          transition: transform 0.2s;
        }

        .join-btn:hover {
          transform: scale(1.05);
        }

        @media (max-width: 600px) {
          .trust-indicators {
            display: none;
          }
          
          .bar-content {
            justify-content: center;
          }
          
          .sticky-bar {
            width: 95%;
            bottom: 16px;
          }
        }
      `}</style>
    </div>
  );
}
