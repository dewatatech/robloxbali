
"use client";

export default function Testimonials() {
  const reviews = [
    { text: "Sering mabar sama teman kampus disini!", author: "Anak Agung Gde Weida Ksatriawarma" },
    { text: "Cocok juga buat developer", author: "Anak Agung Gde Wijaya Ksatriawarma" },
    { text: "Mod responsif, spam langsung beres.", author: "Ricky Erdiansyah" },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="header">
          <h2>Kata Mereka</h2>
          <p>Apa kata member yang udah join.</p>
        </div>

        <div className="grid">
          {reviews.map((review, idx) => (
            <div key={idx} className="review-card">
              <div className="quote">"</div>
              <p className="review-text">{review.text}</p>
              <p className="review-author">- {review.author}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section {
          padding-top: 0;
        }

        .header {
          text-align: center;
          margin-bottom: 40px;
        }

        h2 {
          font-size: 2rem;
          margin-bottom: 8px;
        }
        
        .header p {
          color: var(--text-secondary);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .review-card {
          background: white;
          padding: 24px;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(0,0,0,0.06);
          position: relative;
          text-align: center;
        }

        .quote {
          font-size: 4rem;
          color: rgba(59, 130, 246, 0.1);
          line-height: 1;
          position: absolute;
          top: 10px;
          left: 20px;
          font-family: serif;
        }

        .review-text {
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .review-author {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
}
