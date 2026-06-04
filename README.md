# joannekim0420.github.io

Personal portfolio of **Jongeun Kim (김종은)** — AI Engineer at HDC LABS, working on
multimodal AI (VLM/LLM, video understanding).

Theme/structure based on [Stillrot/Stillrot.github.io](https://github.com/Stillrot/Stillrot.github.io).

## Architecture

Pure static HTML + vanilla JS — **no build step**. GitHub Pages serves the repo root directly.

- `index.html` — home: hero/bio, career grid, selected projects, and tabbed
  Publications / Patents / News / Research sections
- `data/*.json` — all content data:
  - `publications.json` — paper list (international + domestic groups)
  - `patents.json` — granted / application patent tables
  - `news.json` — news cards
  - `papers.json` — full per-paper data rendered into `papers/<slug>/`
- `career/<slug>/` — per-workplace detail pages (hdclabs, unist, ncsoft, choroksoft, smu)
- `papers/<slug>/` — per-paper detail shells (content comes from `data/papers.json`)
- `assets/js/main.js` — renders the JSON data, KR/EN language toggle, tabs
- Bilingual: `.ko-only` / `.en-only` blocks toggled via the KR/EN buttons

## Editing content

1. Edit `data/*.json` (or the career pages' HTML directly).
2. Regenerate the static prerender + LLM files:

   ```bash
   python tools/prerender_home.py
   python tools/generate_llms.py
   ```

   Or enable the git hook once so it happens automatically on commit:

   ```bash
   git config core.hooksPath tools/hooks
   ```

3. Commit and push — GitHub Pages deploys automatically.

## Adding a paper

1. Add an entry to `data/papers.json` (slug, title, venue, authors, abstract, sections, bibtex).
2. Create `papers/<slug>/index.html` by copying any existing paper shell and changing
   its `data-slug` and `<title>`.
3. Add a matching row to `data/publications.json`.
4. Re-run the generators (step 2 above).
