
"use client";

export default function Safety() {
  const feats = [
    { title: "Anti Toxic", desc: "Sistem report jelas & penanganan cepat." },
    { title: "Anti Scam", desc: "Larangan keras, auto-ban untuk scammer." },
    { title: "Anti Spam", desc: "Bot protection & slowmode saat ramai." },
    { title: "Moderator Aktif", desc: "Selalu ada mod yang pantau chat." },
  ];

  return (
    <section className="section bg-secondary">
      <div className="container">
        <div className="wrapper">
          <div className="header">
            <h2>Komunitas Aman & Nyaman</h2>
            <p>Kami serius soal kenyamanan member. Ga ada toleransi buat pengacau.</p>
          </div>

          <div className="grid">
            {feats.map((f, i) => (
              <div key={i} className="item">
                <div className="check">🛡️</div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-secondary {
          background-color: var(--bg-secondary);
        }
        
        .wrapper {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .header {
          margin-bottom: 48px;
        }

        h2 {
           font-size: 2rem;
           margin-bottom: 12px;
        }
        
        .header p {
          color: var(--text-secondary);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          text-align: left;
        }

        .item {
          background: white;
          padding: 24px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: flex-start;
          gap: 16px;
          box-shadow: var(--shadow-sm);
        }

        .check {
          font-size: 1.5rem;
        }

        h3 {
          font-size: 1.1rem;
          margin-bottom: 4px;
        }

        p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
