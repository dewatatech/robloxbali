
"use client";

import Link from 'next/link';

export default function JoinSteps() {
  const steps = [
    { num: 1, title: "Klik Join Discord", desc: "Tekan tombol di bawah untuk masuk ke server." },
    { num: 2, title: "Masuk Channel Welcome", desc: "Baca rules singkat biar ga bingung." },
    { num: 3, title: "Kenalan di Chat", desc: "Sebut nama, game favorit, dan jam mabar." },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="header">
          <h2>Gimana Cara Gabungnya?</h2>
          <p>Cuma 3 langkah gampang, langsung jadi warga.</p>
        </div>

        <div className="steps-container">
          {steps.map((s, i) => (
            <div key={i} className="step-card">
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="cta-wrapper">
          <Link href="https://discord.gg/yourinvite" className="btn btn-primary btn-xl">
            Join Discord Sekarang
          </Link>
        </div>
      </div>

      <style jsx>{`
        .header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        h2 { font-size: 2.5rem; margin-bottom: 12px; }
        
        .steps-container {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }

        .step-card {
          flex: 1;
          min-width: 250px;
          max-width: 300px;
          text-align: center;
          padding: 20px;
        }

        .step-num {
          width: 60px;
          height: 60px;
          background: white;
          border: 2px solid var(--accent-primary);
          color: var(--accent-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0 auto 24px;
          box-shadow: var(--shadow-glow);
        }

        h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
        }

        p {
          color: var(--text-secondary);
        }

        .cta-wrapper {
          text-align: center;
        }

        .btn-xl {
           padding: 16px 40px;
           font-size: 1.2rem;
        }
      `}</style>
    </section>
  );
}
