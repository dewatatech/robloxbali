"use client";

export default function ValueProps() {
    const props = [
        {
            title: "Cari Teman Mabar Cepat (WITA)",
            desc: "Gampang cari party yang jamnya cocok, khususnya waktu Indonesia Tengah.",
            icon: (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: "Channel Mabar yang Jelas",
            desc: "Bukan server rame tapi bingung harus mulai dari mana. Struktur rapi.",
            icon: (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            ),
        },
        {
            title: "Share Creation & Media",
            desc: "Pamer build, edit, screenshot, dan video gameplay terbaikmu.",
            icon: (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: "Diskusi Game Roblox",
            desc: "Rekomendasi game, server, dan tips trik dari pengalaman player lain.",
            icon: (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
            ),
        },
        {
            title: "Saran & Ide Komunitas",
            desc: "Semua member bisa ngasih masukan biar komunitas makin solid.",
            icon: (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
        },
        {
            title: "Aman & Dimoderasi",
            desc: "Lingkungan anti spam, anti scam, dan anti toxic. Main tenang.",
            icon: (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="section bg-secondary">
            <div className="container">
                <div className="section-header">
                    <h2>Kenapa Harus Join?</h2>
                    <p>Benefit eksklusif buat kamu warga Roblox Bali.</p>
                </div>

                <div className="grid">
                    {props.map((item, index) => (
                        <div key={index} className="card">
                            <div className="icon-wrapper">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .bg-secondary {
          background-color: var(--bg-secondary);
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 16px;
        }
        
        .section-header p {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .card {
          background: white;
          padding: 32px;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0,0,0,0.04);
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(59, 130, 246, 0.2);
        }

        .icon-wrapper {
          width: 48px;
          height: 48px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          margin-bottom: 20px;
        }
        
        /* Apply to the SVG inside */
        .card :global(.icon) {
          width: 24px;
          height: 24px;
        }

        h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 12px;
        }

        p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }
      `}</style>
        </section>
    );
}
