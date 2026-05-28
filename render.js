/* ============================================================
   Pretendard webfont (Korean + Latin, weight 100-900 variable)
   ============================================================ */
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');

/* ============================================================
   Reset & base
   ============================================================ */
*, *::before, *::after { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
  background: #fafaf8;
  color: #1a1a1a;
  font-size: 16px;
  line-height: 1.65;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
img { max-width: 100%; height: auto; display: block; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; }
h1, h2, h3, h4 { margin: 0; letter-spacing: -0.02em; }

/* ============================================================
   Layout primitives
   ============================================================ */
.container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ============================================================
   Top navigation
   ============================================================ */
.nav {
  position: sticky;
  top: 0;
  background: rgba(250, 250, 248, 0.88);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  border-bottom: 1px solid #ecebe5;
  z-index: 100;
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}
.nav-logo {
  font-weight: 700;
  letter-spacing: -0.01em;
  font-size: 1.02rem;
  color: #111;
}
.nav-menu {
  display: flex;
  gap: 26px;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.nav-menu a {
  color: #666;
  transition: color 0.18s;
}
.nav-menu a:hover { color: #000; }

/* ============================================================
   Hero
   ============================================================ */
.hero {
  padding: 88px 0 56px;
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 56px;
  align-items: center;
}
.hero-title {
  font-size: clamp(2.1rem, 4.2vw, 2.9rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.03em;
  margin: 0 0 26px;
}
.hero-bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
  font-size: 1rem;
  color: #444;
  max-width: 540px;
}
.hero-bullets li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 8px;
}
.hero-bullets li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.72em;
  width: 5px;
  height: 5px;
  background: #1a1a1a;
  border-radius: 50%;
}
.hero-socials {
  display: flex;
  gap: 12px;
}
.hero-socials a {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d8d6cf;
  border-radius: 999px;
  color: #1a1a1a;
  transition: background 0.18s, color 0.18s, border-color 0.18s;
}
.hero-socials a:hover {
  background: #1a1a1a;
  color: #fff;
  border-color: #1a1a1a;
}
.hero-socials svg { width: 17px; height: 17px; }
.hero-photo {
  aspect-ratio: 4 / 5;
  background: #e8e8e2;
  border-radius: 14px;
  overflow: hidden;
}
.hero-photo img { width: 100%; height: 100%; object-fit: cover; }

/* ============================================================
   Section
   ============================================================ */
section {
  padding: 64px 0;
  border-top: 1px solid #ecebe5;
}
.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}
.section-title {
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: -0.022em;
  margin: 0;
}
.section-hint {
  font-size: 0.88rem;
  color: #8a8a85;
}

/* ============================================================
   Card grid (used for career, publications, patents)
   ============================================================ */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(244px, 1fr));
  gap: 14px;
}
.card {
  display: block;
  padding: 22px;
  background: #fff;
  border: 1px solid #ecebe5;
  border-radius: 12px;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}
.card:hover {
  transform: translateY(-3px);
  border-color: #1a1a1a;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
}
.card-eyebrow {
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #6b6b66;
  margin-bottom: 10px;
  display: block;
  font-weight: 600;
}
.card-title {
  font-size: 1.02rem;
  font-weight: 600;
  line-height: 1.38;
  margin: 0 0 8px;
  letter-spacing: -0.01em;
}
.card-meta {
  font-size: 0.82rem;
  color: #8a8a85;
}

/* Loading & empty states */
.loading,
.empty {
  padding: 40px 0;
  text-align: center;
  color: #b0b0aa;
  font-size: 0.92rem;
}

/* ============================================================
   Footer
   ============================================================ */
.footer {
  padding: 38px 0;
  border-top: 1px solid #ecebe5;
  font-size: 0.82rem;
  color: #8a8a85;
  text-align: center;
}
.footer a { color: #555; }
.footer a:hover { color: #000; }

/* ============================================================
   Detail pages (career + papers)
   ============================================================ */
.detail-wrap { padding: 48px 0 24px; max-width: 820px; margin: 0 auto; }
.detail-hero-img {
  aspect-ratio: 16 / 9;
  background: #e8e8e2;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 28px;
}
.detail-hero-img img { width: 100%; height: 100%; object-fit: cover; }
.detail-title {
  font-size: clamp(1.9rem, 3.6vw, 2.55rem);
  font-weight: 800;
  letter-spacing: -0.028em;
  line-height: 1.15;
  margin: 0 0 12px;
}
.detail-meta {
  font-size: 0.95rem;
  color: #6b6b66;
  margin-bottom: 22px;
}
.tag-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.tag {
  font-size: 0.74rem;
  padding: 5px 12px;
  border-radius: 999px;
  background: #efeee8;
  color: #444;
  font-weight: 500;
}
.detail-section { padding: 30px 0; border-top: 1px solid #ecebe5; }
.detail-section h2 {
  font-size: 1.32rem;
  font-weight: 700;
  margin: 0 0 18px;
  letter-spacing: -0.015em;
}
.detail-section h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 22px 0 10px;
  color: #2a2a2a;
}
.detail-section h4 {
  font-size: 0.92rem;
  font-weight: 600;
  margin: 18px 0 8px;
  color: #444;
}
.detail-section p { margin: 0 0 14px; color: #383838; }
.detail-section ul {
  margin: 0 0 16px;
  padding-left: 22px;
  color: #383838;
}
.detail-section li { margin-bottom: 5px; }
.detail-figure { margin: 24px 0; }
.detail-figure img { border-radius: 10px; border: 1px solid #ecebe5; }
.detail-figure figcaption {
  font-size: 0.85rem;
  color: #8a8a85;
  font-style: italic;
  margin-top: 10px;
  text-align: center;
}
.back-link {
  display: inline-block;
  margin: 24px 0;
  font-size: 0.88rem;
  color: #8a8a85;
}
.back-link:hover { color: #1a1a1a; }

/* ============================================================
   KR / EN language toggle
   ============================================================ */
.lang-toggle {
  display: inline-flex;
  gap: 2px;
  margin-bottom: 24px;
  border: 1px solid #ecebe5;
  border-radius: 999px;
  padding: 3px;
  background: #fff;
}
.lang-toggle button {
  background: none;
  border: none;
  padding: 5px 14px;
  font-size: 0.74rem;
  letter-spacing: 0.1em;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
  color: #8a8a85;
  transition: background 0.18s, color 0.18s;
}
.lang-toggle button.active {
  background: #1a1a1a;
  color: #fff;
}
body:not(.lang-en) .en-only { display: none; }
body.lang-en .kr-only { display: none; }

/* ============================================================
   News list (simple link list)
   ============================================================ */
.news-list { display: flex; flex-direction: column; gap: 4px; }
.news-item {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 24px;
  padding: 16px 0;
  border-bottom: 1px solid #ecebe5;
  align-items: baseline;
}
.news-date {
  font-size: 0.85rem;
  color: #8a8a85;
  font-variant-numeric: tabular-nums;
}
.news-title {
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
}
.news-item:hover .news-title { color: #000; text-decoration: underline; }

/* ============================================================
   Responsive
   ============================================================ */
@media (max-width: 720px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 56px 0 32px;
  }
  .hero-photo { max-width: 200px; }
  .nav-menu { gap: 14px; font-size: 0.66rem; letter-spacing: 0.08em; }
  section { padding: 48px 0; }
  .cards { grid-template-columns: 1fr; }
  .news-item { grid-template-columns: 1fr; gap: 4px; }
}
