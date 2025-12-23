
"use client";

export default function FAQ() {
  const faqs = [
    { q: "Gratis?", a: "Ya, 100% gratis selamanya." },
    { q: "Harus orang Bali?", a: "Fokus Bali, tapi siapa aja boleh join asal nyaman main jam WITA." },
    { q: "Aman buat anak sekolah?", a: "Aman. Kita punya aturan ketat soal toxic dan konten dewasa. Dimoderasi aktif." },
    { q: "Kalau masih noob?", a: "Santai aja, bisa tanya-tanya di chat. Kita ramah pemula." },
    { q: "Link invite aman?", a: "Aman. Kita pakai link resmi dan sistem verifikasi basic di Discord." },
  ];

  return (
    <section className="section bg-secondary">
      <div className="container">
        <div className="header">
          <h2>Pertanyaan Umum</h2>
          <p>Hal yang sering ditanyain sebelum join.</p>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-question">
                {item.q}
                <span className="icon">+</span>
              </summary>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-secondary {
          background-color: var(--bg-secondary);
        }
        
        .header {
          text-align: center;
          margin-bottom: 48px;
        }
        
        .faq-list {
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: white;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .faq-question {
          padding: 20px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          list-style: none; /* Hide default triangle */
        }
        
        .faq-question::-webkit-details-marker {
          display: none;
        }

        .icon {
          font-size: 1.2rem;
          color: var(--accent-primary);
          transition: transform 0.2s;
        }
        
        details[open] .icon {
          transform: rotate(45deg);
        }

        .faq-answer {
          padding: 0 20px 20px;
          color: var(--text-secondary);
          line-height: 1.6;
          border-top: 1px solid rgba(0,0,0,0.05);
          margin-top: -10px; /* Slight offset fix */
          padding-top: 20px;
        }
      `}</style>
    </section>
  );
}
