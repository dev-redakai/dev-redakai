# Manikant Goutam Portfolio (One Page)

Dynamic one-page portfolio website for **Manikant Goutam (Senior Data Engineer)**, built as a static app and ready for Netlify deployment.

## What's included

- Rich visual UI (animated background, glassmorphism, motion reveal)
- Interactive one-page navigation
- Resume-based content (career summary, experience, skills, awards, education, certifications)
- Mobile responsive layout
- Netlify deployment config via `netlify.toml`

## Local run

```bash
python3 -m http.server 8080
```

Open: `http://localhost:8080`

## Deploy to Netlify

1. Push repo to GitHub/GitLab/Bitbucket.
2. In Netlify: **Add new site → Import existing project**.
3. Use default settings from `netlify.toml`:
   - Build command: *(empty)*
   - Publish directory: `.`
4. Deploy.

Or via CLI:

```bash
npm i -g netlify-cli
netlify deploy
netlify deploy --prod
```
