
"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="error-container">
            <div className="content">
                <h1 className="glitch-text" data-text="404">404</h1>
                <h2>Halaman Tidak Ditemukan</h2>
                <p>Sepertinya kamu tersesat di dimensi lain. Halaman yang kamu cari tidak ada di server ini.</p>

                <div className="actions">
                    <Link href="/" className="btn btn-primary">
                        Kembali ke Markas (Home)
                    </Link>
                </div>
            </div>

            <style jsx>{`
        .error-container {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: radial-gradient(circle at center, rgba(139, 92, 246, 0.05) 0%, transparent 70%);
        }

        .content {
          max-width: 500px;
          padding: 40px;
        }

        h1 {
          font-size: 8rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 20px;
          color: rgba(0,0,0,0.05); /* Very subtle base */
          letter-spacing: -5px;
          position: relative;
        }
        
        /* Glitch visuals via pseudo elements */
        h1::before {
          content: attr(data-text);
          position: absolute;
          left: 2px;
          text-shadow: -1px 0 #ff00c1;
          top: 0;
          color: var(--text-primary);
          overflow: hidden;
          clip: rect(0, 900px, 0, 0); 
          animation: noise-anim-2 3s infinite linear alternate-reverse;
        }

        h2 {
          font-size: 2rem;
          margin-bottom: 16px;
        }

        p {
          color: var(--text-secondary);
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .actions {
          display: flex;
          justify-content: center;
        }
      `}</style>
        </div>
    );
}
