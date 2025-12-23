
"use client";

import Link from 'next/link';

export default function DiscordPreview() {
  const categories = [
    {
      name: "Lobby",
      channels: [
        { icon: "👋", name: "welcome" },
        { icon: "🪴", name: "about-us" },
        { icon: "🔗", name: "invite-link" },
        { icon: "📣", name: "announcements" },
        { icon: "🧩", name: "our-social-media" },
      ]
    },
    {
      name: "Text Channels",
      channels: [
        { icon: "💭", name: "chat" },
        { icon: "🎨", name: "creations" },
        { icon: "🗃️", name: "media" },
        { icon: "⛺", name: "suggestion" },
        { icon: "🎯", name: "roblox-games" },
        { icon: "🪅", name: "stage" },
      ]
    },
    {
      name: "Developer",
      channels: [
        { icon: "🧑‍💻", name: "dev-chat" },
      ]
    }
  ];

  return (
    <section id="discord-preview" className="section">
      <div className="container">
        <div className="header">
          <h2>Intip Dalamnya Discord Kita</h2>
          <p>Real, rapi, dan terstruktur. Bukan server 'kuburan'.</p>
        </div>

        <div className="preview-container">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="server-header">
              <span className="server-name">Roblox Bali</span>
            </div>
            <div className="channels-list">
              {categories.map((cat, idx) => (
                <div key={idx} className="category">
                  <div className="cat-name">{cat.name}</div>
                  {cat.channels.map((ch, cIdx) => (
                    <div key={cIdx} className="channel">
                      <span className="ch-icon">{ch.icon}</span>
                      <span className="ch-name">{ch.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Main View / Screenshot Placeholder */}
          <div className="main-view">
            <div className="placeholder-content">
              <div className="chat-dummy">
                <div className="msg">
                  <div className="avatar"></div>
                  <div className="msg-content">
                    <div className="user">BliRoblox <span className="time">Today at 14:30</span></div>
                    <div className="text">Halo semua! Ada yang mau mabar Blox Fruits jam 3 sore WITA?</div>
                  </div>
                </div>
                <div className="msg">
                  <div className="avatar color-2"></div>
                  <div className="msg-content">
                    <div className="user">MadeGamer <span className="time">Today at 14:31</span></div>
                    <div className="text">Gas bli! Aku join ya. Sekalian mau tanya build buddha.</div>
                  </div>
                </div>
                <div className="msg">
                  <div className="avatar color-3"></div>
                  <div className="msg-content">
                    <div className="user">KetutPro <span className="time">Today at 14:32</span></div>
                    <div className="text">Ikut dong, butuh raid nih.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button moved below */}
        <div className="cta-below-preview">
          <Link href="https://discord.gg/yourinvite" className="btn btn-primary btn-large">
            Join Discord Sekarang
          </Link>
        </div>
      </div>

      <style jsx>{`
        .header {
          text-align: center;
          margin-bottom: 48px;
        }

        h2 {
          font-size: 2.5rem;
          margin-bottom: 12px;
        }

        .preview-container {
          display: flex;
          background: #313338; /* Discord dark theme bg */
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(0,0,0,0.1);
          min-height: 500px;
          margin-bottom: 40px;
        }

        /* Sidebar Styling */
        .sidebar {
          width: 240px;
          background: #2b2d31;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .server-header {
          height: 48px;
          border-bottom: 1px solid #1f2023;
          display: flex;
          align-items: center;
          padding: 0 16px;
          color: #f2f3f5;
          font-weight: 600;
        }

        .channels-list {
          flex: 1;
          padding: 16px 8px;
          overflow-y: auto;
        }

        .category {
          margin-bottom: 16px;
        }

        .cat-name {
          color: #949ba4;
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 700;
          padding: 0 8px;
          margin-bottom: 4px;
        }

        .channel {
          display: flex;
          align-items: center;
          padding: 6px 8px;
          border-radius: 4px;
          color: #80848e;
          cursor: pointer;
          gap: 6px;
        }

        .channel:hover {
          background: #35373c;
          color: #dbdee1;
        }

        .ch-name {
          font-size: 14px;
          font-weight: 500;
        }

        /* Main View Styling */
        .main-view {
          flex: 1;
          background: #313338;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .placeholder-content {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end; /* Show latest messages */
        }
        
        .chat-dummy {
           display: flex;
           flex-direction: column;
           gap: 16px;
           margin-bottom: 60px;
        }
        
        .msg {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #5865f2;
          flex-shrink: 0;
        }
        
        .color-2 { background: #eb459e; }
        .color-3 { background: #fca41b; }
        
        .user {
          color: #f2f3f5;
          font-weight: 500;
          font-size: 1rem;
          margin-bottom: 4px;
        }
        
        .time {
          color: #949ba4;
          font-size: 0.75rem;
          margin-left: 8px;
          font-weight: 400;
        }
        
        .text {
          color: #dbdee1;
          line-height: 1.4;
        }
        
        .cta-below-preview {
          text-align: center;
          margin-top: -20px; /* Slight visual offset if needed, or proper spacing */
        }
        
        .btn-large {
           padding: 16px 40px;
           font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .sidebar {
            display: none;
             width: 60px;
          }
           .cat-name, .server-name, .ch-name {
              display: none;
           }
           .ch-icon {
              font-size: 1.2rem;
              text-align: center;
              width: 100%;
           }
           .server-header {
             justify-content: center;
           }
           .server-header::before {
             content: "RB";
           }
        }
      `}</style>
    </section>
  );
}
