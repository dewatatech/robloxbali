
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="error-container">
            <div className="content">
                <h1 className="glitch-text" data-text="ERROR">ERROR</h1>
                <h2>Ada Gangguan Sistem!</h2>
                <p>Maaf, ada masalah teknis yang tidak terduga. Sistem kami sedang mencoba memulihkan diri.</p>

                <div className="actions">
                    <button onClick={() => reset()} className="btn btn-primary">
                        Coba Lagi
                    </button>
                    <Link href="/" className="btn btn-secondary">
                        Kembali ke Home
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
          background: radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
        }

        .content {
          max-width: 500px;
          padding: 40px;
        }

        h1 {
          font-size: 6rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 20px;
          color: rgba(0,0,0,0.1);
          letter-spacing: 10px;
          position: relative;
        }

        /* Simple Glitch Effect */
        h1::before, h1::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
        
        h1::before {
          color: var(--accent-primary);
          z-index: -1;
          transform: translate(-2px, 2px);
        }
        
        h1::after {
          color: var(--accent-secondary);
          z-index: -2;
          transform: translate(2px, -2px);
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
          gap: 16px;
          justify-content: center;
        }
        
        @media (max-width: 600px) {
           h1 { font-size: 4rem; }
           .actions { flex-direction: column; }
        }
      `}</style>
        </div>
    );
}
