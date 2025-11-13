# Hadi Khan ePortfolio

A focused Computer Engineering ePortfolio draft for Georgia Tech's ECE 1100. Built as a static site that can be deployed to GitHub Pages.

## Getting Started

```bash
# Serve locally
python3 -m http.server 8000
```

Open `http://localhost:8000` and explore `index.html`.

## Structure

- `index.html` – Single-page ePortfolio covering summary, bio, goals, coursework, skills, and contact information.
- `styles.css` – Warm, modern palette and responsive layout inspired by the provided color guide.

## Customization Notes

- Update the hero welcome text or visuals as brand assets evolve.
- Expand the coursework and projects sections as new artifacts are created (Discovery Project, future labs, etc.).
- Update contact links or add new sections (blog, gallery) as the portfolio grows.

## Publish to GitHub Pages

1. Commit and push the latest version of this repository to GitHub (e.g., the `main` branch).
2. In the GitHub UI, navigate to **Settings → Pages** for this repository.
3. Under **Source**, choose **Deploy from a branch**.
4. Set **Branch** to the branch you pushed (typically `main`) and **Folder** to `/root`, then click **Save**.
5. Wait ~1 minute for GitHub Pages to build; a success banner with the published URL will appear in the Pages settings card.
6. Visit the provided URL (e.g., `https://<username>.github.io/<repo>/`) to view the live site. Each new push to that branch will redeploy automatically.

Optional: If you own a domain, use the **Custom domain** section of the Pages settings to point it to this site and enable HTTPS.
