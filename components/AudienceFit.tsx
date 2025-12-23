
"use client";

import Link from 'next/link';

export default function AudienceFit() {
  const points = [
    "Sering main sendiri dan pengen squad",
    "Pengen mabar jam WITA bareng orang Bali/sekitar",
    "Mau tempat share creation/media tanpa di-spam",
    "Suka komunitas rapi, bukan chaos",
    "Mau ngobrol dev/scripting (kalau tertarik bikin game)"
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-col">
            <h2>Komunitas Ini Cocok Buat Siapa?</h2>
            <p className="subtitle">Kalau kamu ngerasain hal di bawah ini, berarti kamu nemu tempat yang pas.</p>
            <Link href="https://discord.gg/yourinvite" className="btn btn-primary btn-large">
              Join Discord
            </Link>
          </div>

          <div className="list-col">
            <ul className="checklist">
              {points.map((point, index) => (
                <li key={index} className="checklist-item">
                  <span className="check-icon">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .content-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          background: var(--bg-secondary);
          padding: 60px;
          border-radius: var(--radius-lg);
        }

        .text-col {
          flex: 1;
        }

        h2 {
          font-size: 2.5rem;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 32px;
        }

        .btn-large {
          padding: 16px 32px;
          font-size: 1.1rem;
        }

        .list-col {
          flex: 1;
        }

        .checklist {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .checklist-item {
          background: white;
          padding: 16px 24px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 16px;
          font-weight: 500;
          box-shadow: var(--shadow-sm);
          transition: transform 0.2s;
        }
        
        .checklist-item:hover {
          transform: translateX(5px);
        }

        .check-icon {
          color: var(--success);
          font-weight: 900;
          font-size: 1.2rem;
          background: rgba(16, 185, 129, 0.1);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        @media (max-width: 768px) {
          .content-wrapper {
            flex-direction: column;
            padding: 32px;
            gap: 40px;
          }
          
          .text-col {
            text-align: center;
          }
          
          .checklist-item {
            font-size: 0.95rem;
          }
          
          h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
