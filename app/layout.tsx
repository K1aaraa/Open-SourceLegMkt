import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OSL Marketing Ops Hub',
  description: 'Internal marketing operations hub for Open-Source Leg'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="top-nav">
            <div className="brand">
              <span className="brand-mark">OSL</span>
              <span className="brand-name">Marketing Ops Hub</span>
            </div>
            <div className="search">
              <input
                type="search"
                placeholder="Search docs, assets, tasks"
                aria-label="Global search"
              />
            </div>
            <div className="user">
              <span className="user-role">Internal</span>
              <button type="button" className="ghost-button">
                User Menu
              </button>
            </div>
          </header>
          <div className="main-grid">
            <aside className="sidebar">
              <nav>
                <a className="active" href="#hub">
                  Hub
                </a>
                <a href="#brand">Brand System</a>
                <a href="#playbooks">Playbooks</a>
                <a href="#assets">Asset Library</a>
                <a href="#tasks">Tasks</a>
                <a href="#website">Website Updates</a>
                <a href="#community">Community & Outreach</a>
                <a href="#ai">AI Assistant</a>
                <a href="#image-generator">Image Generator</a>
                <a href="#governance">Governance</a>
              </nav>
              <div className="sidebar-footer">
                <p className="caption">Roles</p>
                <div className="tag-row">
                  <span className="tag">Viewer</span>
                  <span className="tag">Contributor</span>
                  <span className="tag">Editor</span>
                  <span className="tag">Admin</span>
                </div>
              </div>
            </aside>
            <main className="content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
