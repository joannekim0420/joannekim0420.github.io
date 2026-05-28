<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>News · Joanne Kim</title>
  <link rel="stylesheet" href="/assets/css/main.css">
</head>
<body>

  <nav class="nav">
    <div class="container nav-inner">
      <a class="nav-logo" href="/">Joanne Kim</a>
      <div class="nav-menu">
        <a href="/">HOME</a>
        <a href="/#career">CAREER</a>
        <a href="/#publications">PUBLICATIONS</a>
        <a href="/news/">NEWS</a>
        <a href="/papers/">RESEARCH</a>
      </div>
    </div>
  </nav>

  <main class="container detail-wrap">
    <div class="lang-toggle">
      <button data-lang="kr">KR</button>
      <button data-lang="en">EN</button>
    </div>
    <h1 class="detail-title">News</h1>
    <p class="detail-meta">
      <span class="kr-only">활동·발표·업데이트 소식</span>
      <span class="en-only">Activities, talks, and updates</span>
    </p>
    <div id="news-root" class="news-list">
      <p class="empty">— No news yet.</p>
    </div>
    <a class="back-link" href="/">← Home</a>
  </main>

  <footer class="footer">
    <div class="container">
      © Joanne Kim · <a href="/">Home</a>
    </div>
  </footer>

  <script src="/assets/js/i18n.js"></script>
  <script>
    /* Inline news loader — same idea as render.js but for the news list */
    (function () {
      function escapeHTML(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
      document.addEventListener('DOMContentLoaded', async function () {
        const root = document.getElementById('news-root');
        try {
          const res = await fetch('/data/news.json');
          const items = await res.json();
          if (!items.length) { root.innerHTML = '<p class="empty">— No news yet.</p>'; return; }
          root.innerHTML = items.map(function (n) {
            return '<a class="news-item" href="' + escapeHTML(n.url || '#') + '">' +
              '<span class="news-date">' + escapeHTML(n.date) + '</span>' +
              '<span class="news-title">' +
                '<span class="kr-only">' + escapeHTML(n.title_kr || n.title_en) + '</span>' +
                '<span class="en-only">' + escapeHTML(n.title_en || n.title_kr) + '</span>' +
              '</span></a>';
          }).join('');
        } catch (e) { console.error(e); }
      });
    })();
  </script>
</body>
</html>
